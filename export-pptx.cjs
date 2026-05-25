const puppeteer = require('puppeteer');
const PptxGenJS = require('pptxgenjs');
const fs = require('fs');
const path = require('path');
const os = require('os');

const slideOrder = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'src/slideOrder.json'), 'utf-8')
);

const args = process.argv.slice(2);
const getArg = (name) => args.find((a) => a.startsWith(`--${name}=`))?.split('=')[1];

const APP_URL = getArg('url') || 'http://localhost:5174';
const OUTPUT = getArg('output') || path.join(__dirname, 'Presentation_2026.pptx');
const SLIDE_W = 1920;
const SLIDE_H = 1080;

function emit(data) {
  process.stdout.write(JSON.stringify(data) + '\n');
}

function findChrome() {
  const candidates = [
    process.env.PUPPETEER_EXECUTABLE_PATH,
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  ];

  const homeCache = path.join(os.homedir(), '.cache', 'puppeteer', 'chrome');
  if (fs.existsSync(homeCache)) {
    const versions = fs.readdirSync(homeCache).filter(d => d.startsWith('mac'));
    for (const v of versions.sort().reverse()) {
      const bin = path.join(homeCache, v, 'chrome-mac-arm64',
        'Google Chrome for Testing.app', 'Contents', 'MacOS', 'Google Chrome for Testing');
      candidates.push(bin);
    }
  }

  for (const p of candidates) {
    if (p && fs.existsSync(p)) return p;
  }
  return undefined;
}

(async () => {
  const totalSlides = slideOrder.length;
  emit({ type: 'start', total: totalSlides });

  const executablePath = findChrome();
  const launchOpts = {
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  };
  if (executablePath) launchOpts.executablePath = executablePath;

  let browser;
  try {
    browser = await puppeteer.launch(launchOpts);
  } catch (err) {
    emit({ type: 'error', message: `无法启动浏览器: ${err.message}` });
    process.exit(1);
  }

  try {
    const page = await browser.newPage();
    await page.setViewport({
      width: SLIDE_W + 128,
      height: SLIDE_H + 128,
      deviceScaleFactor: 2,
    });

    await page.evaluateOnNewDocument(() => {
      localStorage.setItem('currentSlide', '0');
    });
    await page.goto(APP_URL, { waitUntil: 'networkidle0', timeout: 30000 });

    await page.addStyleTag({
      content: `
        div[style*="1920"] {
          zoom: 1 !important;
          box-shadow: none !important;
          border-radius: 0 !important;
        }
        button[title="打开目录"],
        button[title="全屏演示"],
        div.pointer-events-none.opacity-20 {
          display: none !important;
        }
      `,
    });

    await new Promise((r) => setTimeout(r, 1500));

    const screenshotsDir = path.join(__dirname, 'export-screenshots');
    fs.mkdirSync(screenshotsDir, { recursive: true });

    const pptx = new PptxGenJS();
    pptx.layout = 'LAYOUT_16x9';

    for (let i = 0; i < totalSlides; i++) {
      const label = slideOrder[i];
      emit({ type: 'progress', current: i + 1, total: totalSlides, slide: label });

      await new Promise((r) => setTimeout(r, 1000));

      const slideEl = await page.$('div[style*="width: 1920px"]');

      if (slideEl) {
        const imgPath = path.join(
          screenshotsDir,
          `slide-${String(i).padStart(3, '0')}.png`
        );
        await slideEl.screenshot({ path: imgPath, type: 'png' });

        const slide = pptx.addSlide();
        slide.addImage({ path: imgPath, x: 0, y: 0, w: '100%', h: '100%' });
      }

      if (i < totalSlides - 1) {
        await page.keyboard.press('ArrowRight');
      }
    }

    await pptx.writeFile({ fileName: OUTPUT });
    emit({ type: 'done', output: OUTPUT });

    await browser.close();
  } catch (err) {
    emit({ type: 'error', message: err.message });
    try { await browser.close(); } catch (_) {}
    process.exit(1);
  }
})();
