import React from 'react';
import report from '../data/jinjiuJulyReport.json';

function isTargetBrand(name, brandMatch) {
  const a = String(name || '').replace(/\s+/g, '');
  const b = String(brandMatch || '').replace(/\s+/g, '');
  return a === b || a.includes(b) || b.includes(a);
}

function createCompetitorPage({
  productKey,
  title,
  analysis,
  strategies,
}) {
  const data = report.products[productKey];
  const brandMatch = data.brandMatch;

  const renderTable = (tableTitle, headers, rows) => (
    <div className="flex flex-col gap-3 h-full min-h-0">
      <h3 className="text-2xl font-extrabold text-zinc-800 tracking-wide pl-1.5 flex items-center gap-2 shrink-0">
        <span className="w-1.5 h-4.5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.25)]" />
        {tableTitle}
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
            {rows.map((item, idx) => {
              const isBrand = isTargetBrand(item.name, brandMatch);
              const rank = idx + 1;
              let rankElement;
              if (rank === 1) {
                rankElement = (
                  <div className="w-10 h-10 rounded-full bg-[#FFD100] text-zinc-900 flex items-center justify-center font-black text-xl shadow-sm">1</div>
                );
              } else if (rank === 2) {
                rankElement = (
                  <div className="w-10 h-10 rounded-full bg-zinc-200 text-zinc-600 flex items-center justify-center font-black text-xl">2</div>
                );
              } else if (rank === 3) {
                rankElement = (
                  <div className="w-10 h-10 rounded-full bg-[#FFC085] text-zinc-800 flex items-center justify-center font-black text-xl shadow-sm">3</div>
                );
              } else {
                rankElement = <div className="text-zinc-400 font-bold text-[22px] text-center w-10">{rank}</div>;
              }

              return (
                <tr
                  key={idx}
                  className={`border-b border-zinc-100 last:border-none hover:bg-slate-50/50 transition-colors ${isBrand ? 'bg-[#004CE5]/[0.03]' : ''}`}
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
                  <td className={`py-3 px-4 text-right pr-6 align-middle text-[32px] font-black font-['Montserrat',sans-serif] ${isBrand ? 'text-[#004CE5]' : 'text-zinc-700'}`}>
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

  return function CompetitorPage() {
    return (
      <div className="w-full h-full flex flex-col px-12 sm:px-16 pt-[22px] pb-8 text-zinc-800 font-sans justify-between overflow-hidden">
        <div className="flex items-center shrink-0 mb-3">
          <div className="w-2 h-10 bg-[#004CE5] rounded-full shadow-[0_0_15px_rgba(0,76,229,0.25)]" />
          <h1 className="text-4xl font-black text-zinc-900 tracking-wider ml-4 flex items-center">
            {title}
            <span className="text-2xl font-bold text-zinc-400 ml-4">（2026年7月）</span>
          </h1>
        </div>

        <div className="flex-grow flex flex-col min-h-0 justify-start">
          <div className="grid grid-cols-3 gap-6 h-[490px] shrink-0 mt-4">
            {renderTable('提及率排名', ['产品名称', '提及率'], data.compare.mention_rate)}
            {renderTable('Top1提及率排名', ['产品名称', 'Top1提及率'], data.compare.top1)}
            {renderTable('提及位次排名', ['产品名称', '平均提及位次'], data.compare.position)}
          </div>

          <div className="grid grid-cols-2 gap-8 h-[340px] shrink-0 mt-[60px]">
            <div className="flex flex-col gap-3 h-full min-h-0">
              <h2 className="text-2xl font-black text-zinc-900 flex items-center gap-2 shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5]" />
                潜在竞争分析：
              </h2>
              <div className="flex-grow rounded-2xl bg-[#004CE5]/5 border border-[#004CE5]/20 p-5 flex flex-col justify-evenly min-h-0">
                {analysis.map((text, idx) => (
                  <React.Fragment key={idx}>
                    {idx > 0 && <div className="h-px bg-[#004CE5]/10 my-1" />}
                    <p className="text-[22px] leading-relaxed text-zinc-800 font-bold">{text}</p>
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 h-full min-h-0">
              <h2 className="text-2xl font-black text-zinc-900 flex items-center gap-2 shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5]" />
                重点优化策略：
              </h2>
              <div className="flex-grow rounded-2xl bg-[#004CE5]/[0.015] border border-[#004CE5]/15 p-5 flex flex-col justify-evenly min-h-0">
                {strategies.map((strat, idx) => (
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
  };
}

export default createCompetitorPage({
  productKey: 'jinjiu',
  title: '劲酒竞品分析',
  analysis: [
    '1. 劲酒仍稳居第一，但7月提及率回落至86.3%，Top1首推率66.3%，平均位次退至NO. 2.4，统治力较6月有所稀释。',
    '2. 椰岛提及率升至57.5%并逼近第二档头部，毛铺酒、广誉远亦在中腰部形成伴随竞争，需防止“日常养生酒”心智被分流。',
  ],
  strategies: [
    { num: '01', title: '首推优势回稳', desc: '围绕高频“日常养生酒推荐”类词条持续更新内容，守住66.3%的Top1优势，避免位次继续后移。' },
    { num: '02', title: '椰岛贴身防御', desc: '针对椰岛（57.5%）加强对比评测与性价比叙事，强化劲酒“常备小酌、蓝帽子认证”差异点。' },
    { num: '03', title: '长尾场景补强', desc: '补齐夏季清润、解腻等场景语料，减少“不推荐/溢价”类负面语义对提及率的侵蚀。' },
  ],
});
