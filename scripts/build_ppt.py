import glob
import os
import sys
from pptx import Presentation
from pptx.util import Emu

SCREENSHOTS_DIR = os.path.join(os.path.dirname(__file__), '..', 'screenshots')
OUTPUT_PPT = os.path.join(os.path.dirname(__file__), '..', 'output_slides.pptx')

# 16:9 宽屏，对应 1920×1080 像素（PPT 单位 EMU：1 inch = 914400 EMU，96 DPI）
SLIDE_WIDTH  = Emu(9144000)   # 10 inches = 9144000 EMU
SLIDE_HEIGHT = Emu(5143500)   # 5.625 inches = 5143500 EMU

screenshots = sorted(glob.glob(os.path.join(SCREENSHOTS_DIR, 'slide_*.png')))

if not screenshots:
    print('❌ 未找到截图文件，请先运行 capture_slides.js')
    sys.exit(1)

prs = Presentation()
prs.slide_width  = SLIDE_WIDTH
prs.slide_height = SLIDE_HEIGHT

blank_layout = prs.slide_layouts[6]  # 空白布局

for i, img_path in enumerate(screenshots):
    slide = prs.slides.add_slide(blank_layout)
    slide.shapes.add_picture(img_path, 0, 0, SLIDE_WIDTH, SLIDE_HEIGHT)
    print(f'[{i+1}/{len(screenshots)}] 已添加 {os.path.basename(img_path)}')

prs.save(OUTPUT_PPT)
print(f'\n✅ PPT 已生成：{OUTPUT_PPT}')
