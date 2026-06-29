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
          本次监测周期覆盖 <span className="font-['Montserrat',sans-serif] text-[#004CE5] font-black">6</span> 个核心AI平台，针对重点监测词条进行累计查询，追踪引用相关问答数据共计 <span className="font-['Montserrat',sans-serif] text-[#004CE5] font-black">5,412</span> 篇次，整体项目平稳推进。
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
              <th className="py-2.5 px-4 text-center border-l border-zinc-200 border-r-2 border-[#004CE5]/15 w-[13%]">6月</th>
            </tr>
          </thead>
          <tbody>
            {/* Product 1: 慕思智能床 */}
            <tr className="border-b border-zinc-200 bg-white hover:bg-slate-50/20 transition-colors">
              <td className="py-1.5 px-8 border-r border-zinc-200 bg-slate-50/10 text-center font-black text-2xl text-zinc-800">
                慕思智能床
              </td>
              <td className="py-1.5 px-4 text-center border-r border-zinc-200 text-4xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">73.6%</td>
              <td className="py-1.5 px-4 text-center border-r-2 border-[#004CE5]/15 text-4xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">87.8%</td>
              <td className="py-1.5 px-4 text-center border-r border-zinc-200 text-4xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">2.9</td>
              <td className="py-1.5 px-4 text-center border-r-2 border-[#004CE5]/15 text-4xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">2.7</td>
              <td className="py-1.5 px-4 text-center border-r border-zinc-200 text-4xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">NO. 1</td>
              <td className="py-1.5 px-4 text-center border-r-2 border-[#004CE5]/15 text-4xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">NO. 1</td>
            </tr>

            {/* Product 2: 慕思AI床垫 */}
            <tr className="border-b border-zinc-200 bg-white hover:bg-slate-50/20 transition-colors">
              <td className="py-1.5 px-8 border-r border-zinc-200 bg-slate-50/10 text-center font-black text-2xl text-zinc-800">
                慕思AI床垫
              </td>
              <td className="py-1.5 px-4 text-center border-r border-zinc-200 text-4xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">82.4%</td>
              <td className="py-1.5 px-4 text-center border-r-2 border-[#004CE5]/15 text-4xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">88.9%</td>
              <td className="py-1.5 px-4 text-center border-r border-zinc-200 text-4xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">2.5</td>
              <td className="py-1.5 px-4 text-center border-r-2 border-[#004CE5]/15 text-4xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">2.1</td>
              <td className="py-1.5 px-4 text-center border-r border-zinc-200 text-4xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">NO. 1</td>
              <td className="py-1.5 px-4 text-center border-r-2 border-[#004CE5]/15 text-4xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">NO. 1</td>
            </tr>

            {/* Product 3: 慕思床垫 */}
            <tr className="border-b border-zinc-200 bg-white hover:bg-slate-50/20 transition-colors">
              <td className="py-1.5 px-8 border-r border-zinc-200 bg-slate-50/10 text-center font-black text-2xl text-zinc-800">
                慕思床垫
              </td>
              <td className="py-1.5 px-4 text-center border-r border-zinc-200 text-4xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">41.7%</td>
              <td className="py-1.5 px-4 text-center border-r-2 border-[#004CE5]/15 text-4xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">64.2%</td>
              <td className="py-1.5 px-4 text-center border-r border-zinc-200 text-4xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">6.04</td>
              <td className="py-1.5 px-4 text-center border-r-2 border-[#004CE5]/15 text-4xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">4.9</td>
              <td className="py-1.5 px-4 text-center border-r border-zinc-200 text-4xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">NO. 4</td>
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
            <p className="text-[22px] leading-snug text-zinc-700 font-bold">
              智能床与AI床垫在大模型推荐中展现出强大统治力，提及率持续上扬且稳居竞品第一。普通床垫在优化后提及率从41.7%快速跃升至64.2%，提及位次和竞品排名均实现显著提升，本月顺利跃居第一。
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
            <p className="text-[22px] leading-snug text-zinc-700 font-bold">
              针对慕思普通床垫，下阶段需重点优化价格相关词条，针对高端与大众款做差异化内容适配；智能床和AI床垫应聚焦防范潜在竞品渗透，加强高频对比词条的内容布局。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
