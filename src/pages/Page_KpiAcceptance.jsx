import React from 'react';

function MonthBadge({ label }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <span className="text-[17px] font-black text-zinc-400 mb-2 font-sans">{label}</span>
      <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-500/20 text-emerald-600 font-black text-[19px] shadow-[0_2px_8px_rgba(16,185,129,0.04)]">
        <svg className="w-5.5 h-5.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        达标
      </span>
    </div>
  );
}

export default function Page_KpiAcceptance() {
  return (
    <div className="w-full h-full flex flex-col px-12 sm:px-16 pt-6 pb-6 text-zinc-900 font-sans justify-start gap-5 overflow-hidden bg-white">
      {/* Title */}
      <div className="flex items-center shrink-0">
        <div className="w-2.5 h-9 bg-[#004CE5] rounded-full shadow-[0_0_12px_rgba(0,76,229,0.2)]" />
        <h1 className="text-4xl font-black text-zinc-900 tracking-wider ml-4">
          KPI 达标验收汇总 <span className="text-2xl font-bold text-zinc-400 ml-4">（2026年1–6月）</span>
        </h1>
      </div>

      {/* Hero Stats - More compact and tight */}
      <div className="grid grid-cols-3 gap-5 shrink-0">
        <div className="rounded-2xl border border-zinc-200 bg-slate-50/40 px-6 py-4 flex flex-col justify-center">
          <span className="text-xs font-extrabold text-zinc-400 uppercase tracking-widest font-['Montserrat']">周期判定</span>
          <p className="mt-1 leading-none text-zinc-900">
            <span className="text-4xl font-black font-['Montserrat',sans-serif]">26</span>
            <span className="text-xl font-black ml-1">/ 26 周</span>
          </p>
          <p className="text-[16px] font-bold text-zinc-500 mt-1">全周期每周判定，无中断</p>
        </div>

        <div className="rounded-2xl border border-[#004CE5]/15 bg-[#004CE5]/[0.01] px-6 py-4 flex flex-col justify-center">
          <span className="text-xs font-extrabold text-[#004CE5]/70 uppercase tracking-widest font-['Montserrat']">总体达成率</span>
          <p className="mt-1 text-4xl font-black text-[#004CE5] font-['Montserrat',sans-serif] leading-none">100%</p>
          <p className="text-[16px] font-bold text-zinc-500 mt-1">双单品均实现 100% 验收达标</p>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-slate-50/40 px-6 py-4 flex flex-col justify-center">
          <span className="text-xs font-extrabold text-zinc-400 uppercase tracking-widest font-['Montserrat']">验收判定标准</span>
          <p className="mt-1 text-[21px] font-black text-zinc-800 leading-tight">
            古16 ≥ 70% | 古20 ≥ 65%
          </p>
          <p className="text-[16px] font-bold text-zinc-500 mt-1">单周达标词条数均 ≥ 10个</p>
        </div>
      </div>

      {/* Product 1: 古16 Card */}
      <div className="rounded-2xl border border-zinc-200 bg-white p-5 flex items-center shadow-sm shrink-0 h-[155px]">
        {/* Left Info */}
        <div className="w-[22%] border-r border-zinc-150 pr-5 flex flex-col justify-center h-full">
          <h3 className="text-[25px] font-black text-zinc-900 leading-tight">古井贡酒古16</h3>
          <p className="text-[16px] font-bold text-[#004CE5] mt-1.5 bg-[#004CE5]/5 px-2.5 py-0.5 rounded-md inline-block w-fit">
            标准：提及率 ≥ 70%
          </p>
        </div>
        {/* Right Months */}
        <div className="flex-1 pl-6 flex items-center justify-around h-full">
          <MonthBadge label="1月" />
          <MonthBadge label="2月" />
          <MonthBadge label="3月" />
          <MonthBadge label="4月" />
          <MonthBadge label="5月" />
          <MonthBadge label="6月" />
        </div>
      </div>

      {/* Product 2: 古20 Card */}
      <div className="rounded-2xl border border-zinc-200 bg-white p-5 flex items-center shadow-sm shrink-0 h-[155px]">
        {/* Left Info */}
        <div className="w-[22%] border-r border-zinc-150 pr-5 flex flex-col justify-center h-full">
          <h3 className="text-[25px] font-black text-zinc-900 leading-tight">古井贡酒古20</h3>
          <p className="text-[16px] font-bold text-[#004CE5] mt-1.5 bg-[#004CE5]/5 px-2.5 py-0.5 rounded-md inline-block w-fit">
            标准：提及率 ≥ 65%
          </p>
        </div>
        {/* Right Months */}
        <div className="flex-1 pl-6 flex items-center justify-around h-full">
          <MonthBadge label="1月" />
          <MonthBadge label="2月" />
          <MonthBadge label="3月" />
          <MonthBadge label="4月" />
          <MonthBadge label="5月" />
          <MonthBadge label="6月" />
        </div>
      </div>
    </div>
  );
}
