import React, { useState } from 'react';

export default function Page_DataCorrection() {
  const [imgError, setImgError] = useState(false);
  const [imgSrc] = useState(`/report/data_correction_chart.png?t=${Date.now()}`);

  return (
    <div className="w-full h-full flex flex-col px-12 sm:px-16 pt-[30px] pb-12 text-zinc-900 font-sans justify-start overflow-hidden bg-white">
      {/* Title Area */}
      <div className="flex items-center shrink-0 mb-6">
        <div className="w-2 h-10 bg-[#FF9900] rounded-full shadow-[0_0_15px_rgba(255,153,0,0.25)]" />
        <h1 className="text-4xl font-black text-zinc-900 tracking-wider ml-4">
          上月数据纠偏
        </h1>
      </div>

      {/* Content Box */}
      <div className="rounded-2xl border border-zinc-200 bg-slate-50/50 p-6 shrink-0 mb-6 shadow-sm">
        <p className="text-[22px] leading-relaxed text-zinc-700 font-bold">
          上个月的提及率实际数据应为 <span className="text-[#004CE5] font-black">85.5%</span>（此前因统计误区虚高至 <span className="text-zinc-500 font-black">92.8%</span>）。数据偏差的主因是，在处理“帮我查物流”、“教我如何查快递”等词条时，AI并未推荐具体平台，而是反问单号（图1）或回复不相关（图2），但上一版计算时却直接将这些词条从分母中扣除了。目前我们已纠正该统计逻辑并还原真实数据，建议后续对此类词条进行针对性调整。
        </p>
      </div>

      {/* Image Placeholder Box */}
      <div className="flex-grow min-h-0 rounded-[1.5rem] border border-zinc-200 bg-white shadow-sm overflow-hidden relative">
        <div className="absolute inset-0 bg-white flex items-center justify-center p-2">
          {!imgError ? (
            <img
              src={imgSrc}
              alt="数据纠偏图示"
              className="w-full h-full object-contain"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-slate-50 to-zinc-100">
              <div className="w-16 h-16 rounded-2xl bg-zinc-100 text-zinc-400 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>
              </div>
              <h3 className="text-2xl font-black text-zinc-800">数据纠偏对照图示</h3>
              <p className="text-lg text-zinc-400 mt-1 max-w-md">图1（单号反问）与图2（无关回复）对比</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
