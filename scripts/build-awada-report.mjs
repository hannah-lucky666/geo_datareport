#!/usr/bin/env node
/**
 * 组装 Awada-优化词(项目 668) 9 月报告数据 -> src/data/awadaSeptemberReport.json
 *
 * 数据来源：
 *   · 优化前 = GEO ONE 2026-09-03 单日
 *   · 9 月   = GEO ONE 2026-09-21 单日
 *   · 投放明细 = 《Awada-优化词_投放文章统计_0921.xlsx》（scripts/_excel_dump_awada_0921.json）
 */
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (p) => JSON.parse(readFileSync(path.join(root, p), 'utf8'));

const BEFORE_DATE = '2026-09-03';
const SEPT_DATE = '2026-09-21';
const DELIVERY_FILE = 'Awada-优化词_投放文章统计_0921.xlsx';
const DELIVERY_DATE = '2026-09-21';

const before = read(`src/data/geoReport_668_${BEFORE_DATE}.json`);
const september = read(`src/data/geoReport_668_${SEPT_DATE}.json`);
const extra = read('src/data/awada_extra.json');
const excel = read('scripts/_excel_dump_awada_0921.json');

const pct = (v) => (v == null ? '-' : `${Number(v)}%`);
const self = (r) => r.influence.list.find((b) => b.is_target) || {};

function snapshot(r) {
  const s = self(r);
  return {
    mention_rate: r.stats.brand_mention_rate,
    top1_mention_rate: r.stats.top1_mention_rate,
    top3_mention_rate: r.stats.top3_mention_rate,
    influence_score: s.influence_score ?? null,
    influence_rank: s.rank ?? null,
    conversations: r.influence.total_conversations,
    covered_entries: r.entries.list.filter((e) => Number(e.mention_rate) > 0).length,
    platforms: r.stats.platform_stats.map((p) => ({
      name: p.platform_name,
      mention_rate: p.brand_mention_rate,
    })),
  };
}

function productFullName(b) {
  const product = b.display_name || b.product_name || '';
  const brand = b.brand_name || '';
  if (product && brand && product !== brand && !product.includes(brand) && !brand.includes(product)) {
    return `${brand}${product}`;
  }
  return product || brand || '-';
}

function ranking(list, valueFn) {
  return list.map((b, i) => ({
    name: productFullName(b),
    value: valueFn(b),
    isTarget: !!b.is_target,
    rank: b.rank ?? (b.is_target ? null : i + 1),
  }));
}

function topFourPlusSelf(list) {
  const leaders = list.filter((b) => !b.is_target).slice(0, 4);
  const me = list.find((b) => b.is_target);
  return me ? [...leaders, me] : leaders;
}

function listedStats(details) {
  const stats = {};
  for (const e of details || []) {
    const seen = new Set();
    for (const r of e.ranks || []) {
      const name = r.display_name || r.brand_name;
      if (!name || seen.has(name)) continue;
      seen.add(name);
      const s = stats[name] || { listed: 0, top1: 0 };
      s.listed += 1;
      if (r.rank === 1) s.top1 += 1;
      stats[name] = s;
    }
  }
  return stats;
}

const septListed = listedStats(extra.september.entry_brand_details);
const mentionLeaders = topFourPlusSelf(september.compare.mention_rate_ranking);
const rivalNames = mentionLeaders.map((b) => productFullName(b));

// —— 投放明细（Excel）——
const overviewSheet = excel['数据概览'];
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
  yuanbao: Number(r[8]) || 0,
  qwen: Number(r[9]) || 0,
  isCited: r[10],
}));

const DOMAIN_NAMES = {
  'mp.weixin.qq.com': '微信公众号',
  'post.smzdm.com': '什么值得买',
  'smzdm.com': '什么值得买',
  'hebei.ifeng.com': '凤凰网',
  'ishare.ifeng.com': '凤凰网',
  'ifeng.com': '凤凰网',
  'sohu.com': '搜狐',
  'focus.cn': '搜狐焦点',
  'v.douyin.com': '抖音',
  'douyin.com': '抖音',
  'toutiao.com': '今日头条',
};

const byDomain = new Map();
for (const r of detailSheet) {
  const name = DOMAIN_NAMES[r[3]] || r[3];
  const acc = byDomain.get(name) || { channel: name, articles: 0, cited: 0, citations: 0 };
  acc.articles += 1;
  if (r[10] === '是') acc.cited += 1;
  acc.citations += Number(r[5]) || 0;
  byDomain.set(name, acc);
}
const domainStats = [...byDomain.values()].sort((a, b) => b.citations - a.citations || b.articles - a.articles);

const topChannels = channelSheet
  .filter((r) => r[0] && r[0] !== '发布平台')
  .sort((a, b) => (Number(b[4]) || 0) - (Number(a[4]) || 0) || (Number(b[1]) || 0) - (Number(a[1]) || 0))
  .map((r) => ({
    channel: r[0],
    articles: Number(r[1]) || 0,
    cited: Number(r[2]) || 0,
    citedRate: Number(r[3]) || 0,
    citations: Number(r[4]) || 0,
  }));

const report = {
  meta: {
    project_id: 668,
    project_name: 'Awada-优化词',
    product: 'Awada',
    brand: 'Awada',
    label: '2026年9月',
    before_date: BEFORE_DATE,
    september_date: SEPT_DATE,
    before_label: '优化前',
    september_label: '9月',
  },
  scope: {
    platforms: extra.platforms.length,
    platform_names: extra.platforms.map((p) => p.name),
    entries: september.entries.total,
    conversations: september.influence.total_conversations,
  },
  before: snapshot(before),
  september: snapshot(september),
  compare: {
    mention_rate: ranking(mentionLeaders, (b) => pct(b.mention_rate)),
    top1: ranking(topFourPlusSelf(september.compare.top1_ranking || []), (b) => pct(b.top1_mention_rate)),
    influence: ranking(topFourPlusSelf(september.influence.list), (b) => `NO. ${b.rank}`),
  },
  rivals: rivalNames.map((name) => ({
    name,
    listed: septListed[name]?.listed ?? 0,
    top1: septListed[name]?.top1 ?? 0,
    isTarget: name === 'Awada',
  })),
  sentiments: {
    positive: extra.september.sentiments?.positive_percentage ?? null,
    negative: extra.september.sentiments?.negative_percentage ?? null,
    positive_keywords: (extra.september.sentiments?.positive_keywords || []).map((k) => k.tag_name_zh || k.tag_name),
    before_positive_keywords: (extra.before.sentiments?.positive_keywords || []).map((k) => k.tag_name_zh || k.tag_name),
  },
  entries: (() => {
    const beforeMap = Object.fromEntries(before.entries.list.map((e) => [e.entry_name, e]));
    return september.entries.list.map((e) => ({
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
    september: {
      citation_rate: september.citations.citation_rate,
      total_citations: september.citations.total_citations,
      platform_stats: september.citations.platform_stats,
    },
  },
  delivery: {
    source: DELIVERY_FILE,
    generated_at: DELIVERY_DATE,
    overview: {
      delivery_articles: deliveryArticles,
      cited_articles: citedArticles,
      cited_rate: Number(((citedArticles / deliveryArticles) * 100).toFixed(1)),
      unique_titles: new Set(detailSheet.map((r) => r[1])).size,
      unique_cited_titles: new Set(detailSheet.filter((r) => r[10] === '是').map((r) => r[1])).size,
      delivery_citations: deliveryCitations,
      total_conversations: totalConversations,
      total_citation_records: totalCitationRecords,
    },
    platform_totals: {
      total: sum(5),
      deepseek: sum(6),
      doubao: sum(7),
      yuanbao: sum(8),
      qwen: sum(9),
    },
    top10,
    top_channels: topChannels,
    domain_stats: domainStats,
  },
  platform_entries: extra.platform_entries,
  platforms: extra.platforms,
};

writeFileSync(path.join(root, 'src/data/awadaSeptemberReport.json'), JSON.stringify(report, null, 2), 'utf8');
console.log(JSON.stringify({
  scope: report.scope,
  before: report.before,
  september: report.september,
  compare: report.compare,
  rivals: report.rivals,
  delivery_overview: report.delivery.overview,
  platform_totals: report.delivery.platform_totals,
  domain_stats: report.delivery.domain_stats,
  covered: report.entries.filter((e) => Number(e.mention_rate) > 0).map((e) => ({
    name: e.name,
    mention_rate: e.mention_rate,
    position: e.position,
    before: e.before_mention_rate,
  })),
}, null, 2));
