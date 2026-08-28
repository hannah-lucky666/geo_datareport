#!/usr/bin/env node
/**
 * 采集美素佳儿源悦(项目 535) 报告所需的补充数据：
 *   · 情感分析（sentiments/stats）
 *   · Top1 提及率完整排名（含本品名次）
 *   · 分平台词条明细（platform_entries）
 * 输出：src/data/yuanyue_extra.json
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const envPath = path.join(root, '.env');
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
const PROJECT_ID = 535;
const BEFORE_DATE = '2026-08-12';
const AUGUST_DATE = '2026-08-28';

let cookie = '';

async function api(pathname, params = {}) {
  const url = new URL(pathname, API_BASE);
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined && v !== null && v !== '') url.searchParams.set(k, String(v));
  }
  const res = await fetch(url, { headers: { cookie } });
  const json = await res.json();
  if (!json.ok) throw new Error(`${pathname} ${JSON.stringify(json).slice(0, 300)}`);
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

const fmtRate = (v) => (v == null || v === '' ? '--' : `${Number(v).toFixed(1)}%`);
const fmtPos = (v) => (v == null || v === '' ? '--' : `NO. ${Number(v).toFixed(1)}`);
const fmtDate = (v) => {
  if (!v) return '--';
  const d = new Date(v);
  if (Number.isNaN(d.getTime())) return String(v).slice(0, 10).replace(/-/g, '/');
  return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;
};

await login();

const out = { project_id: PROJECT_ID, before_date: BEFORE_DATE, august_date: AUGUST_DATE };

for (const [key, date] of [['before', BEFORE_DATE], ['august', AUGUST_DATE]]) {
  const range = { project_id: PROJECT_ID, start_date: date, end_date: date };

  let sentiments = null;
  try {
    sentiments = (await api('/api/sentiments/stats', range)).data;
  } catch (e) {
    console.warn(`sentiments ${date} 不可用: ${e.message}`);
  }

  let top1 = null;
  try {
    top1 = (await api('/api/competitors/top-mention-rate', { ...range, top_type: 'top1' })).data;
  } catch (e) {
    console.warn(`top1 ${date} 不可用: ${e.message}`);
  }

  out[key] = {
    date,
    sentiments,
    top1_list: (top1?.list || []).map((b) => ({
      rank: b.rank,
      name: b.display_name || b.brand_name,
      rate: b.selected_top_mention_rate == null ? null : Number(b.selected_top_mention_rate),
      is_target: !!(b.is_self ?? b.is_target),
    })),
  };
  console.log(`${key} (${date}) 情感=${sentiments ? 'ok' : '-'} top1条数=${out[key].top1_list.length}`);
}

// 分平台词条明细（取 8/28 单日）
const platforms = (await api('/api/platforms', { project_id: PROJECT_ID })).data;
out.platforms = platforms.map((p) => ({ id: p.id, name: p.name, url: p.url || null }));
out.platform_entries = {};
for (const pl of platforms) {
  const entries = await api('/api/entries', {
    project_id: PROJECT_ID,
    start_date: AUGUST_DATE,
    end_date: AUGUST_DATE,
    page: 1,
    page_size: 200,
    sort_by: 'mention_rate',
    sort_order: 'desc',
    platform_ids: pl.id,
  });
  out.platform_entries[String(pl.id)] = (entries.data.list || []).map((e) => ({
    entry_name: e.entry_name,
    mention_rate: fmtRate(e.mention_rate),
    position: fmtPos(e.position),
    last_conversation_time: fmtDate(e.last_conversation_time),
    last_screenshot_url: e.last_screenshot_url || null,
  }));
  console.log(`platform ${pl.id}(${pl.name}): ${out.platform_entries[String(pl.id)].length} 条`);
}

writeFileSync(path.join(root, 'src/data/yuanyue_extra.json'), JSON.stringify(out, null, 2), 'utf-8');
console.log('已写入 src/data/yuanyue_extra.json');
