import React, { useState } from 'react';

export default function Page_KeywordCategorization_AI() {
  const [imgError, setImgError] = useState(false);
  const [imgSrc] = useState(`/report/keyword_categorization_chart.png?t=${Date.now()}`);

  const categories = [
    {
      tier: '强势词 (94 ~ 100%)',
      range: '94-100%',
      count: 9,
      representative: '智能止鼾、防螨抑菌、贴合脊柱等',
      badgeColor: 'bg-emerald-500',
    },
    {
      tier: '中等词 (50-94%)',
      range: '50%~94%',
      count: 18,
      representative: '品牌排行榜、护脊、售后保障等',
      badgeColor: 'bg-amber-500',
    },
    {
      tier: '待提升词 (<50%)',
      range: '0%~49%',
      count: 3,
      representative: '口碑好推荐、免费维修换货等',
      badgeColor: 'bg-rose-500',
    }
  ];

  return (
    <div className="w-full flex-1 flex flex-col px-12 sm:px-16 text-zinc-800 font-sans">
      {/* Title */}
      <div className="flex items-center gap-3 mb-6 shrink-0">
        <div className="w-2 h-8 bg-[#004CE5] rounded-full shadow-[0_0_12px_rgba(0,76,229,0.25)]" />
        <h1 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-wider">
          词条占比与归类
        </h1>
      </div>

      {/* Main Content Column */}
      <div className="flex-grow flex flex-col gap-4 min-h-0">

        {/* TOP SECTION: 词条归类总结 (Table) */}
        <div className="flex flex-col gap-2.5 min-h-0 shrink-0">
          <div className="rounded-[1.5rem] border border-[#004CE5]/25 bg-white shadow-[0_10px_30px_rgba(0,76,229,0.015)] overflow-hidden shrink-0">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#004CE5]/[0.02] border-b border-[#004CE5]/20">
                  <th className="py-2 px-8 text-lg sm:text-xl font-extrabold text-zinc-800 tracking-wider w-[22%]">档位</th>
                  <th className="py-2 px-8 text-lg sm:text-xl font-extrabold text-zinc-800 tracking-wider w-[18%]">提及率范围</th>
                  <th className="py-2 px-8 text-lg sm:text-xl font-extrabold text-zinc-800 tracking-wider w-[14%]">词条数量</th>
                  <th className="py-2 px-8 text-lg sm:text-xl font-extrabold text-zinc-800 tracking-wider">代表词条</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((cat, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-[#004CE5]/10 last:border-none hover:bg-[#004CE5]/[0.01] transition-colors"
                  >
                    <td className="py-2 px-8 font-black text-lg sm:text-xl text-zinc-900">
                      <span className="flex items-center gap-3">
                        <span className={`w-3.5 h-3.5 rounded-full ${cat.badgeColor}`} />
                        {cat.tier}
                      </span>
                    </td>
                    <td className="py-2 px-8 text-lg sm:text-xl font-bold font-['Montserrat',sans-serif] text-zinc-800">
                      {cat.range}
                    </td>
                    <td className="py-2 px-8 text-lg sm:text-xl font-bold font-['Montserrat',sans-serif] text-[#004CE5]">
                      {cat.count} <span className="text-sm sm:text-base font-bold text-zinc-400 font-sans">个</span>
                    </td>
                    <td className="py-2 px-8">
                      <p className="text-base sm:text-lg font-semibold text-zinc-600 leading-relaxed" title={cat.representative}>
                        {cat.representative}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* BOTTOM SECTION: 图片展示位 */}
        <div className="flex-grow flex-1 min-h-[550px] -mb-8 overflow-hidden relative flex flex-col">
          <div className="flex-1 min-h-0 flex items-end justify-start relative">
            {!imgError ? (
              <img
                src={imgSrc}
                alt="词条分类图表"
                className="w-full h-full object-contain object-left-bottom"
                onError={() => {
                  console.warn("Failed to load keyword categorization chart image, showing fallback.");
                  setImgError(true);
                }}
              />
            ) : (
              /* Fallback graphic placeholder */
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-slate-50 to-zinc-100 rounded-t-[1.5rem] border border-[#004CE5]/15 w-full h-full">
                <div className="w-14 h-14 rounded-2xl bg-[#004CE5]/10 text-[#004CE5] flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                </div>
                <h3 className="text-base font-bold text-zinc-800">词条占比与归类图分析</h3>
                <p className="text-xs text-zinc-400 mt-1 max-w-md">各类词条占比与分布 of 图形化分析展示</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
