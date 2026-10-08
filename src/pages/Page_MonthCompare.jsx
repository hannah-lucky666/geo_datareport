import React from 'react';
import trend from '../data/musiMonthTrend.json';

const MONTHS = trend.meta.months;

const COPY = {
  smart: {
    title: '慕思智能床核心指标月度对比',
    summary: '提及率从 5月 73.6% 升到 8月 91.1%，9月 86.6%；7月是 89.4%。Top1 5月 40.1%，7月 42.8%，8月 45.6%，9月 37.3%。竞品排名五个月都是 NO.1。',
  },
  ai: {
    title: '慕思AI床垫核心指标月度对比',
    summary: '提及率 7月 90.6%，8月 85.6%，9月 88.9%。Top1 5月 51%，6月 61.7%，7月、8月都是 60%，9月 55%。Top3 从 6月起都在 80% 以上。竞品排名五个月都是 NO.1。',
  },
  mattress: {
    title: '慕思床垫核心指标月度对比',
    summary: '提及率 6月 64.2%，7月 75.8%，8月 83.3%，9月 81.1%。Top1 7月 24.2%，8月 33.3%，9月 22.2%。竞品排名 6月起为 NO.1。',
  },
};

const ROWS = [
  { key: 'mention_rate', label: '提及率', kind: 'pct' },
  { key: 'top1_mention_rate', label: 'Top1 提及率', kind: 'pct' },
  { key: 'top3_mention_rate', label: 'Top3 提及率', kind: 'pct' },
  { key: 'influence_rank', label: '竞品排名', kind: 'rank' },
];

function fmtPct(v) {
  if (v == null) return '—';
  return `${Number(v)}%`;
}

function fmtRank(v) {
  if (v == null) return '—';
  return `NO. ${v}`;
}

export default function Page_MonthCompare({ productKey }) {
  const product = trend.products[productKey];
  const copy = COPY[productKey];

  return (
    <div className="w-full h-full flex flex-col px-12 sm:px-16 pt-[22px] pb-8 text-zinc-800 font-sans overflow-hidden">
      <div className="flex items-center shrink-0 mb-[27px]">
        <div className="w-2 h-10 bg-[#004CE5] rounded-full shadow-[0_0_15px_rgba(0,76,229,0.25)]" />
        <h1 className="text-4xl font-black text-zinc-900 tracking-wider ml-4">
          {copy.title}
          <span className="text-2xl font-bold text-zinc-400 ml-4">（2026年5–9月）</span>
        </h1>
      </div>

      <div className="rounded-2xl border border-zinc-300 bg-white shadow-[0_4px_30px_rgba(0,0,0,0.015)] overflow-hidden flex-1 min-h-0 flex flex-col mb-4">
        <table className="w-full h-full text-left border-collapse table-fixed">
          <thead>
            <tr className="text-white">
              <th className="py-5 px-4 text-2xl font-black text-center w-[18%] bg-zinc-800 border-r border-white/10">指标</th>
              {MONTHS.map((month, i) => (
                <th
                  key={month}
                  className={`py-5 px-2 text-2xl font-black text-center border-l border-white/10 ${i === MONTHS.length - 1 ? 'bg-[#0036B8]' : 'bg-[#004CE5]'}`}
                >
                  {month}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr key={row.key} className="border-b border-zinc-200 bg-white" style={{ height: '25%' }}>
                <td className="px-4 border-r border-zinc-200 bg-slate-50/10 text-center font-black text-2xl text-zinc-800">
                  {row.label}
                </td>
                {product[row.key].map((value, i) => {
                  const missing = value == null;
                  const text = row.kind === 'rank' ? fmtRank(value) : fmtPct(value);
                  const current = i === MONTHS.length - 1;
                  return (
                    <td
                      key={`${row.key}-${i}`}
                      className={`px-2 text-center border-l border-zinc-200 text-3xl font-bold font-['Montserrat',sans-serif] ${
                        missing ? 'text-zinc-300' : 'text-zinc-900'
                      } ${current ? 'border-l-2 border-l-[#004CE5]/20 bg-[#004CE5]/[0.03]' : ''}`}
                    >
                      {text}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="rounded-xl border border-[#004CE5]/20 bg-[#004CE5]/[0.04] px-6 py-3.5 shrink-0 flex items-center gap-5">
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-1.5 h-8 bg-[#004CE5] rounded-full shadow-[0_0_10px_rgba(0,76,229,0.25)]" />
          <h3 className="text-2xl font-black text-[#004CE5] tracking-wider whitespace-nowrap">阶段变化</h3>
        </div>
        <div className="w-px h-10 bg-[#004CE5]/15 shrink-0" />
        <p className="text-[21px] leading-snug text-zinc-700 font-bold min-w-0">{copy.summary}</p>
      </div>
    </div>
  );
}

export function Page_MonthCompareSmart() {
  return <Page_MonthCompare productKey="smart" />;
}

export function Page_MonthCompareAI() {
  return <Page_MonthCompare productKey="ai" />;
}

export function Page_MonthCompareMattress() {
  return <Page_MonthCompare productKey="mattress" />;
}
