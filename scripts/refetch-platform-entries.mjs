#!/usr/bin/env node
/**
 * 用 platform_id（单数，与 GEO ONE 词条页一致）重拉分平台词条
 * 对比并写回 july23_entries_sentiments.json + jinjiuJulyReport.json
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const envPath = path.join(root, '.env');
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, 'utf-8').split(/\r?\n/)) {
    const t = line.trim();
    if (!t || t.startsWith('#')) continue;
    const i = t.indexOf('=');
    if (i === -1) continue;
    const key = t.slice(0, i).trim();
    const val = t.slice(i + 1).trim().replace(/^['"]|['"]$/g, '');
    if (key && val && !process.env[key]) process.env[key] = val;
  }
}

const API_BASE = process.env.GEO_API_BASE;
const USERNAME = process.env.GEO_USER;
const PASSWORD = process.env.GEO_PASS;
let cookie = '';

const PRODUCTS = [
  { id: 125, key: 'jinjiu', name: '劲酒' },
  { id: 126, key: 'maopu', name: '毛铺' },
  { id: 127, key: 'yangsheng', name: '养生一号' },
];
const DATE = '2026-07-23';

async function api(pathname, params = {}) {
  const url = new URL(pathname, API_BASE);
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined && v !== null && v !== '') url.searchParams.set(k, String(v));
  }
  const res = await fetch(url, { headers: { cookie } });
  const json = await res.json();
  if (!json.ok) throw new Error(`${pathname} ${JSON.stringify(json).slice(0, 200)}`);
  return json;
}

async function login() {
  const res = await fetch(new URL('/login', API_BASE), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: USERNAME, password: PASSWORD }),
  });
  const json = await res.json();
  if (!json.ok) throw new Error(`登录失败: ${json.error}`);
  cookie = (res.headers.getSetCookie?.() || [res.headers.get('set-cookie')])
    .filter(Boolean)
    .map((c) => c.split(';')[0])
    .join('; ');
}

const num = (v) => (v === null || v === undefined || v === '' ? null : Number(v));

function mapEntries(list) {
  return (list || []).map((e) => ({
    name: e.entry_name,
    mention_rate: num(e.mention_rate),
    position: num(e.position),
  }));
}

function diff(oldList, newList) {
  const diffs = [];
  const byName = Object.fromEntries((oldList || []).map((e) => [e.name, e]));
  for (const n of newList || []) {
    const o = byName[n.name];
    if (!o) {
      diffs.push(`+ ${n.name}`);
      continue;
    }
    if (o.mention_rate !== n.mention_rate || o.position !== n.position) {
      diffs.push(`${n.name}: ${o.mention_rate}/${o.position} -> ${n.mention_rate}/${n.position}`);
    }
  }
  return diffs;
}

await login();
console.log('API_BASE', API_BASE, 'USER', USERNAME);

const existing = JSON.parse(readFileSync(path.join(root, 'src/data/july23_entries_sentiments.json'), 'utf8'));

for (const p of PRODUCTS) {
  const platforms = (await api('/api/platforms', { project_id: p.id })).data;
  console.log(`\n==== ${p.name} (${p.id}) platforms=${platforms.map((x) => x.name).join(',')}`);

  // GEO ONE 词条页分平台过滤用 platform_ids（复数）；platform_id 会返回全平台汇总，不可用
  const entries_by_platform = {};
  for (const pl of platforms) {
    const entries = await api('/api/entries', {
      project_id: p.id,
      start_date: DATE,
      end_date: DATE,
      page: 1,
      page_size: 100,
      sort_by: 'mention_rate',
      sort_order: 'desc',
      platform_ids: String(pl.id),
    });
    entries_by_platform[pl.name] = mapEntries(entries.data.list);
    console.log(`  ${pl.name}: ${entries_by_platform[pl.name].length} 条`);
    entries_by_platform[pl.name].slice(0, 3).forEach((e, i) => {
      console.log(`    ${i + 1}. ${e.mention_rate}% / ${e.position}  ${e.name}`);
    });
  }

  // overall (no platform filter) for entries_all
  const all = await api('/api/entries', {
    project_id: p.id, start_date: DATE, end_date: DATE,
    page: 1, page_size: 100, sort_by: 'mention_rate', sort_order: 'desc',
  });
  existing[p.key].entries_by_platform = entries_by_platform;
  existing[p.key].entries_all = mapEntries(all.data.list);
}

writeFileSync(path.join(root, 'src/data/july23_entries_sentiments.json'), JSON.stringify(existing, null, 2), 'utf8');
console.log('\nupdated july23_entries_sentiments.json');
