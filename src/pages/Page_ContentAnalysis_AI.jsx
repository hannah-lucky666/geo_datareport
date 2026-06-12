import React from 'react';

export default function Page_ContentAnalysis_AI() {
  const summaryData = [
    {
      type: '正面',
      ratio: '96.50%',
      trend: '持续上升',
      desc: '正面核心关键词：产品推荐、生态联动、技术先进',
      isPositive: true,
      colorClass: 'border-l-4 border-emerald-500',
    },
    {
      type: '负面',
      ratio: '3.50%',
      trend: '逐步下降',
      desc: '负面核心关键词：产品质量问题、售后服务差、质量问题',
      isPositive: false,
      colorClass: 'border-l-4 border-rose-500',
    }
  ];

  const distributionData = [
    {
      keyword: 'AI床垫哪个牌子的质量比较好',
      type: '负面回答',
      summary: 'AI对话出现对慕思口碑质疑，“品质争议较大”',
      badgeClass: 'bg-rose-50 text-rose-600 border border-rose-100',
    },
    {
      keyword: '2万左右AI床垫哪个牌子的质量好',
      type: '负面回答',
      summary: '⚠️ 出现“避坑提醒：请谨慎考虑慕思”，指出售后风险',
      badgeClass: 'bg-rose-50 text-rose-600 border border-rose-100',
    },
    {
      keyword: '经久耐用不塌陷的AI床垫推荐',
      type: '负面回答',
      summary: '耐用性/抗塌陷被质疑，提及率全列表最低',
      badgeClass: 'bg-rose-50 text-rose-600 border border-rose-100',
    },
    {
      keyword: '知名品牌质量好的AI床垫推荐',
      type: '负面问答',
      summary: '慕思排名靠后，被其他竞品优先推荐',
      badgeClass: 'bg-rose-50 text-rose-600 border border-rose-100',
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

      {/* Main Content Area: Mathematically even and premium vertical layout */}
      <div className="flex-grow flex flex-col justify-evenly my-2 min-h-0">

        {/* Block 1: Table 1 (Summary) */}
        <div className="rounded-[1.25rem] border border-zinc-200 bg-white shadow-[0_6px_30px_rgba(0,0,0,0.015)] overflow-hidden shrink-0">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-zinc-200">
                <th className="py-5 px-8 text-[1.12rem] font-bold text-zinc-700 tracking-wider w-[18%] pl-10">类型</th>
                <th className="py-5 px-8 text-[1.12rem] font-bold text-zinc-700 tracking-wider w-[18%]">占比</th>
                <th className="py-5 px-8 text-[1.12rem] font-bold text-zinc-700 tracking-wider w-[24%]">趋势</th>
                <th className="py-5 px-8 text-[1.12rem] font-bold text-zinc-700 tracking-wider">核心关键词</th>
              </tr>
            </thead>
            <tbody>
              {summaryData.map((row, idx) => (
                <tr key={idx} className={`border-b border-zinc-100 last:border-none hover:bg-slate-50/40 transition-colors ${row.colorClass}`}>
                  <td className="py-7 px-8 pl-9">
                    <span className="font-black text-xl flex items-center gap-3.5 text-zinc-800">
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
                    <span className={`text-2xl font-black font-['Montserrat',sans-serif] ${row.isPositive ? 'text-emerald-600' : 'text-rose-600'}`}>{row.ratio}</span>
                  </td>
                  <td className="py-7 px-8">
                    <span className="text-[1.15rem] font-bold text-zinc-700">{row.trend}</span>
                  </td>
                  <td className="py-7 px-8">
                    <p className="text-[1.12rem] font-semibold text-zinc-655">{row.desc}</p>
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
                  <th className="py-5 px-8 text-[1.12rem] font-bold text-zinc-700 tracking-wider w-[32%]">出现负面的词条</th>
                  <th className="py-5 px-8 text-[1.12rem] font-bold text-zinc-700 tracking-wider w-[22%]">负面类型</th>
                  <th className="py-5 px-8 text-[1.12rem] font-bold text-zinc-700 tracking-wider">具体问题摘要</th>
                </tr>
              </thead>
              <tbody>
                {distributionData.map((row, idx) => (
                  <tr key={idx} className="border-b border-zinc-100 last:border-none hover:bg-slate-50/50 even:bg-slate-50/15 transition-colors">
                    <td className="py-6 px-8 text-[1.12rem] font-bold text-zinc-800">
                      {row.keyword}
                    </td>
                    <td className="py-6 px-8">
                      <span className={`inline-block px-3.5 py-1 rounded-lg text-sm font-extrabold tracking-wide ${row.badgeClass}`}>
                        {row.type}
                      </span>
                    </td>
                    <td className="py-6 px-8 text-[1.12rem] font-semibold text-zinc-655">
                      {row.summary.startsWith('⚠️') ? (
                        <span className="flex items-center gap-2">
                          <span className="text-amber-500 text-lg">⚠️</span>
                          {row.summary.replace('⚠️', '').trim()}
                        </span>
                      ) : (
                        row.summary
                      )}
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
            <h3 className="text-[1.38rem] font-black text-zinc-900 tracking-wider mb-3">内容优化提升</h3>
            <div className="grid grid-cols-3 gap-6">
              {[
                { num: '1', text: '售后服务差（主要问题集中点）', highlight: true },
                { num: '2', text: '售后响应一般', highlight: false },
                { num: '3', text: '质量投诉（偶发）', highlight: false }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-extrabold ${item.highlight ? 'bg-rose-500 text-white shadow-sm shadow-rose-500/20' : 'bg-slate-200 text-slate-700'}`}>
                    {item.num}
                  </span>
                  <span className="text-[1.18rem] text-zinc-800 font-bold leading-none">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
