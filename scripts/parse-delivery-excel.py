#!/usr/bin/env python3
import pandas as pd
import json
import os
import sys

# Ensure output dir exists
os.makedirs('src/data', exist_ok=True)

files = {
    "123": "excel/古井贡酒古16_投放文章统计_0629.xlsx",
    "124": "excel/古井贡酒古20_投放文章统计_0629.xlsx"
}

for project_id, path in files.items():
    if not os.path.exists(path):
        print(f"File not found: {path}")
        continue
    
    # Read '文章引用明细' sheet
    df_detail = pd.read_excel(path, sheet_name='文章引用明细')
    
    # Find the summary row '【汇总】'
    summary_row = df_detail[df_detail['文章标题'].str.contains('汇总', na=False)]
    
    if not summary_row.empty:
        summary_data = summary_row.iloc[0]
        total_citations = int(summary_data['总引用次数'])
        deepseek_total = int(summary_data['DeepSeek 引用次数']) if pd.notna(summary_data['DeepSeek 引用次数']) else 0
        doubao_total = int(summary_data['豆包 引用次数']) if pd.notna(summary_data['豆包 引用次数']) else 0
        yuanbao_total = int(summary_data['元宝 引用次数']) if pd.notna(summary_data['元宝 引用次数']) else 0
        wenxin_total = int(summary_data['文心 引用次数']) if pd.notna(summary_data['文心 引用次数']) else 0
        kimi_total = int(summary_data['kimi 引用次数']) if pd.notna(summary_data['kimi 引用次数']) else 0
    else:
        total_citations = int(df_detail[df_detail['排名'].notna()]['总引用次数'].sum())
        deepseek_total = int(df_detail[df_detail['排名'].notna()]['DeepSeek 引用次数'].sum())
        doubao_total = int(df_detail[df_detail['排名'].notna()]['豆包 引用次数'].sum())
        yuanbao_total = int(df_detail[df_detail['排名'].notna()]['元宝 引用次数'].sum())
        wenxin_total = int(df_detail[df_detail['排名'].notna()]['文心 引用次数'].sum())
        kimi_total = int(df_detail[df_detail['排名'].notna()]['kimi 引用次数'].sum())
        
    # Filter out summary rows/empty title rows
    df_articles = df_detail[df_detail['排名'].notna() | (df_detail['文章标题'] != '【汇总】')].copy()
    df_articles = df_articles[df_articles['文章标题'].notna() & (df_articles['文章标题'] != '【汇总】')]
    
    total_articles = len(df_articles)
    cited_articles = len(df_articles[df_articles['是否被引用'] == '是'])
    citation_rate = cited_articles / total_articles if total_articles > 0 else 0.0
    
    # Get top 10 articles sorted by citation count
    df_top = df_articles.copy()
    df_top = df_top.sort_values(by='总引用次数', ascending=False)
    
    top_10 = []
    for i, (_, row) in enumerate(df_top.head(10).iterrows(), start=1):
        # Format date safely
        date_str = ""
        if pd.notna(row['发布时间']):
            try:
                date_str = pd.to_datetime(row['发布时间']).strftime('%Y-%m-%d')
            except:
                date_str = str(row['发布时间'])
                
        top_10.append({
            "rank": i,
            "title": str(row['文章标题']),
            "platform": str(row['发布平台']) if pd.notna(row['发布平台']) else "",
            "date": date_str,
            "total": int(row['总引用次数']) if pd.notna(row['总引用次数']) else 0,
            "deepseek": int(row['DeepSeek 引用次数']) if pd.notna(row['DeepSeek 引用次数']) else 0,
            "doubao": int(row['豆包 引用次数']) if pd.notna(row['豆包 引用次数']) else 0,
            "yuanbao": int(row['元宝 引用次数']) if pd.notna(row['元宝 引用次数']) else 0,
            "wenxin": int(row['文心 引用次数']) if pd.notna(row['文心 引用次数']) else 0,
            "kimi": int(row['kimi 引用次数']) if pd.notna(row['kimi 引用次数']) else 0,
            "isCited": str(row['是否被引用']) if pd.notna(row['是否被引用']) else "否",
            "link": str(row['文章链接']) if pd.notna(row['文章链接']) else ""
        })
        
    result = {
        "summary": {
            "total_articles": total_articles,
            "cited_articles": cited_articles,
            "citation_rate": round(citation_rate * 100, 2),
            "total_citations": total_citations,
            "deepseek": deepseek_total,
            "doubao": doubao_total,
            "yuanbao": yuanbao_total,
            "wenxin": wenxin_total,
            "kimi": kimi_total
        },
        "top_articles": top_10
    }
    
    out_path = f"src/data/delivery_{project_id}.json"
    with open(out_path, 'w', encoding='utf-8') as f:
        json.dump(result, f, ensure_ascii=False, indent=2)
    print(f"Generated {out_path} with platform citation counts.")
