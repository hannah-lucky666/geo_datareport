import React from 'react';

const DIMENSIONS = [
  {
    no: '01',
    tag: '提及率',
    title: '全面跃升 · 稳居高位',
    accent: '#004CE5',
    bg: 'bg-[#004CE5]/[0.03]',
    border: 'border-[#004CE5]/15',
    text: (
      <>
        核心婚宴与商务送礼场景下的 AI 提及率，由优化前的约 <b className="text-[#004CE5]">40% - 50%</b> 快速拉升，且自3月起即优化并持续稳定在 <b className="text-[#004CE5]">90% 以上</b>——几乎每一次相关提问，AI 都会主动提及我们。
      </>
    ),
    stats: [
      { k: '古16', v: '48.6% → 96.7%' },
      { k: '古20', v: '41.3% → 98.3%' },
    ],
  },
  {
    no: '02',
    tag: '竞品排名',
    title: '反超登顶 · 压制领先',
    accent: '#4f46e5',
    bg: 'bg-indigo-500/[0.03]',
    border: 'border-indigo-500/15',
    text: (
      <>
        竞品排名由优化前的 <b className="text-indigo-600">第 3、4 名</b> 提升至 <b className="text-indigo-600">第 1 名</b>；截止目前古16的AI首选率 (Top1提及率) 高达 <b className="text-indigo-600">78.3%</b>，与第二名剑南春相比(6.7%)取得压倒性优势。
      </>
    ),
    stats: [
      { k: '古16', v: 'NO.3 → NO.1' },
      { k: '古20', v: 'NO.4 → NO.1' },
    ],
  },
  {
    no: '03',
    tag: '内容影响力',
    title: '深度渗透 · 显著生效',
    accent: '#059669',
    bg: 'bg-emerald-500/[0.03]',
    border: 'border-emerald-500/15',
    text: (
      <>
        半年累计投放优质内容超 <b className="text-emerald-600">450 篇</b>、被 AI 引用近 <b className="text-emerald-600">4,000 次</b>，平均被引率约 <b className="text-emerald-600">42%</b>，表明我们的内容已对 AI 输出形成持续、显著的影响。
      </>
    ),
    stats: [
      { k: '投放', v: '451 篇' },
      { k: '引用', v: '3,983 次' },
      { k: '被引率', v: '41.78%' },
    ],
  },
  {
    no: '04',
    tag: '品牌口碑',
    title: '稳健可控 · 健康领先',
    accent: '#e11d48',
    bg: 'bg-rose-500/[0.03]',
    border: 'border-rose-500/15',
    text: (
      <>
        负面信息率经持续优化已稳定控制在 <b className="text-rose-600">1% 以内</b>，正面回答占比常年 <b className="text-rose-600">99% 以上</b>，品牌 AI 口碑健康度保持行业领先。
      </>
    ),
    stats: [
      { k: '负面率', v: '< 1%' },
      { k: '正面回答', v: '> 99%' },
    ],
  },
];

export default function Page_HalfYearSummary() {
  return (
    <div className="w-full h-full flex flex-col px-12 sm:px-16 pt-[26px] pb-8 text-zinc-800 font-sans overflow-hidden">
      {/* Title */}
      <div className="flex items-center shrink-0 mb-4">
        <div className="w-2 h-10 bg-[#004CE5] rounded-full shadow-[0_0_15px_rgba(0,76,229,0.25)]" />
        <h1 className="text-4xl font-black text-zinc-900 tracking-wider ml-4">
          年中 GEO 优化成果总结 <span className="text-2xl font-bold text-zinc-400 ml-4">（2026年1–6月）</span>
        </h1>
      </div>

      {/* Hero statement */}
      <div className="shrink-0 rounded-2xl bg-gradient-to-r from-[#004CE5] to-[#2E6BFF] px-8 py-5 shadow-[0_10px_30px_rgba(0,76,229,0.18)] mb-5">
        <p className="text-[1.9rem] font-black text-white leading-snug tracking-wide">
          经过半年GEO优化，古井贡酒古16、古20已从行业中游提升至AI推荐场景中的 <span className="text-[#FFD100]">绝对第一梯队</span>。
        </p>
      </div>

      {/* 2×2 dimension grid */}
      <div className="grid grid-cols-2 grid-rows-2 gap-5 flex-1 min-h-0">
        {DIMENSIONS.map((d) => (
          <div key={d.no} className={`rounded-2xl border ${d.border} ${d.bg} px-6 py-4 flex flex-col min-h-0`}>
            {/* header */}
            <div className="flex items-center gap-3 shrink-0 mb-2 mt-3">
              <span className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-3xl font-['Montserrat',sans-serif] shadow-sm"
                style={{ backgroundColor: d.accent }}>{d.no}</span>
              <span className="text-[1.85rem] font-black tracking-widest px-4 py-1 rounded-xl"
                style={{ color: d.accent, backgroundColor: `${d.accent}14` }}>{d.tag}</span>
            </div>
            {/* narrative */}
            <div className="flex-1 flex items-center min-h-0">
              <p className="text-[36px] leading-relaxed text-zinc-700 font-bold">
                {d.text}
              </p>
            </div>
            {/* stat chips */}
            <div className="flex gap-3 shrink-0 mt-1">
              {d.stats.map((s, i) => (
                <div key={i} className="flex items-baseline gap-2 rounded-lg bg-white/80 border border-zinc-200/70 px-3.5 py-1.5">
                  <span className="text-[0.95rem] font-black text-zinc-400">{s.k}</span>
                  <span className="text-[1.15rem] font-black font-['Montserrat',sans-serif]" style={{ color: d.accent }}>{s.v}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
