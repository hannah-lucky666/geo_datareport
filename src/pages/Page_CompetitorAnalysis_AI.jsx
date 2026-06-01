import React, { useState } from 'react';

export default function Page_CompetitorAnalysis_AI() {
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
      <div className="flex items-center gap-3 mb-10 shrink-0">
        <div className="w-1.5 h-8 bg-[#004CE5] rounded-full shadow-[0_0_12px_rgba(0,76,229,0.2)]" />
        <h1 className="text-3xl font-black text-zinc-900 tracking-wider">
          竞品分析
        </h1>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col gap-6 min-h-0">

        {/* Three Images Side-by-Side Area */}
        <div className="grid grid-cols-3 gap-6 h-[510px] shrink-0">

          {/* Card 1: Mention Rate */}
          <div className="flex flex-col gap-3 h-full min-h-0">
            <h3 className="text-2xl font-extrabold text-zinc-800 tracking-wide pl-1.5 flex items-center gap-2 shrink-0">
              <span className="w-1.5 h-4.5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.25)]" />
              提及率对比
            </h3>
            <div className="flex-1 min-h-0 rounded-2xl border border-[#004CE5]/25 bg-white shadow-[0_10px_30px_rgba(0,76,229,0.02)] overflow-hidden relative flex flex-col p-4 hover:border-[#004CE5]/40 transition-colors duration-300">
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
          </div>

          {/* Card 2: Top1 Mention Rate */}
          <div className="flex flex-col gap-3 h-full min-h-0">
            <h3 className="text-2xl font-extrabold text-zinc-800 tracking-wide pl-1.5 flex items-center gap-2 shrink-0">
              <span className="w-1.5 h-4.5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.25)]" />
              Top1提及率对比
            </h3>
            <div className="flex-1 min-h-0 rounded-2xl border border-[#004CE5]/25 bg-white shadow-[0_10px_30px_rgba(0,76,229,0.02)] overflow-hidden relative flex flex-col p-4 hover:border-[#004CE5]/40 transition-colors duration-300">
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
          </div>

          {/* Card 3: Rank Position */}
          <div className="flex flex-col gap-3 h-full min-h-0">
            <h3 className="text-2xl font-extrabold text-zinc-800 tracking-wide pl-1.5 flex items-center gap-2 shrink-0">
              <span className="w-1.5 h-4.5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.25)]" />
              提及位次对比
            </h3>
            <div className="flex-1 min-h-0 rounded-2xl border border-[#004CE5]/25 bg-white shadow-[0_10px_30px_rgba(0,76,229,0.02)] overflow-hidden relative flex flex-col p-4 hover:border-[#004CE5]/40 transition-colors duration-300">
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

        </div>

        {/* Bottom Spacious Dashboard Area (Balanced Side-by-Side to prevent overflow and scrollbars) */}
        <div className="grid grid-cols-2 gap-8 flex-1 min-h-0">
          
          {/* Left Column: 潜在竞争分析 */}
          <div className="flex flex-col gap-4 min-h-0 h-full">
            <h2 className="text-2xl font-black text-zinc-900 flex items-center gap-2 shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5]" />
              潜在竞争分析：
            </h2>
            <div className="flex-grow flex flex-col gap-4 min-h-0 justify-between">
              {/* Card 1 */}
              <div className="p-5 rounded-2xl bg-[#004CE5]/5 border border-[#004CE5]/20 shadow-[0_4px_15px_rgba(0,76,229,0.01)] flex flex-col justify-center flex-1 min-h-0">
                <p className="text-[1.32rem] leading-relaxed text-zinc-800 font-semibold">
                  1. MPE是最强劲竞品，提及率59.6%、Top1率22.9%，在“品牌排行榜”“品牌推荐”等泛词上抢占NO.1位置
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-5 rounded-2xl bg-slate-50/60 border border-slate-200/80 shadow-[0_4px_15px_rgba(15,23,42,0.005)] flex flex-col justify-center flex-1 min-h-0">
                <p className="text-[1.32rem] leading-relaxed text-zinc-800 font-semibold">
                  2. 舒福德词云热度高于慕思，是AI内容生态中的高曝光竞品
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 重点优化策略 */}
          <div className="flex flex-col gap-4 min-h-0 h-full">
            <h2 className="text-2xl font-black text-zinc-900 flex items-center gap-2 shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5]" />
              重点优化策略：
            </h2>
            <div className="flex-grow flex flex-col gap-3 min-h-0 justify-between">
              {[
                {
                  num: '01',
                  desc: 'DeepSeek平台表现弱（位次NO.3.5），需针对DeepSeek加强内容布局',
                  badgeBg: 'bg-[#0038A8]',
                  borderColor: 'border-[#0038A8]/15',
                  bgColor: 'bg-[#0038A8]/[0.015]',
                  glowColor: 'shadow-[0_0_12px_rgba(0,56,168,0.1)]'
                },
                {
                  num: '02',
                  desc: '豆包平台（~59%）表现最弱，建议重点在豆包平台优化投放策略',
                  badgeBg: 'bg-[#004CE5]',
                  borderColor: 'border-[#004CE5]/15',
                  bgColor: 'bg-[#004CE5]/[0.015]',
                  glowColor: 'shadow-[0_0_12px_rgba(0,76,229,0.1)]'
                },
                {
                  num: '03',
                  desc: '防御其他竞品优化',
                  badgeBg: 'bg-[#2E75FF]',
                  borderColor: 'border-[#2E75FF]/15',
                  bgColor: 'bg-[#2E75FF]/[0.015]',
                  glowColor: 'shadow-[0_0_12px_rgba(46,117,255,0.1)]'
                }
              ].map((strat, idx) => (
                <div 
                  key={idx} 
                  className={`flex items-center gap-5 p-5 px-6 rounded-2xl border ${strat.borderColor} ${strat.bgColor} flex-1 min-h-0`}
                >
                  <div className={`w-12 h-12 rounded-xl ${strat.badgeBg} ${strat.glowColor} text-white flex items-center justify-center font-black text-lg shrink-0 font-['Montserrat',sans-serif]`}>
                    {strat.num}
                  </div>
                  <p className="text-[1.28rem] leading-relaxed text-zinc-800 font-semibold flex-1 min-h-0">
                    {strat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
