import React from 'react';

export default function Page_OptimizationStrategy() {
  const strategies = [
    {
      num: '01',
      title: '优势词条重点巩固与深挖',
      desc: (
        <>
          针对本月表现极好（提及率<strong className="text-[#004CE5] font-black text-3xl sm:text-4xl mx-1 font-['Montserrat',sans-serif]">94%以上</strong>）的核心强势词条，我们会把它们单独提取出来进行复盘分析。重点找出大模型偏爱这些词条的原因，确保这些高价值词条能够长效稳定地占据第一名。
        </>
      ),
    },
    {
      num: '02',
      title: '针对 DeepSeek 平台加强针对性布局',
      desc: (
        <>
          从本月的引用数据来看，品牌在 <strong className="text-emerald-600 font-black text-3xl sm:text-4xl mx-1 font-['Montserrat',sans-serif]">DeepSeek</strong> 平台上的表现相对偏弱，下个月我们将针对 DeepSeek 加强针对性布局与语料优化。
        </>
      ),
    },
    {
      num: '03',
      title: '建立常态化竞品防御机制',
      desc: (
        <>
          虽然目前几家主要竞品（<strong className="text-purple-700 font-extrabold text-3xl sm:text-4xl mx-1 font-['Montserrat',sans-serif]">快递鸟、快递100</strong> 等）的数据和我们差距很大，但他们依然会在一部分AI回答中作为“备选项”和菜鸟同时出现。下个月我们将持续监控竞品的数据走向，建立常态化防御机制。
        </>
      ),
    },
  ];

  return (
    <div className="w-full h-full flex flex-col px-12 sm:px-16 pb-8 text-zinc-800 font-sans">
      {/* Title */}
      <div className="flex items-center gap-3 mb-10 shrink-0">
        <div className="w-1.5 h-8 bg-[#004CE5] rounded-full shadow-[0_0_12px_rgba(0,76,229,0.2)]" />
        <h1 className="text-3xl font-black text-zinc-900 tracking-wider">
          重点优化策略
        </h1>
      </div>

      {/* 3 Columns Strategy Grid */}
      <div className="flex-1 min-h-0 grid grid-cols-3 gap-8 py-2">
        {strategies.map((strategy, idx) => {
          const isBlue = idx === 0;
          const isGreen = idx === 1;
          const isPurple = idx === 2;

          let cardBg = "from-blue-50/80 to-indigo-50/40 border-blue-200/80";
          let badgeBg = "bg-[#004CE5] shadow-[0_4px_12px_rgba(0,76,229,0.25)]";
          let watermarkGradient = "from-blue-500/[0.28] via-blue-400/[0.1] to-transparent";
          
          if (isGreen) {
            cardBg = "from-emerald-50/80 to-teal-50/40 border-emerald-200/80";
            badgeBg = "bg-emerald-600 shadow-[0_4px_12px_rgba(5,150,105,0.25)]";
            watermarkGradient = "from-emerald-500/[0.28] via-emerald-400/[0.1] to-transparent";
          } else if (isPurple) {
            cardBg = "from-purple-50/80 to-pink-50/40 border-purple-200/80";
            badgeBg = "bg-purple-600 shadow-[0_4px_12px_rgba(147,51,234,0.25)]";
            watermarkGradient = "from-purple-500/[0.28] via-purple-400/[0.1] to-transparent";
          }

          return (
            <div 
              key={idx} 
              className={`relative rounded-[2rem] border bg-gradient-to-br ${cardBg} p-8 shadow-[0_12px_35px_rgba(15,23,42,0.02)] flex flex-col justify-start overflow-hidden group hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(15,23,42,0.06)] transition-all duration-500`}
            >
              {/* Giant Number Watermark centered at the bottom of the card with a fading gradient effect */}
              <span className={`absolute -bottom-24 left-1/2 -translate-x-1/2 text-[17rem] font-black font-['Montserrat',sans-serif] select-none bg-gradient-to-t ${watermarkGradient} bg-clip-text text-transparent leading-none pointer-events-none group-hover:scale-105 group-hover:-bottom-20 transition-all duration-700`}>
                {strategy.num}
              </span>

              {/* Strategy Card Header with Circular Badge */}
              <div className="flex items-center gap-4 mb-8 relative z-10 shrink-0">
                <div className={`w-14 h-14 rounded-2xl ${badgeBg} text-white flex items-center justify-center font-black text-2xl font-['Montserrat',sans-serif] shrink-0`}>
                  {strategy.num}
                </div>
                <h3 className="text-3xl font-black text-zinc-900 leading-tight pr-6">
                  {strategy.title}
                </h3>
              </div>

              {/* Description Text (Upscaled for massive readability) */}
              <p className="text-2xl sm:text-[1.65rem] leading-[1.85] text-zinc-700 font-normal relative z-10">
                {strategy.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
