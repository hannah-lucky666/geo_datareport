import React from 'react';

export default function Page_OptimizationStrategy() {
  const strategies = [
    {
      num: '01',
      title: '优势词条重点巩固与深挖',
      desc: (
        <>
          针对本月表现极好（提及率<strong className="text-[#004CE5] font-black">94%以上</strong>）的核心强势词条，我们会把它们单独提取出来进行复盘分析。重点找出大模型偏爱这些词条的原因，确保这些高价值词条能够长效稳定地占据第一名。
        </>
      ),
    },
    {
      num: '02',
      title: '针对 DeepSeek 平台加强针对性布局',
      desc: (
        <>
          从本月的引用数据来看，品牌在 <strong className="text-[#004CE5] font-black">DeepSeek</strong> 平台上的表现相对偏弱，下个月我们将针对 DeepSeek 加强针对性布局与语料优化。
        </>
      ),
    },
    {
      num: '03',
      title: '建立常态化竞品防御机制',
      desc: (
        <>
          虽然目前几家主要竞品（<strong className="text-zinc-900 font-bold">快递鸟、快递100</strong> 等）的数据和我们差距很大，但他们依然会在一部分AI回答中作为“备选项”和菜鸟同时出现。下个月我们将持续监控竞品的数据走向，建立常态化防御机制。
        </>
      ),
    },
  ];

  return (
    <div className="w-full h-full flex flex-col px-12 sm:px-16 pb-8 text-zinc-800 font-sans">
      {/* Title */}
      <div className="flex items-center gap-3 mb-8 shrink-0">
        <div className="w-1.5 h-8 bg-[#004CE5] rounded-full shadow-[0_0_12px_rgba(0,76,229,0.2)]" />
        <h1 className="text-3xl font-black text-zinc-900 tracking-wider">
          重点优化策略
        </h1>
      </div>

      {/* 3 Columns Strategy Cards Grid */}
      <div className="flex-1 min-h-0 grid grid-cols-3 gap-8 py-2">
        {strategies.map((strategy, idx) => (
          <div 
            key={idx} 
            className="relative rounded-3xl border border-zinc-200/80 bg-white/70 backdrop-blur-md p-8 shadow-[0_10px_30px_rgba(15,23,42,0.02)] flex flex-col justify-start overflow-y-auto custom-scrollbar group hover:shadow-[0_15px_40px_rgba(0,76,229,0.04)] hover:border-[#004CE5]/20 transition-all duration-500"
          >
            {/* Giant Number Watermark */}
            <span className="absolute top-6 right-8 text-7xl font-black text-zinc-100/90 group-hover:text-[#004CE5]/10 font-['Montserrat',sans-serif] select-none transition-colors duration-500">
              {strategy.num}
            </span>

            {/* Strategy Card Header */}
            <div className="flex items-center gap-3 mb-6 relative z-10 shrink-0 pr-12">
              <span className="w-2.5 h-6 rounded bg-[#004CE5]" />
              <h3 className="text-2xl font-black text-zinc-900 leading-tight">
                {strategy.title}
              </h3>
            </div>

            {/* Description Text (Upscaled for massive readability) */}
            <p className="text-xl sm:text-[1.38rem] leading-[1.85] text-zinc-600 font-normal relative z-10">
              {strategy.desc}
            </p>
          </div>
        ))}
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
