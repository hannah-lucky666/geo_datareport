import React from 'react';
import report from '../data/yuanyueAugustReport.json';

const { compare, before, august } = report;

// 名次样式沿用原版：1/2/3 奖牌圆标，其余用数字。本品用真实 rank，不要写成第 5。
function RankBadge({ rank, index }) {
  const n = rank || index + 1;
  if (n === 1) {
    return (
      <div className="w-10 h-10 rounded-full bg-[#FFD100] text-zinc-900 flex items-center justify-center font-black text-xl shadow-sm">1</div>
    );
  }
  if (n === 2) {
    return (
      <div className="w-10 h-10 rounded-full bg-zinc-200 text-zinc-600 flex items-center justify-center font-black text-xl">2</div>
    );
  }
  if (n === 3) {
    return (
      <div className="w-10 h-10 rounded-full bg-[#FFC085] text-zinc-800 flex items-center justify-center font-black text-xl shadow-sm">3</div>
    );
  }
  return <div className="text-zinc-400 font-bold text-[22px] text-center w-10">{n}</div>;
}

function withGap(rows) {
  const out = [];
  rows.forEach((row, i) => {
    const prevRank = i > 0 ? (rows[i - 1].rank ?? i) : 0;
    const currRank = row.rank ?? i + 1;
    if (i > 0 && currRank > prevRank + 1) out.push({ type: 'gap' });
    out.push({ type: 'row', ...row });
  });
  return out;
}

export default function Page_CompetitorAnalysis() {
  const renderTable = (title, headers, rows) => {
    const display = withGap(rows);
    return (
      <div className="flex flex-col gap-3 h-full min-h-0">
        <h3 className="text-2xl font-extrabold text-zinc-800 tracking-wide pl-1.5 flex items-center gap-2 shrink-0">
          <span className="w-1.5 h-4.5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.25)]" />
          {title}
        </h3>
        <div className="flex-grow rounded-2xl border border-zinc-200 bg-white shadow-[0_6px_25px_rgba(0,0,0,0.01)] overflow-hidden flex flex-col p-4">
          <table className="w-full text-left border-collapse table-fixed">
            <thead>
              <tr className="border-b border-zinc-200 bg-slate-50/50">
                <th className="py-3 px-3 w-[16%]"></th>
                <th className="py-3 px-2 text-lg font-black text-zinc-500 w-[54%]">{headers[0]}</th>
                <th className="py-3 px-4 text-lg font-black text-zinc-500 w-[30%] text-right pr-6">{headers[1]}</th>
              </tr>
            </thead>
            <tbody>
              {display.map((item, idx) => {
                if (item.type === 'gap') {
                  return (
                    <tr key={`gap-${idx}`}>
                      <td colSpan={3} className="h-8 text-center text-zinc-300 font-black text-xl tracking-[0.4em] leading-none select-none">
                        ···
                      </td>
                    </tr>
                  );
                }
                const isBrand = !!item.isTarget;
                return (
                  <tr
                    key={`${item.name}-${item.rank ?? idx}`}
                    className={`border-b border-zinc-100 last:border-none hover:bg-slate-50/50 transition-colors ${isBrand ? 'bg-[#004CE5]/[0.03]' : ''}`}
                  >
                    <td className="h-[68px] py-0 px-3 align-middle">
                      <div className="flex justify-center">
                        <RankBadge rank={item.rank} index={idx} />
                      </div>
                    </td>
                    <td className="h-[68px] py-0 px-2 align-middle">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className={`text-[1.25rem] truncate ${isBrand ? 'font-black text-[#004CE5]' : 'font-bold text-zinc-800'}`}>
                          {item.name}
                        </span>
                        {isBrand && (
                          <span className="px-2 py-0.5 text-[0.75rem] font-bold rounded bg-zinc-100 text-zinc-500 border border-zinc-200/50 shrink-0">
                            目标产品
                          </span>
                        )}
                      </div>
                    </td>
                    <td className={`h-[68px] py-0 px-4 text-right pr-6 align-middle text-[30px] font-black font-['Montserrat',sans-serif] ${isBrand ? 'text-[#004CE5]' : 'text-zinc-700'}`}>
                      {item.value}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-full flex flex-col px-12 sm:px-16 pt-[22px] pb-8 text-zinc-800 font-sans justify-between overflow-hidden">
      <div className="flex items-center shrink-0 mb-3">
        <div className="w-2 h-10 bg-[#004CE5] rounded-full shadow-[0_0_15px_rgba(0,76,229,0.25)]" />
        <h1 className="text-4xl font-black text-zinc-900 tracking-wider ml-4 flex items-center">
          美素佳儿源悦竞品分析
          <span className="text-2xl font-bold text-zinc-400 ml-4">（2026年8月）</span>
        </h1>
      </div>

      <div className="flex-grow flex flex-col min-h-0 justify-start">
        <div className="grid grid-cols-3 gap-6 h-[490px] shrink-0 mt-4">
          {renderTable('提及率排名', ['产品名称', '提及率'], compare.mention_rate)}
          {renderTable('Top1提及率排名', ['产品名称', 'Top1提及率'], compare.top1)}
          {renderTable('竞品排名', ['产品名称', '影响力指数'], compare.influence)}
        </div>

        <div className="grid grid-cols-2 gap-8 h-[340px] shrink-0 mt-[60px]">
          <div className="flex flex-col gap-3 h-full min-h-0">
            <h2 className="text-2xl font-black text-zinc-900 flex items-center gap-2 shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5]" />
              潜在竞争分析：
            </h2>
            <div className="flex-grow rounded-2xl bg-[#004CE5]/5 border border-[#004CE5]/20 p-5 flex flex-col justify-evenly min-h-0">
              <p className="text-[22px] leading-relaxed text-zinc-800 font-bold">
                1. 领先的四款产品分属合生元、爱他美、飞鹤、伊利四大集团，均为沉淀多年的主力单品：派星提及率 51.6%、Top1 14.8%，所属集团合生元占据竞品排名 NO.1；卓傲、星飞帆、金领冠珍护铂萃以 31%—34% 构成第二梯队。
              </p>
              <div className="h-px bg-[#004CE5]/10 my-1" />
              <p className="text-[22px] leading-relaxed text-zinc-800 font-bold">
                2. 品牌层存量差距同样明显：AI回答共出现36个品牌、102款产品，君乐宝、金领冠、雀巢各10款、爱他美8款同时在榜，美素佳儿仅4款。源悦本月提及率15.6%（排名 NO.12），影响力指数由{before.influence_score}升至{august.influence_score}、竞品排名 NO.41→NO.15，进位最快且Top1提及率已破零至1.6%（排名 NO.12）。
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 h-full min-h-0">
            <h2 className="text-2xl font-black text-zinc-900 flex items-center gap-2 shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5]" />
              重点优化策略：
            </h2>
            <div className="flex-grow rounded-2xl bg-[#004CE5]/[0.015] border border-[#004CE5]/15 p-5 flex flex-col justify-evenly min-h-0">
              {[
                { num: '01', title: '放大首推成果', desc: 'Top1已破零至1.6%，针对派星、星飞帆垄断的Top1场景，继续加码奶源、蛋白结构等高转化词条的定性对比内容。' },
                { num: '02', title: '扩大提及广度', desc: '把“婴儿奶粉排行榜”“口碑好的奶粉”等泛选购词从单点提及扩展到稳定进榜，缩小与第二梯队的差距。' },
                { num: '03', title: '提升竞品排名', desc: '行业影响力现居 NO.15，需在成分与配方对比类内容中强化第一顺位表达，继续向头部集团靠拢。' },
              ].map((strat, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-[#004CE5] font-black text-2xl shrink-0 mt-0.5">{strat.num}</span>
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
    </div>
  );
}
