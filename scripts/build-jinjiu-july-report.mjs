#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'fs';

const julyExtra = JSON.parse(readFileSync('src/data/july23_entries_sentiments.json', 'utf8'));
const deliveryRaw = JSON.parse(readFileSync('src/data/delivery_excel_0721.json', 'utf8'));

const products = [
  { id: 125, key: 'jinjiu', name: '劲酒', brandMatch: '劲酒' },
  { id: 126, key: 'maopu', name: '毛铺', brandMatch: '毛铺酒' },
  { id: 127, key: 'yangsheng', name: '养生一号', brandMatch: '劲牌养生一号' },
];

function load(id, tag) {
  return JSON.parse(readFileSync(`src/data/geoReport_${id}_${tag}.json`, 'utf8'));
}

const pct = (v) => (v == null ? '-' : `${Number(v)}%`);

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
    top10: d.top10,
  };
}

const report = {
  meta: { label: '2026年7月', june: '2026-06-25', july: '2026-07-23' },
  products: {},
};

let totalConv = 0;
for (const p of products) {
  const jn = load(p.id, 'jun');
  const jl = load(p.id, 'jul');
  totalConv += jl.influence.total_conversations || 0;
  const selfJn = jn.influence.list.find((b) => b.is_target);
  const selfJl = jl.influence.list.find((b) => b.is_target);
  const sent = julyExtra[p.key].sentiments;

  report.products[p.key] = {
    name: p.name,
    brandMatch: p.brandMatch,
    june: {
      mention_rate: jn.stats.brand_mention_rate,
      avg_position: jn.stats.avg_position,
      influence_rank: selfJn?.rank ?? jn.overview_daily?.[0]?.influence_rank ?? null,
    },
    july: {
      mention_rate: jl.stats.brand_mention_rate,
      avg_position: jl.stats.avg_position,
      influence_rank: selfJl?.rank ?? jl.overview_daily?.[0]?.influence_rank ?? null,
      top1_mention_rate: jl.stats.top1_mention_rate ?? jl.compare.top1_ranking?.[0]?.top1_mention_rate ?? null,
      conversations: jl.influence.total_conversations,
    },
    compare: {
      mention_rate: jl.compare.mention_rate_ranking.slice(0, 5).map((b) => ({
        name: b.brand_name,
        value: pct(b.mention_rate),
      })),
      top1: jl.compare.top1_ranking.slice(0, 5).map((b) => ({
        name: b.brand_name,
        value: pct(b.top1_mention_rate),
      })),
      influence: jl.influence.list.slice(0, 5).map((b) => ({
        name: b.brand_name,
        value: `NO. ${b.rank}`,
        isTarget: !!b.is_target,
      })),
    },
    sentiments: {
      positive: sent.positive_percentage,
      negative: sent.negative_percentage,
      positive_keywords: sent.positive_keywords,
      negative_keywords: sent.negative_keywords?.length ? sent.negative_keywords : ['暂无数据'],
    },
    negative_answers: julyExtra[p.key].negative_answers || [],
    entries_by_platform: julyExtra[p.key].entries_by_platform,
    entries_all: julyExtra[p.key].entries_all,
    delivery: mapDelivery(deliveryRaw[p.key]),
  };
}

report.scope = {
  platforms: 4,
  entries: 20 + 21 + 21,
  conversations: totalConv,
};

writeFileSync('src/data/jinjiuJulyReport.json', JSON.stringify(report, null, 2), 'utf8');
console.log(JSON.stringify({
  scope: report.scope,
  products: Object.fromEntries(
    Object.entries(report.products).map(([k, v]) => [
      k,
      { june: v.june, july: v.july, sentiments: v.sentiments, compare: v.compare },
    ])
  ),
}, null, 2));
