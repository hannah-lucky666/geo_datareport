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
  return r.stats?.top1_mention_rate
    ?? r.compare.top1_ranking.find((b) => b.is_target)?.top1_mention_rate
    ?? null;
}

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
    baseline: { mention_rate: 41.7, top1_mention_rate: 10.7, avg_position: 6.04, influence_rank: 4 },
    may: { mention_rate: null, top1_mention_rate: null, avg_position: null, influence_rank: null },
  },
};

const map = [
  ['smart', 392, '2026-07-30'],
  ['ai', 391, '2026-07-30'],
  ['mattress', 393, '2026-07-30'],
];

console.log('=== META ===');
console.log(JSON.stringify(report.meta, null, 2));

console.log('\n=== HISTORICAL + GEO JULY vs REPORT ===');
for (const [key, id, july] of map) {
  const jl = load(id, july);
  const selfJl = jl.influence.list.find((b) => b.is_target);
  const p = report.products[key];
  const hist = HISTORICAL[key];

  for (const period of ['baseline', 'may']) {
    for (const field of ['mention_rate', 'top1_mention_rate', 'avg_position', 'influence_rank']) {
      if (p[period][field] !== hist[period][field]) {
        issues.push(`${key} ${period}.${field} report=${p[period][field]} expected=${hist[period][field]}`);
      }
    }
  }

  const checks = [
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

  const filePl = jl.stats.platform_stats || [];
  const reportPl = p.platform_stats || [];
  if (reportPl.length !== filePl.length) {
    issues.push(`${key} platform_stats length report=${reportPl.length} file=${filePl.length}`);
  } else {
    for (let i = 0; i < filePl.length; i++) {
      const a = reportPl[i];
      const b = filePl[i];
      const expectedName = b.platform_name === 'kimi' ? 'Kimi' : b.platform_name;
      if (
        a.platform_id !== b.platform_id
        || a.platform_name !== expectedName
        || a.brand_mention_rate !== b.brand_mention_rate
        || a.avg_position !== b.avg_position
      ) {
        issues.push(
          `${key} platform_stats[${i}] report=${a.platform_name}/${a.brand_mention_rate}/${a.avg_position} file=${b.platform_name}/${b.brand_mention_rate}/${b.avg_position}`
        );
      }
    }
  }
  console.log(key, 'P' + id, 'ok metrics+boards+platform_stats');
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
for (const key of ['smart', 'ai', 'mattress']) {
  const a = JSON.stringify(report.products[key].delivery?.overview);
  const b = JSON.stringify(delivery[key]?.overview);
  if (a !== b) issues.push(`${key} delivery overview drifted from excel`);
  else console.log(key, 'delivery intact');
}

console.log('\n=== RESULT ===');
if (issues.length) {
  console.log('ISSUES', issues.length);
  for (const i of issues) console.log('-', i);
  process.exit(1);
}
console.log('ALL CHECKS PASSED');
