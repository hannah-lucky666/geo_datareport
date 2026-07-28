#!/usr/bin/env node
/**
 * 按古井贡分支同款结构生成 src/data/platform_entries.json
 * 键：projectId -> platformId -> entries[]
 * 必须用 platform_ids（复数）拉单平台数据
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
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

function fmtRate(v) {
  if (v == null || v === '') return '--';
  const n = Number(v);
  return Number.isFinite(n) ? `${n.toFixed(1)}%` : String(v);
}

function fmtPos(v) {
  if (v == null || v === '') return '--';
  const n = Number(v);
  return Number.isFinite(n) ? `NO. ${n.toFixed(1)}` : String(v);
}

function fmtDate(v) {
  if (!v) return '--';
  const d = new Date(v);
  if (Number.isNaN(d.getTime())) return String(v).slice(0, 10).replace(/-/g, '/');
  return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;
}

const PROJECTS = [125, 126, 127]; // 劲酒 / 毛铺 / 养生一号
const DATE = '2026-07-23';

await login();
const out = {};

for (const projectId of PROJECTS) {
  const platforms = (await api('/api/platforms', { project_id: projectId })).data;
  out[String(projectId)] = {};
  for (const pl of platforms) {
    const entries = await api('/api/entries', {
      project_id: projectId,
      start_date: DATE,
      end_date: DATE,
      page: 1,
      page_size: 100,
      sort_by: 'mention_rate',
      sort_order: 'desc',
      // 必须用 platform_ids（复数）才能拿到单平台口径
      platform_ids: pl.id,
    });
    const list = (entries.data.list || []).map((e) => ({
      entry_name: e.entry_name,
      mention_rate: fmtRate(e.mention_rate),
      position: fmtPos(e.position),
      last_conversation_time: fmtDate(e.last_conversation_time),
      last_screenshot_url: e.last_screenshot_url || null,
    }));
    out[String(projectId)][String(pl.id)] = list;
    console.log(`project ${projectId} platform ${pl.id}(${pl.name}): ${list.length}`);
    list.slice(0, 3).forEach((e, i) => console.log(`  ${i + 1}. ${e.mention_rate} ${e.position} ${e.entry_name}`));
  }
}

const outPath = path.join(root, 'src/data/platform_entries.json');
mkdirSync(path.dirname(outPath), { recursive: true });
writeFileSync(outPath, JSON.stringify(out, null, 2), 'utf-8');
console.log('wrote', outPath);
