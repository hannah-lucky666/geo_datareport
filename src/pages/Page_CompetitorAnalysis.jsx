import React from 'react';

export default function Page_CompetitorAnalysis() {
  const TARGET = '古井贡酒·古16';

  // 数据口径：2026-07-22（数据系统项目 351）
  const mentionRateData = [
    { name: '水晶剑', value: '88.3%' },
    { name: TARGET, value: '85.0%' },
    { name: '红花郎15', value: '48.3%' },
    { name: '青花20', value: '46.7%' },
    { name: '红花郎10', value: '41.7%' },
  ];

  const top1RateData = [
    { name: TARGET, value: '60.0%' },
    { name: '水晶剑', value: '15.0%' },
    { name: '普五八代', value: '10.0%' },
    { name: '红花郎15', value: '3.3%' },
    { name: '飞天茅台', value: '3.3%' },
  ];

  const avgRankData = [
    { name: TARGET, value: 'NO. 3.3' },
    { name: '水晶剑', value: 'NO. 3.6' },
    { name: '红花郎15', value: 'NO. 6.9' },
    { name: '红花郎10', value: 'NO. 7.3' },
    { name: '普五八代', value: 'NO. 7.6' },
  ];

  const renderTable = (title, headers, data) => {
    return (
      <div className="flex flex-col gap-3 h-full min-h-0">
        <h3 className="text-2xl font-extrabold text-zinc-800 tracking-wide pl-1.5 flex items-center gap-2 shrink-0">
          <span className="w-1.5 h-4.5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.25)]" />
          {title}
        </h3>
        <div className="flex-grow rounded-2xl border border-zinc-200 bg-white shadow-[0_6px_25px_rgba(0,0,0,0.01)] overflow-hidden flex flex-col p-4">
          <table className="w-full text-left border-collapse table-fixed flex-grow h-full">
            <thead>
              <tr className="border-b border-zinc-200 bg-slate-50/50">
                <th className="py-3 px-3 w-[18%]"></th>
                <th className="py-3 px-2 text-lg font-black text-zinc-500 w-[52%]">{headers[0]}</th>
                <th className="py-3 px-4 text-lg font-black text-zinc-500 w-[30%] text-right pr-6">{headers[1]}</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, idx) => {
                const isBrand = item.name === TARGET;
                const rank = idx + 1;

                let rankElement;
                if (rank === 1) {
                  rankElement = (
                    <div className="w-10 h-10 rounded-full bg-[#FFD100] text-zinc-900 flex items-center justify-center font-black text-xl shadow-sm">
                      1
                    </div>
                  );
                } else if (rank === 2) {
                  rankElement = (
                    <div className="w-10 h-10 rounded-full bg-zinc-200 text-zinc-600 flex items-center justify-center font-black text-xl">
                      2
                    </div>
                  );
                } else if (rank === 3) {
                  rankElement = (
                    <div className="w-10 h-10 rounded-full bg-[#FFC085] text-zinc-800 flex items-center justify-center font-black text-xl shadow-sm">
                      3
                    </div>
                  );
                } else {
                  rankElement = (
                    <div className="text-zinc-400 font-bold text-[22px] text-center w-10">
                      {rank}
                    </div>
                  );
                }

                return (
                  <tr
                    key={idx}
                    className={`border-b border-zinc-100 last:border-none hover:bg-slate-50/50 transition-colors ${isBrand ? 'bg-[#004CE5]/[0.03]' : ''
                      }`}
                  >
                    <td className="py-3 px-3 align-middle">
                      <div className="flex justify-center">{rankElement}</div>
                    </td>
                    <td className="py-3 px-2 align-middle">
                      <div className="flex items-center flex-wrap gap-2">
                        <span className={`text-[1.4rem] ${isBrand ? 'font-black text-[#004CE5]' : 'font-bold text-zinc-800'}`}>
                          {item.name}
                        </span>
                        {isBrand && (
                          <span className="px-2 py-0.5 text-[0.8rem] font-bold rounded bg-zinc-100 text-zinc-500 border border-zinc-200/50">
                            目标产品
                          </span>
                        )}
                      </div>
                    </td>
                    <td className={`py-3 px-4 text-right pr-6 align-middle text-[32px] font-black font-['Montserrat',sans-serif] ${isBrand ? 'text-[#004CE5]' : 'text-zinc-700'
                      }`}>
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
      {/* Title Area */}
      <div className="flex items-center shrink-0 mb-3">
        <div className="w-2 h-10 bg-[#004CE5] rounded-full shadow-[0_0_15px_rgba(0,76,229,0.25)]" />
        <h1 className="text-4xl font-black text-zinc-900 tracking-wider ml-4 flex items-center">
          古16竞品分析
        </h1>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col min-h-0 justify-start">
        {/* Three Tables Side-by-Side Area (Taller height - 490px, completely untouched) */}
        <div className="grid grid-cols-3 gap-6 h-[490px] shrink-0 mt-4">
          {renderTable('提及率排名', ['产品名称', '提及率'], mentionRateData)}
          {renderTable('Top1提及率排名', ['产品名称', 'Top1提及率'], top1RateData)}
          {renderTable('提及位次排名', ['产品名称', '平均提及位次'], avgRankData)}
        </div>

        {/* Bottom Spacious Dashboard Area (Increased to 340px for taller containers, exactly 60px gap below tables) */}
        <div className="grid grid-cols-2 gap-8 h-[340px] shrink-0 mt-[60px]">
          {/* Left Column: 潜在竞争分析 */}
          <div className="flex flex-col gap-3 h-full min-h-0">
            <h2 className="text-2xl font-black text-zinc-900 flex items-center gap-2 shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5]" />
              潜在竞争分析：
            </h2>
            <div className="flex-grow rounded-2xl bg-[#004CE5]/5 border border-[#004CE5]/20 p-5 flex flex-col justify-evenly min-h-0">
              <p className="text-[22px] leading-relaxed text-zinc-800 font-bold">
                1. 水晶剑已反超为本月最大威胁：提及率88.3%高于古16的85.0%，平均位次NO. 3.6紧追古16（NO. 3.3），同台竞争明显升温。
              </p>
              <div className="h-px bg-[#004CE5]/10 my-1" />
              <p className="text-[22px] leading-relaxed text-zinc-800 font-bold">
                2. 尽管提及率短暂落后，古16 Top1提及率仍达60.0%，远高于水晶剑（15.0%）与普五八代（10.0%），首推优势依然稳固。
              </p>
            </div>
          </div>

          {/* Right Column: 重点优化策略 */}
          <div className="flex flex-col gap-3 h-full min-h-0">
            <h2 className="text-2xl font-black text-zinc-900 flex items-center gap-2 shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5]" />
              重点优化策略：
            </h2>
            <div className="flex-grow rounded-2xl bg-[#004CE5]/[0.015] border border-[#004CE5]/15 p-5 flex flex-col justify-evenly min-h-0">
              {[
                {
                  num: '01',
                  title: '提及率夺回',
                  desc: '针对水晶剑反超（88.3% vs 85.0%），加码核心婚宴/宴席词条曝光，尽快夺回提及率第一。',
                },
                {
                  num: '02',
                  title: '首推位巩固',
                  desc: '古16 Top1仍高达60.0%，需继续稳住高转化长尾词，拉大与水晶剑（15.0%）的首推差距。',
                },
                {
                  num: '03',
                  title: '第二梯队拦截',
                  desc: '红花郎15、青花20提及率已升至46%-48%，位次却仍在NO. 6.9之后，应在同价位场景做精细化对比拦截。',
                },
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
