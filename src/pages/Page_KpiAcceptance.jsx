import React, { useState } from 'react';

export default function Page_KpiAcceptance() {
  const [imgError, setImgError] = useState(false);
  const [imgSrc] = useState(`/report/kpi_acceptance_chart.png?t=${Date.now()}`);

  const semanticTags = ['怎么查', '平台软件', '快递到哪', '取件码'];

  return (
    <div className="w-full h-full flex flex-col px-12 sm:px-16 pb-8 text-zinc-900 font-sans">
      {/* Title */}
      <div className="flex items-center gap-3 mb-5 shrink-0">
        <div className="w-1.5 h-8 bg-[#004CE5] rounded-full shadow-[0_0_12px_rgba(0,76,229,0.2)]" />
        <h1 className="text-3xl font-black text-zinc-900 tracking-wider">
          KPI验收情况
        </h1>
      </div>

      {/* Main Grid: Info Section & Image Placeholder */}
      <div className="flex-grow flex flex-col gap-6 min-h-0">
        
        {/* Top Compact Info Row (Unified and highly optimized for space) */}
        <div className="grid grid-cols-3 gap-8 shrink-0 bg-slate-50/60 border border-zinc-200/80 rounded-[1.5rem] p-6 shadow-[0_4px_20px_rgba(15,23,42,0.01)]">
          {/* Col 1: Basic Info */}
          <div className="flex flex-col gap-2 justify-center">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-5 rounded-full bg-[#004CE5]" />
              <span className="text-base font-extrabold text-zinc-400 uppercase tracking-widest">验收机制</span>
            </div>
            <div className="flex flex-col gap-1 mt-1">
              <p className="text-2xl font-black text-zinc-800">
                每日验收 <span className="text-lg font-bold text-zinc-500">/ 自然天计算</span>
              </p>
              <p className="text-lg font-bold text-zinc-500">
                核心词条需在AI平台排名第一，并覆盖特定语义。
              </p>
            </div>
          </div>

          {/* Col 2: Target Numbers & Tags */}
          <div className="flex flex-col gap-2 justify-center border-l border-zinc-200/80 pl-8">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-5 rounded-full bg-emerald-500" />
              <span className="text-base font-extrabold text-zinc-400 uppercase tracking-widest">具体达标条件</span>
            </div>
            <div className="flex flex-col gap-1.5 mt-1">
              <p className="text-2xl font-black text-zinc-800">
                数量要求：至少有 <span className="text-[#004CE5] font-black text-3xl font-['Montserrat'] mx-0.5">22个</span> 词条排名第一
              </p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-lg font-extrabold text-zinc-500 shrink-0">覆盖标签：</span>
                <div className="flex gap-2.5">
                  {semanticTags.map((tag, i) => (
                    <span key={i} className="text-base font-black bg-white border border-zinc-200/80 text-zinc-700 px-3 py-0.5 rounded-lg shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Rules */}
          <div className="flex flex-col gap-2 justify-center border-l border-zinc-200/80 pl-8">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-5 rounded-full bg-zinc-800" />
              <span className="text-base font-extrabold text-zinc-400 uppercase tracking-widest">多平台规则</span>
            </div>
            <div className="flex flex-col gap-1 mt-1">
              <p className="text-2xl font-black text-zinc-800">
                各平台独立计算达标
              </p>
              <p className="text-lg font-bold text-zinc-500">
                各自凑够22个Top 1词条即可，不同平台排第一的词条可独立。
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Massive Chart Image Area (Occupies all remaining space for ultimate legibility) */}
        <div className="flex-1 min-h-0 rounded-[2rem] border border-zinc-200/80 bg-white shadow-[0_12px_45px_rgba(15,23,42,0.02)] overflow-hidden relative group">
          <div className="absolute inset-0 bg-white flex items-center justify-center p-8">
            {!imgError ? (
              <img 
                src={imgSrc} 
                alt="KPI验收图表" 
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.01]"
                onError={() => {
                  console.warn("Failed to load KPI acceptance chart, showing fallback.");
                  setImgError(true);
                }}
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-slate-50 to-zinc-100">
                <div className="w-16 h-16 rounded-2xl bg-zinc-100 text-zinc-400 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                </div>
                <h3 className="text-2xl font-black text-zinc-800">KPI 达标多平台数据看板</h3>
                <p className="text-lg text-zinc-400 mt-1 max-w-md">每日 Top 1 词条统计与语义覆盖追踪图</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
