# -*- coding: utf-8 -*-
"""解析【劲牌】三产品的投放文章统计 Excel，按固定单元格位置取数（避免表头文案变动）。

用法:
    python scripts/parse_delivery_excel.py                       # 默认解析 0828 批次
    python scripts/parse_delivery_excel.py --tag 0828 --base <目录>
"""
import argparse
import json
from pathlib import Path

import openpyxl

DEFAULT_BASE = Path(r"h:\xwechat_files\wxid_5rplw0vtshy722_0461\msg\file\2026-08")
ROOT = Path(__file__).resolve().parent.parent

PRODUCTS = {
    "jinjiu": "劲酒",
    "maopu": "毛铺系列",
    "yangsheng": "养生一号",
}

# 发布平台列里带账号后缀（如「百家号(星视频长沙广电官方号)」），统一归并到主渠道名
CHANNEL_PREFIXES = [
    "什么值得买",
    "百家号",
    "网易号",
    "网易",
    "新浪",
    "搜狐",
    "知乎",
    "酒排名",
    "今日头条",
    "抖音",
]


# 少数行的「发布平台」列直接填的是域名，回落到域名映射
DOMAIN_NAMES = {
    "post.smzdm.com": "什么值得买",
    "baijiahao.baidu.com": "百家号",
    "haokan.baidu.com": "好看视频",
    "163.com": "网易",
    "k.sina.com.cn": "新浪",
    "sina.com.cn": "新浪",
    "sohu.com": "搜狐",
    "zhihu.com": "知乎",
    "jiupaiming.com": "酒排名",
    "toutiao.com": "今日头条",
}


def short_platform(platform) -> str:
    platform = str(platform or "").strip()
    for prefix in CHANNEL_PREFIXES:
        if platform.startswith(prefix):
            return prefix
    for domain, name in DOMAIN_NAMES.items():
        if platform.endswith(domain):
            return name
    return platform.split("(")[0].split("（")[0]


def parse_file(path: Path):
    wb = openpyxl.load_workbook(path, data_only=True)
    ov = wb.worksheets[0]  # 数据概览

    # 固定版式：B10=投放文章引用次数，B14=投放文章总数，E14=被引用文章数
    # E10（引用率）是公式，data_only 读不到缓存值，这里直接算
    total_citations = int(ov["B10"].value or 0)
    total_articles = int(ov["B14"].value or 0)
    cited_articles = int(ov["E14"].value or 0)
    citation_rate = round(cited_articles / total_articles * 100, 1) if total_articles else 0.0

    detail = wb.worksheets[1]  # 文章引用明细
    # 按链接去重，保留首次出现的行
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

    # 明细表逐篇累加的口径与「数据概览」的引用次数存在固定倍数差，按概览总数归一
    ai_sum = sum(ai.values())
    if ai_sum and total_citations and ai_sum != total_citations:
        factor = total_citations / ai_sum
        ai = {k: int(round(v * factor)) for k, v in ai.items()}
        drift = total_citations - sum(ai.values())
        if drift:
            top = max(ai, key=ai.get)
            ai[top] += drift

    # 只取排名前 10 的文章
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
            "isCited": str(detail.cell(r, 12).value or "是"),
            "link": str(detail.cell(r, 13).value or ""),
        })
    top10.sort(key=lambda x: x["rank"])

    # 平台与渠道分析表已按引用次数降序，取前几个主渠道（归并后去重）
    channels = []
    if len(wb.worksheets) >= 3:
        ps = wb.worksheets[2]
        for r in range(2, 14):
            name = ps.cell(r, 1).value
            if not name:
                continue
            short = short_platform(name)
            if short and short not in channels:
                channels.append(short)

    insights = []
    for r in range(19, 23):
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
    parser = argparse.ArgumentParser()
    parser.add_argument("--tag", default="0828", help="Excel 批次日期后缀，如 0828")
    parser.add_argument("--base", default=str(DEFAULT_BASE), help="Excel 所在目录")
    args = parser.parse_args()

    base = Path(args.base)
    out_path = ROOT / "src" / "data" / f"delivery_excel_{args.tag}.json"

    out = {}
    for key, name in PRODUCTS.items():
        path = base / f"{name}_投放文章统计_{args.tag}.xlsx"
        assert path.exists(), path
        print("parsing", key, path.name)
        out[key] = parse_file(path)
        d = out[key]
        print(
            f"  articles={d['total_articles']} cited={d['cited_articles']} "
            f"rate={d['citation_rate']}% cites={d['total_citations']} ai={d['ai_citations']}"
        )
        print(f"  channels={d['top_channels'][:6]}")
        print("  top1:", d["top10"][0]["title"][:40])

    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(json.dumps(out, ensure_ascii=False, indent=2), encoding="utf-8")
    print("wrote", out_path)


if __name__ == "__main__":
    main()
