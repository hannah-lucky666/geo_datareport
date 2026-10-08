/**
 * 把 5–9 月汇报口径收成 src/data/musiMonthTrend.json。
 * 竞品只保留各月汇报里的前五，不把没进前五的品牌补成 0。
 */
import { readFileSync, writeFileSync } from 'fs';

const load = (f) => JSON.parse(readFileSync(`src/data/${f}`, 'utf8'));

const TARGET = {
  smart: '慕思智能床',
  ai: '慕思AI床垫',
  mattress: '慕思',
};

const FILES = {
  smart: [
    'geoReport_182_2026-06-25.json',
    'geoReport_392_2026-07-30.json',
    'geoReport_182_2026-08-28.json',
    'geoReport_182_2026-09-21.json',
  ],
  ai: [
    'geoReport_181_2026-06-25.json',
    'geoReport_391_2026-07-30.json',
    'geoReport_181_2026-08-28.json',
    'geoReport_181_2026-09-18.json',
  ],
  mattress: [
    null,
    'geoReport_393_2026-07-30.json',
    'geoReport_239_2026-08-28.json',
    'geoReport_239_2026-09-23.json',
  ],
};

const JUNE_MATTRESS = {
  mention_rate: [
    ['慕思', 64.2],
    ['喜临门', 55.8],
    ['雅兰', 52.5],
    ['舒达', 47.5],
    ['丝涟', 46.7],
  ],
  top1_mention_rate: [
    ['慕思', 21.7],
    ['喜临门', 11.7],
    ['TLK', 10],
    ['丝涟', 7.5],
    ['席梦思', 5],
  ],
};

function top5(file, field, targetName) {
  if (!file) {
    return JUNE_MATTRESS[field].map(([name, value], i) => ({
      rank: i + 1,
      name,
      value,
      isTarget: name === targetName,
    }));
  }
  const j = load(file);
  const list = field === 'mention_rate' ? j.compare.mention_rate_ranking : j.compare.top1_ranking;
  const key = field === 'mention_rate' ? 'mention_rate' : 'top1_mention_rate';
  return list.slice(0, 5).map((b, i) => ({
    rank: i + 1,
    name: b.brand_name,
    value: Number(b[key]),
    isTarget: b.brand_name === targetName || !!b.is_target,
  }));
}

const competitors = {};
for (const key of Object.keys(FILES)) {
  competitors[key] = {
    mention: FILES[key].map((f) => top5(f, 'mention_rate', TARGET[key])),
    top1: FILES[key].map((f) => top5(f, 'top1_mention_rate', TARGET[key])),
  };
}

const report = {
  meta: {
    months: ['5月', '6月', '7月', '8月', '9月'],
    competitorMonths: ['6月', '7月', '8月', '9月'],
  },
  products: {
    smart: {
      name: '慕思智能床',
      mention_rate: [73.6, 87.8, 89.4, 91.1, 86.6],
      top1_mention_rate: [null, 41.1, 42.8, 45.6, 37.3],
      top3_mention_rate: [null, 69.4, 76.7, 76.7, 64.2],
      influence_rank: [1, 1, 1, 1, 1],
    },
    ai: {
      name: '慕思AI床垫',
      mention_rate: [82.4, 88.9, 90.6, 85.6, 88.9],
      top1_mention_rate: [null, 61.7, 60, 60, 55],
      top3_mention_rate: [null, 80.6, 81.7, 80.6, 82.2],
      influence_rank: [1, 1, 1, 1, 1],
    },
    mattress: {
      name: '慕思床垫',
      mention_rate: [41.7, 64.2, 75.8, 83.3, 81.1],
      top1_mention_rate: [null, 21.7, 24.2, 33.3, 22.2],
      top3_mention_rate: [null, null, 48.3, 43.3, 37.8],
      influence_rank: [4, 1, 1, 1, 1],
    },
  },
  competitors,
};

writeFileSync('src/data/musiMonthTrend.json', JSON.stringify(report, null, 2));
console.log('wrote musiMonthTrend.json');
