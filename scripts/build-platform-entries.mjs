#!/usr/bin/env node
/**
 * 按古井贡分支同款结构生成 src/data/platform_entries.json
 * 键：projectId -> platformId -> entries[]
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
  const y = d.getFullYear();
  const m = d.getMonth() + 1;
  const day = d.getDate();
  return `${y}/${m}/${day}`;
}

const PROJECTS = [
  { id: 182, date: '2026-07-23' },
  { id: 181, date: '2026-07-23' },
  { id: 239, date: '2026-07-21' }, // 慕思床垫改用 7/21
];

await login();
const out = {};

for (const { id: projectId, date: DATE } of PROJECTS) {
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
      // 注意：必须用 platform_ids（复数）。platform_id 仍返回全平台汇总位次，与数据系统 UI 不一致。
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
    console.log(`project ${projectId} @ ${DATE} platform ${pl.id}(${pl.name}): ${list.length}`);
  }
}

const outPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src/data/platform_entries.json');
writeFileSync(outPath, JSON.stringify(out, null, 2), 'utf-8');
console.log('wrote', outPath);
