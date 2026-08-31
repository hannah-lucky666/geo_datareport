import React from 'react';
import report from '../data/yuanyueAugustReport.json';

const { scope, before, august } = report;

function fmtPct(v) {
  return `${Number(v)}%`;
}

const BEFORE_LABEL = report.meta.before_label;
const AUGUST_LABEL = report.meta.august_label;

export default function Page_CoreDataOverview() {
  const rows = [{ key: 'all', name: '美素佳儿源悦', before, august }];

  return (
    <div className="w-full h-full flex flex-col px-12 sm:px-16 pt-[22px] pb-8 text-zinc-800 font-sans overflow-hidden">
      <div className="flex items-center shrink-0 mb-[27px]">
        <div className="w-2 h-10 bg-[#004CE5] rounded-full shadow-[0_0_15px_rgba(0,76,229,0.25)]" />
        <h1 className="text-4xl font-black text-zinc-900 tracking-wider ml-4">
          核心数据总览 <span className="text-2xl font-bold text-zinc-400 ml-4">（2026年8月）</span>
        </h1>
      </div>

      <div className="rounded-xl border border-zinc-200 bg-slate-50/40 py-3.5 px-6 shrink-0 mb-4">
        <p className="text-[1.35rem] leading-relaxed text-zinc-500 font-bold">
          本次监测周期覆盖 <span className="font-['Montserrat',sans-serif] text-[#004CE5] font-black">{scope.platforms}</span> 个核心AI平台，针对重点监测词条 <span className="font-['Montserrat',sans-serif] text-[#004CE5] font-black">{scope.entries}</span> 个进行查询，追踪相关问答数据共计 <span className="font-['Montserrat',sans-serif] text-[#004CE5] font-black">{scope.conversations.toLocaleString()}</span> 篇次，整体项目持续推进。
        </p>
      </div>

      <div className="rounded-2xl border border-zinc-300 bg-white shadow-[0_4px_30px_rgba(0,0,0,0.015)] overflow-hidden shrink-0 flex flex-col mb-[30px]">
        <table className="w-full text-left border-collapse table-fixed">
          <thead>
            <tr className="text-white">
              <th rowSpan={2} className="py-5 px-4 text-2xl font-black text-center w-[14%] bg-zinc-800 border-r border-white/10">产品</th>
              <th colSpan={2} className="py-4 px-2 text-2xl font-black text-center border-l border-white/10 bg-[#004CE5]">提及率</th>
              <th colSpan={2} className="py-4 px-2 text-2xl font-black text-center border-l border-white/10 bg-[#1A62E5]">Top1 提及率</th>
              <th colSpan={2} className="py-4 px-2 text-2xl font-black text-center border-l border-white/10 bg-[#2A6CF0]">Top3 提及率</th>
              <th colSpan={2} className="py-4 px-2 text-2xl font-black text-center border-l border-white/10 bg-[#2E75FF]">竞品排名</th>
            </tr>
            <tr className="bg-slate-50/80 border-b border-zinc-200 text-[#004CE5] font-black text-lg">
              {[0, 1, 2, 3].map((i) => (
                <React.Fragment key={i}>
                  <th className="py-2.5 px-1 text-center border-l border-zinc-200 w-[10.75%] whitespace-nowrap">{BEFORE_LABEL}</th>
                  <th className="py-2.5 px-1 text-center border-l border-zinc-200 border-r-2 border-[#004CE5]/15 w-[10.75%] whitespace-nowrap">{AUGUST_LABEL}</th>
                </React.Fragment>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.key} className="border-b border-zinc-200 bg-white hover:bg-slate-50/20 transition-colors">
                <td className="py-[60px] px-4 border-r border-zinc-200 bg-slate-50/10 text-center font-black text-3xl text-zinc-800">
                  {row.name}
                </td>
                <td className="py-[60px] px-2 text-center border-r border-zinc-200 text-5xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">{fmtPct(row.before.mention_rate)}</td>
                <td className="py-[60px] px-2 text-center border-r-2 border-[#004CE5]/15 text-5xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">{fmtPct(row.august.mention_rate)}</td>
                <td className="py-[60px] px-2 text-center border-r border-zinc-200 text-5xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">{fmtPct(row.before.top1_mention_rate)}</td>
                <td className="py-[60px] px-2 text-center border-r-2 border-[#004CE5]/15 text-5xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">{fmtPct(row.august.top1_mention_rate)}</td>
                <td className="py-[60px] px-2 text-center border-r border-zinc-200 text-5xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">{fmtPct(row.before.top3_mention_rate)}</td>
                <td className="py-[60px] px-2 text-center border-r-2 border-[#004CE5]/15 text-5xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">{fmtPct(row.august.top3_mention_rate)}</td>
                <td className="py-[60px] px-2 text-center border-r border-zinc-200 text-5xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">NO. {row.before.influence_rank}</td>
                <td className="py-[60px] px-2 text-center border-r-2 border-[#004CE5]/15 text-5xl font-bold text-zinc-900 font-['Montserrat',sans-serif]">NO. {row.august.influence_rank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-2 gap-6 flex-1 min-h-0">
        <div className="rounded-2xl border border-[#004CE5]/15 bg-[#004CE5]/[0.01] px-6 py-5 flex flex-col shadow-[0_4px_25px_rgba(0,76,229,0.005)]">
          <div className="flex items-center gap-2.5 mb-3 shrink-0">
            <span className="w-3 h-3 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.3)] animate-pulse" />
            <h3 className="text-2xl font-black text-zinc-900 tracking-wider">现状总结</h3>
          </div>
          <div className="flex-1 flex flex-col justify-evenly min-h-0">
            <p className="text-[22px] leading-relaxed text-zinc-800 font-bold">
              1. 提及率由优化前的4.1%升至15.6%，竞品排名由NO.41跃升至NO.15，是本月进位幅度最大的品牌。
            </p>
            <div className="h-px bg-[#004CE5]/10" />
            <p className="text-[22px] leading-relaxed text-zinc-800 font-bold">
              2. DeepSeek增幅最明显，提及率由1.6%升至19.7%；豆包由6.6%升至11.5%，两端差距仍在，DeepSeek侧已验证的路径需同步到豆包。
            </p>
            <div className="h-px bg-[#004CE5]/10" />
            <p className="text-[22px] leading-relaxed text-zinc-800 font-bold">
              3. 61个监测词条的有效覆盖数由5个增至18个，Top3提及率由0升至2.5%，Top1提及率由0升至1.6%，已进入首推顺位。
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-emerald-500/15 bg-emerald-500/[0.01] px-6 py-5 flex flex-col shadow-[0_4px_25px_rgba(16,185,129,0.005)]">
          <div className="flex items-center gap-2.5 mb-3 shrink-0">
            <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.3)] animate-pulse" />
            <h3 className="text-2xl font-black text-zinc-900 tracking-wider">重点优化策略</h3>
          </div>
          <div className="flex-1 flex flex-col justify-evenly min-h-0">
            {[
              { num: '01', title: '复制成功路径', desc: '把DeepSeek侧已验证的高引用内容模板同步到豆包侧，拉平两个平台的提及率差距。' },
              { num: '02', title: '补齐词条覆盖', desc: '针对61个词条中尚未破零的43个补充语料，优先攻口碑榜单类等泛选购场景。' },
              { num: '03', title: '放大首推成果', desc: 'Top1已破零至1.6%，在奶源、蛋白结构等成分对比场景继续强化第一顺位表达，把首推占比做上去。' },
            ].map((strat) => (
              <div key={strat.num} className="flex items-start gap-3">
                <span className="text-emerald-600 font-black text-2xl shrink-0 mt-0.5 font-['Montserrat',sans-serif]">{strat.num}</span>
                <p className="text-[22px] leading-relaxed text-zinc-800 font-bold flex-grow min-h-0">
                  <span className="text-zinc-900 font-black">{strat.title}：</span>
                  {strat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
