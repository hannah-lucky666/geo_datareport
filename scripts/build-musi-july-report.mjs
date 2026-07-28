#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'fs';

const july = JSON.parse(readFileSync('src/data/july23_entries_sentiments.json', 'utf8'));
const delivery = JSON.parse(readFileSync('src/data/delivery_excel_0721.json', 'utf8'));

const products = [
  { id: 182, key: 'smart', name: '慕思智能床', brandMatch: '慕思智能床', juneDate: '2026-06-25', julyDate: '2026-07-23' },
  { id: 181, key: 'ai', name: '慕思AI床垫', brandMatch: '慕思AI床垫', juneDate: '2026-06-25', julyDate: '2026-07-23' },
  { id: 239, key: 'mattress', name: '慕思床垫', brandMatch: '慕思', juneDate: '2026-06-26', julyDate: '2026-07-21' },
];

function load(id, date) {
  return JSON.parse(readFileSync(`src/data/geoReport_${id}_${date}.json`, 'utf8'));
}

const pct = (v) => (v == null ? '-' : `${Number(v)}%`);
const pos = (v) => {
  if (v == null) return '-';
  const n = Number(v);
  return Number.isFinite(n) ? `NO. ${n.toFixed(1)}` : '-';
};

const report = {
  meta: {
    label: '2026年7月',
    june: { smart: '2026-06-25', ai: '2026-06-25', mattress: '2026-06-26' },
    july: { smart: '2026-07-23', ai: '2026-07-23', mattress: '2026-07-21' },
  },
  products: {},
};

let totalConv = 0;
for (const p of products) {
  const jn = load(p.id, p.juneDate);
  const jl = load(p.id, p.julyDate);
  totalConv += jl.influence.total_conversations || 0;
  const selfJn = jn.influence.list.find((b) => b.is_target);
  const selfJl = jl.influence.list.find((b) => b.is_target);
  const sent = july[p.key].sentiments;

  report.products[p.key] = {
    name: p.name,
    brandMatch: p.brandMatch,
    june: {
      mention_rate: jn.stats.brand_mention_rate,
      avg_position: jn.stats.avg_position,
      influence_rank: selfJn?.rank ?? null,
    },
    july: {
      mention_rate: jl.stats.brand_mention_rate,
      avg_position: jl.stats.avg_position,
      influence_rank: selfJl?.rank ?? null,
      top1_mention_rate: jl.stats.top1_mention_rate,
      conversations: jl.influence.total_conversations,
    },
    compare: {
      mention_rate: jl.compare.mention_rate_ranking.slice(0, 5).map((b) => ({
        name: b.display_name || b.brand_name,
        value: pct(b.mention_rate),
      })),
      top1: jl.compare.top1_ranking.slice(0, 5).map((b) => ({
        name: b.brand_name,
        value: pct(b.top1_mention_rate),
      })),
      position: jl.compare.position_ranking.slice(0, 5).map((b) => ({
        name: b.display_name || b.brand_name,
        value: pos(b.avg_position),
      })),
    },
    sentiments: {
      positive: sent.positive_percentage,
      negative: sent.negative_percentage,
      positive_keywords: sent.positive_keywords,
      negative_keywords: sent.negative_keywords,
    },
    entries_by_platform: july[p.key].entries_by_platform,
    entries_all: july[p.key].entries_all,
    delivery: delivery[p.key],
  };
}

report.scope = { platforms: 6, entries: 80, conversations: totalConv };
writeFileSync('src/data/musiJulyReport.json', JSON.stringify(report, null, 2), 'utf8');
console.log(JSON.stringify({
  scope: report.scope,
  products: Object.fromEntries(
    Object.entries(report.products).map(([k, v]) => [
      k,
      { june: v.june, july: v.july, sentiments: v.sentiments, compare: v.compare },
    ])
  ),
}, null, 2));
