#!/usr/bin/env node
/**
 * 拉取劲牌三产品指定单日的情感分析 + 分平台词条明细
 * 用法: node scripts/fetch-entries-sentiments.mjs --date 2026-08-27 --out src/data/aug27_entries_sentiments.json
 */
import { writeFileSync, existsSync, readFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const envPath = path.join(root, '.env');
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, 'utf-8').split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const i = trimmed.indexOf('=');
    if (i === -1) continue;
    const key = trimmed.slice(0, i).trim();
    const val = trimmed.slice(i + 1).trim().replace(/^['"]|['"]$/g, '');
    if (key && val && !process.env[key]) process.env[key] = val;
  }
}

const args = process.argv.slice(2);
const getFlag = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i !== -1 ? args[i + 1] : fallback;
};

const API_BASE = process.env.GEO_API_BASE;
const USERNAME = process.env.GEO_USER;
const PASSWORD = process.env.GEO_PASS;
const DATE = getFlag('date', '2026-08-27');
const OUT = getFlag('out', 'src/data/aug27_entries_sentiments.json');

const PRODUCTS = [
  { id: 125, key: 'jinjiu', name: '劲酒' },
  { id: 126, key: 'maopu', name: '毛铺' },
  { id: 127, key: 'yangsheng', name: '养生一号' },
];

let cookie = '';
const num = (v) => (v === null || v === undefined || v === '' ? null : Number(v));

async function api(pathname, params = {}) {
  const url = new URL(pathname, API_BASE);
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined && v !== null && v !== '') url.searchParams.set(k, String(v));
  }
  const res = await fetch(url, { headers: { cookie } });
  const json = await res.json();
  if (!json.ok) throw new Error(`${pathname} 失败: ${json.error || res.status}`);
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

function mapEntries(list) {
  return (list || []).map((e) => ({
    name: e.entry_name,
    mention_rate: num(e.mention_rate),
    position: num(e.position),
  }));
}

async function fetchProduct(p) {
  const range = { project_id: p.id, start_date: DATE, end_date: DATE };
  const platforms = (await api('/api/platforms', { project_id: p.id })).data;
  const [sentiments, entriesAll, negAnswers] = await Promise.all([
    api('/api/sentiments/stats', range),
    api('/api/entries', { ...range, page: 1, page_size: 100, sort_by: 'mention_rate', sort_order: 'desc' }),
    api('/api/sentiments/negative-answers', { ...range, page: 1, page_size: 20 }).catch(() => ({ data: { list: [] } })),
  ]);

  const entries_by_platform = {};
  for (const pl of platforms) {
    // 必须用 platform_ids（复数）。platform_id 单数会返回全平台汇总，各平台数据会变成一样
    const entries = await api('/api/entries', {
      ...range,
      page: 1,
      page_size: 100,
      sort_by: 'mention_rate',
      sort_order: 'desc',
      platform_ids: String(pl.id),
    });
    entries_by_platform[pl.name] = mapEntries(entries.data.list);
  }

  const s = sentiments.data || {};
  return {
    project_id: p.id,
    date: DATE,
    sentiments: {
      positive_rate: num(s.positive_percentage ?? s.positive_rate),
      positive_percentage: num(s.positive_percentage ?? s.positive_rate),
      negative_percentage: num(s.negative_percentage ?? s.negative_rate),
      positive_keywords: s.positive_keywords || s.positive_keyword_list || [],
      negative_keywords: s.negative_keywords || s.negative_keyword_list || [],
      daily_stats: s.daily_stats || [],
    },
    negative_answers: (negAnswers.data?.list || []).slice(0, 5).map((a) => ({
      entry: a.entry_name || a.keyword || a.query || '-',
      type: a.negative_type || a.type || '负面回答',
      summary: a.summary || a.content || a.answer_snippet || a.problem || '-',
    })),
    entries_all: mapEntries(entriesAll.data.list),
    entries_by_platform,
  };
}

async function main() {
  await login();
  const out = {};
  for (const p of PRODUCTS) {
    console.log(`拉取 ${p.name} (${p.id}) @ ${DATE} ...`);
    out[p.key] = await fetchProduct(p);
    const plats = Object.keys(out[p.key].entries_by_platform);
    const counts = plats.map((n) => out[p.key].entries_by_platform[n].length);
    console.log(`  platforms=${plats.join(',')} counts=${counts.join(',')}`);
    console.log(`  sentiments +${out[p.key].sentiments.positive_percentage}% / -${out[p.key].sentiments.negative_percentage}%`);
    console.log(`  negative_answers=${out[p.key].negative_answers.length}`);
  }
  const outPath = path.resolve(root, OUT);
  mkdirSync(path.dirname(outPath), { recursive: true });
  writeFileSync(outPath, JSON.stringify(out, null, 2), 'utf-8');
  console.log('已写入', outPath);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
