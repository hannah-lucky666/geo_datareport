import React from 'react';
import { BumpChart } from '../components/HalfYearCharts';

// 半年竞争位次演变（提及率排名，1=最优）—— 古井贡酒轨迹为爬升，1-5月为占位
const BRANDS = [
  { name: '古井贡酒', ranks: [3, 3, 3, 2, 1, 1], color: '#004CE5', highlight: true },
  { name: '剑南春', ranks: [1, 1, 1, 1, 2, 2], color: '#ef4444' },
  { name: '洋河', ranks: [2, 2, 2, 3, 3, 4], color: '#f59e0b' },
  { name: '今世缘', ranks: [4, 4, 4, 5, 4, 3], color: '#8b5cf6' },
  { name: '郎酒', ranks: [5, 5, 5, 4, 5, 5], color: '#64748b' },
];

// 6月最终竞争格局
const CURRENT = [
  { label: '提及率', brand: '96.7%', rank: 1, runnerName: '剑南春', runner: '80.0%' },
  { label: 'Top1首推率', brand: '78.3%', rank: 1, runnerName: '剑南春', runner: '6.7%' },
  { label: '平均提及位次', brand: 'NO. 1.7', rank: 1, runnerName: '剑南春', runner: 'NO. 4.1' },
];

export default function Page_CompetitorAnalysis() {
  return (
    <div className="w-full h-full flex flex-col px-12 sm:px-16 pt-[22px] pb-8 text-zinc-800 font-sans overflow-hidden">
      {/* Title */}
      <div className="flex items-center shrink-0 mb-3">
        <div className="w-2 h-10 bg-[#004CE5] rounded-full shadow-[0_0_15px_rgba(0,76,229,0.25)]" />
        <h1 className="text-4xl font-black text-zinc-900 tracking-wider ml-4">
          古16竞品格局 <span className="text-2xl font-bold text-zinc-400 ml-4">（2026年1–6月）</span>
        </h1>
      </div>

      {/* Top: bump chart + current standing */}
      <div className="grid grid-cols-[1.55fr_1fr] gap-6 h-[500px] shrink-0 mt-2">
        {/* Bump chart */}
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

        {/* Current standing */}
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
              1. 古16 于第 5 月完成对高频竞品剑南春的反超，跃居榜首。剑南春虽同台提及率仍高达 80.0%，但 Top1 首推率仅 6.7%、位次 NO.4.1，已沦为「高频陪跑」。
            </p>
            <div className="h-px bg-[#004CE5]/10 my-1" />
            <p className="text-[21px] leading-relaxed text-zinc-800 font-bold">
              2. 古16 半年间先后反超洋河、剑南春登顶；今世缘、郎酒长期停滞于第 4–5 位，与古16 的身位差持续拉大，对核心基本盘已无实质威胁。
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 h-full min-h-0">
          <h2 className="text-2xl font-black text-zinc-900 flex items-center gap-2 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5]" />下阶段优化策略：
          </h2>
          <div className="flex-grow rounded-2xl bg-[#004CE5]/[0.015] border border-[#004CE5]/15 p-5 flex flex-col justify-evenly min-h-0">
            {[
              { num: '01', title: '首推位固化', desc: '古16 首推率 78.3% 优势巨大，持续沉淀高生效语料，锁死「第一顺位」不被剑南春反扑。' },
              { num: '02', title: '扩大身位差', desc: '针对高同台的剑南春，加强对比拦截内容，把位次差从 2 名进一步拉大。' },
              { num: '03', title: '长尾防御', desc: '在婚宴等细分场景持续渗透，压制洋河、今世缘的长尾展现空间。' },
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
