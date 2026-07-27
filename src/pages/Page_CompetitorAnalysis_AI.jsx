import React from 'react';
import { BumpChart } from '../components/HalfYearCharts';

// 半年竞争位次演变（提及率排名，1=最优）—— 古20 轨迹为爬升，1-5月为占位
const BRANDS = [
  { name: '古20', ranks: [4, 4, 4, 2, 1, 1], color: '#004CE5', highlight: true },
  { name: '梦之蓝', ranks: [1, 1, 1, 1, 3, 5], color: '#ef4444' },
  { name: '泸州老窖', ranks: [2, 2, 2, 5, 5, 2], color: '#f59e0b' },
  { name: '剑南春', ranks: [3, 3, 3, 3, 2, 3], color: '#8b5cf6' },
  { name: '五粮液', ranks: [5, 5, 5, 4, 4, 4], color: '#64748b' },
];

// 6月最终竞争格局（诚实呈现：提及率登顶，但位次仍被五粮液压制）
const CURRENT = [
  { label: '提及率', brand: '98.3%', rank: 1, runnerName: '梦之蓝', runner: '86.7%' },
  { label: 'Top1首推率', brand: '36.7%', rank: 1, runnerName: '五粮液', runner: '35.0%' },
  { label: '平均提及位次', brand: 'NO. 4.8', rank: 4, runnerName: '五粮液', runner: 'NO. 3.6' },
];

export default function Page_CompetitorAnalysis_AI() {
  return (
    <div className="w-full h-full flex flex-col px-12 sm:px-16 pt-[22px] pb-8 text-zinc-800 font-sans overflow-hidden">
      {/* Title */}
      <div className="flex items-center shrink-0 mb-3">
        <div className="w-2 h-10 bg-[#004CE5] rounded-full shadow-[0_0_15px_rgba(0,76,229,0.25)]" />
        <h1 className="text-4xl font-black text-zinc-900 tracking-wider ml-4">
          古20 竞品格局 <span className="text-2xl font-bold text-zinc-400 ml-4">（2026年1–6月）</span>
        </h1>
      </div>

      {/* Top: bump chart + current standing */}
      <div className="grid grid-cols-[1.55fr_1fr] gap-6 h-[500px] shrink-0 mt-2">
        <div className="rounded-2xl border border-zinc-200 bg-white shadow-[0_6px_25px_rgba(0,0,0,0.015)] p-5 flex flex-col min-h-0">
          <div className="flex items-center justify-between shrink-0 mb-1">
            <h2 className="text-2xl font-black text-zinc-900 flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5]" />半年竞争位次演变
            </h2>
          </div>
          <div className="flex-1 min-h-0">
            <BumpChart brands={BRANDS} />
          </div>
        </div>

        <div className="rounded-2xl border border-[#004CE5]/15 bg-[#004CE5]/[0.02] p-5 flex flex-col min-h-0">
          <h2 className="text-2xl font-black text-zinc-900 flex items-center gap-2.5 shrink-0 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5]" />6月最终竞争格局
          </h2>
          <div className="flex-1 flex flex-col justify-between gap-3 min-h-0">
            {CURRENT.map((c, i) => (
              <div key={i} className="rounded-xl bg-white border border-zinc-200 px-5 py-3 flex-1 flex flex-col justify-center">
                <p className="text-[1.05rem] font-bold text-zinc-400">{c.label}</p>
                <div className="flex items-baseline justify-between mt-1">
                  <span className="flex items-baseline gap-2">
                    <span className={`text-[2.4rem] font-black font-['Montserrat',sans-serif] leading-none ${c.rank === 1 ? 'text-[#004CE5]' : 'text-zinc-700'}`}>{c.brand}</span>
                    <span className={`px-2 py-0.5 text-[0.85rem] font-black rounded ${c.rank === 1 ? 'bg-[#FFD100] text-zinc-900' : 'bg-zinc-200 text-zinc-600'}`}>NO.{c.rank}</span>
                  </span>
                  <span className="text-right">
                    <span className="text-[0.9rem] font-bold text-zinc-400 block">{c.runnerName}</span>
                    <span className="text-[1.3rem] font-black text-zinc-500 font-['Montserrat',sans-serif]">{c.runner}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom: analysis + strategy */}
      <div className="grid grid-cols-2 gap-8 flex-1 min-h-0 mt-6">
        <div className="flex flex-col gap-3 h-full min-h-0">
          <h2 className="text-2xl font-black text-zinc-900 flex items-center gap-2 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5]" />半年竞争复盘：
          </h2>
          <div className="flex-grow rounded-2xl bg-[#004CE5]/5 border border-[#004CE5]/20 p-5 flex flex-col justify-evenly min-h-0">
            <p className="text-[21px] leading-relaxed text-zinc-800 font-bold">
              1. 古20 半年间在「提及率」维度完成登顶（98.3%），曝光广度已达行业第一，梦之蓝、泸州老窖等伴随竞品被明显甩开。
            </p>
            <div className="h-px bg-[#004CE5]/10 my-1" />
            <p className="text-[21px] leading-relaxed text-zinc-800 font-bold">
              2. 五粮液是唯一实质威胁：Top1 首推率 35.0% 紧咬古20（36.7%），平均位次 NO.3.6 仍领先古20（NO.4.8），是下半年排位攻坚的核心对手。
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 h-full min-h-0">
          <h2 className="text-2xl font-black text-zinc-900 flex items-center gap-2 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5]" />下阶段优化策略：
          </h2>
          <div className="flex-grow rounded-2xl bg-[#004CE5]/[0.015] border border-[#004CE5]/15 p-5 flex flex-col justify-evenly min-h-0">
            {[
              { num: '01', title: '排位专项突破', desc: '针对平均位次落后五粮液（3.6）的现状，优化长效口碑权重，争取更靠前的 AI 推荐排位。' },
              { num: '02', title: '拦截五粮液', desc: '主动铺设品质/品味对比评测，强调古20 高端商务性价比，压制五粮液的首推力。' },
              { num: '03', title: '曝光转首推', desc: '利用 98.3% 的极高提及率，加密场景限定词，把高曝光进一步转化为首推偏好。' },
            ].map((s, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-[#004CE5] font-black text-2xl shrink-0 mt-0.5">{s.num}</span>
                <p className="text-[21px] leading-relaxed text-zinc-800 font-bold flex-grow min-h-0">
                  <span className="text-zinc-900 font-black">{s.title}：</span>{s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
