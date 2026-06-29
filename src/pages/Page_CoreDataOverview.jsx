import React from 'react';

export default function Page_CoreDataOverview() {
  return (
    <div className="w-full h-full flex flex-col px-12 sm:px-16 pt-[22px] pb-8 text-zinc-800 font-sans justify-between overflow-hidden">
      {/* Title Area */}
      <div className="flex items-center shrink-0 mb-[27px]">
        <div className="w-2 h-10 bg-[#004CE5] rounded-full shadow-[0_0_15px_rgba(0,76,229,0.25)]" />
        <h1 className="text-4xl font-black text-zinc-900 tracking-wider ml-4">
          核心数据总览 <span className="text-2xl font-bold text-zinc-400 ml-4">（2026年6月）</span>
        </h1>
      </div>

      {/* 1. Top Section: Decorative Data Remark (Replaced metrics cards with a decorative remark area) */}
      <div className="rounded-xl border border-zinc-200 bg-slate-50/40 py-3.5 px-6 shrink-0 mb-4">
        <p className="text-[1.35rem] leading-relaxed text-zinc-500 font-bold">
          本次监测周期共计 <span className="font-['Montserrat',sans-serif] text-[#004CE5] font-black">31</span> 天，覆盖 <span className="font-['Montserrat',sans-serif] text-[#004CE5] font-black">4</span> 个核心AI平台，针对 <span className="font-['Montserrat',sans-serif] text-[#004CE5] font-black">29</span> 个重点监测词条进行累计查询 <span className="font-['Montserrat',sans-serif] text-[#004CE5] font-black">600</span> 次，追踪引用相关问答数据共计 <span className="font-['Montserrat',sans-serif] text-[#004CE5] font-black">5,610</span> 篇次，涉及识别竞品品牌 <span className="font-['Montserrat',sans-serif] text-[#004CE5] font-black">143</span> 家。
        </p>
      </div>

      {/* 2. Middle Section: Consolidated Table (Embellished with Theme Blue) */}
      <div className="rounded-2xl border border-zinc-300 bg-white shadow-[0_4px_30px_rgba(0,0,0,0.015)] overflow-hidden flex-1 min-h-0 flex flex-col mb-[36px]">
        <table className="w-full text-left border-collapse table-fixed flex-1">
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
              <th className="py-2.5 px-4 text-center border-l border-zinc-200 w-[13%]">6月</th>
            </tr>
          </thead>
          <tbody>
            {/* Product 1: 古井贡酒古16 */}
            <tr className="border-b border-zinc-200 bg-white hover:bg-slate-50/20 transition-colors">
              <td className="py-1.5 px-8 border-r border-zinc-200 bg-slate-50/10 text-center font-black text-2xl text-zinc-800">
                古井贡酒古16
              </td>
              <td className="py-1.5 px-4 text-center border-r border-zinc-200 text-4xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">96.0%</td>
              <td className="py-1.5 px-4 text-center border-r-2 border-[#004CE5]/15 text-4xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">96.7%</td>
              <td className="py-1.5 px-4 text-center border-r border-zinc-200 text-4xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">2.0</td>
              <td className="py-1.5 px-4 text-center border-r-2 border-[#004CE5]/15 text-4xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">1.7</td>
              <td className="py-1.5 px-4 text-center border-r border-zinc-200 text-4xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">NO. 1</td>
              <td className="py-1.5 px-4 text-center border-r-2 border-[#004CE5]/15 text-4xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">NO. 1</td>
            </tr>

            {/* Product 2: 古井贡酒古20 */}
            <tr className="border-b border-zinc-200 bg-white hover:bg-slate-50/20 transition-colors">
              <td className="py-1.5 px-8 border-r border-zinc-200 bg-slate-50/10 text-center font-black text-2xl text-zinc-800">
                古井贡酒古20
              </td>
              <td className="py-1.5 px-4 text-center border-r border-zinc-200 text-4xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">88.3%</td>
              <td className="py-1.5 px-4 text-center border-r-2 border-[#004CE5]/15 text-4xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">98.3%</td>
              <td className="py-1.5 px-4 text-center border-r border-zinc-200 text-4xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">4.7</td>
              <td className="py-1.5 px-4 text-center border-r-2 border-[#004CE5]/15 text-4xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">4.8</td>
              <td className="py-1.5 px-4 text-center border-r border-zinc-200 text-4xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">NO. 1</td>
              <td className="py-1.5 px-4 text-center border-r-2 border-[#004CE5]/15 text-4xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">NO. 1</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 3. Bottom Section: Summary & Strategy Cards (Merged & Spacious) */}
      <div className="grid grid-cols-2 gap-6 shrink-0 h-[195px]">
        {/* Left Card: 现状总结 */}
        <div className="rounded-2xl border border-[#004CE5]/15 bg-[#004CE5]/[0.01] px-6 py-4 flex flex-col shadow-[0_4px_25px_rgba(0,76,229,0.005)]">
          <div className="flex items-center gap-2.5 mb-2 shrink-0">
            <span className="w-3 h-3 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.3)] animate-pulse" />
            <h3 className="text-2xl font-black text-zinc-900 tracking-wider">现状总结</h3>
          </div>
          <div className="flex-1 flex items-center min-h-0">
            <p className="text-[24px] leading-snug text-zinc-700 font-bold">
              本月古16与古20表现优异，竞品排名均稳居第1。古16平均提及位次前移至1.7；古20提及率实现10%的大幅增长，达到98.3%，整体在AI生态中具有极强的领先优势与品牌曝光。
            </p>
          </div>
        </div>

        {/* Right Card: 重点优化策略 */}
        <div className="rounded-2xl border border-emerald-500/15 bg-emerald-500/[0.01] px-6 py-4 flex flex-col shadow-[0_4px_25px_rgba(16,185,129,0.005)]">
          <div className="flex items-center gap-2.5 mb-2 shrink-0">
            <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.3)] animate-pulse" />
            <h3 className="text-2xl font-black text-zinc-900 tracking-wider">重点优化策略</h3>
          </div>
          <div className="flex-1 flex items-center min-h-0">
            <p className="text-[24px] leading-snug text-zinc-700 font-bold">
              下阶段古16需继续巩固在核心场景的绝对领先，提升高顺位稳定性；古20需针对提及位次（4.8）进行专项优化，通过丰富消费场景和提升口碑内容质量，进一步提升在AI推荐中的排位。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
