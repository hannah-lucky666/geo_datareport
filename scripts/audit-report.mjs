#!/usr/bin/env node
import { readFileSync } from 'fs';

const report = JSON.parse(readFileSync('src/data/musiJulyReport.json', 'utf8'));
const entries = JSON.parse(readFileSync('src/data/platform_entries.json', 'utf8'));
const delivery = JSON.parse(readFileSync('src/data/delivery_excel_0721.json', 'utf8'));
const issues = [];

function load(id, date) {
  return JSON.parse(readFileSync(`src/data/geoReport_${id}_${date}.json`, 'utf8'));
}
function selfTop1(r) {
  return r.compare.top1_ranking.find((b) => b.is_target)?.top1_mention_rate ?? null;
}

const map = [
  ['smart', 392, '2026-06-25', '2026-07-30'],
  ['ai', 391, '2026-06-25', '2026-07-30'],
  ['mattress', 393, '2026-06-25', '2026-07-30'],
];

console.log('=== META ===');
console.log(JSON.stringify(report.meta, null, 2));

console.log('\n=== GEO FILE vs REPORT ===');
for (const [key, id, june, july] of map) {
  const jn = load(id, june);
  const jl = load(id, july);
  const selfJn = jn.influence.list.find((b) => b.is_target);
  const selfJl = jl.influence.list.find((b) => b.is_target);
  const p = report.products[key];
  const checks = [
    ['june.mention', p.june.mention_rate, jn.stats.brand_mention_rate],
    ['june.top1', p.june.top1_mention_rate, selfTop1(jn)],
    ['june.pos', p.june.avg_position, jn.stats.avg_position],
    ['june.rank', p.june.influence_rank, selfJn?.rank],
    ['july.mention', p.july.mention_rate, jl.stats.brand_mention_rate],
    ['july.top1', p.july.top1_mention_rate, selfTop1(jl)],
    ['july.pos', p.july.avg_position, jl.stats.avg_position],
    ['july.rank', p.july.influence_rank, selfJl?.rank],
  ];
  for (const [name, a, b] of checks) {
    if (a !== b) issues.push(`${key} ${name} report=${a} file=${b}`);
  }

  for (let i = 0; i < 5; i++) {
    const mr = jl.compare.mention_rate_ranking[i];
    const pr = p.compare.mention_rate[i];
    const name = mr.display_name || mr.brand_name;
    const val = `${Number(mr.mention_rate)}%`;
    if (pr.name !== name || pr.value !== val) {
      issues.push(`${key} mention[${i}] report=${pr.name}/${pr.value} file=${name}/${val}`);
    }
    const t = jl.compare.top1_ranking[i];
    const tr = p.compare.top1[i];
    const tval = `${Number(t.top1_mention_rate)}%`;
    if (tr.name !== t.brand_name || tr.value !== tval) {
      issues.push(`${key} top1[${i}] report=${tr.name}/${tr.value} file=${t.brand_name}/${tval}`);
    }
    const pos = jl.compare.position_ranking[i];
    const posr = p.compare.position[i];
    const pname = pos.display_name || pos.brand_name;
    const pval = `NO. ${Number(pos.avg_position).toFixed(1)}`;
    if (posr.name !== pname || posr.value !== pval) {
      issues.push(`${key} pos[${i}] report=${posr.name}/${posr.value} file=${pname}/${pval}`);
    }
  }
  console.log(key, 'P' + id, 'ok metrics+boards');
}

console.log('\n=== PLATFORM ENTRIES ===');
for (const [pid, expectedDate] of [
  ['392', '2026/7/30'],
  ['391', '2026/7/30'],
  ['393', '2026/7/30'],
]) {
  const expectedCount = pid === '393' ? 20 : 30;
  for (const pl of Object.keys(entries[pid] || {})) {
    const list = entries[pid][pl];
    if (list.length !== expectedCount) {
      issues.push(`project ${pid} platform ${pl} count=${list.length} expected=${expectedCount}`);
    }
    const dates = [...new Set(list.map((x) => x.last_conversation_time))];
    const mismatch = list.filter((x) => x.last_conversation_time !== expectedDate);
    if (mismatch.length) {
      issues.push(
        `project ${pid} platform ${pl}: ${mismatch.length}/${list.length} rows date!=${expectedDate} dates=${dates.join(',')}`
      );
    }
  }
  console.log(
    pid,
    'platforms',
    Object.keys(entries[pid] || {}).length,
    'counts',
    Object.values(entries[pid] || {}).map((a) => a.length).join(',')
  );
}

console.log('\n=== DELIVERY (Excel 0721, not GEO) ===');
for (const [k, v] of Object.entries(delivery)) {
  const sum =
    v.platform_totals.deepseek +
    v.platform_totals.doubao +
    v.platform_totals.yuanbao +
    v.platform_totals.wenxin +
    v.platform_totals.tongyi +
    v.platform_totals.kimi;
  if (sum !== v.platform_totals.total) {
    issues.push(`${k} platform sum ${sum} != total ${v.platform_totals.total}`);
  }
  console.log(k, v.overview);
}

console.log('\n=== HARDCODED COPY vs NEW DATA ===');
const files = {
  core: readFileSync('src/pages/Page_CoreDataOverview.jsx', 'utf8'),
  smart: readFileSync('src/pages/Page_CompetitorAnalysis.jsx', 'utf8'),
  ai: readFileSync('src/pages/Page_CompetitorAnalysis_AI.jsx', 'utf8'),
  mattress: readFileSync('src/pages/Page_CompetitorAnalysis_Musi.jsx', 'utf8'),
  content: readFileSync('src/pages/Page_ContentAnalysis.jsx', 'utf8'),
  query: readFileSync('src/pages/Page_QueryDataSystemLink.jsx', 'utf8'),
  slide: readFileSync('src/config/slideConfig.js', 'utf8'),
};
const must = [
  ['core', '89.4%'], ['core', '90.6%'], ['core', '75.8%'], ['core', '58.3%'], ['core', 'NO.1'],
  ['smart', '89.4%'], ['smart', '42.8%'], ['smart', '70.6%'],
  ['ai', '90.6%'], ['ai', '60%'], ['ai', '57.2%'],
  ['mattress', '75.8%'], ['mattress', '24.2%'], ['mattress', '58.3%'],
  ['content', '2.8%'], ['content', '94.4%'], ['content', '99.2%'],
  ['content', '生态联动'], ['content', '功能全面'], ['content', '支撑性好'],
  ['query', '392'], ['query', '391'], ['query', '393'], ['query', '07-30'],
  ['slide', '392'], ['slide', '391'], ['slide', '393'],
];
const forbid = [
  ['core', '71.7%'], ['core', '86.7%'], ['core', '77.2%'],
  ['smart', '38.3%'], ['smart', '32.8%'], ['smart', '86.7%'],
  ['ai', '77.2%'], ['ai', '53.3%'],
  ['mattress', '71.7%'], ['mattress', '66.7%'],
  ['query', '182'], ['query', '181'], ['query', '239'], ['query', '07-20'],
  ['slide', '182'], ['slide', '181'], ['slide', '239'],
  ['content', '3.3%'], ['content', '98.3%'], ['content', '波动极小'],
];
for (const [k, s] of must) if (!files[k].includes(s)) issues.push(`MISSING ${k}: ${s}`);
for (const [k, s] of forbid) if (files[k].includes(s)) issues.push(`STALE ${k}: ${s}`);

const slideOrder = JSON.parse(readFileSync('src/slideOrder.json', 'utf8'));
const keywordIds = slideOrder.filter((id) => id.startsWith('chapter-3-0-'));
console.log('\n=== SLIDE ORDER KEYWORD PAGES ===', keywordIds.length, '(expect 36)');
if (keywordIds.length !== 36) issues.push(`keyword pages in slideOrder = ${keywordIds.length}, expect 36`);

console.log('\n=== ISSUES ===');
if (!issues.length) console.log('NONE');
else issues.forEach((i) => console.log('-', i));
process.exit(issues.length ? 1 : 0);
