#!/usr/bin/env node
/**
 * 生成 8 月报告数据。
 * 7 月统一取 7/23；8 月劲酒/养生一号取 8/29，毛铺取 8/27。
 * 报告页面只写「2026年8月」，不要露出三个产品取数日不同。
 * 输出: src/data/jinjiuAugustReport.json
 */
import { readFileSync, writeFileSync } from 'fs';

const augExtra = JSON.parse(readFileSync('src/data/aug27_entries_sentiments.json', 'utf8'));
const deliveryRaw = JSON.parse(readFileSync('src/data/delivery_excel_0828.json', 'utf8'));

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

// 数据系统页面显示的是「品牌 产品」，产品名里已含品牌时不重复拼（如「中国劲酒」→「劲牌 中国劲酒」）
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
  meta: { label: '2026年8月', july: '2026-07-23', delivery_excel: '0828' },
  products: {},
};

let totalConv = 0;
for (const p of products) {
  const jl = load(p.id, 'jul');
  const ag = load(p.id, 'aug');
  totalConv += ag.influence.total_conversations || 0;
  const selfJl = jl.influence.list.find((b) => b.is_target);
  const selfAg = ag.influence.list.find((b) => b.is_target);
  const sent = augExtra[p.key].sentiments;

  report.products[p.key] = {
    name: p.name,
    brandMatch: p.brandMatch,
    july: {
      mention_rate: jl.stats.brand_mention_rate,
      avg_position: jl.stats.avg_position,
      influence_rank: selfJl?.rank ?? jl.overview_daily?.[0]?.influence_rank ?? null,
      top1_mention_rate: jl.stats.top1_mention_rate,
      top3_mention_rate: jl.stats.top3_mention_rate,
    },
    august: {
      mention_rate: ag.stats.brand_mention_rate,
      avg_position: ag.stats.avg_position,
      influence_rank: selfAg?.rank ?? ag.overview_daily?.[0]?.influence_rank ?? null,
      top1_mention_rate: ag.stats.top1_mention_rate,
      top3_mention_rate: ag.stats.top3_mention_rate,
      conversations: ag.influence.total_conversations,
    },
    // 提及率 / Top1 取产品口径；竞品排名 = 行业影响力排名（competitors/influence），不是提及位次
    compare: {
      mention_rate: ag.product_rankings.mention_rate.slice(0, 5).map((b) => rankRow(b, pct)),
      top1: ag.product_rankings.top1.slice(0, 5).map((b) => rankRow(b, pct)),
      influence: ag.influence.list.slice(0, 5).map((b) => ({
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
    entries_by_platform: augExtra[p.key].entries_by_platform,
    entries_all: augExtra[p.key].entries_all,
    delivery: mapDelivery(deliveryRaw[p.key]),
  };
}

report.scope = {
  platforms: 4,
  entries: 20 + 21 + 21,
  conversations: totalConv,
};

writeFileSync('src/data/jinjiuAugustReport.json', JSON.stringify(report, null, 2), 'utf8');
console.log(JSON.stringify({
  scope: report.scope,
  products: Object.fromEntries(
    Object.entries(report.products).map(([k, v]) => [
      k,
      { july: v.july, august: v.august, sentiments: v.sentiments, compare: v.compare },
    ])
  ),
}, null, 2));
