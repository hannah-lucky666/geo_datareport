import json, sys
import openpyxl

src = sys.argv[1]
out = sys.argv[2]
wb = openpyxl.load_workbook(src, data_only=True)
data = {}
for ws in wb.worksheets:
    rows = [list(r) for r in ws.iter_rows(values_only=True)]
    data[ws.title] = [[(v.isoformat() if hasattr(v, 'isoformat') else v) for v in r] for r in rows]

with open(out, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=1)
print('written', out)
