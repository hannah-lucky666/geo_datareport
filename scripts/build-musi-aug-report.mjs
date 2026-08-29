#!/usr/bin/env node
/**
 * 生成 src/data/musiAugReport.json —— 报告的唯一数据源。
 *
 * 数据口径（重要）：
 *   · 8 月列：jiming 账号 P182 智能床 / P181 AI床垫 / P239 床垫，取 2026-08-28 单日。
 *   · 慕思床垫 8 月只统计数据系统里「前十五」词条分组的 15 条词条（客户已单独知会，
 *     报告页面不标注这一点）。快照由下面命令生成：
 *       node scripts/fetch-geo-report.mjs 239 --start 2026-08-28 --end 2026-08-28 \
 *            --group 前十五 --out geoReport_239_2026-08-28.json
 *   · 7 月列：沿用上一版 musiJulyReport.json 中 musi 账号 P392/P391/P393 @2026-07-30 的数值，
 *     两套项目是不同的监测配置，故 7 月列仅作参考对比，不重新取数。7 月床垫仍是全部 20 条口径。
 *   · 竞品排名 / 情感 / 词条：全部取 8 月新源。
 *   · 投放内容与引用明细：取自 0828 投放文章统计 Excel（见 scripts/build_delivery_0828.py），
 *     为截至 8/28 的累计口径，文章表只展示引用次数 Top10。
 *
 * 指标来源（勿混用 compare 表字段）：
 *   提及率 → stats.brand_mention_rate；平均提及位次 → stats.avg_position；
 *   竞品排名 → influence 中 is_target 的 rank；
 *   Top1/Top3 → compare.top1_ranking / top3_ranking 中 is_target。
 */
import { readFileSync, writeFileSync } from 'fs';

const AUG_DATE = '2026-08-28';
const JUL_DATE = '2026-07-30';

const products = [
  { key: 'smart', name: '慕思智能床', brandMatch: '慕思智能床', augId: 182, julId: 392 },
  { key: 'ai', name: '慕思AI床垫', brandMatch: '慕思AI床垫', augId: 181, julId: 391 },
  { key: 'mattress', name: '慕思床垫', brandMatch: '慕思', augId: 239, julId: 393 },
];

// 7 月 Top3 提及率：musiJulyReport.json 是加 Top3 列之前生成的，缺这个字段，
// 故按 musi 账号 P392/P391/P393 @2026-07-30 的 top-mention-rate?top_type=top3 单独补录。
const JUL_TOP3 = { smart: 76.7, ai: 81.7, mattress: 48.3 };

const prev = JSON.parse(readFileSync('src/data/musiJulyReport.json', 'utf8'));
const augSent = JSON.parse(readFileSync('src/data/aug28_sentiments.json', 'utf8'));
const delivery = JSON.parse(readFileSync('src/data/delivery_excel_0828.json', 'utf8'));

const loadAug = (id) => JSON.parse(readFileSync(`src/data/geoReport_${id}_${AUG_DATE}.json`, 'utf8'));

const pct = (v) => (v == null ? '-' : `${Number(v)}%`);
const pos = (v) => {
  if (v == null) return '-';
  const n = Number(v);
  return Number.isFinite(n) ? `NO. ${n.toFixed(1)}` : '-';
};

const report = {
  meta: {
    label: '2026年8月',
    july: { date: JUL_DATE, source: 'musi 账号 P392/P391/P393（沿用上一版数值）' },
    august: { date: AUG_DATE, source: 'jiming 账号 P182/P181/P239' },
  },
  products: {},
};

for (const p of products) {
  const aug = loadAug(p.augId);
  const selfInf = aug.influence.list.find((b) => b.is_target);
  const selfTop1 = (aug.compare.top1_ranking || []).find((b) => b.is_target);
  const selfTop3 = (aug.compare.top3_ranking || []).find((b) => b.is_target);
  const sent = augSent[p.key];

  report.products[p.key] = {
    name: p.name,
    brandMatch: p.brandMatch,
    project_id: p.augId,
    july_project_id: p.julId,

    july: { ...prev.products[p.key].july, top3_mention_rate: JUL_TOP3[p.key] },

    august: {
      mention_rate: aug.stats.brand_mention_rate,
      top1_mention_rate: selfTop1?.top1_mention_rate ?? null,
      top3_mention_rate: selfTop3?.top3_mention_rate ?? null,
      avg_position: aug.stats.avg_position,
      influence_rank: selfInf?.rank ?? null,
      conversations: aug.influence.total_conversations,
    },

    compare: {
      mention_rate: aug.compare.mention_rate_ranking.slice(0, 5).map((b) => ({
        name: b.display_name || b.brand_name,
        value: pct(b.mention_rate),
      })),
      top1: aug.compare.top1_ranking.slice(0, 5).map((b) => ({
        name: b.brand_name,
        value: pct(b.top1_mention_rate),
      })),
      position: aug.compare.position_ranking.slice(0, 5).map((b) => ({
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

    entries_all: aug.entries.list.map((e) => ({
      name: e.entry_name,
      mention_rate: e.mention_rate,
      position: e.position,
    })),

    delivery: delivery[p.key],
  };
}

// 监测口径（非报表口径）：三个项目共 30+30+20=80 个词条、6 平台共 480 篇次。
// 慕思床垫的数值虽只取「前十五」分组，但监测范围仍是全部 20 条，故这里保持全量不变。
report.scope = { platforms: 6, entries: 80, conversations: 480 };

writeFileSync('src/data/musiAugReport.json', JSON.stringify(report, null, 2), 'utf8');

console.log(`已写入 src/data/musiAugReport.json  （8月=${AUG_DATE}，7月=${JUL_DATE} 沿用）`);
for (const p of products) {
  const r = report.products[p.key];
  console.log(
    `\n${p.name}  P${p.augId}` +
      `\n  提及率  ${r.july.mention_rate}%  →  ${r.august.mention_rate}%` +
      `\n  Top1    ${r.july.top1_mention_rate}%  →  ${r.august.top1_mention_rate}%` +
      `\n  Top3    ${r.july.top3_mention_rate}%  →  ${r.august.top3_mention_rate}%` +
      `\n  位次    ${r.july.avg_position}  →  ${r.august.avg_position}` +
      `\n  排名    NO.${r.july.influence_rank}  →  NO.${r.august.influence_rank}` +
      `\n  情感    正面 ${r.sentiments.positive}% / 负面 ${r.sentiments.negative}%` +
      `\n  竞品提及率 ${r.compare.mention_rate.map((x) => `${x.name} ${x.value}`).join(' | ')}` +
      `\n  竞品Top1   ${r.compare.top1.map((x) => `${x.name} ${x.value}`).join(' | ')}` +
      `\n  竞品位次   ${r.compare.position.map((x) => `${x.name} ${x.value}`).join(' | ')}` +
      `\n  投放      ${r.delivery.overview.delivery_articles} 篇 / 被引 ${r.delivery.overview.cited_articles} 篇` +
      ` (${r.delivery.overview.citation_rate}%) / 引用 ${r.delivery.overview.delivery_citations} 次`
  );
}
console.log(`\nscope: ${JSON.stringify(report.scope)}`);
