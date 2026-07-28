import React from 'react';
import report from '../data/musiJulyReport.json';

const { products, scope } = report;

function fmtPct(v) {
  return `${Number(v)}%`;
}

function fmtPos(v) {
  const n = Number(v);
  return Number.isInteger(n) ? String(n) : n.toFixed(1).replace(/\.0$/, '');
}

export default function Page_CoreDataOverview() {
  const rows = [
    { key: 'smart', name: '慕思智能床' },
    { key: 'ai', name: '慕思AI床垫' },
    { key: 'mattress', name: '慕思床垫' },
  ];

  return (
    <div className="w-full h-full flex flex-col px-12 sm:px-16 pt-[22px] pb-8 text-zinc-800 font-sans justify-between overflow-hidden">
      <div className="flex items-center shrink-0 mb-[27px]">
        <div className="w-2 h-10 bg-[#004CE5] rounded-full shadow-[0_0_15px_rgba(0,76,229,0.25)]" />
        <h1 className="text-4xl font-black text-zinc-900 tracking-wider ml-4">
          核心数据总览 <span className="text-2xl font-bold text-zinc-400 ml-4">（2026年7月）</span>
        </h1>
      </div>

      <div className="rounded-xl border border-zinc-200 bg-slate-50/40 py-3.5 px-6 shrink-0 mb-4">
        <p className="text-[1.35rem] leading-relaxed text-zinc-500 font-bold">
          本次监测周期覆盖 <span className="font-['Montserrat',sans-serif] text-[#004CE5] font-black">{scope.platforms}</span> 个核心AI平台，针对重点监测词条 <span className="font-['Montserrat',sans-serif] text-[#004CE5] font-black">{scope.entries}</span> 个进行查询，追踪相关问答数据共计 <span className="font-['Montserrat',sans-serif] text-[#004CE5] font-black">{scope.conversations.toLocaleString()}</span> 篇次，整体项目持续推进。
        </p>
      </div>

      <div className="rounded-2xl border border-zinc-300 bg-white shadow-[0_4px_30px_rgba(0,0,0,0.015)] overflow-hidden flex-1 min-h-0 flex flex-col mb-[36px]">
        <table className="w-full text-left border-collapse table-fixed flex-1">
          <thead>
            <tr className="text-white">
              <th rowSpan={2} className="py-5 px-8 text-2xl font-black text-center w-[22%] bg-zinc-800 border-r border-white/10">产品</th>
              <th colSpan={2} className="py-4 px-8 text-2xl font-black text-center border-l border-white/10 bg-[#004CE5]">提及率</th>
              <th colSpan={2} className="py-4 px-8 text-2xl font-black text-center border-l border-white/10 bg-[#1A62E5]">平均提及位次</th>
              <th colSpan={2} className="py-4 px-8 text-2xl font-black text-center border-l border-white/10 bg-[#2E75FF]">竞品排名</th>
            </tr>
            <tr className="bg-slate-50/80 border-b border-zinc-200 text-[#004CE5] font-black text-2xl">
              <th className="py-2.5 px-4 text-center border-l border-zinc-200 w-[13%]">6月</th>
              <th className="py-2.5 px-4 text-center border-l border-zinc-200 border-r-2 border-[#004CE5]/15 w-[13%]">7月</th>
              <th className="py-2.5 px-4 text-center border-l border-zinc-200 w-[13%]">6月</th>
              <th className="py-2.5 px-4 text-center border-l border-zinc-200 border-r-2 border-[#004CE5]/15 w-[13%]">7月</th>
              <th className="py-2.5 px-4 text-center border-l border-zinc-200 w-[13%]">6月</th>
              <th className="py-2.5 px-4 text-center border-l border-zinc-200 border-r-2 border-[#004CE5]/15 w-[13%]">7月</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const p = products[row.key];
              return (
                <tr key={row.key} className="border-b border-zinc-200 bg-white hover:bg-slate-50/20 transition-colors">
                  <td className="py-1.5 px-8 border-r border-zinc-200 bg-slate-50/10 text-center font-black text-2xl text-zinc-800">
                    {row.name}
                  </td>
                  <td className="py-1.5 px-4 text-center border-r border-zinc-200 text-4xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">{fmtPct(p.june.mention_rate)}</td>
                  <td className="py-1.5 px-4 text-center border-r-2 border-[#004CE5]/15 text-4xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">{fmtPct(p.july.mention_rate)}</td>
                  <td className="py-1.5 px-4 text-center border-r border-zinc-200 text-4xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">{fmtPos(p.june.avg_position)}</td>
                  <td className="py-1.5 px-4 text-center border-r-2 border-[#004CE5]/15 text-4xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">{fmtPos(p.july.avg_position)}</td>
                  <td className="py-1.5 px-4 text-center border-r border-zinc-200 text-4xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">NO. {p.june.influence_rank}</td>
                  <td className="py-1.5 px-4 text-center border-r-2 border-[#004CE5]/15 text-4xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">NO. {p.july.influence_rank}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-2 gap-6 shrink-0 h-[195px]">
        <div className="rounded-2xl border border-[#004CE5]/15 bg-[#004CE5]/[0.01] px-6 py-4 flex flex-col shadow-[0_4px_25px_rgba(0,76,229,0.005)]">
          <div className="flex items-center gap-2.5 mb-2 shrink-0">
            <span className="w-3 h-3 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.3)] animate-pulse" />
            <h3 className="text-2xl font-black text-zinc-900 tracking-wider">现状总结</h3>
          </div>
          <div className="flex-1 flex items-center min-h-0">
            <p className="text-[22px] leading-snug text-zinc-700 font-bold">
              智能床与AI床垫仍稳居竞品第一，但提及率较6月略有回落；普通床垫本月继续上行，提及率由66.7%提升至71.7%，稳居竞品NO.1，平均位次由5.2前移至4.9。
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-emerald-500/15 bg-emerald-500/[0.01] px-6 py-4 flex flex-col shadow-[0_4px_25px_rgba(16,185,129,0.005)]">
          <div className="flex items-center gap-2.5 mb-2 shrink-0">
            <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.3)] animate-pulse" />
            <h3 className="text-2xl font-black text-zinc-900 tracking-wider">重点优化策略</h3>
          </div>
          <div className="flex-1 flex items-center min-h-0">
            <p className="text-[22px] leading-snug text-zinc-700 font-bold">
              智能床需重点防守舒福德在Top1与位次上的反超；AI床垫应补强高频对比与售后相关语料，遏制提及率回落；普通床垫继续放大护脊释压与多价位段内容，巩固已取得的第一名优势。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
