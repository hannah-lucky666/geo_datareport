import React from 'react';

export default function Page_ContentAnalysis() {
  const summaryData = [
    {
      type: '正面',
      ratio: '99.7%',
      trend: '保持极高水平',
      desc: '正面核心关键词：包装喜庆、品牌认可、口感普适',
      isPositive: true,
      colorClass: 'border-l-4 border-emerald-500',
    },
    {
      type: '负面',
      ratio: '0.3%',
      trend: '个别问答存在优化空间',
      desc: '负面核心关键词：品牌认知',
      isPositive: false,
      colorClass: 'border-l-4 border-rose-500',
    }
  ];

  const distributionData = [
    {
      keyword: '300-500元左右不易醉的婚宴用酒',
      type: '负面回答',
      summary: '部分反馈提及产品品牌认知具有区域性，省外知名度较低',
      badgeClass: 'bg-rose-50 text-rose-600 border border-rose-100',
    },
    {
      keyword: '500元左右性价比高婚宴用酒推荐',
      type: '负面回答',
      summary: '有反馈指出品牌在500元档位的高端心智弱于传统一线品牌',
      badgeClass: 'bg-rose-50 text-rose-600 border border-rose-100',
    }
  ];

  return (
    <div className="w-full h-full flex flex-col px-12 sm:px-16 pb-6 text-zinc-900 font-sans bg-white justify-between">
      {/* Title */}
      <div className="flex items-center gap-3.5 mt-2 shrink-0">
        <div className="w-2 h-9 bg-[#004CE5] rounded-full shadow-[0_0_15px_rgba(0,76,229,0.25)]" />
        <h1 className="text-[2.6rem] font-black text-zinc-900 tracking-wider">
          内容分析总结
        </h1>
      </div>

      {/* Main Content Area: Mathematically even and premium vertical layout */}
      <div className="flex-grow flex flex-col justify-evenly my-2 min-h-0">

        {/* Block 1: Table 1 (Summary) */}
        <div className="rounded-[1.25rem] border border-zinc-200 bg-white shadow-[0_6px_30px_rgba(0,0,0,0.015)] overflow-hidden shrink-0">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-zinc-200">
                <th className="py-5 px-8 text-[1.3rem] font-bold text-zinc-700 tracking-wider w-[18%] pl-10">类型</th>
                <th className="py-5 px-8 text-[1.3rem] font-bold text-zinc-700 tracking-wider w-[18%]">占比</th>
                <th className="py-5 px-8 text-[1.3rem] font-bold text-zinc-700 tracking-wider w-[24%]">趋势</th>
                <th className="py-5 px-8 text-[1.3rem] font-bold text-zinc-700 tracking-wider">核心关键词</th>
              </tr>
            </thead>
            <tbody>
              {summaryData.map((row, idx) => (
                <tr key={idx} className={`border-b border-zinc-100 last:border-none hover:bg-slate-50/40 transition-colors ${row.colorClass}`}>
                  <td className="py-7 px-8 pl-9">
                    <span className="font-black text-[1.4rem] flex items-center gap-3.5 text-zinc-800">
                      {row.isPositive ? (
                        <span className="flex items-center justify-center w-7 h-7 rounded-lg border-2 border-emerald-500 text-emerald-500 bg-white shrink-0 shadow-sm shadow-emerald-500/5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                        </span>
                      ) : (
                        <span className="flex items-center justify-center w-7 h-7 rounded-lg border-2 border-rose-500 text-rose-500 bg-white shrink-0 shadow-sm shadow-rose-500/5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                        </span>
                      )}
                      {row.type}
                    </span>
                  </td>
                  <td className="py-7 px-8">
                    <span className={`text-[1.8rem] font-black font-['Montserrat',sans-serif] ${row.isPositive ? 'text-emerald-600' : 'text-rose-600'}`}>{row.ratio}</span>
                  </td>
                  <td className="py-7 px-8">
                    <span className="text-[1.35rem] font-bold text-zinc-700">{row.trend}</span>
                  </td>
                  <td className="py-7 px-8">
                    <p className="text-[1.3rem] font-semibold text-zinc-655">{row.desc}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Block 2: Section 2 (Distribution Title & Table) */}
        <div className="flex flex-col gap-3 shrink-0">
          <h2 className="text-[1.85rem] font-black text-zinc-900 flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-[#004CE5]" />
            负面词条分布分析
          </h2>

          {/* Table 2: Distribution */}
          <div className="rounded-[1.25rem] border border-zinc-200 bg-white shadow-[0_6px_30px_rgba(0,0,0,0.015)] overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-zinc-200">
                  <th className="py-5 px-8 text-[1.3rem] font-bold text-zinc-700 tracking-wider w-[32%]">出现负面的词条</th>
                  <th className="py-5 px-8 text-[1.3rem] font-bold text-zinc-700 tracking-wider w-[22%]">负面类型</th>
                  <th className="py-5 px-8 text-[1.3rem] font-bold text-zinc-700 tracking-wider">具体问题摘要</th>
                </tr>
              </thead>
              <tbody>
                {distributionData.map((row, idx) => (
                  <tr key={idx} className="border-b border-zinc-100 last:border-none hover:bg-slate-50/50 even:bg-slate-50/15 transition-colors">
                    <td className="py-6 px-8 text-[1.3rem] font-bold text-zinc-800">
                      {row.keyword}
                    </td>
                    <td className="py-6 px-8">
                      <span className={`inline-block px-3.5 py-1 rounded-lg text-[1.05rem] font-extrabold tracking-wide ${row.badgeClass}`}>
                        {row.type}
                      </span>
                    </td>
                    <td className="py-6 px-8 text-[1.3rem] font-semibold text-zinc-655">
                      {row.summary}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Block 3 Group: Divider + Bottom Section */}
        <div className="flex flex-col gap-5 shrink-0">
          <div className="border-t border-zinc-200" />
          <div className="rounded-[1.25rem] border-l-[6px] border-[#004CE5] bg-gradient-to-r from-blue-50/40 via-white to-white py-5 px-8 shadow-[0_6px_20px_rgba(0,76,229,0.015)]">
            <h3 className="text-[1.55rem] font-black text-zinc-900 tracking-wider mb-2">内容优化提升</h3>
            <p className="text-[1.35rem] leading-relaxed text-zinc-700 font-bold">
              绑定“<strong className="text-[#004CE5] font-black mx-0.5">全国名酒</strong>”、“<strong className="text-[#004CE5] font-black mx-0.5">全国性单品</strong>”等核心心智突破区域认知局限；同时在500元档强化“<strong className="text-[#004CE5] font-black mx-0.5">次高端首选</strong>”、“<strong className="text-[#004CE5] font-black mx-0.5">品质对标一线</strong>”对比评测，提升高端溢价心智。
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
