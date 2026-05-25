import React, { useState } from 'react';

export default function Page_CoreDataOverview() {
  const [imgError, setImgError] = useState(false);
  // Cache buster using a timestamp to force reload when the page renders
  const [imgSrc] = useState(`/report/core_data_chart.png?t=${Date.now()}`);

  const tableData = [
    {
      metric: '提及率',
      value: '92.8%',
      desc: '在三大核心AI平台（DeepSeek、豆包、通义千问）关于目标词条的回答中，菜鸟的整体展现率达92.8%。表明首月铺设的基础语料已全面生效。',
    },
    {
      metric: 'Top1提及率',
      value: '78.70%',
      desc: '在所有搜索请求中，有近80%的情况下，菜鸟被AI作为首推品牌直接呈现给用户，确立了该场景下绝对的行业领先地位。',
    },
    {
      metric: '平均提及位次',
      value: 'NO. 1.4',
      desc: '当AI提及菜鸟时，其出现的平均顺位为第1.4位。这意味着菜鸟不仅被AI收录，且在算法逻辑中被赋予了高优级，绝大多数情况均作为前排答案输出。',
    },
  ];

  return (
    <div className="w-full h-full flex flex-col px-12 sm:px-16 pb-8 text-zinc-800 font-sans">
      {/* Title */}
      <div className="flex items-center gap-3 mb-4 shrink-0">
        <div className="w-1.5 h-8 bg-[#004CE5] rounded-full shadow-[0_0_12px_rgba(0,76,229,0.2)]" />
        <h1 className="text-3xl font-black text-zinc-900 tracking-wider">
          核心数据总览 <span className="text-xl font-medium text-zinc-500 ml-3">（2026年5月）</span>
        </h1>
      </div>

      {/* Image Area */}
      <div className="flex-1 min-h-0 flex flex-col gap-6">
        <div className="h-[440px] w-full rounded-2xl border border-zinc-200/80 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.03)] overflow-hidden relative group">
          <div className="absolute inset-0 bg-white flex items-center justify-center p-4">
            {!imgError ? (
              <img 
                src={imgSrc} 
                alt="核心数据图表" 
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.01]"
                onError={() => {
                  console.warn("Failed to load core data chart image, showing fallback.");
                  setImgError(true);
                }}
              />
            ) : (
              /* Fallback graphic placeholder */
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-slate-50 to-zinc-100">
                <div className="w-16 h-16 rounded-2xl bg-[#004CE5]/10 text-[#004CE5] flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
                </div>
                <h3 className="text-lg font-bold text-zinc-800">数据可视化分析图</h3>
                <p className="text-sm text-zinc-400 mt-1 max-w-md">三大AI核心平台数据对比分析图</p>
              </div>
            )}
          </div>
        </div>

        {/* Table Area */}
        <div className="rounded-2xl border border-zinc-200/80 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.03)] overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-zinc-200/80">
                <th className="py-5 px-8 text-2xl font-bold text-zinc-800 tracking-wider w-1/4">核心数据指标</th>
                <th className="py-5 px-8 text-2xl font-bold text-zinc-800 tracking-wider w-1/5">本月数据</th>
                <th className="py-5 px-8 text-2xl font-bold text-zinc-800 tracking-wider">数据说明</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, idx) => (
                <tr key={idx} className="border-b border-zinc-100 last:border-none hover:bg-slate-50/30 transition-colors">
                  <td className="py-6 px-8">
                    <span className="font-extrabold text-zinc-900 text-3xl">{row.metric}</span>
                  </td>
                  <td className="py-6 px-8">
                    <span className="text-5xl font-black text-[#004CE5] tracking-tight font-mono">{row.value}</span>
                  </td>
                  <td className="py-6 px-8">
                    <p className="text-xl sm:text-2xl leading-relaxed text-zinc-600 font-normal">{row.desc}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
