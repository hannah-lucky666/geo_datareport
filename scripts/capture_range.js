import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, '../screenshots');
const SLIDE_URL = 'http://localhost:5176';

const args = process.argv.slice(2);
const [start, end] = (args[0] || '1-1').split('-').map(Number);

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  const browser = await puppeteer.launch({
    headless: 'new',
    channel: 'chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1984, height: 1144, deviceScaleFactor: 2 });
  await page.goto(SLIDE_URL, { waitUntil: 'networkidle2', timeout: 30000 });
  await page.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 3000));

  const slideOrder = JSON.parse(fs.readFileSync(new URL('../src/slideOrder.json', import.meta.url), 'utf-8'));
  const total = slideOrder.length;
  for (let i = 0; i < total; i++) await page.keyboard.press('ArrowLeft');
  await new Promise((r) => setTimeout(r, 600));

  await page.addStyleTag({
    content: `button[title="打开目录"], button[title="全屏演示"], div.pointer-events-none.opacity-20 { display: none !important; }`,
  });

  for (let i = 1; i <= end; i++) {
    if (i >= start) {
      await page.evaluate(() =>
        Promise.all([...document.images].map((img) => (img.complete ? Promise.resolve() : new Promise((r) => { img.onload = r; img.onerror = r; }))))
      );
      await new Promise((r) => setTimeout(r, 600));
      const out = path.join(OUTPUT_DIR, `slide_${String(i).padStart(3, '0')}.png`);
      const el = await page.$('.bg-white.overflow-hidden');
      if (el) await el.screenshot({ path: out });
      else await page.screenshot({ path: out });
      console.log(`captured slide ${i}`);
    }
    await page.keyboard.press('ArrowRight');
    await new Promise((r) => setTimeout(r, i >= start ? 900 : 120));
  }

  await browser.close();
}

main().catch((e) => { console.error(e); process.exit(1); });
