#!/usr/bin/env node
/**
 * 生成 9 月报告数据。
 * 8 月：劲酒/养生一号取 8/29，毛铺取 8/27（对应上一版总览截图数字）。
 * 9 月：劲酒、毛铺、养生一号统一取 9/21 单日。
 * 报告页面只写「2026年9月」，不要露出单日取数。
 * 投放明细取 0921 Excel。
 * 输出: src/data/jinjiuSeptemberReport.json
 */
import { readFileSync, writeFileSync } from 'fs';

const sepExtra = JSON.parse(readFileSync('src/data/sep21_entries_sentiments.json', 'utf8'));
const deliveryRaw = JSON.parse(readFileSync('src/data/delivery_excel_0921.json', 'utf8'));

const products = [
  { id: 125, key: 'jinjiu', name: '劲酒', brandMatch: '劲酒' },
  { id: 126, key: 'maopu', name: '毛铺', brandMatch: '毛铺酒' },
  { id: 127, key: 'yangsheng', name: '养生一号', brandMatch: '劲牌养生一号' },
];

function load(id, tag) {
  return JSON.parse(readFileSync(`src/data/geoReport_${id}_${tag}.json`, 'utf8'));
}

const pct = (v) => (v == null ? '-' : `${Number(v)}%`);
const kw = (list) => (list || []).map((k) => (typeof k === 'string' ? k : k.tag_name_zh || k.tag_name)).filter(Boolean);

function displayName(b) {
  const strip = (s) => String(s || '').replace(/\s+/g, '');
  if (!b.brand_name || strip(b.name).includes(strip(b.brand_name))) return b.name;
  return `${b.brand_name} ${b.name}`;
}

const rankRow = (b, fmt) => ({ name: displayName(b), value: fmt(b.value), isTarget: b.is_target });

function mapDelivery(d) {
  return {
    overview: {
      delivery_citations: d.total_citations,
      citation_rate: d.citation_rate,
      delivery_articles: d.total_articles,
      cited_articles: d.cited_articles,
    },
    platform_totals: {
      total: d.total_citations,
      deepseek: d.ai_citations.deepseek,
      doubao: d.ai_citations.doubao,
      yuanbao: d.ai_citations.yuanbao,
      wenxin: d.ai_citations.wenxin,
      kimi: d.ai_citations.kimi,
    },
    top_channels: d.top_channels,
    insights: d.insights,
    top10: d.top10.slice(0, 10),
  };
}

const report = {
  meta: { label: '2026年9月', delivery_excel: '0921' },
  products: {},
};

let totalConv = 0;
for (const p of products) {
  const ag = load(p.id, 'aug');
  const sp = load(p.id, 'sep');
  totalConv += sp.influence.total_conversations || 0;
  const selfAg = ag.influence.list.find((b) => b.is_target);
  const selfSp = sp.influence.list.find((b) => b.is_target);
  const sent = sepExtra[p.key].sentiments;

  report.products[p.key] = {
    name: p.name,
    brandMatch: p.brandMatch,
    august: {
      mention_rate: ag.stats.brand_mention_rate,
      avg_position: ag.stats.avg_position,
      influence_rank: selfAg?.rank ?? ag.overview_daily?.[0]?.influence_rank ?? null,
      top1_mention_rate: ag.stats.top1_mention_rate,
      top3_mention_rate: ag.stats.top3_mention_rate,
    },
    september: {
      mention_rate: sp.stats.brand_mention_rate,
      avg_position: sp.stats.avg_position,
      influence_rank: selfSp?.rank ?? sp.overview_daily?.[0]?.influence_rank ?? null,
      top1_mention_rate: sp.stats.top1_mention_rate,
      top3_mention_rate: sp.stats.top3_mention_rate,
      conversations: sp.influence.total_conversations,
      platform_stats: sp.stats.platform_stats,
    },
    compare: {
      mention_rate: sp.product_rankings.mention_rate.slice(0, 5).map((b) => rankRow(b, pct)),
      top1: sp.product_rankings.top1.slice(0, 5).map((b) => rankRow(b, pct)),
      influence: sp.influence.list.slice(0, 5).map((b) => ({
        name: b.brand_name || b.name,
        value: `NO. ${b.rank}`,
        isTarget: !!b.is_target,
      })),
    },
    sentiments: {
      positive: sent.positive_percentage,
      negative: sent.negative_percentage,
      positive_keywords: kw(sent.positive_keywords),
      negative_keywords: kw(sent.negative_keywords),
    },
    entries_by_platform: sepExtra[p.key].entries_by_platform,
    entries_all: sepExtra[p.key].entries_all,
    delivery: mapDelivery(deliveryRaw[p.key]),
  };
}

report.scope = {
  platforms: 4,
  entries: 20 + 21 + 21,
  conversations: totalConv,
};

writeFileSync('src/data/jinjiuSeptemberReport.json', JSON.stringify(report, null, 2), 'utf8');
console.log(JSON.stringify({
  scope: report.scope,
  products: Object.fromEntries(
    Object.entries(report.products).map(([k, v]) => [
      k,
      { august: v.august, september: v.september, sentiments: v.sentiments, compare: v.compare },
    ])
  ),
}, null, 2));
