import React from 'react';
import trend from '../data/musiMonthTrend.json';

const MONTHS = trend.meta.competitorMonths;

const COPY = {
  smart: {
    title: '慕思智能床竞品月度对比',
    analysis:
      '舒福德四个月都是提及率第二，Top1 也是第二。本品 Top1 与舒福德的差距，6月是 16.7 个百分点（41.1% 对 24.4%），7月是 10.6 个百分点（42.8% 对 32.2%），9月是 8.9 个百分点（37.3% 对 28.4%）。喜临门提及率从 6月 30% 升到 9月 56.7%，9月 Top1 是 3.5%。',
  },
  ai: {
    title: '慕思AI床垫竞品月度对比',
    analysis:
      '本品 Top1 每个月都是第一：6月 61.7%，7月 60%，8月 60%，9月 55%。喜临门提及率 8月、9月升到 73.3% 和 72.8%。HEKA 的 Top1 6月、9月都是 13.3%，7月 4.4%，8月 5%。',
  },
  mattress: {
    title: '慕思床垫竞品月度对比',
    analysis:
      '提及率从 6月 64.2% 升到 7月 75.8%、8月 83.3%，9月 81.1%，仍高于喜临门 68.9%、金可儿 64.4%。Top1 在 8月到 33.3% 后，9月回到 22.2%；当月喜临门以 26.7% 排在 Top1 第一，本品排第二。',
  },
};

function fmtPct(v) {
  if (v == null) return '—';
  return `${Number(v)}%`;
}

function RateCell({ item, edge }) {
  return (
    <td className={`px-1.5 text-center border-l border-zinc-200 ${edge ? 'border-r-2 border-r-[#004CE5]/15' : ''}`}>
      {item ? (
        <div className="flex items-center justify-center gap-2 min-w-0">
          <span className={`truncate text-lg font-black ${item.isTarget ? 'text-[#004CE5]' : 'text-zinc-800'}`}>
            {item.name}
          </span>
          <span className={`shrink-0 text-xl font-bold font-['Montserrat',sans-serif] ${item.isTarget ? 'text-[#004CE5]' : 'text-zinc-900'}`}>
            {fmtPct(item.value)}
          </span>
        </div>
      ) : (
        <span className="text-xl font-bold text-zinc-300">—</span>
      )}
    </td>
  );
}

export default function Page_CompetitorTrend({ productKey }) {
  const copy = COPY[productKey];
  const data = trend.competitors[productKey];
  const rowCount = data.mention[0]?.length || 0;

  return (
    <div className="w-full h-full flex flex-col px-12 sm:px-16 pt-[22px] pb-8 text-zinc-800 font-sans overflow-hidden">
      <div className="flex items-center shrink-0 mb-[27px]">
        <div className="w-2 h-10 bg-[#004CE5] rounded-full shadow-[0_0_15px_rgba(0,76,229,0.25)]" />
        <h1 className="text-4xl font-black text-zinc-900 tracking-wider ml-4">
          {copy.title}
          <span className="text-2xl font-bold text-zinc-400 ml-4">（2026年6–9月）</span>
        </h1>
      </div>

      <div className="rounded-2xl border border-zinc-300 bg-white shadow-[0_4px_30px_rgba(0,0,0,0.015)] overflow-hidden flex-1 min-h-0 flex flex-col mb-4">
        <table className="w-full h-full text-left border-collapse table-fixed">
          <thead>
            <tr className="text-white">
              <th rowSpan={2} className="py-4 px-2 text-2xl font-black text-center w-[8%] bg-zinc-800 border-r border-white/10">名次</th>
              <th colSpan={4} className="py-4 px-2 text-2xl font-black text-center border-l border-white/10 bg-[#004CE5]">提及率前五</th>
              <th colSpan={4} className="py-4 px-2 text-2xl font-black text-center border-l border-white/10 bg-[#1A62E5]">Top1 提及率前五</th>
            </tr>
            <tr className="bg-slate-50/80 border-b border-zinc-200 text-[#004CE5] font-black text-xl">
              {MONTHS.map((month, i) => (
                <th key={`m-${month}`} className={`py-2.5 px-1 text-center border-l border-zinc-200 ${i === MONTHS.length - 1 ? 'border-r-2 border-r-[#004CE5]/15' : ''}`}>
                  {month}
                </th>
              ))}
              {MONTHS.map((month, i) => (
                <th key={`t-${month}`} className={`py-2.5 px-1 text-center border-l border-zinc-200 ${i === MONTHS.length - 1 ? 'border-r-2 border-r-[#004CE5]/15' : ''}`}>
                  {month}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: rowCount }, (_, row) => (
              <tr key={row} className="border-b border-zinc-200 bg-white" style={{ height: `${100 / rowCount}%` }}>
                <td className="px-2 border-r border-zinc-200 bg-slate-50/10 text-center text-2xl font-black text-zinc-800">
                  {row + 1}
                </td>
                {data.mention.map((monthRows, mi) => (
                  <RateCell key={`m-${row}-${mi}`} item={monthRows[row]} edge={mi === MONTHS.length - 1} />
                ))}
                {data.top1.map((monthRows, mi) => (
                  <RateCell key={`t-${row}-${mi}`} item={monthRows[row]} edge={mi === MONTHS.length - 1} />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="rounded-xl border border-[#004CE5]/20 bg-[#004CE5]/[0.04] px-6 py-3.5 shrink-0 flex items-center gap-5">
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-1.5 h-8 bg-[#004CE5] rounded-full shadow-[0_0_10px_rgba(0,76,229,0.25)]" />
          <h3 className="text-2xl font-black text-[#004CE5] tracking-wider whitespace-nowrap">竞品变化</h3>
        </div>
        <div className="w-px h-10 bg-[#004CE5]/15 shrink-0" />
        <p className="text-[21px] leading-snug text-zinc-700 font-bold min-w-0">{copy.analysis}</p>
      </div>
    </div>
  );
}

export function Page_CompetitorTrendSmart() {
  return <Page_CompetitorTrend productKey="smart" />;
}

export function Page_CompetitorTrendAI() {
  return <Page_CompetitorTrend productKey="ai" />;
}

export function Page_CompetitorTrendMattress() {
  return <Page_CompetitorTrend productKey="mattress" />;
}
