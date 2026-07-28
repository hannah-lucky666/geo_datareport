#!/usr/bin/env node
import { readFileSync } from 'fs';

const report = JSON.parse(readFileSync('src/data/musiJulyReport.json', 'utf8'));
const entries = JSON.parse(readFileSync('src/data/platform_entries.json', 'utf8'));
const delivery = JSON.parse(readFileSync('src/data/delivery_excel_0721.json', 'utf8'));
const issues = [];

function load(id, date) {
  return JSON.parse(readFileSync(`src/data/geoReport_${id}_${date}.json`, 'utf8'));
}

console.log('=== META ===');
console.log(JSON.stringify(report.meta, null, 2));

console.log('\n=== OVERVIEW ===');
for (const [k, p] of Object.entries(report.products)) {
  console.log(
    k,
    'june',
    p.june,
    'july',
    { mention: p.july.mention_rate, pos: p.july.avg_position, rank: p.july.influence_rank }
  );
}

const map = [
  ['smart', 182, '2026-06-25', '2026-07-23'],
  ['ai', 181, '2026-06-25', '2026-07-23'],
  ['mattress', 239, '2026-06-26', '2026-07-21'],
];

console.log('\n=== GEO FILE vs REPORT ===');
for (const [key, id, june, july] of map) {
  const jn = load(id, june);
  const jl = load(id, july);
  const selfJn = jn.influence.list.find((b) => b.is_target);
  const selfJl = jl.influence.list.find((b) => b.is_target);
  const p = report.products[key];
  const checks = [
    ['june.mention', p.june.mention_rate, jn.stats.brand_mention_rate],
    ['june.pos', p.june.avg_position, jn.stats.avg_position],
    ['june.rank', p.june.influence_rank, selfJn?.rank],
    ['july.mention', p.july.mention_rate, jl.stats.brand_mention_rate],
    ['july.pos', p.july.avg_position, jl.stats.avg_position],
    ['july.rank', p.july.influence_rank, selfJl?.rank],
  ];
  for (const [name, a, b] of checks) {
    if (a !== b) issues.push(`${key} ${name} report=${a} file=${b}`);
  }

  // compare boards
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
    const pval = `NO. ${Number(pos.avg_position)}`;
    if (posr.name !== pname || posr.value !== pval) {
      issues.push(`${key} pos[${i}] report=${posr.name}/${posr.value} file=${pname}/${pval}`);
    }
  }
}

console.log('\n=== PLATFORM ENTRIES ===');
for (const [pid, expectedDate] of [
  ['182', '2026/7/23'],
  ['181', '2026/7/23'],
  ['239', '2026/7/21'],
]) {
  const expectedCount = pid === '239' ? 20 : 30;
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
    const bad = list.filter((x) => !x.entry_name || !x.mention_rate || !x.position);
    if (bad.length) issues.push(`project ${pid} platform ${pl} incomplete rows ${bad.length}`);
  }
  console.log(
    pid,
    'platforms',
    Object.keys(entries[pid] || {}).length,
    'counts',
    Object.values(entries[pid] || {})
      .map((a) => a.length)
      .join(',')
  );
}

console.log('\n=== DELIVERY ===');
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
  if (v.top10.length !== 10) issues.push(`${k} top10 length ${v.top10.length}`);
  if (v.overview.delivery_citations !== v.platform_totals.total) {
    issues.push(`${k} overview citations ${v.overview.delivery_citations} != platform total ${v.platform_totals.total}`);
  }
  console.log(k, v.overview, 'top10', v.top10.length);
}

console.log('\n=== HARDCODED COPY NUMBERS ===');
const files = [
  'src/pages/Page_CoreDataOverview.jsx',
  'src/pages/Page_CompetitorAnalysis.jsx',
  'src/pages/Page_CompetitorAnalysis_AI.jsx',
  'src/pages/Page_CompetitorAnalysis_Musi.jsx',
  'src/pages/Page_ContentAnalysis.jsx',
  'src/pages/Page_QueryDataSystemLink.jsx',
  'src/config/slideConfig.js',
];
for (const f of files) {
  const text = readFileSync(f, 'utf8');
  const nums = [...text.matchAll(/\d+\.?\d*%|NO\.\s*\d+\.?\d*|07-\d{2}|2026|June|July|6月|7月/g)].map((m) => m[0]);
  console.log(f.replace('src/pages/', '').replace('src/config/', ''), '=>', [...new Set(nums)].join(' | '));
}

// expected copy checks
const core = readFileSync('src/pages/Page_CoreDataOverview.jsx', 'utf8');
const musiComp = readFileSync('src/pages/Page_CompetitorAnalysis_Musi.jsx', 'utf8');
const smartComp = readFileSync('src/pages/Page_CompetitorAnalysis.jsx', 'utf8');
const aiComp = readFileSync('src/pages/Page_CompetitorAnalysis_AI.jsx', 'utf8');
const query = readFileSync('src/pages/Page_QueryDataSystemLink.jsx', 'utf8');

if (!core.includes('71.7%')) issues.push('CoreDataOverview copy missing mattress july 71.7%');
if (core.includes('75.0%') || core.includes('75%')) issues.push('CoreDataOverview still has old mattress 75%');
if (!core.includes('4.9')) issues.push('CoreDataOverview copy missing mattress pos 4.9');
if (!musiComp.includes('71.7%')) issues.push('Competitor_Musi copy missing 71.7%');
if (musiComp.includes('升至75%') || musiComp.includes('NO.4.5')) issues.push('Competitor_Musi still has old 75%/4.5');
if (!smartComp.includes('38.3%') || !smartComp.includes('32.8%')) issues.push('Competitor_Smart copy missing 舒福德反超 numbers');
if (!aiComp.includes('77.2%')) issues.push('Competitor_AI copy missing 77.2%');
if (!query.includes('07-20 ~ 07-26')) {
  // filter bar week label
}

// slide count expectations
const slideOrder = JSON.parse(readFileSync('src/slideOrder.json', 'utf8'));
const keywordIds = slideOrder.filter((id) => id.startsWith('chapter-3-0-'));
console.log('\n=== SLIDE ORDER KEYWORD PAGES ===', keywordIds.length, '(expect 36 = 12+12+12)');
if (keywordIds.length !== 36) issues.push(`keyword pages in slideOrder = ${keywordIds.length}, expect 36`);

console.log('\n=== ISSUES ===');
if (!issues.length) console.log('NONE');
else issues.forEach((i) => console.log('-', i));
