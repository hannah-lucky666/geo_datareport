import React from 'react';
import { WeeklyComplianceBoard } from '../components/HalfYearCharts';

// 半年逐周达标数据（古20，1-6月共 26 周；达标词条数由 10 升至 14）—— 占位
const WEEKLY_DATA = [
  { label: '1月', weeks: 4, hit: 4, keywords: 10 },
  { label: '2月', weeks: 4, hit: 4, keywords: 11 },
  { label: '3月', weeks: 5, hit: 5, keywords: 11 },
  { label: '4月', weeks: 4, hit: 4, keywords: 12 },
  { label: '5月', weeks: 4, hit: 4, keywords: 13 },
  { label: '6月', weeks: 5, hit: 5, keywords: 14 },
];

export default function Page_KpiAcceptance_AI() {
  const totalWeeks = WEEKLY_DATA.reduce((s, m) => s + m.weeks, 0);
  const hitWeeks = WEEKLY_DATA.reduce((s, m) => s + m.hit, 0);

  return (
    <div className="w-full h-full flex flex-col px-12 sm:px-16 pt-[22px] pb-6 text-zinc-900 font-sans">
      {/* Title */}
      <div className="flex items-center gap-3 mb-4 shrink-0">
        <div className="w-2 h-10 bg-[#004CE5] rounded-full shadow-[0_0_12px_rgba(0,76,229,0.2)]" />
        <h1 className="text-4xl font-black text-zinc-900 tracking-wider">
          古20 KPI验收 <span className="text-2xl font-bold text-zinc-400 ml-3">（2026年1–6月）</span>
        </h1>
      </div>

      {/* Hero stat band */}
      <div className="grid grid-cols-4 gap-5 shrink-0 mb-4">
        <div className="rounded-2xl bg-[#004CE5] text-white px-6 py-4 flex flex-col justify-center shadow-[0_8px_25px_rgba(0,76,229,0.18)]">
          <p className="text-sm font-black uppercase tracking-widest text-white/70 font-['Montserrat']">STREAK</p>
          <p className="mt-1 leading-none">
            <span className="text-5xl font-black font-['Montserrat',sans-serif]">{hitWeeks}</span>
            <span className="text-2xl font-black ml-1">/ {totalWeeks} 周</span>
          </p>
          <p className="text-base font-bold text-white/80 mt-1.5">连续达标 · 零中断</p>
        </div>
        <div className="rounded-2xl bg-emerald-50 border border-emerald-500/20 px-6 py-4 flex flex-col justify-center">
          <p className="text-sm font-black uppercase tracking-widest text-emerald-600/70 font-['Montserrat']">达标率</p>
          <p className="mt-1 text-5xl font-black text-emerald-600 font-['Montserrat',sans-serif] leading-none">100%</p>
          <p className="text-base font-bold text-zinc-500 mt-1.5">6个月每周验收全通过</p>
        </div>
        <div className="rounded-2xl bg-slate-50 border border-zinc-200/80 px-6 py-4 flex flex-col justify-center">
          <p className="text-sm font-black uppercase tracking-widest text-zinc-400 font-['Montserrat']">达标词条</p>
          <p className="mt-1 text-4xl font-black text-zinc-800 font-['Montserrat',sans-serif] leading-none">
            10 <span className="text-2xl text-zinc-400">→</span> 14
          </p>
          <p className="text-base font-bold text-zinc-500 mt-1.5">半年达标词条数持续爬升</p>
        </div>
        <div className="rounded-2xl bg-slate-50 border border-zinc-200/80 px-6 py-4 flex flex-col justify-center">
          <p className="text-sm font-black uppercase tracking-widest text-zinc-400 font-['Montserrat']">验收标准</p>
          <p className="mt-1 text-[1.35rem] font-black text-zinc-800 leading-tight">提及率 ≥ 65%</p>
          <p className="text-base font-bold text-zinc-500 mt-0.5">每周验收 · 至少 10 词条达标</p>
        </div>
      </div>

      {/* Main: half-year weekly compliance board */}
      <div className="flex-1 min-h-0 flex flex-col">
        <div className="flex items-center justify-between shrink-0 mb-2.5">
          <h2 className="text-2xl font-black text-zinc-900 flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5]" />
            半年逐周达标看板
          </h2>
          <span className="text-base font-bold text-zinc-400">绿色 = 当周达标（提及率 ≥ 65% 且 ≥ 10 词条）</span>
        </div>
        <div className="flex-1 min-h-0">
          <WeeklyComplianceBoard data={WEEKLY_DATA} total={14} />
        </div>
      </div>
    </div>
  );
}
