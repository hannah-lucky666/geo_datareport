import React, { useState } from 'react';

export default function Page_CompetitorAnalysis() {
  const [img1Error, setImg1Error] = useState(false);
  const [img2Error, setImg2Error] = useState(false);
  const [img3Error, setImg3Error] = useState(false);

  // Cache buster timestamps
  const [img1Src] = useState(`/report/mention_rate_chart.png?t=${Date.now()}`);
  const [img2Src] = useState(`/report/top1_rate_chart.png?t=${Date.now()}`);
  const [img3Src] = useState(`/report/rank_order_chart.png?t=${Date.now()}`);

  return (
    <div className="w-full h-full flex flex-col px-12 sm:px-16 pb-8 text-zinc-800 font-sans">
      {/* Title */}
      <div className="flex items-center gap-3 mb-4 shrink-0">
        <div className="w-1.5 h-8 bg-[#004CE5] rounded-full shadow-[0_0_12px_rgba(0,76,229,0.2)]" />
        <h1 className="text-3xl font-black text-zinc-900 tracking-wider">
          竞品分析
        </h1>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 min-h-0 flex flex-col gap-6">
        
        {/* Three Images Side-by-Side Area */}
        <div className="grid grid-cols-3 gap-6 h-[340px] shrink-0">
          
          {/* Card 1: Mention Rate */}
          <div className="rounded-2xl border border-zinc-200/80 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.03)] overflow-hidden relative flex flex-col p-4">
            <h3 className="text-xl font-extrabold text-zinc-900 text-center mb-2 shrink-0">提及率对比</h3>
            <div className="flex-1 min-h-0 bg-white flex items-center justify-center relative">
              {!img1Error ? (
                <img 
                  src={img1Src} 
                  alt="提及率对比" 
                  className="w-full h-full object-contain"
                  onError={() => setImg1Error(true)}
                />
              ) : (
                <div className="absolute inset-0 bg-slate-50 flex items-center justify-center text-zinc-400 text-sm">提及率对比图表</div>
              )}
            </div>
          </div>

          {/* Card 2: Top1 Mention Rate */}
          <div className="rounded-2xl border border-zinc-200/80 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.03)] overflow-hidden relative flex flex-col p-4">
            <h3 className="text-xl font-extrabold text-zinc-900 text-center mb-2 shrink-0">Top1提及率对比</h3>
            <div className="flex-1 min-h-0 bg-white flex items-center justify-center relative">
              {!img2Error ? (
                <img 
                  src={img2Src} 
                  alt="Top1提及率对比" 
                  className="w-full h-full object-contain"
                  onError={() => setImg2Error(true)}
                />
              ) : (
                <div className="absolute inset-0 bg-slate-50 flex items-center justify-center text-zinc-400 text-sm">Top1提及率对比图表</div>
              )}
            </div>
          </div>

          {/* Card 3: Rank Position */}
          <div className="rounded-2xl border border-zinc-200/80 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.03)] overflow-hidden relative flex flex-col p-4">
            <h3 className="text-xl font-extrabold text-zinc-900 text-center mb-2 shrink-0">提及位次对比</h3>
            <div className="flex-1 min-h-0 bg-white flex items-center justify-center relative">
              {!img3Error ? (
                <img 
                  src={img3Src} 
                  alt="提及位次对比" 
                  className="w-full h-full object-contain"
                  onError={() => setImg3Error(true)}
                />
              ) : (
                <div className="absolute inset-0 bg-slate-50 flex items-center justify-center text-zinc-400 text-sm">提及位次对比图表</div>
              )}
            </div>
          </div>

        </div>

        {/* Data Analysis Section (Two Big Cards with Huge Typography) */}
        <div className="flex-1 flex flex-col gap-4 min-h-0">
          <h2 className="text-2xl font-extrabold text-zinc-900 flex items-center gap-2 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5]" />
            数据分析结论：
          </h2>
          
          <div className="flex-1 grid grid-cols-2 gap-6 min-h-0">
            {/* Card 1: Cainiao's Absolute Lead */}
            <div className="p-8 rounded-2xl bg-[#004CE5]/5 border border-[#004CE5]/20 shadow-[0_4px_20px_rgba(0,76,229,0.02)] flex flex-col justify-center overflow-y-auto custom-scrollbar">
              <h3 className="text-2xl font-extrabold text-zinc-900 mb-3 shrink-0">
                1. 在竞品中，菜鸟已占据第一梯队的核心占位
              </h3>
              <p className="text-2xl sm:text-[1.65rem] leading-relaxed text-zinc-700 font-normal">
                菜鸟的总体提及率达<strong className="text-[#004CE5] font-black mx-1 font-['Montserrat',sans-serif]">92.8%</strong>，且Top1提及率（<strong className="text-[#004CE5] font-black mx-0.5 font-['Montserrat',sans-serif]">78.7%</strong>）与平均位次（<strong className="text-[#004CE5] font-black mx-0.5 font-['Montserrat',sans-serif]">1.4</strong>）均保持绝对领先。目前主流AI大模型在处理“查快递”相关诉求时，已经将菜鸟作为默认的首选基准答案。
              </p>
            </div>

            {/* Card 2: Competitors Homogenized */}
            <div className="p-8 rounded-2xl bg-slate-50/60 border border-slate-200/80 shadow-[0_4px_20px_rgba(15,23,42,0.01)] flex flex-col justify-center overflow-y-auto custom-scrollbar">
              <h3 className="text-2xl font-extrabold text-zinc-900 mb-3 shrink-0">
                2. 第二梯队竞品陷入“同质化”竞争，尚未跑出明显的挑战者
              </h3>
              <p className="text-2xl sm:text-[1.65rem] leading-relaxed text-zinc-700 font-normal">
                观察第二梯队（快递鸟、快递100、支付宝-我的快递），三者的数据表现高度粘合。其总体提及率均在<span className="text-zinc-900 font-bold font-['Montserrat',sans-serif] mx-0.5">35%-40%</span>的区间，Top1提及率均在<span className="text-zinc-900 font-bold font-['Montserrat',sans-serif] mx-0.5">4%-6%</span>的低位徘徊，且平均被提及顺位也都在第<span className="text-zinc-900 font-bold font-['Montserrat',sans-serif] mx-0.5">3</span>位左右。
              </p>
            </div>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 4px;
        }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.2);
        }
      `}} />
    </div>
  );
}
