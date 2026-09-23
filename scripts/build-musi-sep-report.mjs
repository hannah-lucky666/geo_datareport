#!/usr/bin/env node
/**
 * 生成 src/data/musiSepReport.json —— 9 月报告的数据源。
 *
 * 数据口径（重要）：
 *   · 9 月列按产品取不同单日：P182 智能床 2026-09-21、P181 AI床垫 2026-09-18、
 *     P239 床垫 2026-09-23。报告页面文字一律写成「9月」，不写单日日期。
 *   · 慕思床垫 8/9 月都只统计数据系统里指定词条分组的 15 条词条
 *     （客户已单独知会，报告页面不标注这一点）。
 *   · 8 月列：沿用上一版 2026-08-28 单日数值（截图「核心数据总览（2026年8月）」）。
 *   · 竞品排名 / 情感 / 词条：全部取 9 月新源。
 *   · 投放内容与引用明细：取自 0921 投放文章统计 Excel（见 scripts/build_delivery_0921.py），
 *     为截至 9/21 的累计口径，文章表只展示引用次数 Top10。
 *
 * 指标来源（勿混用 compare 表字段）：
 *   提及率 → stats.brand_mention_rate；
 *   竞品排名 → influence 中 is_target 的 rank（行业影响力排名）；
 *   Top1/Top3 → compare.top1_ranking / top3_ranking 中 is_target。
 */
import { readFileSync, writeFileSync } from 'fs';

const AUG_DATE = '2026-08-28';

const products = [
  { key: 'smart', name: '慕思智能床', brandMatch: '慕思智能床', sepId: 182, date: '2026-09-21' },
  { key: 'ai', name: '慕思AI床垫', brandMatch: '慕思AI床垫', sepId: 181, date: '2026-09-18' },
  { key: 'mattress', name: '慕思床垫', brandMatch: '慕思', sepId: 239, date: '2026-09-23' },
];

const prev = JSON.parse(readFileSync('src/data/musiAugReport.json', 'utf8'));
const sepSent = JSON.parse(readFileSync('src/data/sep19_sentiments.json', 'utf8'));
const delivery = JSON.parse(readFileSync('src/data/delivery_excel_0921.json', 'utf8'));

const loadSep = (id, date) => JSON.parse(readFileSync(`src/data/geoReport_${id}_${date}.json`, 'utf8'));

const pct = (v) => (v == null ? '-' : `${Number(v)}%`);

const report = {
  meta: {
    label: '2026年9月',
    august: { date: AUG_DATE, source: 'jiming 账号 P182/P181/P239（沿用上一版 8/28 单日）' },
    september: {
      dates: Object.fromEntries(products.map((p) => [p.key, p.date])),
      source: 'jiming 账号 P182 2026-09-21 / P181 2026-09-18 / P239 2026-09-23（页面口径写 9 月）',
    },
  },
  products: {},
};

for (const p of products) {
  const sep = loadSep(p.sepId, p.date);
  const selfInf = sep.influence.list.find((b) => b.is_target);
  const selfTop1 = (sep.compare.top1_ranking || []).find((b) => b.is_target);
  const selfTop3 = (sep.compare.top3_ranking || []).find((b) => b.is_target);
  const sent = sepSent[p.key];

  report.products[p.key] = {
    name: p.name,
    brandMatch: p.brandMatch,
    project_id: p.sepId,

    august: { ...prev.products[p.key].august },

    september: {
      mention_rate: sep.stats.brand_mention_rate,
      top1_mention_rate: selfTop1?.top1_mention_rate ?? null,
      top3_mention_rate: selfTop3?.top3_mention_rate ?? null,
      influence_rank: selfInf?.rank ?? null,
      influence_score: selfInf?.influence_score ?? null,
      conversations: sep.influence.total_conversations,
    },

    compare: {
      mention_rate: sep.compare.mention_rate_ranking.slice(0, 5).map((b) => ({
        name: b.display_name || b.brand_name,
        value: pct(b.mention_rate),
        isTarget: !!b.is_target,
        rank: b.rank ?? null,
      })),
      top1: sep.compare.top1_ranking.slice(0, 5).map((b) => ({
        name: b.brand_name,
        value: pct(b.top1_mention_rate),
        isTarget: !!b.is_target,
        rank: b.rank ?? null,
      })),
      influence: sep.influence.list.slice(0, 5).map((b) => ({
        name: b.display_name || b.brand_name,
        value: b.rank == null ? '-' : `NO.${b.rank}`,
        isTarget: !!b.is_target,
        rank: b.rank ?? null,
      })),
    },

    sentiments: {
      positive: sent.positive_percentage,
      negative: sent.negative_percentage,
      positive_keywords: sent.positive_keywords,
      negative_keywords: sent.negative_keywords,
    },

    entries_all: sep.entries.list.map((e) => ({
      name: e.entry_name,
      mention_rate: e.mention_rate,
      position: e.position,
    })),

    delivery: delivery[p.key],
  };
}

report.scope = { platforms: 6, entries: 80, conversations: 480 };

writeFileSync('src/data/musiSepReport.json', JSON.stringify(report, null, 2), 'utf8');

console.log(`已写入 src/data/musiSepReport.json  （8月=${AUG_DATE} 沿用）`);
for (const p of products) {
  const r = report.products[p.key];
  console.log(
    `\n${p.name}  P${p.sepId}` +
      `\n  提及率  ${r.august.mention_rate}%  →  ${r.september.mention_rate}%` +
      `\n  Top1    ${r.august.top1_mention_rate}%  →  ${r.september.top1_mention_rate}%` +
      `\n  Top3    ${r.august.top3_mention_rate}%  →  ${r.september.top3_mention_rate}%` +
      `\n  排名    NO.${r.august.influence_rank}  →  NO.${r.september.influence_rank}` +
      `\n  情感    正面 ${r.sentiments.positive}% / 负面 ${r.sentiments.negative}%` +
      `\n  竞品提及率 ${r.compare.mention_rate.map((x) => `${x.name} ${x.value}`).join(' | ')}` +
      `\n  竞品Top1   ${r.compare.top1.map((x) => `${x.name} ${x.value}`).join(' | ')}` +
      `\n  竞品排名   ${r.compare.influence.map((x) => `${x.name} ${x.value}`).join(' | ')}` +
      `\n  投放      ${r.delivery.overview.delivery_articles} 篇 / 被引 ${r.delivery.overview.cited_articles} 篇` +
      ` (${r.delivery.overview.citation_rate}%) / 引用 ${r.delivery.overview.delivery_citations} 次`
  );
}
console.log(`\nscope: ${JSON.stringify(report.scope)}`);
