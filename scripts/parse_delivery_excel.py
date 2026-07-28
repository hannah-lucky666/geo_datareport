# -*- coding: utf-8 -*-
"""Parse delivery Excel by fixed cell positions (avoid label encoding issues)."""
import json
from pathlib import Path
import openpyxl

BASE = Path(r"h:\WeChat Files\wxid_5rplw0vtshy722\FileStorage\File\2026-07")
OUT = Path(r"e:\6.cursor\report_jinjiu\src\data\delivery_excel_0721.json")

FILES = {
    "jinjiu": "\u52b2\u9152_\u6295\u653e\u6587\u7ae0\u7edf\u8ba1_\u6295\u653e\u622a\u6b62_0721.xlsx",
    "maopu": "\u6bdb\u94fa\u7cfb\u5217_\u6295\u653e\u6587\u7ae0\u7edf\u8ba1_\u6295\u653e\u622a\u6b62_0721.xlsx",
    "yangsheng": "\u517b\u751f\u4e00\u53f7_\u6295\u653e\u6587\u7ae0\u7edf\u8ba1_\u6295\u653e\u622a\u6b62_0721.xlsx",
}


def short_platform(platform: str) -> str:
    platform = str(platform or "")
    mapping = [
        ("\u767e\u5bb6\u53f7", "\u767e\u5bb6\u53f7"),
        ("\u7f51\u6613\u53f7", "\u7f51\u6613\u53f7"),
        ("\u4ec0\u4e48\u503c\u5f97\u4e70", "\u4ec0\u4e48\u503c\u5f97\u4e70"),
        ("\u641c\u72d0", "\u641c\u72d0"),
        ("\u65b0\u6d6a", "\u65b0\u6d6a"),
        ("\u7f51\u6613", "\u7f51\u6613"),
        ("\u77e5\u4e4e", "\u77e5\u4e4e"),
        ("\u9152\u6392\u540d", "\u9152\u6392\u540d"),
        ("\u4eca\u65e5\u5934\u6761", "\u4eca\u65e5\u5934\u6761"),
    ]
    for prefix, name in mapping:
        if platform.startswith(prefix):
            return name
    return platform.split("(")[0].split("\uff08")[0]


def parse_file(path: Path):
    wb = openpyxl.load_workbook(path, data_only=True)
    ov = wb.worksheets[0]  # 数据概览

    # Fixed layout from sheet:
    # B10 = total citations, E10 = citation rate
    # B14 = total articles, E14 = cited articles
    total_citations = int(ov["B10"].value or 0)
    citation_rate = float(ov["E10"].value or 0)
    total_articles = int(ov["B14"].value or 0)
    cited_articles = int(ov["E14"].value or 0)
    if citation_rate <= 1:
        citation_rate = round(citation_rate * 100, 1)
    else:
        citation_rate = round(citation_rate, 1)

    detail = wb.worksheets[1]  # 文章引用明细
    # Deduplicate by link (col M=13), keep first
    seen = set()
    unique = []
    for r in range(2, detail.max_row + 1):
        title = detail.cell(r, 2).value
        if not title:
            continue
        link = str(detail.cell(r, 13).value or "")
        key = link or f"{title}|{detail.cell(r, 3).value}"
        if key in seen:
            continue
        seen.add(key)
        unique.append(r)

    ai = {"deepseek": 0, "doubao": 0, "yuanbao": 0, "wenxin": 0, "kimi": 0}
    for r in unique:
        ai["deepseek"] += int(detail.cell(r, 7).value or 0)
        ai["doubao"] += int(detail.cell(r, 8).value or 0)
        ai["yuanbao"] += int(detail.cell(r, 9).value or 0)
        ai["wenxin"] += int(detail.cell(r, 10).value or 0)
        ai["kimi"] += int(detail.cell(r, 11).value or 0)

    # Scale AI citations to match overview total if needed
    ai_sum = sum(ai.values())
    if ai_sum and total_citations and ai_sum != total_citations:
        factor = total_citations / ai_sum
        ai = {k: int(round(v * factor)) for k, v in ai.items()}
        # fix rounding drift
        drift = total_citations - sum(ai.values())
        if drift:
            # add drift to largest bucket
            top = max(ai, key=ai.get)
            ai[top] += drift

    top10 = []
    seen_rank = set()
    for r in range(2, detail.max_row + 1):
        rank = detail.cell(r, 1).value
        title = detail.cell(r, 2).value
        if title is None or rank is None or str(rank).strip() == "":
            continue
        try:
            rank = int(rank)
        except (TypeError, ValueError):
            continue
        if rank < 1 or rank > 10 or rank in seen_rank:
            continue
        seen_rank.add(rank)
        date = detail.cell(r, 5).value
        if hasattr(date, "strftime"):
            date = date.strftime("%Y-%m-%d")
        else:
            date = str(date)[:10] if date else ""
        top10.append({
            "rank": rank,
            "title": str(title),
            "platform": short_platform(detail.cell(r, 3).value),
            "domain": str(detail.cell(r, 4).value or ""),
            "date": date,
            "total": int(detail.cell(r, 6).value or 0),
            "deepseek": int(detail.cell(r, 7).value or 0),
            "doubao": int(detail.cell(r, 8).value or 0),
            "yuanbao": int(detail.cell(r, 9).value or 0),
            "wenxin": int(detail.cell(r, 10).value or 0),
            "kimi": int(detail.cell(r, 11).value or 0),
            "isCited": str(detail.cell(r, 12).value or "\u662f"),
            "link": str(detail.cell(r, 13).value or ""),
        })
    top10.sort(key=lambda x: x["rank"])

    channels = []
    if len(wb.worksheets) >= 3:
        ps = wb.worksheets[2]
        for r in range(2, 10):
            name = ps.cell(r, 1).value
            if name:
                channels.append(short_platform(name))

    insights = []
    for r in range(23, 27):
        v = ov.cell(r, 2).value
        if v:
            insights.append(str(v).strip())

    return {
        "total_articles": total_articles,
        "cited_articles": cited_articles,
        "citation_rate": citation_rate,
        "total_citations": total_citations,
        "ai_citations": ai,
        "top_channels": channels,
        "insights": insights,
        "top10": top10,
    }


def main():
    out = {}
    for key, fname in FILES.items():
        path = BASE / fname
        assert path.exists(), path
        print("parsing", key, path.name)
        out[key] = parse_file(path)
        d = out[key]
        print(
            f"  articles={d['total_articles']} cited={d['cited_articles']} "
            f"rate={d['citation_rate']}% cites={d['total_citations']} ai={d['ai_citations']}"
        )
        print("  top1:", d["top10"][0]["title"][:40])
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(out, ensure_ascii=False, indent=2), encoding="utf-8")
    print("wrote", OUT)


if __name__ == "__main__":
    main()
