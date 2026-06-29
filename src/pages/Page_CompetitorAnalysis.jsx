import React from 'react';

export default function Page_CompetitorAnalysis() {
  const mentionRateData = [
    { name: '菜鸟', value: '84.7%' },
    { name: '快递100', value: '58.6%' },
    { name: '支付宝-我的快递', value: '38.6%' },
    { name: '快递鸟', value: '21.4%' },
    { name: '17TRACK', value: '12.4%' },
  ];

  const top1RateData = [
    { name: '菜鸟', value: '68.8%' },
    { name: '快递100', value: '12.0%' },
    { name: '支付宝-我的快递', value: '8.4%' },
    { name: '快递鸟', value: '2.8%' },
    { name: '阿里巴巴1688', value: '1.4%' },
  ];

  const avgRankData = [
    { name: '菜鸟', value: 'NO. 1.5' },
    { name: '快递100', value: 'NO. 2.4' },
    { name: '支付宝-我的快递', value: 'NO. 3.0' },
    { name: '快递鸟', value: 'NO. 3.4' },
    { name: '17TRACK', value: 'NO. 3.6' },
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
                const isBrand = item.name === '菜鸟';
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
                    className={`border-b border-zinc-100 last:border-none transition-colors duration-150 ${
                      isBrand ? 'bg-[#004CE5]/[0.02] hover:bg-[#004CE5]/[0.04]' : 'hover:bg-slate-50/40'
                    }`}
                  >
                    <td className="py-2.5 px-3 flex justify-center items-center">{rankElement}</td>
                    <td className={`py-2.5 px-2 text-xl font-extrabold truncate ${isBrand ? 'text-[#004CE5]' : 'text-zinc-700'}`}>
                      {item.name}
                    </td>
                    <td
                      className={`py-2.5 px-4 text-2xl font-bold text-right pr-6 font-['Montserrat',sans-serif] ${
                        isBrand ? 'text-[#004CE5] font-black' : 'text-zinc-900'
                      }`}
                    >
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
    <div className="w-full h-full flex flex-col px-12 sm:px-16 pt-[22px] pb-8 text-zinc-900 font-sans justify-between overflow-hidden">
      {/* Title Area */}
      <div className="flex items-center shrink-0 mb-3">
        <div className="w-2 h-10 bg-[#004CE5] rounded-full shadow-[0_0_15px_rgba(0,76,229,0.25)]" />
        <h1 className="text-4xl font-black text-zinc-900 tracking-wider ml-4">
          菜鸟 竞品分析
        </h1>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col min-h-0 justify-start">
        {/* Three Tables Side-by-Side Area */}
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
                1. 快递100是主要竞争对手，提及率达到58.6%，且平均位次在NO. 2.4，表现较为稳定。但在首推率（Top1提及率仅12.0%）上与菜鸟（68.8%）差距巨大，威胁尚在可控范围。
              </p>
              <div className="h-px bg-[#004CE5]/10 my-1" />
              <p className="text-[22px] leading-relaxed text-zinc-800 font-bold">
                2. 支付宝-我的快递依托阿里生态，有一定伴随展现（提及率38.6%），位次居中（NO. 3.0），但由于并非独立物流件查询平台，首推转化能力较低。
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
                  title: '首推顺位绝对占据',
                  desc: '菜鸟的Top1提及率（68.8%）和平均位次（NO. 1.5）优势非常显著。需持续强化核心长尾物流词的语料覆盖，巩固护城河。',
                },
                {
                  num: '02',
                  desc: '针对DeepSeek和通义千问推荐中出现的竞品分流，增投精细化对比文章，突显菜鸟查件的全面性与免登录便捷性。',
                  title: '特定大模型专项突破',
                },
                {
                  num: '03',
                  desc: '利用快递鸟等在位次上的劣势，在“亲情代取”、“全包裹管理”等特色长尾场景下继续深化占位，挤压竞争对手的AI生存空间。',
                  title: '细分场景防御拦截',
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
