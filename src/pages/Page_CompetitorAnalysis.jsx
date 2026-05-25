import React, { useState } from 'react';

export default function Page_CompetitorAnalysis() {
  const [imgError, setImgError] = useState(false);
  // Cache buster using a timestamp to force reload when the page renders
  const [imgSrc] = useState(`/report/competitor_chart.png?t=${Date.now()}`);

  return (
    <div className="w-full h-full flex flex-col px-12 sm:px-16 pb-8 text-zinc-800 font-sans">
      {/* Title */}
      <div className="flex items-center gap-3 mb-4 shrink-0">
        <div className="w-1.5 h-8 bg-[#004CE5] rounded-full shadow-[0_0_12px_rgba(0,76,229,0.2)]" />
        <h1 className="text-3xl font-black text-zinc-900 tracking-wider">
          竞品分析 <span className="text-xl font-medium text-zinc-500 ml-3">（提及率、Top1提及率与提及位次对比）</span>
        </h1>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 min-h-0 flex flex-col gap-6">
        {/* Competitor Chart Area */}
        <div className="h-[440px] w-full rounded-2xl border border-zinc-200/80 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.03)] overflow-hidden relative group">
          <div className="absolute inset-0 bg-white flex items-center justify-center p-4">
            {!imgError ? (
              <img 
                src={imgSrc} 
                alt="竞品数据对比图表" 
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.01]"
                onError={() => {
                  console.warn("Failed to load competitor chart image, showing fallback.");
                  setImgError(true);
                }}
              />
            ) : (
              /* Fallback graphic placeholder */
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-slate-50 to-zinc-100">
                <div className="w-16 h-16 rounded-2xl bg-[#004CE5]/10 text-[#004CE5] flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
                </div>
                <h3 className="text-lg font-bold text-zinc-800">竞品对比可视化分析图</h3>
                <p className="text-sm text-zinc-400 mt-1 max-w-md">提及率对比、Top1提及率对比、提及位次对比</p>
              </div>
            )}
          </div>
        </div>

        {/* Data Analysis Section (Two Big Cards for Large Text Readability) */}
        <div className="flex flex-col gap-4 shrink-0">
          <h2 className="text-2xl font-extrabold text-zinc-900 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5]" />
            数据分析结论：
          </h2>
          
          <div className="grid grid-cols-2 gap-6">
            {/* Card 1: Cainiao's Absolute Lead */}
            <div className="p-6 rounded-2xl bg-[#004CE5]/5 border border-[#004CE5]/20 shadow-[0_4px_20px_rgba(0,76,229,0.02)]">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-black text-zinc-900 flex items-center gap-2">
                  1. 菜鸟占据第一梯队核心占位
                </h3>
                <span className="px-2.5 py-1 rounded bg-[#004CE5] text-white text-xs font-bold font-mono tracking-widest uppercase">
                  绝对领先
                </span>
              </div>
              <p className="text-xl sm:text-2xl leading-relaxed text-zinc-700 font-normal">
                菜鸟的总体提及率达<strong className="text-[#004CE5] font-black mx-1 font-['Montserrat',sans-serif]">92.8%</strong>，且Top1提及率（<strong className="text-[#004CE5] font-black mx-0.5 font-['Montserrat',sans-serif]">78.7%</strong>）与平均位次（<strong className="text-[#004CE5] font-black mx-0.5 font-['Montserrat',sans-serif]">1.4</strong>）均保持绝对领先。目前主流AI大模型在处理“查快递”相关诉求时，已经将菜鸟作为默认的首选基准答案。
              </p>
            </div>

            {/* Card 2: Competitors Homogenized */}
            <div className="p-6 rounded-2xl bg-slate-50/60 border border-slate-200/80 shadow-[0_4px_20px_rgba(15,23,42,0.01)]">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-black text-zinc-900 flex items-center gap-2">
                  2. 第二梯队陷入“同质化”竞争
                </h3>
                <span className="px-2.5 py-1 rounded bg-zinc-500 text-white text-xs font-bold font-mono tracking-widest uppercase">
                  尚无挑战者
                </span>
              </div>
              <p className="text-xl sm:text-2xl leading-relaxed text-zinc-700 font-normal">
                观察第二梯队（快递鸟、快递100、支付宝-我的快递），三者的数据表现高度粘合。其总体提及率均在<span className="text-zinc-900 font-bold font-['Montserrat',sans-serif] mx-0.5">35%-40%</span>的区间，Top1提及率均在<span className="text-zinc-900 font-bold font-['Montserrat',sans-serif] mx-0.5">4%-6%</span>的低位徘徊，且平均被提及顺位也都在第<span className="text-zinc-900 font-bold font-['Montserrat',sans-serif] mx-0.5">3</span>位左右。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
