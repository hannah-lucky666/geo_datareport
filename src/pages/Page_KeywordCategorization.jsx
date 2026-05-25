import React from 'react';

export default function Page_KeywordCategorization() {
  const categories = [
    {
      tier: '强势词',
      range: '94% ~ 100%',
      count: 15,
      representative: '怎么查快递、怎么样帮家人查快递、买了太多快递哪里能一次性看到、查快递码最方便的软件是哪个等',
      emoji: '🟢',
      badgeColor: 'bg-emerald-500',
      textColor: 'text-emerald-600'
    },
    {
      tier: '中等词',
      range: '50% ~ 93.9%',
      count: 31,
      representative: '怎么样查快递、怎么批量查快递、有没有什么软件能看到全家人的快递包裹、我的快递到哪了等',
      emoji: '🟡',
      badgeColor: 'bg-amber-500',
      textColor: 'text-amber-600'
    },
    {
      tier: '待提升词',
      range: '0% ~ 49.9%',
      count: 2,
      representative: '怎么取快递方便、教我如何取快递',
      emoji: '🔴',
      badgeColor: 'bg-rose-500',
      textColor: 'text-rose-500'
    }
  ];

  return (
    <div className="w-full h-full flex flex-col px-12 sm:px-16 pb-16 text-zinc-900 font-sans">
      {/* Title */}
      <div className="flex items-center gap-3 mb-6 shrink-0">
        <div className="w-1.5 h-8 bg-[#004CE5] rounded-full shadow-[0_0_12px_rgba(0,76,229,0.2)]" />
        <h1 className="text-3xl font-black text-zinc-900 tracking-wider">
          词条归类总结
        </h1>
      </div>

      {/* Main Table-Card Rows - Adjusted for maximum screen fullness */}
      <div className="flex-1 flex flex-col gap-5 justify-between py-2">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="flex-1 rounded-[2rem] border border-zinc-200/80 bg-white py-6 px-10 shadow-[0_12px_40px_rgba(15,23,42,0.02)] flex items-center justify-between gap-12 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.05)]"
          >
            {/* Column 1: Badge & Range */}
            <div className="w-96 shrink-0 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className={`w-3.5 h-7 rounded-full ${cat.badgeColor}`} />
                <span className="text-3xl font-black text-zinc-900">
                  {cat.tier} <span className="text-2xl font-normal text-zinc-400 ml-1 font-['Montserrat']">{cat.emoji}</span>
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-lg font-bold text-zinc-400 tracking-wider uppercase">提及率范围</span>
                <span className="text-3xl font-black text-zinc-800 font-['Montserrat',sans-serif]">
                  {cat.range}
                </span>
              </div>
            </div>

            {/* Column 2: Word Count Metric */}
            <div className="w-56 shrink-0 flex flex-col items-center justify-center border-l border-r border-zinc-100 px-6">
              <span className="text-7xl font-black tracking-tight text-zinc-900 font-['Montserrat',sans-serif]">
                {cat.count}
              </span>
              <span className="text-lg font-extrabold text-zinc-400 mt-2 tracking-widest">个词条</span>
            </div>

            {/* Column 3: Representative Words */}
            <div className="flex-grow flex-1 min-h-0 bg-slate-50/70 rounded-[1.25rem] p-6 border border-zinc-100 flex items-center h-full">
              <div className="flex items-start gap-4">
                <span className="text-lg font-black text-[#004CE5] bg-[#004CE5]/10 px-4 py-2 rounded-xl shrink-0 mt-0.5 tracking-wider">
                  代表词条
                </span>
                <p className="text-2xl sm:text-[1.6rem] leading-relaxed text-zinc-600 font-medium">
                  {cat.representative}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Notes */}
      <div className="mt-6 text-lg text-zinc-400 font-bold italic shrink-0 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 opacity-60 text-zinc-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>
          备注：完整词条数据见 <strong className="text-[#004CE5] underline font-bold cursor-pointer ml-1 hover:text-[#004CE5]/80">附录1 词条数据明细</strong>
        </span>
      </div>
    </div>
  );
}
