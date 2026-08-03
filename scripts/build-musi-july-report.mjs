#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'fs';

const july = JSON.parse(readFileSync('src/data/july23_entries_sentiments.json', 'utf8'));
const delivery = JSON.parse(readFileSync('src/data/delivery_excel_0721.json', 'utf8'));

// 账号 musi：P392=智能床 / P391=AI床垫 / P393=床垫
// 历史口径：智能床/AI 优化前+5月来自 V3 PPT；床垫优化前=5月，来自 6 月汇报 PPT
const HISTORICAL = {
  smart: {
    baseline: { mention_rate: 43.9, top1_mention_rate: 17.3, avg_position: 4.24, influence_rank: 3 },
    may: { mention_rate: 73.6, top1_mention_rate: 40.1, avg_position: 2.9, influence_rank: 1 },
  },
  ai: {
    baseline: { mention_rate: 40.5, top1_mention_rate: 21.8, avg_position: 5.26, influence_rank: 5 },
    may: { mention_rate: 82.4, top1_mention_rate: 51, avg_position: 2.5, influence_rank: 1 },
  },
  mattress: {
    // 床垫优化前来自 6 月汇报；5 月无独立监测数据，页面显示为 -
    baseline: { mention_rate: 41.7, top1_mention_rate: 10.7, avg_position: 6.04, influence_rank: 4 },
    may: { mention_rate: null, top1_mention_rate: null, avg_position: null, influence_rank: null },
  },
};

const products = [
  { id: 392, key: 'smart', name: '慕思智能床', brandMatch: '慕思智能床', julyDate: '2026-07-30' },
  { id: 391, key: 'ai', name: '慕思AI床垫', brandMatch: '慕思AI床垫', julyDate: '2026-07-30' },
  { id: 393, key: 'mattress', name: '慕思床垫', brandMatch: '慕思', julyDate: '2026-07-30' },
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

function selfTop1(report) {
  const fromStats = report.stats?.top1_mention_rate;
  if (fromStats != null) return fromStats;
  const self = (report.compare?.top1_ranking || []).find((b) => b.is_target);
  return self?.top1_mention_rate ?? null;
}

const report = {
  meta: {
    label: '2026年7月',
    baseline: { source: 'ppt', smart: 'V3优化前', ai: 'V3优化前', mattress: '6月汇报-5月(=优化前)' },
    may: { source: 'ppt', smart: 'V3优化后/5月', ai: 'V3优化后/5月', mattress: '6月汇报-5月' },
    july: { smart: '2026-07-30', ai: '2026-07-30', mattress: '2026-07-30' },
  },
  products: {},
};

let totalConv = 0;
for (const p of products) {
  const jl = load(p.id, p.julyDate);
  totalConv += jl.influence.total_conversations || 0;
  const selfJl = jl.influence.list.find((b) => b.is_target);
  const sent = july[p.key].sentiments;
  const hist = HISTORICAL[p.key];

  report.products[p.key] = {
    name: p.name,
    brandMatch: p.brandMatch,
    project_id: p.id,
    baseline: { ...hist.baseline },
    may: { ...hist.may },
    july: {
      mention_rate: jl.stats.brand_mention_rate,
      top1_mention_rate: selfTop1(jl),
      avg_position: jl.stats.avg_position,
      influence_rank: selfJl?.rank ?? null,
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
    platform_stats: (jl.stats.platform_stats || []).map((pl) => ({
      platform_id: pl.platform_id,
      platform_name: pl.platform_name === 'kimi' ? 'Kimi' : pl.platform_name,
      platform_logo: pl.platform_logo,
      brand_mention_rate: pl.brand_mention_rate,
      avg_position: pl.avg_position,
    })),
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
      {
        project_id: v.project_id,
        baseline: v.baseline,
        may: v.may,
        july: v.july,
        platform_stats: v.platform_stats,
        sentiments: v.sentiments,
        compare: v.compare,
      },
    ])
  ),
}, null, 2));
