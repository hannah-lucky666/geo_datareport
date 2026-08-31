#!/usr/bin/env node
/**
 * 组装美素佳儿源悦(项目 535) 8 月报告数据 -> src/data/yuanyueAugustReport.json
 *
 * 数据来源：
 *   · 优化前 = GEO ONE 2026-08-12 单日（数据系统最早一天，再往前无数据）
 *   · 8 月   = GEO ONE 2026-08-31 单日
 *   · 投放明细 = 《美素佳儿源悦(中位数)_投放文章统计_0829.xlsx》（scripts/_excel_dump_0829.json）
 */
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (p) => JSON.parse(readFileSync(path.join(root, p), 'utf8'));

const BEFORE_DATE = '2026-08-12';
const AUGUST_DATE = '2026-08-31';
const DELIVERY_FILE = '美素佳儿源悦(中位数)_投放文章统计_0829.xlsx';
const DELIVERY_DATE = '2026-08-29';

const before = read(`src/data/geoReport_535_${BEFORE_DATE}.json`);
const august = read(`src/data/geoReport_535_${AUGUST_DATE}.json`);
const extra = read('src/data/yuanyue_extra.json');
const excel = read('scripts/_excel_dump_0829.json');

const pct = (v) => (v == null ? '-' : `${Number(v)}%`);
const pos = (v) => (v == null ? '-' : `NO. ${Number(v).toFixed(1)}`);
const self = (r) => r.influence.list.find((b) => b.is_target) || {};

function snapshot(r) {
  const s = self(r);
  return {
    mention_rate: r.stats.brand_mention_rate,
    top1_mention_rate: r.stats.top1_mention_rate,
    top3_mention_rate: r.stats.top3_mention_rate,
    avg_position: r.stats.avg_position,
    influence_score: s.influence_score ?? null,
    influence_rank: s.rank ?? null,
    conversations: r.influence.total_conversations,
    covered_entries: r.entries.list.filter((e) => Number(e.mention_rate) > 0).length,
    platforms: r.stats.platform_stats.map((p) => ({
      name: p.platform_name,
      mention_rate: p.brand_mention_rate,
      avg_position: p.avg_position,
    })),
  };
}

// —— 竞品排名：接口返回「TOP4 竞品 + 本品」，本品单独标记，不按行序编名次 ——
function ranking(list, valueFn) {
  return list.map((b) => ({
    name: b.display_name || b.brand_name,
    value: valueFn(b),
    isTarget: !!b.is_target,
  }));
}

// —— 投放明细（Excel）——
const overviewSheet = excel['数据概览'];
// 末行是【汇总】行，按「排名」列是否为数字剔除
const detailSheet = excel['文章引用明细'].slice(1).filter((r) => Number.isFinite(Number(r[0])) && r[0] !== '');
const channelSheet = excel['平台与渠道分析'].slice(1);

const cell = (row, col) => overviewSheet[row - 1]?.[col];
const totalConversations = cell(6, 1);
const totalCitationRecords = cell(6, 4);
const deliveryCitations = cell(10, 1);
const deliveryArticles = cell(14, 1);
const citedArticles = cell(14, 4);

const sum = (idx) => detailSheet.reduce((acc, r) => acc + (Number(r[idx]) || 0), 0);

const top10 = detailSheet.slice(0, 10).map((r) => ({
  rank: r[0],
  title: r[1],
  platform: r[2],
  domain: r[3],
  date: r[4],
  total: Number(r[5]) || 0,
  deepseek: Number(r[6]) || 0,
  doubao: Number(r[7]) || 0,
  isCited: r[8],
}));

const DOMAIN_NAMES = {
  'bioon.com.cn': '生物在线',
  'post.smzdm.com': '什么值得买',
  'toutiao.com': '今日头条',
  'v.douyin.com': '抖音',
  'douyin.com': '抖音',
  'h5-fe-article.babytree.com': '宝宝树',
  'miaoshou.com': '妙手医生',
  'news.fh21.com.cn': '复禾健康',
  'bohe.cn': '博禾医生',
  'mama.cn': '妈妈网',
};

const byDomain = new Map();
for (const r of detailSheet) {
  const name = DOMAIN_NAMES[r[3]] || r[3];
  const acc = byDomain.get(name) || { channel: name, articles: 0, cited: 0, citations: 0 };
  acc.articles += 1;
  if (r[8] === '是') acc.cited += 1;
  acc.citations += Number(r[5]) || 0;
  byDomain.set(name, acc);
}
const domainStats = [...byDomain.values()].sort((a, b) => b.citations - a.citations || b.articles - a.articles);

const topChannels = channelSheet
  .filter((r) => Number(r[4]) > 0)
  .sort((a, b) => Number(b[4]) - Number(a[4]))
  .map((r) => ({
    channel: r[0],
    articles: Number(r[1]) || 0,
    cited: Number(r[2]) || 0,
    citedRate: Number(r[3]) || 0,
    citations: Number(r[4]) || 0,
  }));

const report = {
  meta: {
    project_id: 535,
    project_name: '美素佳儿源悦(中位数)',
    product: '美素佳儿源悦',
    brand: '美素佳儿',
    label: '2026年8月',
    before_date: BEFORE_DATE,
    august_date: AUGUST_DATE,
    before_label: '优化前（8月12日）',
    august_label: '8月31日',
  },
  scope: {
    platforms: extra.platforms.length,
    platform_names: extra.platforms.map((p) => p.name),
    entries: august.entries.total,
    conversations: august.influence.total_conversations,
  },
  before: snapshot(before),
  august: snapshot(august),
  compare: {
    mention_rate: ranking(august.compare.mention_rate_ranking, (b) => pct(b.mention_rate)),
    position: ranking(august.compare.position_ranking, (b) => pos(b.avg_position)),
    top1: (august.compare.top1_ranking || []).slice(0, 5).map((b) => ({
      name: b.brand_name,
      value: pct(b.top1_mention_rate),
      isTarget: !!b.is_target,
    })),
    influence: august.influence.list.map((b) => ({
      name: b.brand_name,
      value: String(b.influence_score),
      rank: b.rank,
      isTarget: !!b.is_target,
    })),
  },
  sentiments: {
    positive: extra.august.sentiments?.positive_percentage ?? null,
    negative: extra.august.sentiments?.negative_percentage ?? null,
    positive_keywords: (extra.august.sentiments?.positive_keywords || []).map((k) => k.tag_name_zh || k.tag_name),
    negative_keywords: (extra.august.sentiments?.negative_keywords || []).map((k) => k.tag_name_zh || k.tag_name),
    before_positive_keywords: (extra.before.sentiments?.positive_keywords || []).map((k) => k.tag_name_zh || k.tag_name),
  },
  entries: (() => {
    const beforeMap = Object.fromEntries(before.entries.list.map((e) => [e.entry_name, e]));
    return august.entries.list.map((e) => ({
      name: e.entry_name,
      mention_rate: e.mention_rate,
      position: e.position,
      before_mention_rate: beforeMap[e.entry_name]?.mention_rate ?? null,
    }));
  })(),
  citations: {
    before: {
      citation_rate: before.citations.citation_rate,
      total_citations: before.citations.total_citations,
      platform_stats: before.citations.platform_stats,
    },
    august: {
      citation_rate: august.citations.citation_rate,
      total_citations: august.citations.total_citations,
      platform_stats: august.citations.platform_stats,
    },
  },
  delivery: {
    source: DELIVERY_FILE,
    generated_at: DELIVERY_DATE,
    overview: {
      delivery_articles: deliveryArticles,
      cited_articles: citedArticles,
      cited_rate: Number(((citedArticles / deliveryArticles) * 100).toFixed(1)),
      delivery_citations: deliveryCitations,
      total_conversations: totalConversations,
      total_citation_records: totalCitationRecords,
    },
    platform_totals: {
      total: sum(5),
      deepseek: sum(6),
      doubao: sum(7),
    },
    top10,
    top_channels: topChannels,
    domain_stats: domainStats,
  },
  platform_entries: extra.platform_entries,
  platforms: extra.platforms,
};

writeFileSync(path.join(root, 'src/data/yuanyueAugustReport.json'), JSON.stringify(report, null, 2), 'utf8');
console.log(JSON.stringify({
  scope: report.scope,
  before: { ...report.before, platforms: report.before.platforms },
  august: { ...report.august, platforms: report.august.platforms },
  sentiments: report.sentiments,
  delivery_overview: report.delivery.overview,
  platform_totals: report.delivery.platform_totals,
  top_channels: report.delivery.top_channels,
}, null, 2));
