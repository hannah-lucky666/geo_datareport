#!/usr/bin/env node
/**
 * 拉取 8 月（jiming 账号 / P182 智能床、P181 AI床垫、P239 床垫）的两类补充数据：
 *   1. src/data/aug28_sentiments.json     —— 情感占比与正负面标签（内容分析页）
 *   2. src/data/platform_entries.json     —— 逐平台词条明细（词条数据明细页）
 * 词条明细必须用 platform_ids（复数）过滤，platform_id 会返回全平台汇总位次。
 */
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const API_BASE = process.env.GEO_API_BASE || 'https://api.geotopone.com';
const USERNAME = process.env.GEO_USER || 'jiming';
const PASSWORD = process.env.GEO_PASS || '123456';
const DATE = '2026-08-28';

const PROJECTS = [
  { id: 182, key: 'smart', name: '慕思智能床' },
  { id: 181, key: 'ai', name: '慕思AI床垫' },
  { id: 239, key: 'mattress', name: '慕思床垫' },
];

let cookie = '';

async function api(pathname, params = {}) {
  const url = new URL(pathname, API_BASE);
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined && v !== null && v !== '') url.searchParams.set(k, String(v));
  }
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const res = await fetch(url, { headers: { cookie } });
      const json = await res.json();
      if (!json.ok) throw new Error(`${pathname} 请求失败: ${json.error || res.status}`);
      return json;
    } catch (err) {
      if (attempt === 3) throw err;
      await new Promise((r) => setTimeout(r, 800 * attempt));
    }
  }
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
  return json.user;
}

// 接口返回的标签可能是字符串，也可能是 { tag_name, tag_name_zh }
const tagText = (t) => (typeof t === 'string' ? t : t?.tag_name_zh || t?.tag_name || '');

const fmtRate = (v) => {
  if (v == null || v === '') return '--';
  const n = Number(v);
  return Number.isFinite(n) ? `${n.toFixed(1)}%` : String(v);
};

const fmtPos = (v) => {
  if (v == null || v === '') return '--';
  const n = Number(v);
  return Number.isFinite(n) ? `NO. ${n.toFixed(1)}` : String(v);
};

const fmtDate = (v) => {
  if (!v) return '--';
  const d = new Date(v);
  if (Number.isNaN(d.getTime())) return String(v).slice(0, 10).replace(/-/g, '/');
  return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;
};

const user = await login();
console.log(`已登录: ${user.name} (${user.company_name}) / 数据日期 ${DATE}`);

const sentiments = {};
const platformEntries = {};

for (const p of PROJECTS) {
  const range = { project_id: p.id, start_date: DATE, end_date: DATE };

  const sent = (await api('/api/sentiments/stats', range)).data;
  sentiments[p.key] = {
    project_id: p.id,
    name: p.name,
    date: DATE,
    positive_percentage: sent.positive_percentage,
    negative_percentage: sent.negative_percentage,
    positive_keywords: (sent.positive_keywords || []).map(tagText).filter(Boolean),
    negative_keywords: (sent.negative_keywords || []).map(tagText).filter(Boolean),
  };
  console.log(
    `P${p.id} ${p.name} 情感: 正面 ${sent.positive_percentage}% / 负面 ${sent.negative_percentage}%` +
      ` | 负面标签 ${sentiments[p.key].negative_keywords.join('、') || '无'}`
  );

  const platforms = (await api('/api/platforms', { project_id: p.id })).data;
  platformEntries[String(p.id)] = {};
  for (const pl of platforms) {
    const entries = await api('/api/entries', {
      ...range,
      page: 1,
      page_size: 100,
      sort_by: 'mention_rate',
      sort_order: 'desc',
      platform_ids: pl.id,
    });
    platformEntries[String(p.id)][String(pl.id)] = (entries.data.list || []).map((e) => ({
      entry_name: e.entry_name,
      mention_rate: fmtRate(e.mention_rate),
      position: fmtPos(e.position),
      last_conversation_time: fmtDate(e.last_conversation_time),
      last_screenshot_url: e.last_screenshot_url || null,
    }));
    console.log(`  P${p.id} 平台 ${pl.id}(${pl.name}): ${platformEntries[String(p.id)][String(pl.id)].length} 条`);
  }
}

const dir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src/data');
writeFileSync(path.join(dir, 'aug28_sentiments.json'), JSON.stringify(sentiments, null, 2), 'utf-8');
writeFileSync(path.join(dir, 'platform_entries.json'), JSON.stringify(platformEntries, null, 2), 'utf-8');
console.log('\n已写入 src/data/aug28_sentiments.json 与 src/data/platform_entries.json');
