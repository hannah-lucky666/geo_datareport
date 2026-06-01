import React from 'react';

export default function Page_ContentAnalysis() {
  const summaryData = [
    {
      type: '正面',
      ratio: '97.60%',
      trend: '持续向好 (96% → 99%)',
      desc: '正面核心关键词：产品推荐、生态联动、技术先进',
      isPositive: true,
      colorClass: 'border-l-4 border-emerald-500',
    },
    {
      type: '负面',
      ratio: '2.40%',
      trend: '共13条负面回答',
      desc: '负面核心关键词：产品质量问题、售后服务差、质量问题',
      isPositive: false,
      colorClass: 'border-l-4 border-rose-500',
    }
  ];

  const distributionData = [
    {
      keyword: '支持上门维护的智能床推荐',
      type: '负面回答',
      summary: 'AI优先推荐MPE、喜临门等竞品的上门服务',
      badgeClass: 'bg-rose-50 text-rose-600 border border-rose-100',
    },
    {
      keyword: '品质稳定售后有保障的智能床推荐',
      type: '负面回答',
      summary: 'AI推荐MPE"航天级品质 + 25年超长质保"，未优先提及慕思',
      badgeClass: 'bg-rose-50 text-rose-600 border border-rose-100',
    },
    {
      keyword: '2万左右能缓解入睡困难的智能床推荐',
      type: '负面回答',
      summary: '竞品"哄睡模式"相关内容被优先引用',
      badgeClass: 'bg-rose-50 text-rose-600 border border-rose-100',
    },
    {
      keyword: '实用性强不吃灰',
      type: '产品信息错误',
      summary: '存在产品信息描述不准确',
      badgeClass: 'bg-amber-50 text-amber-600 border border-amber-100',
    },
    {
      keyword: '部分词条',
      type: '价格错误',
      summary: '存在价格信息错误',
      badgeClass: 'bg-red-50 text-red-600 border border-red-100',
    }
  ];

  return (
    <div className="w-full h-full flex flex-col px-12 sm:px-16 pb-6 text-zinc-900 font-sans bg-white justify-between">
      {/* Title */}
      <div className="flex items-center gap-3.5 mt-2 shrink-0">
        <div className="w-2 h-9 bg-[#004CE5] rounded-full shadow-[0_0_15px_rgba(0,76,229,0.25)]" />
        <h1 className="text-4xl font-black text-zinc-900 tracking-wider">
          内容分析总结
        </h1>
      </div>

      {/* Main Content Area: uses justify-between to distribute the 3 major blocks perfectly */}
      <div className="flex-grow flex flex-col justify-between my-4 min-h-0">
        
        {/* Block 1: Table 1 (Summary) */}
        <div className="rounded-[1.25rem] border border-zinc-200 bg-white shadow-[0_6px_30px_rgba(0,0,0,0.015)] overflow-hidden shrink-0">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-zinc-200">
                <th className="py-3 px-8 text-[1.12rem] font-bold text-zinc-700 tracking-wider w-[18%] pl-10">类型</th>
                <th className="py-3 px-8 text-[1.12rem] font-bold text-zinc-700 tracking-wider w-[18%]">占比</th>
                <th className="py-3 px-8 text-[1.12rem] font-bold text-zinc-700 tracking-wider w-[24%]">趋势</th>
                <th className="py-3 px-8 text-[1.12rem] font-bold text-zinc-700 tracking-wider">核心关键词</th>
              </tr>
            </thead>
            <tbody>
              {summaryData.map((row, idx) => (
                <tr key={idx} className={`border-b border-zinc-100 last:border-none hover:bg-slate-50/40 transition-colors ${row.colorClass}`}>
                  <td className="py-4 px-8 pl-9">
                    <span className="font-black text-xl flex items-center gap-3.5 text-zinc-800">
                      {row.isPositive ? (
                        <span className="flex items-center justify-center w-7 h-7 rounded-lg border-2 border-emerald-500 text-emerald-500 bg-white shrink-0 shadow-sm shadow-emerald-500/5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        </span>
                      ) : (
                        <span className="flex items-center justify-center w-7 h-7 rounded-lg border-2 border-rose-500 text-rose-500 bg-white shrink-0 shadow-sm shadow-rose-500/5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                        </span>
                      )}
                      {row.type}
                    </span>
                  </td>
                  <td className="py-4 px-8">
                    <span className={`text-2xl font-black font-['Montserrat',sans-serif] ${row.isPositive ? 'text-emerald-600' : 'text-rose-600'}`}>{row.ratio}</span>
                  </td>
                  <td className="py-4 px-8">
                    <span className="text-[1.15rem] font-bold text-zinc-700">{row.trend}</span>
                  </td>
                  <td className="py-4 px-8">
                    <p className="text-[1.12rem] font-semibold text-zinc-650">{row.desc}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Block 2: Section 2 (Distribution Title & Table) */}
        <div className="flex flex-col gap-3 shrink-0">
          <h2 className="text-[1.6rem] font-black text-zinc-900 flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-[#004CE5]" />
            负面词条分布分析
          </h2>
          
          {/* Table 2: Distribution */}
          <div className="rounded-[1.25rem] border border-zinc-200 bg-white shadow-[0_6px_30px_rgba(0,0,0,0.015)] overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-zinc-200">
                  <th className="py-3.5 px-8 text-[1.12rem] font-bold text-zinc-700 tracking-wider w-[32%]">出现负面的词条</th>
                  <th className="py-3.5 px-8 text-[1.12rem] font-bold text-zinc-700 tracking-wider w-[22%]">负面类型</th>
                  <th className="py-3.5 px-8 text-[1.12rem] font-bold text-zinc-700 tracking-wider">具体问题摘要</th>
                </tr>
              </thead>
              <tbody>
                {distributionData.map((row, idx) => (
                  <tr key={idx} className="border-b border-zinc-100 last:border-none hover:bg-slate-50/50 even:bg-slate-50/15 transition-colors">
                    <td className="py-3 px-8 text-[1.12rem] font-bold text-zinc-800">
                      {row.keyword}
                    </td>
                    <td className="py-3 px-8">
                      <span className={`inline-block px-3.5 py-1 rounded-lg text-sm font-extrabold tracking-wide ${row.badgeClass}`}>
                        {row.type}
                      </span>
                    </td>
                    <td className="py-3 px-8 text-[1.12rem] font-semibold text-zinc-655">
                      {row.summary}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-zinc-200 shrink-0" />

        {/* Block 3: Bottom Section (Content Optimization Banner Card) */}
        <div className="rounded-[1.25rem] border-l-[6px] border-[#004CE5] bg-gradient-to-r from-blue-50/40 via-white to-white py-5 px-8 shadow-[0_6px_20px_rgba(0,76,229,0.015)] shrink-0">
          <h3 className="text-[1.38rem] font-black text-zinc-900 tracking-wider mb-2">内容优化提升</h3>
          <p className="text-[1.18rem] leading-relaxed text-zinc-700 font-bold">
            “售后/维修/换货”相关词提及率偏低（<strong className="text-[#004CE5] font-black font-['Montserrat']">43-57%</strong>），且出现负面回答，需针对性优化售后服务的AI内容表达。
          </p>
        </div>

      </div>
    </div>
  );
}
