import React from 'react';

export default function Page_CompetitorInterception() {
  // SVG dimensions: viewBox="0 0 1000 220"
  // Coordinates based on corrected data (Gu16 already higher than JNC in March):
  // X: 3月 = 60, 4月 = 300, 5/1(Spike) = 480, 5月(Avg) = 660, 6月 = 940
  // Y: 70% = 180, 100% = 20 (plotH = 160)
  //
  // 古井贡酒 Y coordinates:
  // - 3月: 88.0% -> Y = 84.0
  // - 4月: 90.7% -> Y = 69.6
  // - 5/1: 95.0% -> Y = 46.7
  // - 5月: 96.0% -> Y = 41.3
  // - 6月: 97.5% -> Y = 33.3
  //
  // 剑南春 Y coordinates:
  // - 3月: 80.0% -> Y = 126.7
  // - 4月: 82.0% -> Y = 116.0
  // - 5/1: 95.3% (Spike) -> Y = 33.7 (Higher than Gu16's 34.5!)
  // - 5月: 86.0% -> Y = 94.7
  // - 6月: 80.0% -> Y = 126.7

  return (
    <div className="w-full h-full flex flex-col px-12 sm:px-16 pt-[22px] pb-10 text-zinc-900 font-sans bg-white justify-between overflow-hidden">
      {/* Title Area */}
      <div className="flex items-center shrink-0 mb-4">
        <div className="w-2 h-10 bg-[#004CE5] rounded-full shadow-[0_0_15px_rgba(0,76,229,0.25)]" />
        <h1 className="text-4xl font-black text-zinc-900 tracking-wider ml-4">
          竞品拦截复盘 <span className="text-2xl font-bold text-zinc-400 ml-4">（2026年3–6月）</span>
        </h1>
      </div>

      {/* Massive Full-Width Chart Container */}
      <div className="flex-1 min-h-0 flex flex-col bg-slate-50/40 border border-zinc-200 rounded-2xl p-6 shadow-sm mb-6">
        <div className="flex items-center justify-between shrink-0 mb-3">
          <h2 className="text-3xl font-black text-zinc-900 flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#004CE5]" />
            提及率趋势走势图
          </h2>
          {/* Legend */}
          <div className="flex items-center gap-8 text-lg font-extrabold text-zinc-500">
            <span className="flex items-center gap-2.5">
              <span className="w-5 h-5 rounded-full bg-[#004CE5]" />
              古井贡酒
            </span>
            <span className="flex items-center gap-2.5">
              <span className="w-5 h-5 rounded-full bg-[#ef4444]" />
              剑南春
            </span>
          </div>
        </div>

        {/* SVG chart stretching to full width */}
        <div className="flex-grow w-full min-h-0 bg-white rounded-xl border border-zinc-150 p-6 shadow-sm flex items-center justify-center">
          <svg viewBox="0 0 1000 220" className="w-full h-full">
            {/* Y Grid Lines */}
            <line x1="50" y1="165.5" x2="950" y2="165.5" stroke="#f1f5f9" strokeWidth="2.5" />
            <line x1="50" y1="92.7" x2="950" y2="92.7" stroke="#f1f5f9" strokeWidth="2.5" />
            <line x1="50" y1="20" x2="950" y2="20" stroke="#f1f5f9" strokeWidth="2.5" />

            {/* Y Axis Labels */}
            <text x="40" y="169.5" textAnchor="end" className="text-[14px] fill-zinc-400 font-extrabold font-sans">50%</text>
            <text x="40" y="96.7" textAnchor="end" className="text-[14px] fill-zinc-400 font-extrabold font-sans">75%</text>
            <text x="40" y="24" textAnchor="end" className="text-[14px] fill-zinc-400 font-extrabold font-sans">100%</text>

            {/* X Month Labels */}
            <g className="text-[15px] fill-zinc-500 font-black font-sans">
              <text x="60" y="210" textAnchor="middle">1月</text>
              <text x="236" y="210" textAnchor="middle">2月</text>
              <text x="412" y="210" textAnchor="middle">3月</text>
              <text x="588" y="210" textAnchor="middle">4月</text>
              <text x="764" y="210" textAnchor="middle">5月</text>
              <text x="940" y="210" textAnchor="middle">6月</text>
            </g>

            {/* JNC Line (Smooth curve with real monthly values and the May 1st spike) */}
            <path d="M 60,165.5 C 120,150 180,136.4 236,136.4 C 300,110 370,84 412,84.0 C 470,84 530,56.9 588,56.9 C 620,56.9 650,33.7 676,33.7 C 700,33.7 730,60.7 764,60.7 C 820,70 880,78.2 940,78.2" fill="none" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" className="opacity-85" />
            <circle cx="676" cy="33.7" r="4.5" fill="#ef4444" />

            {/* Gu16 Line (Smooth rising curve with real monthly values) */}
            <path d="M 60,169.5 C 120,140 180,92.7 236,92.7 C 300,92.7 370,49.1 412,49.1 C 470,49.1 530,47.1 588,47.1 C 620,47.1 650,34.5 676,34.5 C 710,34.5 740,31.6 764,31.6 C 820,31.6 880,29.6 940,29.6" fill="none" stroke="#004CE5" strokeWidth="2.2" strokeLinecap="round" />

            {/* Dash lines and labels for 5/1 spike */}
            <line x1="676" y1="33.7" x2="676" y2="185" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 3" />
            <rect x="601" y="0" width="150" height="22" rx="4" fill="#ef4444" />
            <text x="676" y="15" textAnchor="middle" className="text-[12px] fill-white font-black font-sans">剑南春提及率峰值 95.3%</text>
          </svg>
        </div>
      </div>

      {/* Horizontal Cards Layout: Larger Font Sizes */}
      <div className="grid grid-cols-3 gap-6 shrink-0 h-[240px]">

        {/* Card 1 */}
        <div className="rounded-2xl border border-zinc-200 bg-slate-50/40 p-6 pt-7 flex flex-col justify-start">
          <h4 className="text-[28px] font-black text-zinc-955 flex items-center gap-2.5">
            <span className="w-2 h-6 bg-zinc-800 rounded-full" />
            5月：竞品投放突击
          </h4>
          <p className="text-[24px] leading-relaxed text-zinc-650 font-bold mt-3">
            剑南春自4月起出现明显的GEO优化迹象，5月均值推高至 <span className="text-[#ef4444] font-black">86.0%</span>。并在5月1日达到峰值 <span className="text-[#ef4444] font-black">95.3%</span>，单点超过本品。
          </p>
        </div>

        {/* Card 2 */}
        <div className="rounded-2xl border border-[#004CE5]/15 bg-[#004CE5]/[0.01] p-6 pt-7 flex flex-col justify-start">
          <h4 className="text-[28px] font-black text-[#004CE5] flex items-center gap-2.5">
            <span className="w-2 h-6 bg-[#004CE5] rounded-full" />
            应对：启动拦截
          </h4>
          <p className="text-[24px] leading-relaxed text-zinc-650 font-bold mt-3">
            我方迅速在语料库中注入场景定性对比优势语料。引导AI在推荐时判定“年份原浆口感更好、档次更高”。
          </p>
        </div>

        {/* Card 3 */}
        <div className="rounded-2xl border border-[#004CE5]/15 bg-[#004CE5]/[0.01] p-6 pt-7 flex flex-col justify-start">
          <h4 className="text-[28px] font-black text-[#004CE5] flex items-center gap-2.5">
            <span className="w-2 h-6 bg-[#004CE5] rounded-full" />
            成效：实现压制
          </h4>
          <p className="text-[24px] leading-relaxed text-zinc-650 font-bold mt-3">
            6月拦截生效，本品提及率稳居高位，剑南春提及率跌至 <span className="text-[#004CE5] font-black">80.0%</span>，威胁解除。
          </p>
        </div>

      </div>
    </div>
  );
}
