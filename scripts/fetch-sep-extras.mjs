#!/usr/bin/env node
/**
 * 拉取 9 月补充数据：
 *   1. src/data/sep19_sentiments.json  —— 情感占比与正负面标签
 *   2. src/data/platform_entries.json  —— 逐平台词条明细
 * 日期按产品分开：智能床 9/21、AI床垫 9/18、床垫 9/23。
 * 床垫的情感指标只统计指定词条分组；词条明细页展示全部词条。
 * 分组口径不写入报告页面文案。
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

const API_BASE = process.env.GEO_API_BASE || 'https://api.geotopone.com';
// 9 月这三份项目在 jiming 账号下；根目录 .env 的 musi 账号没有 P181/P182/P239。
const USERNAME = 'jiming';
const PASSWORD = '123456';
const PROJECTS = [
  { id: 182, key: 'smart', name: '慕思智能床', date: '2026-09-21' },
  { id: 181, key: 'ai', name: '慕思AI床垫', date: '2026-09-18' },
  { id: 239, key: 'mattress', name: '慕思床垫', date: '2026-09-23', group: '前十五' },
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
console.log(`已登录: ${user.name} (${user.company_name})`);

const sentiments = {};
const platformEntries = {};

for (const p of PROJECTS) {
  const range = { project_id: p.id, start_date: p.date, end_date: p.date };
  const detailRange = { ...range };

  if (p.group) {
    const groups = (await api('/api/entry-groups', { project_id: p.id })).data.groups || [];
    const group = groups.find((g) => g.name === p.group || g.name_zh === p.group);
    if (!group) throw new Error(`P${p.id} 未找到分组「${p.group}」`);
    const all = (await api('/api/entries', { ...range, page: 1, page_size: 500 })).data.list || [];
    const members = all.filter((e) => e.group_id === group.id);
    range.entry_ids = members.map((e) => e.entry_id).join(',');
    console.log(`P${p.id} 指标分组 ${group.name}（${members.length} 条），明细展示全部 ${all.length} 条`);
  }

  const sent = (await api('/api/sentiments/stats', range)).data;
  sentiments[p.key] = {
    project_id: p.id,
    name: p.name,
    date: p.date,
    group: p.group || null,
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
      ...detailRange,
      page: 1,
      page_size: 100,
      sort_by: 'mention_rate',
      sort_order: 'desc',
      platform_ids: pl.id,
    });
    platformEntries[String(p.id)][String(pl.id)] = (entries.data.list || []).map((e) => ({
      entry_name: e.entry_name,
      mention_rate: fmtRate(e.mention_rate),
      top1_mention_rate: fmtRate(e.top1_mention_rate),
      last_conversation_time: fmtDate(e.last_conversation_time),
      last_screenshot_url: e.last_screenshot_url || null,
    }));
    console.log(`  P${p.id} 平台 ${pl.id}(${pl.name}): ${platformEntries[String(p.id)][String(pl.id)].length} 条`);
  }
}

const dir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src/data');
writeFileSync(path.join(dir, 'sep19_sentiments.json'), JSON.stringify(sentiments, null, 2), 'utf-8');
writeFileSync(path.join(dir, 'platform_entries.json'), JSON.stringify(platformEntries, null, 2), 'utf-8');
console.log('\n已写入 src/data/sep19_sentiments.json 与 src/data/platform_entries.json');
