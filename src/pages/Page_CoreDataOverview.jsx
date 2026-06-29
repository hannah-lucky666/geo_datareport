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

      {/* 1. Top Section: Decorative Data Remark */}
      <div className="rounded-xl border border-zinc-200 bg-slate-50/40 py-3.5 px-6 shrink-0 mb-4">
        <p className="text-[1.35rem] leading-relaxed text-zinc-500 font-bold">
          本次监测周期共计 <span className="font-['Montserrat',sans-serif] text-[#004CE5] font-black">31</span> 天，覆盖 <span className="font-['Montserrat',sans-serif] text-[#004CE5] font-black">4</span> 个核心AI平台，针对 <span className="font-['Montserrat',sans-serif] text-[#004CE5] font-black">29</span> 个重点监测词条进行累计查询 <span className="font-['Montserrat',sans-serif] text-[#004CE5] font-black">600</span> 次，追踪引用相关问答数据共计 <span className="font-['Montserrat',sans-serif] text-[#004CE5] font-black">5,610</span> 篇次，涉及识别竞品品牌 <span className="font-['Montserrat',sans-serif] text-[#004CE5] font-black">143</span> 家。
        </p>
      </div>

      {/* 2. Middle Section: Consolidated Table */}
      <div className="rounded-2xl border border-zinc-300 bg-white shadow-[0_4px_30px_rgba(0,0,0,0.015)] overflow-hidden flex-1 min-h-0 flex flex-col mb-[36px]">
        <table className="w-full text-left border-collapse table-fixed flex-1">
          <thead>
            <tr className="text-white">
              <th rowSpan={2} className="py-4 px-8 text-2xl font-black text-center w-[22%] bg-zinc-800 border-r border-white/10">产品</th>
              <th colSpan={2} className="py-3 px-8 text-2xl font-black text-center border-l border-white/10 bg-[#004CE5]">提及率</th>
              <th colSpan={2} className="py-3 px-8 text-2xl font-black text-center border-l border-white/10 bg-[#1A62E5]">平均提及位次</th>
              <th colSpan={2} className="py-3 px-8 text-2xl font-black text-center border-l border-white/10 bg-[#2E75FF]">竞品排名</th>
            </tr>
            <tr className="bg-slate-50/80 border-b border-zinc-200 text-[#004CE5] font-black text-2xl">
              <th className="py-2 px-4 text-center border-l border-zinc-200 w-[13%]">5月</th>
              <th className="py-2 px-4 text-center border-l border-zinc-200 border-r-2 border-[#004CE5]/15 w-[13%]">6月</th>
              <th className="py-2 px-4 text-center border-l border-zinc-200 w-[13%]">5月</th>
              <th className="py-2 px-4 text-center border-l border-zinc-200 border-r-2 border-[#004CE5]/15 w-[13%]">6月</th>
              <th className="py-2 px-4 text-center border-l border-zinc-200 w-[13%]">5月</th>
              <th className="py-2 px-4 text-center border-l border-zinc-200 w-[13%]">6月</th>
            </tr>
          </thead>
          <tbody>
            {/* Product 1: 劲酒 */}
            <tr className="border-b border-zinc-200 bg-white hover:bg-slate-50/20 transition-colors">
              <td className="py-1 px-8 border-r border-zinc-200 bg-slate-50/10 text-center font-black text-2xl text-zinc-800">
                劲酒
              </td>
              <td className="py-1 px-4 text-center border-r border-zinc-200 text-3xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">92.5%</td>
              <td className="py-1 px-4 text-center border-r-2 border-[#004CE5]/15 text-3xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">97.5%</td>
              <td className="py-1 px-4 text-center border-r border-zinc-200 text-3xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">2.0</td>
              <td className="py-1 px-4 text-center border-r-2 border-[#004CE5]/15 text-3xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">1.4</td>
              <td className="py-1 px-4 text-center border-r border-zinc-200 text-3xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">NO. 1</td>
              <td className="py-1 px-4 text-center border-r-2 border-[#004CE5]/15 text-3xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">NO. 1</td>
            </tr>

            {/* Product 2: 毛铺 */}
            <tr className="border-b border-zinc-200 bg-white hover:bg-slate-50/20 transition-colors">
              <td className="py-1 px-8 border-r border-zinc-200 bg-slate-50/10 text-center font-black text-2xl text-zinc-800">
                毛铺
              </td>
              <td className="py-1 px-4 text-center border-r border-zinc-200 text-3xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">79.7%</td>
              <td className="py-1 px-4 text-center border-r-2 border-[#004CE5]/15 text-3xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">84.5%</td>
              <td className="py-1 px-4 text-center border-r border-zinc-200 text-3xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">2.6</td>
              <td className="py-1 px-4 text-center border-r-2 border-[#004CE5]/15 text-3xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">2.7</td>
              <td className="py-1 px-4 text-center border-r border-zinc-200 text-3xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">NO. 1</td>
              <td className="py-1 px-4 text-center border-r-2 border-[#004CE5]/15 text-3xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">NO. 1</td>
            </tr>

            {/* Product 3: 养生一号 */}
            <tr className="border-b border-zinc-200 bg-white hover:bg-slate-50/20 transition-colors">
              <td className="py-1 px-8 border-r border-zinc-200 bg-slate-50/10 text-center font-black text-2xl text-zinc-800">
                养生一号
              </td>
              <td className="py-1 px-4 text-center border-r border-zinc-200 text-3xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">69.0%</td>
              <td className="py-1 px-4 text-center border-r-2 border-[#004CE5]/15 text-3xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">64.3%</td>
              <td className="py-1 px-4 text-center border-r border-zinc-200 text-3xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">3.8</td>
              <td className="py-1 px-4 text-center border-r-2 border-[#004CE5]/15 text-3xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">4.1</td>
              <td className="py-1 px-4 text-center border-r border-zinc-200 text-3xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">NO. 1</td>
              <td className="py-1 px-4 text-center border-r-2 border-[#004CE5]/15 text-3xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">NO. 1</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 3. Bottom Section: Summary & Strategy Cards */}
      <div className="grid grid-cols-2 gap-6 shrink-0 h-[195px]">
        {/* Left Card: 现状总结 */}
        <div className="rounded-2xl border border-[#004CE5]/15 bg-[#004CE5]/[0.01] px-6 py-4 flex flex-col shadow-[0_4px_25px_rgba(0,76,229,0.005)]">
          <div className="flex items-center gap-2.5 mb-2 shrink-0">
            <span className="w-3 h-3 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.3)] animate-pulse" />
            <h3 className="text-2xl font-black text-zinc-900 tracking-wider">现状总结</h3>
          </div>
          <div className="flex-1 flex items-center min-h-0">
            <p className="text-[22px] leading-snug text-zinc-700 font-bold">
              劲酒在AI生态中表现强劲，提及率升至97.5%，平均位次移至1.4，稳居第一。毛铺与养生一号指标由于劲酒的分流本月略有下降；未来需明确细分产品定位，突出毛铺的日常聚会用途及养生一号的高端送礼心智，与劲酒形成差异化矩阵。
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
              下阶段将继续巩固劲酒在核心推荐位次上的绝对优势。同时，针对毛铺与养生一号进行独立场景的内容铺设，重点强化毛铺的商务/朋友聚会属性，以及养生一号在高端送礼、长辈健康礼品场景的专业口碑，实现品牌协同增长。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
