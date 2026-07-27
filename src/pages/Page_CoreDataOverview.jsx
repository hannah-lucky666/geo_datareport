import React from 'react';

// 6月 现状值下方的半年增幅小标签
function DeltaTag({ text }) {
  return (
    <span className="mt-0.5 inline-block text-[0.85rem] font-black text-emerald-600 font-['Montserrat',sans-serif]">
      {text}
    </span>
  );
}

// 6月（现状）单元格：大数值 + 半年增幅
function CurrentCell({ value, delta }) {
  return (
    <td className="py-1.5 px-4 text-center border-r-2 border-[#004CE5]/15 relative">
      <span className="text-4xl font-bold text-zinc-800 font-['Montserrat',sans-serif]">{value}</span>
      <div className="absolute left-0 right-0 bottom-[18px] leading-none">
        <DeltaTag text={delta} />
      </div>
    </td>
  );
}

// 1月（优化前）单元格：弱化处理
function BaselineCell({ value }) {
  return (
    <td className="py-1.5 px-4 text-center border-r border-zinc-200 text-4xl font-bold text-zinc-800 font-['Montserrat',sans-serif]">
      {value}
    </td>
  );
}

export default function Page_CoreDataOverview() {
  return (
    <div className="w-full h-full flex flex-col px-12 sm:px-16 pt-[22px] pb-8 text-zinc-800 font-sans justify-between overflow-hidden">
      {/* Title Area */}
      <div className="flex items-center shrink-0 mb-[27px]">
        <div className="w-2 h-10 bg-[#004CE5] rounded-full shadow-[0_0_15px_rgba(0,76,229,0.25)]" />
        <h1 className="text-4xl font-black text-zinc-900 tracking-wider ml-4">
          核心数据总览 <span className="text-2xl font-bold text-zinc-400 ml-4">（2026年1–6月）</span>
        </h1>
      </div>

      {/* 1. Top Section: Half-year monitoring remark */}
      <div className="rounded-xl border border-zinc-200 bg-slate-50/40 py-3.5 px-6 shrink-0 mb-4">
        <p className="text-[1.6rem] leading-relaxed text-zinc-500 font-bold">
          本半年度累计监测 <span className="font-['Montserrat',sans-serif] text-[#004CE5] font-black">181</span> 天，覆盖 <span className="font-['Montserrat',sans-serif] text-[#004CE5] font-black">4</span> 个核心AI平台，针对 <span className="font-['Montserrat',sans-serif] text-[#004CE5] font-black">30</span> 个重点监测词条持续追踪，累计发起查询 <span className="font-['Montserrat',sans-serif] text-[#004CE5] font-black">3,102</span> 次，追踪引用相关问答数据共计 <span className="font-['Montserrat',sans-serif] text-[#004CE5] font-black">14526</span> 篇次，涉及识别竞品品牌 <span className="font-['Montserrat',sans-serif] text-[#004CE5] font-black">256</span> 家。
        </p>
      </div>

      {/* 2. Middle Section: Baseline (Jan) vs Current (Jun) comparison table */}
      <div className="rounded-2xl border border-zinc-300 bg-white shadow-[0_4px_30px_rgba(0,0,0,0.015)] overflow-hidden h-[380px] flex flex-col mb-[36px]">
        <table className="w-full text-left border-collapse table-fixed flex-1">
          <thead>
            <tr className="text-white">
              <th rowSpan={2} className="py-5 px-8 text-2xl font-black text-center w-[22%] bg-zinc-800 border-r border-white/10">产品</th>
              <th colSpan={2} className="py-4 px-8 text-2xl font-black text-center border-l border-white/10 bg-[#004CE5]">提及率</th>
              <th colSpan={2} className="py-4 px-8 text-2xl font-black text-center border-l border-white/10 bg-[#1A62E5]">平均提及位次</th>
              <th colSpan={2} className="py-4 px-8 text-2xl font-black text-center border-l border-white/10 bg-[#2E75FF]">竞品排名</th>
            </tr>
            <tr className="bg-slate-50/80 border-b border-zinc-200 font-black text-2xl">
              <th className="py-2.5 px-4 text-center border-l border-zinc-200 w-[13%] text-[#004CE5]">优化前</th>
              <th className="py-2.5 px-4 text-center border-l border-zinc-200 border-r-2 border-[#004CE5]/15 w-[13%] text-[#004CE5]">优化后</th>
              <th className="py-2.5 px-4 text-center border-l border-zinc-200 w-[13%] text-[#004CE5]">优化前</th>
              <th className="py-2.5 px-4 text-center border-l border-zinc-200 border-r-2 border-[#004CE5]/15 w-[13%] text-[#004CE5]">优化后</th>
              <th className="py-2.5 px-4 text-center border-l border-zinc-200 w-[13%] text-[#004CE5]">优化前</th>
              <th className="py-2.5 px-4 text-center border-l border-zinc-200 w-[13%] text-[#004CE5]">优化后</th>
            </tr>
          </thead>
          <tbody>
            {/* Product 1: 古井贡酒古16 */}
            <tr className="border-b border-zinc-200 bg-white hover:bg-slate-50/20 transition-colors">
              <td className="py-1.5 px-8 border-r border-zinc-200 bg-slate-50/10 text-center font-black text-2xl text-zinc-800">
                古井贡酒古16
              </td>
              <BaselineCell value="48.6%" />
              <CurrentCell value="96.7%" delta="▲ +48.1pt" />
              <BaselineCell value="4.3" />
              <CurrentCell value="1.7" delta="前移 2.6 位" />
              <BaselineCell value="NO. 3" />
              <CurrentCell value="NO. 1" delta="▲ 2 名" />
            </tr>

            {/* Product 2: 古井贡酒古20 */}
            <tr className="border-b border-zinc-200 bg-white hover:bg-slate-50/20 transition-colors">
              <td className="py-1.5 px-8 border-r border-zinc-200 bg-slate-50/10 text-center font-black text-2xl text-zinc-800">
                古井贡酒古20
              </td>
              <BaselineCell value="41.3%" />
              <CurrentCell value="98.3%" delta="▲ +57.0pt" />
              <BaselineCell value="6.1" />
              <CurrentCell value="4.8" delta="前移 1.3 位" />
              <BaselineCell value="NO. 4" />
              <CurrentCell value="NO. 1" delta="▲ 3 名" />
            </tr>
          </tbody>
        </table>
      </div>

      {/* 3. Bottom Section: Summary & Strategy Cards */}
      <div className="grid grid-cols-2 gap-6 shrink-0 h-[260px]">
        {/* Left Card: 半年成果总结 */}
        <div className="rounded-2xl border border-[#004CE5]/15 bg-[#004CE5]/[0.01] px-6 py-4 flex flex-col shadow-[0_4px_25px_rgba(0,76,229,0.005)]">
          <div className="flex items-center gap-2.5 mb-2 shrink-0">
            <span className="w-3 h-3 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.3)] animate-pulse" />
            <h3 className="text-[32px] font-black text-zinc-900 tracking-wider">年中成果总结</h3>
          </div>
          <div className="flex-1 flex items-center min-h-0">
            <p className="text-[26px] leading-snug text-zinc-700 font-bold">
              服务半年来，古16、古20 均完成从行业中游到 AI 推荐首位的提升：竞品排名由初期的第 3、4 名稳居至第 1 名。古16 提及率达 96.7%、平均位次前移至 1.7；古20 提及率升至 98.3% 接近全量覆盖，品牌已在 AI 生态中建立稳固的领先壁垒。
            </p>
          </div>
        </div>

        {/* Right Card: 下阶段优化策略 */}
        <div className="rounded-2xl border border-emerald-500/15 bg-emerald-500/[0.01] px-6 py-4 flex flex-col shadow-[0_4px_25px_rgba(16,185,129,0.005)]">
          <div className="flex items-center gap-2.5 mb-2 shrink-0">
            <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.3)] animate-pulse" />
            <h3 className="text-[32px] font-black text-zinc-900 tracking-wider">下阶段优化策略</h3>
          </div>
          <div className="flex-1 flex items-center min-h-0">
            <p className="text-[26px] leading-snug text-zinc-700 font-bold">
              下阶段以「稳固首位、扩大身位差」为核心：古16 持续巩固高顺位稳定性，压制剑南春等高频同台竞品；古20 针对平均位次（4.8）开展专项攻坚，围绕五粮液的高端首推展开差异化拦截，把高曝光进一步转化为首推偏好。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
