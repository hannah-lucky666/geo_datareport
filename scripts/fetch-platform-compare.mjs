#!/usr/bin/env node
/**
 * 按平台拉取竞品对比（提及率 / 位次 / Top1），写入 src/data/platform_compare.json
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const envPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../.env');
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, 'utf-8').split('\n')) {
    const t = line.trim();
    if (!t || t.startsWith('#')) continue;
    const i = t.indexOf('=');
    const key = t.slice(0, i).trim();
    const val = t.slice(i + 1).trim().replace(/^['"]|['"]$/g, '');
    if (key && val && !process.env[key]) process.env[key] = val;
  }
}

const API_BASE = process.env.GEO_API_BASE;
let cookie = '';

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
    body: JSON.stringify({ username: process.env.GEO_USER, password: process.env.GEO_PASS }),
  });
  const json = await res.json();
  if (!json.ok) throw new Error(`登录失败: ${json.error}`);
  cookie = (res.headers.getSetCookie?.() || [res.headers.get('set-cookie')])
    .filter(Boolean)
    .map((c) => c.split(';')[0])
    .join('; ');
}

const pct = (v) => (v == null ? null : Number(v));
const PRODUCTS = [
  { id: 392, key: 'smart', name: '慕思智能床' },
  { id: 391, key: 'ai', name: '慕思AI床垫' },
  { id: 393, key: 'mattress', name: '慕思床垫' },
];
const DATE = '2026-07-30';

await login();
const out = { meta: { date: DATE, fetched_at: new Date().toISOString() }, products: {} };

for (const p of PRODUCTS) {
  const platforms = (await api('/api/platforms', { project_id: p.id })).data;
  const byPlatform = {};
  for (const pl of platforms) {
    const range = {
      project_id: p.id,
      start_date: DATE,
      end_date: DATE,
      platform_ids: pl.id,
    };
    const [compare, top1Res, stats] = await Promise.all([
      api('/api/competitors/compare', range),
      api('/api/competitors/top-mention-rate', { ...range, top_type: 'top1' }).catch(() => null),
      api('/api/conversations/stats', range),
    ]);

    const mention = (compare.data.mention_rate_ranking || []).slice(0, 5).map((b, idx) => ({
      rank: idx + 1,
      name: b.display_name || b.brand_name,
      value: pct(b.mention_rate),
      is_target: !!b.is_target,
    }));
    const position = (compare.data.position_ranking || []).slice(0, 5).map((b, idx) => ({
      rank: idx + 1,
      name: b.display_name || b.brand_name,
      value: pct(b.avg_position),
      is_target: !!b.is_target,
    }));
    const top1List = top1Res?.data?.list || top1Res?.data?.ranking || [];
    const top1 = top1List.slice(0, 5).map((b, idx) => ({
      rank: b.rank ?? idx + 1,
      name: b.brand_name || b.display_name,
      value: pct(b.top1_mention_rate ?? b.mention_rate ?? b.rate),
      is_target: !!b.is_target,
    }));

    byPlatform[String(pl.id)] = {
      platform_id: pl.id,
      platform_name: pl.name === 'kimi' ? 'Kimi' : pl.name,
      platform_logo: pl.url || null,
      self: {
        mention_rate: pct(stats.data.brand_mention_rate),
        avg_position: pct(stats.data.avg_position),
      },
      mention_rate: mention,
      top1,
      position,
    };
    console.log(
      `${p.key} ${pl.name}: self ${stats.data.brand_mention_rate}% / top ${mention.map((m) => `${m.name}:${m.value}`).join(', ')}`
    );
  }
  out.products[p.key] = { project_id: p.id, name: p.name, platforms: byPlatform };
}

const outPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src/data/platform_compare.json');
writeFileSync(outPath, JSON.stringify(out, null, 2), 'utf8');
console.log('wrote', outPath);
