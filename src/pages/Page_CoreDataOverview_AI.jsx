import React, { useState } from 'react';

export default function Page_CoreDataOverview_AI() {
  const [imgError, setImgError] = useState(false);
  // Cache buster using a timestamp to force reload when the page renders
  const [imgSrc] = useState(`/report/core_data_chart_ai.png?t=${Date.now()}`);

  const tableData = [
    {
      metric: '提及率',
      before: '80.5%',
      after: '88.3%',
      diff: '7.8%',
      desc: '提及率保持稳定上涨趋势，本月达到88.3%。这表明古20在AI生态中的基础收录与曝光广度进一步扩大。',
    },
    {
      metric: 'Top1提及率',
      before: '32.90%',
      after: '42.60%',
      diff: '9.70%',
      desc: '在竞争更加激烈的高端/次高端酒水推荐中，古20正在快速从竞品手中抢夺“第一顺位”，突围效果显著。',
    },
    {
      metric: '平均提及位次',
      before: 'NO. 5.5',
      after: 'NO. 4.7',
      diff: '0.8 位',
      desc: '平均顺位从5.5名提升至4.7名，当AI给出多个高端酒水选项时，古20已经获得了更靠前、更易获取用户注意力的视觉权重。',
    },
  ];

  return (
    <div className="w-full h-full flex flex-col px-12 sm:px-16 pb-8 text-zinc-800 font-sans">
      {/* Title */}
      <div className="flex items-center gap-3 mb-2.5 shrink-0">
        <div className="w-1.5 h-8 bg-[#004CE5] rounded-full shadow-[0_0_12px_rgba(0,76,229,0.2)]" />
        <h1 className="text-3xl font-black text-zinc-900 tracking-wider">
          核心数据总览 <span className="text-xl font-medium text-zinc-500 ml-3">（2026年5月）</span>
        </h1>
      </div>

      {/* Content Columns Wrapper */}
      <div className="flex-1 min-h-0 flex flex-col justify-between">

        {/* Monitoring Metrics & Executive Summary */}
        <div className="flex flex-col gap-3.5 shrink-0">
          {/* Metrics Row */}
          <div className="grid grid-cols-6 gap-3.5">
            {[
              { label: '执行天数', value: '28', unit: '天' },
              { label: '监测词条', value: '14', unit: '个' },
              { label: '覆盖平台', value: '4', unit: '个' },
              { label: '总查询次数', value: '300', unit: '次' },
              { label: '引用文章', value: '2,463', unit: '篇' },
              { label: '识别竞品', value: '69', unit: '家' }
            ].map((metric, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[#004CE5]/15 bg-[#004CE5]/[0.02] py-5 px-4 flex flex-col justify-center shadow-[0_4px_15px_rgba(0,76,229,0.005)] hover:border-[#004CE5]/30 transition-all duration-300"
              >
                <span className="text-[1rem] font-bold text-zinc-600 tracking-wider mb-1 block">{metric.label}</span>
                <span className="text-2xl sm:text-[2.1rem] font-black text-zinc-950 font-['Montserrat',sans-serif] leading-tight">
                  <span className="text-[#004CE5]">{metric.value}</span>
                  {metric.unit && <span className="text-sm font-extrabold text-zinc-600 font-sans ml-1">{metric.unit}</span>}
                </span>
              </div>
            ))}
          </div>

          {/* Executive Summary Banner */}
          <div className="rounded-2xl border border-[#004CE5]/20 bg-slate-50/[0.5] py-4 px-6 flex items-center shadow-[0_4px_15px_rgba(0,76,229,0.005)]">
            <p className="text-lg sm:text-[1.32rem] font-black text-zinc-800 leading-relaxed">
              <span className="text-[#004CE5] font-black mr-2">【总述】</span>
              目前数据情况来看，处于第一梯队，整体 KPI 完成，之后整体策略是保持稳定，减少波动。
            </p>
          </div>
        </div>

        {/* Image Box (Optimized to 310px to perfectly balance the layout and cover vertical space beautifully) */}
        <div className="h-[310px] w-full rounded-2xl border border-[#004CE5]/25 bg-white shadow-[0_10px_30px_rgba(0,76,229,0.02)] overflow-hidden relative group hover:border-[#004CE5]/40 transition-colors duration-300">
          <div className="absolute inset-0 bg-white flex items-center justify-center p-2">
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
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-slate-50 to-zinc-100">
                <div className="w-12 h-12 rounded-xl bg-[#004CE5]/10 text-[#004CE5] flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>
                </div>
                <h3 className="text-base font-bold text-zinc-800">数据可视化分析图</h3>
                <p className="text-xs text-zinc-400 mt-0.5 max-w-md">各大AI平台核心数据对比分析图</p>
              </div>
            )}
          </div>
        </div>

        {/* Table Area (Luxurious balanced layout) */}
        <div className="rounded-2xl border border-[#004CE5]/25 bg-white shadow-[0_10px_30px_rgba(0,76,229,0.02)] overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#004CE5]/[0.02] border-b border-[#004CE5]/20">
                <th className="py-6 px-6 text-xl font-bold text-zinc-800 tracking-wider w-[18%]">核心数据指标</th>
                <th className="py-6 px-6 text-xl font-bold text-zinc-800 tracking-wider w-[10%]">4月</th>
                <th className="py-6 px-6 text-xl font-bold text-zinc-800 tracking-wider w-[22%]">5月 (本月)</th>
                <th className="py-6 px-6 text-xl font-bold text-zinc-800 tracking-wider w-[50%]">数据说明</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, idx) => (
                <tr key={idx} className="border-b border-[#004CE5]/10 last:border-none hover:bg-[#004CE5]/[0.01] transition-colors">
                  <td className="py-4 px-6">
                    <span className="font-extrabold text-zinc-900 text-2xl">{row.metric}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-3xl font-bold text-zinc-500 font-['Montserrat',sans-serif]">{row.before}</span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl font-black text-[#004CE5] tracking-tight font-['Montserrat',sans-serif]">{row.after}</span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-sm font-extrabold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500"><polyline points="18 15 12 9 6 15" /></svg>
                        提升 {row.diff}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <p className="text-lg sm:text-[1.12rem] leading-relaxed text-zinc-700 font-normal">{row.desc}</p>
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
