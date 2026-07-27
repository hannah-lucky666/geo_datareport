import React from 'react';
import { MonthlyBars } from '../components/HalfYearCharts';

// 半年正面回答占比走势（占位，持续高位）
const POSITIVE_TREND = [86.5, 90.0, 99.3, 99.7, 99.7, 100];

// 半年累计出现的负面词条分布
const distributionData = [
  { keyword: '300-500元左右不易醉的婚宴用酒', type: '品牌认知', summary: '部分反馈提及品牌认知具有区域性，省外知名度较低', badgeClass: 'bg-amber-50 text-amber-600 border border-amber-100' },
  { keyword: '500元左右性价比高婚宴用酒推荐', type: '高端心智', summary: '有反馈指出品牌在500元档的高端心智弱于传统一线品牌', badgeClass: 'bg-amber-50 text-amber-600 border border-amber-100' },
];

export default function Page_ContentAnalysis() {
  return (
    <div className="w-full h-full flex flex-col px-12 sm:px-16 pt-[30px] pb-[36px] text-zinc-900 font-sans bg-white overflow-hidden">
      {/* Title */}
      <div className="flex items-center shrink-0 mb-5">
        <div className="w-2 h-10 bg-[#004CE5] rounded-full shadow-[0_0_15px_rgba(0,76,229,0.25)]" />
        <h1 className="text-4xl font-black text-zinc-900 tracking-wider ml-4">
          古16 半年内容分析总结 <span className="text-2xl font-bold text-zinc-400 ml-4">（2026年1–6月）</span>
        </h1>
      </div>

      <div className="flex-grow flex flex-col justify-between min-h-0">
        {/* Top band: positivity trend + stats */}
        <div className="grid grid-cols-[1.35fr_1fr] gap-6 shrink-0 h-[340px]">
          <div className="rounded-[1.25rem] border border-zinc-200 bg-white shadow-[0_6px_30px_rgba(0,0,0,0.015)] px-6 py-4 flex flex-col">
            <h3 className="text-xl font-black text-zinc-800 shrink-0 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />半年正面回答占比走势
            </h3>
            <div className="flex-1 min-h-0">
              <MonthlyBars values={POSITIVE_TREND} color="#10b981" max={108} fmt={(v) => v.toFixed(1)} unit="%" />
            </div>
          </div>
          <div className="grid grid-rows-2 gap-6">
            <div className="rounded-[1.25rem] bg-emerald-50/70 border border-emerald-500/15 px-6 flex flex-col justify-center">
              <p className="text-base font-bold text-zinc-500">最新正面率 (6月)</p>
              <p className="text-[3rem] font-black text-emerald-600 font-['Montserrat',sans-serif] leading-none mt-1">100%</p>
              <p className="text-[1.05rem] font-bold text-zinc-500 mt-1.5">正面关键词：包装喜庆 · 品牌认可 · 口感普适</p>
            </div>
            <div className="rounded-[1.25rem] bg-rose-50/50 border border-rose-500/12 px-6 flex flex-col justify-center">
              <p className="text-base font-bold text-zinc-500">最新负面率 (6月)</p>
              <p className="text-[3rem] font-black text-rose-500 font-['Montserrat',sans-serif] leading-none mt-1">0%</p>
              <p className="text-[1.05rem] font-bold text-zinc-500 mt-1.5">负面关键词：品牌区域认知</p>
            </div>
          </div>
        </div>

        {/* Negative distribution (half-year cumulative) */}
        <div className="flex flex-col gap-3 shrink-0">
          <h2 className="text-[1.9rem] font-black text-zinc-900 flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-[#004CE5]" />半年负面词条分布（累计）
          </h2>
          <div className="rounded-[1.25rem] border border-zinc-200 bg-white shadow-[0_6px_30px_rgba(0,0,0,0.015)] overflow-hidden h-[260px]">
            <table className="w-full h-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-zinc-200">
                  <th className="py-[14px] px-8 text-[1.3rem] font-bold text-zinc-700 tracking-wider w-[36%]">出现负面的词条</th>
                  <th className="py-[14px] px-8 text-[1.3rem] font-bold text-zinc-700 tracking-wider w-[18%]">负面类型</th>
                  <th className="py-[14px] px-8 text-[1.3rem] font-bold text-zinc-700 tracking-wider">具体问题摘要</th>
                </tr>
              </thead>
              <tbody>
                {distributionData.map((row, idx) => (
                  <tr key={idx} className="border-b border-zinc-100 last:border-none even:bg-slate-50/15">
                    <td className="py-[16px] px-8 text-[1.3rem] font-bold text-zinc-800 align-middle">{row.keyword}</td>
                    <td className="py-[16px] px-8 align-middle">
                      <span className={`inline-block px-3.5 py-1.5 rounded-lg text-[1.1rem] font-extrabold tracking-wide ${row.badgeClass}`}>{row.type}</span>
                    </td>
                    <td className="py-[16px] px-8 text-[1.3rem] font-semibold text-zinc-600 align-middle leading-relaxed">{row.summary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-[1.25rem] border-l-[6px] border-[#004CE5] bg-gradient-to-r from-blue-50/40 via-white to-white py-6 px-8 shadow-[0_6px_20px_rgba(0,76,229,0.015)] shrink-0">
          <h3 className="text-[1.55rem] font-black text-zinc-900 tracking-wider mb-2">下阶段内容优化方向</h3>
          <p className="text-[1.45rem] leading-relaxed text-zinc-700 font-bold">
            半年正面口碑持续稳固，下阶段重点在省外市场增加投放，绑定「全国名酒」「全国性单品」核心心智突破区域认知局限；同时在 500 元档强化「次高端首选」「品质对标一线」的对比评测，提升高端溢价心智。
          </p>
        </div>
      </div>
    </div>
  );
}
