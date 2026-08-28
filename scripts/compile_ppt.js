import fs from 'fs';
import path from 'path';
import pptxgen from 'pptxgenjs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SCREENSHOTS_DIR = path.join(__dirname, '../screenshots');

// 命名规范：<产品>GEO阶段性报告（<月份>）.pptx，月份取自报告数据的统计口径
const meta = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../src/data/yuanyueAugustReport.json'), 'utf8')
).meta;
const month = Number(meta.august_date.slice(5, 7));
const OUTPUT_PPT = path.join(__dirname, `../${meta.product}GEO阶段性报告（${month}月）.pptx`);

async function main() {
  console.log('Reading screenshots from:', SCREENSHOTS_DIR);
  if (!fs.existsSync(SCREENSHOTS_DIR)) {
    console.error('❌ Screenshots directory does not exist. Please run capture_slides.js first.');
    process.exit(1);
  }

  const files = fs.readdirSync(SCREENSHOTS_DIR)
    .filter(f => f.startsWith('slide_') && f.endsWith('.png'))
    .sort();

  if (files.length === 0) {
    console.error('❌ No screenshots found in screenshots directory.');
    process.exit(1);
  }

  console.log(`Found ${files.length} screenshots. Compiling PPTX...`);

  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9';

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const imgPath = path.join(SCREENSHOTS_DIR, file);
    console.log(`[${i + 1}/${files.length}] Adding ${file}...`);
    
    const slide = pptx.addSlide();
    slide.background = { fill: '000000' };
    slide.addImage({ 
      path: imgPath, 
      x: 0, 
      y: 0, 
      w: '100%', 
      h: '100%' 
    });
  }

  console.log('Saving PPTX file to:', OUTPUT_PPT);
  try {
    await pptx.writeFile({ fileName: OUTPUT_PPT });
    console.log(`\n✅ PPTX compilation complete! Saved to ${OUTPUT_PPT}`);
  } catch (err) {
    if (err.code === 'EBUSY') {
      const FALLBACK_PPT = OUTPUT_PPT.replace(/\.pptx$/, '_updated.pptx');
      console.warn(`\n⚠️  Warning: ${OUTPUT_PPT} is locked or busy (probably open in PowerPoint).`);
      console.log(`Saving instead to fallback: ${FALLBACK_PPT}`);
      await pptx.writeFile({ fileName: FALLBACK_PPT });
      console.log(`\n✅ PPTX compilation complete! Saved to ${FALLBACK_PPT}`);
    } else {
      throw err;
    }
  }
}

main().catch(err => {
  console.error('Failed to compile PPTX:', err);
  process.exit(1);
});
