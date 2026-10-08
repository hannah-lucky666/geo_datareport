/**
 * 按 9 月报告同一单日、同一词条范围，拉取三品线各平台的 Top1 / Top3 提及率。
 * 提及率仍以已落盘的 geoReport platform_stats 为准，这里只补总览接口没有的两项。
 *
 * 用法: node scripts/fetch-platform-core.mjs
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const API_BASE = 'https://api.geotopone.com';

const PROJECTS = [
  { key: 'smart', id: 182, name: '慕思智能床', date: '2026-09-21' },
  { key: 'ai', id: 181, name: '慕思AI床垫', date: '2026-09-18' },
  {
    key: 'mattress',
    id: 239,
    name: '慕思床垫',
    date: '2026-09-23',
    entry_ids: '3622,3623,3624,3626,3628,3630,3632,3633,3634,3635,3636,3637,3638,3639,3640',
  },
];

let cookie = '';

async function login() {
  const res = await fetch(new URL('/login', API_BASE), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: 'jiming', password: '123456' }),
  });
  const json = await res.json();
  if (!json.ok) throw new Error(`登录失败: ${json.error}`);
  const raw = res.headers.getSetCookie?.() || [];
  const parts = (raw.length ? raw : [res.headers.get('set-cookie')])
    .filter(Boolean)
    .map((c) => c.split(';')[0].trim())
    .filter((p) => p.includes('=') && p.slice(p.indexOf('=') + 1).length > 0);
  const byName = new Map();
  for (const p of parts) byName.set(p.split('=')[0], p);
  cookie = [...byName.values()].join('; ');
}

async function api(pathname, params = {}) {
  const url = new URL(pathname, API_BASE);
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined && v !== null && v !== '') url.searchParams.set(k, String(v));
  }
  const res = await fetch(url, { headers: { cookie } });
  const json = await res.json();
  if (!json.ok) throw new Error(`${pathname} ${json.error || res.status}`);
  return json;
}

function num(v) {
  const n = Number(v);
  return Number.isFinite(n) ? Math.round(n * 10) / 10 : null;
}

await login();

const out = { products: {} };

for (const p of PROJECTS) {
  const range = { project_id: p.id, start_date: p.date, end_date: p.date };
  if (p.entry_ids) range.entry_ids = p.entry_ids;

  const [platforms, stats, top1, top3] = await Promise.all([
    api('/api/platforms', { project_id: p.id }),
    api('/api/conversations/stats', range),
    api('/api/competitors/top-mention-rate', { ...range, top_type: 'top1' }),
    api('/api/competitors/top-mention-rate', { ...range, top_type: 'top3' }),
  ]);

  console.log(
    p.name,
    'mention', stats.data.brand_mention_rate,
    'top1', top1.data.self_selected_top_mention_rate,
    'top3', top3.data.self_selected_top_mention_rate,
  );

  const logoOf = Object.fromEntries((platforms.data || []).map((pl) => [pl.id, pl.url]));
  const nameOf = Object.fromEntries((platforms.data || []).map((pl) => [pl.id, pl.name]));

  const platformStats = [];
  for (const row of stats.data.platform_stats || []) {
    const pid = row.platform_id;
    const [t1, t3] = await Promise.all([
      api('/api/competitors/top-mention-rate', { ...range, top_type: 'top1', platform_ids: pid }),
      api('/api/competitors/top-mention-rate', { ...range, top_type: 'top3', platform_ids: pid }),
    ]);
    const item = {
      platform_id: pid,
      platform_name: nameOf[pid] || `平台${pid}`,
      platform_logo: logoOf[pid] || null,
      mention_rate: num(row.brand_mention_rate),
      top1_mention_rate: num(t1.data.self_selected_top_mention_rate),
      top3_mention_rate: num(t3.data.self_selected_top_mention_rate),
    };
    platformStats.push(item);
    console.log(' ', item.platform_name, item.mention_rate, item.top1_mention_rate, item.top3_mention_rate);
  }

  out.products[p.key] = {
    name: p.name,
    project_id: p.id,
    date: p.date,
    mention_rate: num(stats.data.brand_mention_rate),
    top1_mention_rate: num(top1.data.self_selected_top_mention_rate),
    top3_mention_rate: num(top3.data.self_selected_top_mention_rate),
    platforms: platformStats,
  };
}

const checks = [
  { label: 'may-smart', id: 182, expect: 73.6 },
  { label: 'may-ai', id: 181, expect: 82.4 },
  { label: 'may-mattress', id: 239, expect: 41.7 },
  { label: 'jun-smart', id: 182, date: '2026-06-25', expectTop1: 41.1 },
  { label: 'jun-ai', id: 181, date: '2026-06-25', expectTop1: 61.7 },
];

for (const c of checks) {
  if (!c.date) {
    try {
      const dates = (await api(`/api/projects/${c.id}/data-dates`)).data.dates || [];
      const may = dates.filter((d) => String(d).startsWith('2026-05'));
      console.log(c.label, 'may dates', may.join(',') || 'none', 'first', dates[0]);
      if (may.length) {
        const day = may[may.length - 1];
        const stats = await api('/api/conversations/stats', { project_id: c.id, start_date: day, end_date: day });
        console.log(c.label, day, 'mention', stats.data.brand_mention_rate, 'expect', c.expect);
      }
    } catch (e) {
      console.log(c.label, e.message);
    }
    continue;
  }
  const top3 = await api('/api/competitors/top-mention-rate', {
    project_id: c.id, start_date: c.date, end_date: c.date, top_type: 'top3',
  });
  const top1 = await api('/api/competitors/top-mention-rate', {
    project_id: c.id, start_date: c.date, end_date: c.date, top_type: 'top1',
  });
  console.log(c.label, 'top1', top1.data.self_selected_top_mention_rate, 'expect', c.expectTop1, 'top3', top3.data.self_selected_top_mention_rate);
}

const dest = path.join(root, 'src/data/platformCoreSep.json');
writeFileSync(dest, JSON.stringify(out, null, 2));
console.log('wrote', dest);
if (!existsSync(dest)) process.exit(1);
