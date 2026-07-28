import React from 'react';
import report from '../data/jinjiuJulyReport.json';

function createContentAnalysisPage({
  productKey,
  title,
  positiveTrend,
  negativeTrend,
  distributionData,
  optimizationText,
}) {
  const sent = report.products[productKey].sentiments;
  const summaryData = [
    {
      type: '正面',
      ratio: `${sent.positive}%`,
      trend: positiveTrend,
      desc: `正面核心关键词：${(sent.positive_keywords || []).slice(0, 3).join('、') || '暂无数据'}`,
      isPositive: true,
      colorClass: 'border-l-4 border-emerald-500',
    },
    {
      type: '负面',
      ratio: `${sent.negative}%`,
      trend: negativeTrend,
      desc: `负面核心关键词：${(sent.negative_keywords || []).slice(0, 3).join('、') || '暂无数据'}`,
      isPositive: false,
      colorClass: 'border-l-4 border-rose-500',
    },
  ];

  return function ContentAnalysisPage() {
    return (
      <div className="w-full h-full flex flex-col px-12 sm:px-16 pt-[40px] pb-[45px] text-zinc-900 font-sans bg-white overflow-hidden">
        <div className="flex items-center shrink-0 mb-[20px]">
          <div className="w-2 h-10 bg-[#004CE5] rounded-full shadow-[0_0_15px_rgba(0,76,229,0.25)]" />
          <h1 className="text-4xl font-black text-zinc-900 tracking-wider ml-4 flex items-center">
            {title}
            <span className="text-2xl font-bold text-zinc-400 ml-4">（2026年7月）</span>
          </h1>
        </div>

        <div className="flex-grow flex flex-col justify-between min-h-0">
          <div className="rounded-[1.25rem] border border-zinc-200 bg-white shadow-[0_6px_30px_rgba(0,0,0,0.015)] overflow-hidden shrink-0">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-zinc-200">
                  <th className="py-[16px] px-8 text-[1.4rem] font-bold text-zinc-700 tracking-wider w-[18%] pl-10">类型</th>
                  <th className="py-[16px] px-8 text-[1.4rem] font-bold text-zinc-700 tracking-wider w-[18%]">占比</th>
                  <th className="py-[16px] px-8 text-[1.4rem] font-bold text-zinc-700 tracking-wider w-[24%]">趋势</th>
                  <th className="py-[16px] px-8 text-[1.4rem] font-bold text-zinc-700 tracking-wider">核心关键词</th>
                </tr>
              </thead>
              <tbody>
                {summaryData.map((row, idx) => (
                  <tr key={idx} className={`border-b border-zinc-100 last:border-none hover:bg-slate-50/40 transition-colors ${row.colorClass}`}>
                    <td className="py-[24px] px-8 pl-9 align-middle">
                      <span className="font-black text-[1.45rem] flex items-center gap-3.5 text-zinc-800">
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
                    <td className="py-[24px] px-8 align-middle">
                      <span className={`text-[2.0rem] font-black font-['Montserrat',sans-serif] ${row.isPositive ? 'text-emerald-600' : 'text-rose-600'}`}>{row.ratio}</span>
                    </td>
                    <td className="py-[24px] px-8 align-middle">
                      <span className="text-[1.45rem] font-bold text-zinc-700">{row.trend}</span>
                    </td>
                    <td className="py-[24px] px-8 align-middle">
                      <p className="text-[1.45rem] font-semibold text-zinc-600 leading-relaxed">{row.desc}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col gap-3.5 shrink-0">
            <h2 className="text-[2.0rem] font-black text-zinc-900 flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-[#004CE5]" />
              负面词条分布分析
            </h2>
            <div className="rounded-[1.25rem] border border-zinc-200 bg-white shadow-[0_6px_30px_rgba(0,0,0,0.015)] overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-zinc-200">
                    <th className="py-[14px] px-8 text-[1.4rem] font-bold text-zinc-700 tracking-wider w-[32%]">出现负面的词条</th>
                    <th className="py-[14px] px-8 text-[1.4rem] font-bold text-zinc-700 tracking-wider w-[22%]">负面类型</th>
                    <th className="py-[14px] px-8 text-[1.4rem] font-bold text-zinc-700 tracking-wider">具体问题摘要</th>
                  </tr>
                </thead>
                <tbody>
                  {distributionData.map((row, idx) => (
                    <tr key={idx} className="border-b border-zinc-100 last:border-none hover:bg-slate-50/50 even:bg-slate-50/15 transition-colors">
                      <td className="py-[20px] px-8 text-[1.45rem] font-bold text-zinc-800 align-middle">{row.keyword}</td>
                      <td className="py-[20px] px-8 align-middle">
                        <span className={`inline-block px-3.5 py-1.5 rounded-lg text-[1.15rem] font-extrabold tracking-wide ${row.badgeClass}`}>
                          {row.type}
                        </span>
                      </td>
                      <td className="py-[20px] px-8 text-[1.45rem] font-semibold text-zinc-600 align-middle leading-relaxed">{row.summary}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-col gap-3 shrink-0">
            <div className="border-t border-zinc-200" />
            <div className="rounded-[1.25rem] border-l-[6px] border-[#004CE5] bg-gradient-to-r from-blue-50/40 via-white to-white py-6 px-8 shadow-[0_6px_20px_rgba(0,76,229,0.015)]">
              <h3 className="text-[1.65rem] font-black text-zinc-900 tracking-wider mb-2">内容优化提升</h3>
              <p className="text-[1.45rem] leading-relaxed text-zinc-700 font-bold">{optimizationText}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default createContentAnalysisPage({
  productKey: 'jinjiu',
  title: '劲酒内容分析总结',
  positiveTrend: '仍居绝对主导',
  negativeTrend: '少量短板露出',
  distributionData: [
    {
      keyword: '日常养生酒买哪个好',
      type: '负面回答',
      summary: '部分回答提及含糖偏高、阴虚易上火等短板',
      badgeClass: 'bg-rose-50 text-rose-600 border border-rose-100',
    },
    {
      keyword: '夏天十大日常最佳养生酒',
      type: '负面回答',
      summary: '夏日清润榜单中优先推荐他牌，劲酒未进首选',
      badgeClass: 'bg-rose-50 text-rose-600 border border-rose-100',
    },
  ],
  optimizationText: '7月正面回答占比97.5%。下阶段应针对“含糖/上火”质疑补齐清润型、控糖型话术，并加强夏季场景内容，避免被竹叶青等清润竞品分流。',
});

export { createContentAnalysisPage };
