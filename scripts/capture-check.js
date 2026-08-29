import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, '../screenshots/aug-check');
const SLIDE_URL = 'http://localhost:7646';

// 1-based 页码 -> 输出文件名；可用命令行参数只截其中几页，如 node scripts/capture-check.js 15 28
const ALL_TARGETS = {
  1: 'p01_cover',
  4: 'p04_core_overview',
  5: 'p05_competitor_smart',
  6: 'p06_competitor_ai',
  7: 'p07_competitor_mattress',
  9: 'p09_delivery_smart',
  10: 'p10_delivery_ai',
  11: 'p11_delivery_mattress',
  13: 'p13_content_analysis_smart',
  14: 'p14_content_analysis_ai',
  15: 'p15_content_analysis_mattress',
  17: 'p17_entries_smart_deepseek',
  28: 'p28_entries_smart_kimi_page2',
  29: 'p29_entries_ai_deepseek',
  40: 'p40_entries_ai_kimi_page2',
  41: 'p41_entries_mattress_deepseek',
  52: 'p52_entries_mattress_kimi_page2',
};

const only = process.argv.slice(2).map(Number).filter(Boolean);
const TARGETS = only.length
  ? Object.fromEntries(Object.entries(ALL_TARGETS).filter(([k]) => only.includes(Number(k))))
  : ALL_TARGETS;

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const browser = await puppeteer.launch({
    headless: 'new',
    channel: 'chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1984, height: 1144, deviceScaleFactor: 1 });

  console.log(`打开 ${SLIDE_URL} ...`);
  await page.goto(SLIDE_URL, { waitUntil: 'networkidle2', timeout: 30000 });
  await page.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 3500));

  await page.click('button[title="打开目录"]');
  await new Promise((r) => setTimeout(r, 600));
  const totalSlides = await page.$$eval('nav.flex-grow [draggable]', (els) => els.length);
  console.log(`总页数：${totalSlides}`);
  const closeBtn = await page.$('button.text-zinc-400');
  if (closeBtn) await closeBtn.click();
  await new Promise((r) => setTimeout(r, 400));

  for (let i = 0; i < totalSlides; i++) await page.keyboard.press('ArrowLeft');
  await new Promise((r) => setTimeout(r, 600));

  await page.addStyleTag({
    content: `button[title="打开目录"], button[title="全屏演示"], div.pointer-events-none.opacity-20 { display: none !important; }`,
  });

  const maxTarget = Math.max(...Object.keys(TARGETS).map(Number));
  for (let i = 1; i <= Math.min(totalSlides, maxTarget); i++) {
    if (TARGETS[i]) {
      await page.evaluate(() =>
        Promise.all(
          [...document.images].map((img) =>
            img.complete ? Promise.resolve() : new Promise((r) => { img.onload = r; img.onerror = r; })
          )
        )
      );
      await new Promise((r) => setTimeout(r, 700));
      const out = path.join(OUTPUT_DIR, `${TARGETS[i]}.png`);
      const slideEl = await page.$('.bg-white.overflow-hidden');
      if (slideEl) await slideEl.screenshot({ path: out });
      else await page.screenshot({ path: out });
      console.log(`[${i}] -> ${path.basename(out)}`);
    }
    if (i < totalSlides) {
      await page.keyboard.press('ArrowRight');
      await new Promise((r) => setTimeout(r, 320));
    }
  }

  await browser.close();
  console.log('完成');
}

main().catch((err) => {
  console.error('截图失败:', err);
  process.exit(1);
});
