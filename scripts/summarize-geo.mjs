#!/usr/bin/env node
import { readFileSync } from 'fs';

const ids = [182, 181, 239];
const dates = ['2026-06-25', '2026-07-23'];

for (const id of ids) {
  console.log('\n==== PROJECT', id);
  for (const d of dates) {
    const r = JSON.parse(readFileSync(`src/data/geoReport_${id}_${d}.json`, 'utf8'));
    const self = r.influence.list.find((b) => b.is_target);
    const ov = r.overview_daily?.[0];
    console.log(d, 'mention', r.stats.brand_mention_rate, 'avg_pos', r.stats.avg_position, 'rank', self?.rank, 'ov', ov);
    console.log(
      '  mention_rank',
      r.compare.mention_rate_ranking.slice(0, 5).map((b) => `${b.display_name || b.brand_name}:${b.mention_rate}`)
    );
    console.log(
      '  top1_rank',
      r.compare.top1_ranking.slice(0, 5).map((b) => `${b.brand_name}:${b.top1_mention_rate}`)
    );
    console.log(
      '  pos_rank',
      r.compare.position_ranking.slice(0, 5).map((b) => `${b.display_name || b.brand_name}:${b.avg_position}`)
    );
  }
}

const s = JSON.parse(readFileSync('src/data/july23_entries_sentiments.json', 'utf8'));
for (const k of Object.keys(s)) {
  console.log('\nSENT', k, JSON.stringify(s[k].sentiments));
  console.log(
    ' platforms',
    Object.keys(s[k].entries_by_platform),
    'counts',
    Object.values(s[k].entries_by_platform).map((a) => a.length)
  );
}
