#!/usr/bin/env node
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

const loginRes = await fetch(new URL('/login', API_BASE), {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ username: process.env.GEO_USER, password: process.env.GEO_PASS }),
});
cookie = (loginRes.headers.getSetCookie?.() || [loginRes.headers.get('set-cookie')])
  .filter(Boolean)
  .map((c) => c.split(';')[0])
  .join('; ');

const sent = await api('/api/sentiments/stats', {
  project_id: 239,
  start_date: '2026-07-21',
  end_date: '2026-07-21',
});
console.log(JSON.stringify(sent.data, null, 2));

const file = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src/data/july23_entries_sentiments.json');
const data = JSON.parse(readFileSync(file, 'utf8'));
data.mattress.sentiments = sent.data;
writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
console.log('updated mattress sentiments in july23_entries_sentiments.json');
