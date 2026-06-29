import React from 'react';

export default function Page_ContentAnalysis_Musi() {
  const summaryData = [
    {
      type: '正面',
      ratio: '99.2%',
      trend: '表现极优',
      desc: '正面核心关键词：产品推荐、功能认可、高端定位',
      isPositive: true,
      colorClass: 'border-l-4 border-emerald-500',
    },
    {
      type: '负面',
      ratio: '0.8%',
      trend: '近乎忽略',
      desc: '负面核心关键词：售后服务、配置短板、溢价稍高',
      isPositive: false,
      colorClass: 'border-l-4 border-rose-500',
    }
  ];

  const distributionData = [
    {
      keyword: '真正好睡不踩雷的床垫推荐',
      type: '负面回答',
      summary: '部分AI问答中引用了慕思售价数万元的AI床垫出现“塌陷”、“半夜无故震动”及“售后服务差”的舆情负面',
      badgeClass: 'bg-rose-50 text-rose-600 border border-rose-100',
    },
    {
      keyword: '七千左右床垫品牌推荐',
      type: '负面回答',
      summary: '在特定预算价位段推荐中，有大模型指出慕思某些基础款型号存在支撑力偏弱的配置短板',
      badgeClass: 'bg-rose-50 text-rose-600 border border-rose-100',
    }
  ];

  return (
    <div className="w-full h-full flex flex-col px-12 sm:px-16 pt-[40px] pb-[45px] text-zinc-900 font-sans bg-white overflow-hidden">
      {/* Title Area */}
      <div className="flex items-center shrink-0 mb-[20px]">
        <div className="w-2 h-10 bg-[#004CE5] rounded-full shadow-[0_0_15px_rgba(0,76,229,0.25)]" />
        <h1 className="text-4xl font-black text-zinc-900 tracking-wider ml-4 flex items-center">
          慕思床垫内容分析总结
        </h1>
      </div>

      {/* Main Content Area - Flows naturally to distribute vertical space */}
      <div className="flex-grow flex flex-col justify-between min-h-0">
        
        {/* Block 1: Table 1 (Summary) */}
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

        {/* Section 2 Title & Table 2 Block - Flows naturally with spacing */}
        <div className="flex flex-col gap-3.5 shrink-0">
          <h2 className="text-[2.0rem] font-black text-zinc-900 flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-[#004CE5]" />
            负面词条分布分析
          </h2>

          {/* Table 2: Distribution */}
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
                    <td className="py-[20px] px-8 text-[1.45rem] font-bold text-zinc-800 align-middle">
                      {row.keyword}
                    </td>
                    <td className="py-[20px] px-8 align-middle">
                      <span className={`inline-block px-3.5 py-1.5 rounded-lg text-[1.15rem] font-extrabold tracking-wide ${row.badgeClass}`}>
                        {row.type}
                      </span>
                    </td>
                    <td className="py-[20px] px-8 text-[1.45rem] font-semibold text-zinc-600 align-middle leading-relaxed">
                      {row.summary}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Section - Flows naturally with spacing */}
        <div className="flex flex-col gap-3 shrink-0">
          <div className="border-t border-zinc-200" />
          <div className="rounded-[1.25rem] border-l-[6px] border-[#004CE5] bg-gradient-to-r from-blue-50/40 via-white to-white py-6 px-8 shadow-[0_6px_20px_rgba(0,76,229,0.015)]">
            <h3 className="text-[1.65rem] font-black text-zinc-900 tracking-wider mb-2">内容优化提升</h3>
            <p className="text-[1.45rem] leading-relaxed text-zinc-700 font-bold">
              虽然整体负面率极低（0.8%），但需关注“高价AI床垫质量问题”舆情传导至普通床垫的风险。后续应增投<strong className="text-[#004CE5] font-black mx-0.5">高性价比、护脊释压、传统精细弹簧工艺</strong>评测内容，树立传统床垫超强耐用性与舒适度的优良心智。
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
