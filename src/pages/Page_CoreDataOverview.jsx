import React from 'react';

export default function Page_CoreDataOverview() {
  return (
    <div className="w-full h-full flex flex-col px-12 sm:px-16 pt-[30px] pb-12 text-zinc-800 font-sans justify-between overflow-hidden bg-white">
      {/* Title Area */}
      <div className="flex items-center shrink-0">
        <div className="w-2 h-10 bg-[#004CE5] rounded-full shadow-[0_0_15px_rgba(0,76,229,0.25)]" />
        <h1 className="text-4xl font-black text-zinc-900 tracking-wider ml-4">
          核心数据总览 <span className="text-2xl font-bold text-zinc-400 ml-4">（2026年6月）</span>
        </h1>
      </div>

      {/* 1. Top Section: Decorative Data Remark */}
      <div className="rounded-xl border border-zinc-200 bg-slate-50/40 py-6 px-8 shrink-0">
        <p className="text-[1.35rem] leading-relaxed text-zinc-500 font-bold">
          本周期共监测 <span className="font-['Montserrat',sans-serif] text-[#004CE5] font-black">48</span> 个关键词条，在 <span className="font-['Montserrat',sans-serif] text-[#004CE5] font-black">3</span> 个平台完成 <span className="font-['Montserrat',sans-serif] text-[#004CE5] font-black">30</span> 天连续查询，合计执行查询 <span className="font-['Montserrat',sans-serif] text-[#004CE5] font-black">3,906</span> 次，抓取并识别引用文章 <span className="font-['Montserrat',sans-serif] text-[#004CE5] font-black">35,207</span> 篇，同期识别竞品品牌 <span className="font-['Montserrat',sans-serif] text-[#004CE5] font-black">191</span> 家，截图覆盖率达 <span className="font-['Montserrat',sans-serif] text-[#004CE5] font-black">100%</span>。各项数据指标均在预期执行范围内，整体运行稳定。
        </p>
      </div>

      {/* 2. Middle Section: Consolidated Table (Embellished with Theme Blue) */}
      <div className="rounded-2xl border border-zinc-300 bg-white shadow-[0_4px_30px_rgba(0,0,0,0.015)] overflow-hidden shrink-0">
        <table className="w-full text-left border-collapse table-fixed">
          <thead>
            <tr className="text-white">
              <th rowSpan={2} className="py-5 px-8 text-2xl font-black text-center w-[22%] bg-zinc-800 border-r border-white/10">产品</th>
              <th colSpan={2} className="py-4 px-8 text-2xl font-black text-center border-l border-white/10 bg-[#004CE5]">提及率</th>
              <th colSpan={2} className="py-4 px-8 text-2xl font-black text-center border-l border-white/10 bg-[#1A62E5]">平均提及位次</th>
              <th colSpan={2} className="py-4 px-8 text-2xl font-black text-center border-l border-white/10 bg-[#2E75FF]">竞品排名</th>
            </tr>
            <tr className="bg-slate-50/80 border-b border-zinc-200 text-[#004CE5] font-black text-2xl">
              <th className="py-2.5 px-4 text-center border-l border-zinc-200 w-[13%]">5月</th>
              <th className="py-2.5 px-4 text-center border-l border-zinc-200 border-r-2 border-[#004CE5]/15 w-[13%]">6月</th>
              <th className="py-2.5 px-4 text-center border-l border-zinc-200 w-[13%]">5月</th>
              <th className="py-2.5 px-4 text-center border-l border-zinc-200 border-r-2 border-[#004CE5]/15 w-[13%]">6月</th>
              <th className="py-2.5 px-4 text-center border-l border-zinc-200 w-[13%]">5月</th>
              <th className="py-2.5 px-4 text-center border-l border-zinc-200 border-r-2 border-[#004CE5]/15 w-[13%]">6月</th>
            </tr>
          </thead>
          <tbody>
            {/* Product 1: 菜鸟 */}
            <tr className="border-b border-zinc-200 bg-white hover:bg-slate-50/20 transition-colors">
              <td className="py-5 px-8 border-r border-zinc-200 bg-slate-50/10 text-center font-black text-2xl text-zinc-800">
                菜鸟
              </td>
              <td className="py-5 px-4 text-center border-r border-zinc-200 text-4xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">85.5%</td>
              <td className="py-5 px-4 text-center border-r-2 border-[#004CE5]/15 text-4xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">84.7%</td>
              <td className="py-5 px-4 text-center border-r border-zinc-200 text-4xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">1.3</td>
              <td className="py-5 px-4 text-center border-r-2 border-[#004CE5]/15 text-4xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">1.5</td>
              <td className="py-5 px-4 text-center border-r border-zinc-200 text-4xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">NO. 1</td>
              <td className="py-5 px-4 text-center border-r-2 border-[#004CE5]/15 text-4xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">NO. 1</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 3. Bottom Section: Summary & Strategy Cards (Merged & Spacious) */}
      <div className="grid grid-cols-2 gap-8 shrink-0 h-[300px]">
        {/* Left Card: 现状总结 */}
        <div className="rounded-2xl border border-[#004CE5]/15 bg-[#004CE5]/[0.01] px-8 py-6 flex flex-col shadow-[0_4px_25px_rgba(0,76,229,0.005)]">
          <div className="flex items-center gap-2.5 mb-3 shrink-0">
            <span className="w-3 h-3 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.3)] animate-pulse" />
            <h3 className="text-[26px] font-black text-zinc-900 tracking-wider">现状总结</h3>
          </div>
          <div className="flex-1 flex items-center min-h-0">
            <p className="text-[26px] leading-relaxed text-zinc-700 font-bold">
              本月菜鸟整体表现依然处于绝对领先优势，竞品排名稳居第1。但受大模型回复机制调整影响，6月各项指标相比5月有一定回落（提及率由85.5%降至84.7%，TOP1率由72.8%降至68.8%），平均提及位次维持在 NO. 1.5 的领先位置。
            </p>
          </div>
        </div>

        {/* Right Card: 重点优化策略 */}
        <div className="rounded-2xl border border-emerald-500/15 bg-emerald-500/[0.01] px-8 py-6 flex flex-col shadow-[0_4px_25px_rgba(16,185,129,0.005)]">
          <div className="flex items-center gap-2.5 mb-3 shrink-0">
            <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.3)] animate-pulse" />
            <h3 className="text-[26px] font-black text-zinc-900 tracking-wider">重点优化策略</h3>
          </div>
          <div className="flex-1 flex items-center min-h-0">
            <p className="text-[26px] leading-relaxed text-zinc-700 font-bold">
              目前数据已趋于上限，后续策略重心在于“稳盘”。针对目前排名较低的 DeepSeek 和通义千问大模型，建议在官网发布高质量文章以做防御和拦截（目前两平台最大的引用来源为竞品“快递鸟”官网，占比达34.2%）。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
