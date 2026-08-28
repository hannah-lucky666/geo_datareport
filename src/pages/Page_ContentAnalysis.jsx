import React from 'react';
import report from '../data/yuanyueAugustReport.json';

const { sentiments: sent, entries, before, august } = report;

const covered = entries.filter((e) => Number(e.mention_rate) > 0);

const GROUPS = [
  {
    name: '消化吸收类',
    match: (n) => n.includes('消化') || n.includes('吸收'),
    badgeClass: 'bg-emerald-50 text-emerald-600 border border-emerald-100',
  },
  {
    name: '便秘调理类',
    match: (n) => n.includes('便秘'),
    badgeClass: 'bg-sky-50 text-sky-600 border border-sky-100',
  },
  {
    name: '口碑榜单类',
    match: () => true,
    badgeClass: 'bg-violet-50 text-violet-600 border border-violet-100',
  },
];

// 便秘类词条部分也含「消化」表述，按更具体的语义优先归类
const ORDER = [1, 0, 2];
function groupOf(name) {
  for (const i of ORDER) {
    if (GROUPS[i].match(name)) return GROUPS[i];
  }
  return GROUPS[2];
}

const distribution = GROUPS.map((g) => {
  const items = covered.filter((e) => groupOf(e.name) === g);
  const breakthrough = items.filter((e) => !Number(e.before_mention_rate));
  const best = items.slice().sort((a, b) => b.mention_rate - a.mention_rate)[0];
  return {
    name: g.name,
    badgeClass: g.badgeClass,
    count: items.length,
    breakthrough: breakthrough.length,
    best,
  };
}).filter((g) => g.count > 0);

const summaryRows = [
  {
    type: '正面',
    ratio: `${sent.positive}%`,
    trend: '连续两轮维持满值',
    desc: `正面核心关键词：${sent.positive_keywords.join('、')}`,
    isPositive: true,
    colorClass: 'border-l-4 border-emerald-500',
  },
  {
    type: '负面',
    ratio: `${sent.negative}%`,
    trend: '本月未出现负面回答',
    desc: '无负面关键词，模型输出中未检出质量、售后类负向表述',
    isPositive: false,
    colorClass: 'border-l-4 border-rose-500',
  },
];

export default function Page_ContentAnalysis() {
  return (
    <div className="w-full h-full flex flex-col px-12 sm:px-16 pt-[40px] pb-[45px] text-zinc-900 font-sans bg-white overflow-hidden">
      <div className="flex items-center shrink-0 mb-[20px]">
        <div className="w-2 h-10 bg-[#004CE5] rounded-full shadow-[0_0_15px_rgba(0,76,229,0.25)]" />
        <h1 className="text-4xl font-black text-zinc-900 tracking-wider ml-4 flex items-center">
          美素佳儿源悦 内容分析总结
          <span className="text-2xl font-bold text-zinc-400 ml-4">（2026年8月）</span>
        </h1>
      </div>

      <div className="flex-grow flex flex-col justify-between min-h-0">
        <div className="rounded-[1.25rem] border border-zinc-200 bg-white shadow-[0_6px_30px_rgba(0,0,0,0.015)] overflow-hidden shrink-0">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-zinc-200">
                <th className="py-[16px] px-8 text-[1.4rem] font-bold text-zinc-700 tracking-wider w-[18%] pl-10">类型</th>
                <th className="py-[16px] px-8 text-[1.4rem] font-bold text-zinc-700 tracking-wider w-[16%]">占比</th>
                <th className="py-[16px] px-8 text-[1.4rem] font-bold text-zinc-700 tracking-wider w-[26%]">趋势</th>
                <th className="py-[16px] px-8 text-[1.4rem] font-bold text-zinc-700 tracking-wider">核心关键词</th>
              </tr>
            </thead>
            <tbody>
              {summaryRows.map((row) => (
                <tr key={row.type} className={`border-b border-zinc-100 last:border-none hover:bg-slate-50/40 transition-colors ${row.colorClass}`}>
                  <td className="py-[22px] px-8 pl-9 align-middle">
                    <span className="font-black text-[1.45rem] flex items-center gap-3.5 text-zinc-800">
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
                  <td className="py-[22px] px-8 align-middle">
                    <span className={`text-[2.0rem] font-black font-['Montserrat',sans-serif] ${row.isPositive ? 'text-emerald-600' : 'text-rose-600'}`}>{row.ratio}</span>
                  </td>
                  <td className="py-[22px] px-8 align-middle">
                    <span className="text-[1.45rem] font-bold text-zinc-700">{row.trend}</span>
                  </td>
                  <td className="py-[22px] px-8 align-middle">
                    <p className="text-[1.45rem] font-semibold text-zinc-600 leading-relaxed">{row.desc}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-3.5 shrink-0">
          <h2 className="text-[2.0rem] font-black text-zinc-900 flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-[#004CE5]" />
            词条突破分布分析
            <span className="text-[1.2rem] font-bold text-zinc-400 ml-1">
              有效覆盖词条 {before.covered_entries} → {august.covered_entries} 个
            </span>
          </h2>

          <div className="rounded-[1.25rem] border border-zinc-200 bg-white shadow-[0_6px_30px_rgba(0,0,0,0.015)] overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-zinc-200">
                  <th className="py-[14px] px-8 text-[1.4rem] font-bold text-zinc-700 tracking-wider w-[20%]">词条方向</th>
                  <th className="py-[14px] px-8 text-[1.4rem] font-bold text-zinc-700 tracking-wider w-[22%]">覆盖 / 本月新破零</th>
                  <th className="py-[14px] px-8 text-[1.4rem] font-bold text-zinc-700 tracking-wider">代表词条与表现</th>
                </tr>
              </thead>
              <tbody>
                {distribution.map((row) => (
                  <tr key={row.name} className="border-b border-zinc-100 last:border-none hover:bg-slate-50/50 even:bg-slate-50/15 transition-colors">
                    <td className="py-[18px] px-8 align-middle">
                      <span className={`inline-block px-3.5 py-1.5 rounded-lg text-[1.2rem] font-extrabold tracking-wide ${row.badgeClass}`}>
                        {row.name}
                      </span>
                    </td>
                    <td className="py-[18px] px-8 align-middle">
                      <span className="text-[1.45rem] font-black text-zinc-800 font-['Montserrat',sans-serif]">{row.count} 个</span>
                      <span className="text-[1.25rem] font-bold text-emerald-600 ml-3">新破零 {row.breakthrough} 个</span>
                    </td>
                    <td className="py-[18px] px-8 text-[1.4rem] font-semibold text-zinc-600 align-middle leading-relaxed">
                      「{row.best.name}」提及率
                      <strong className="text-[#004CE5] font-black mx-1 font-['Montserrat',sans-serif]">{row.best.mention_rate}%</strong>
                      ，位次 NO.{Number(row.best.position).toFixed(1)}
                      <span className="text-zinc-400 ml-2">（优化前 {Number(row.best.before_mention_rate) || 0}%）</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col gap-3 shrink-0">
          <div className="border-t border-zinc-200" />
          <div className="rounded-[1.25rem] border-l-[6px] border-[#004CE5] bg-gradient-to-r from-blue-50/40 via-white to-white py-6 px-8 shadow-[0_6px_20px_rgba(0,76,229,0.015)]">
            <h3 className="text-[1.65rem] font-black text-zinc-900 tracking-wider mb-2">内容优化提升</h3>
            <p className="text-[1.45rem] leading-relaxed text-zinc-700 font-bold">
              本月正面占比保持100%、零负面输出，正面标签由「配方温和、购买方便、售后稳妥」升级为
              <strong className="text-[#004CE5] font-black mx-0.5">消化友好、配方优势、奶源纯净</strong>
              ，说明产品力表达已被模型采信。下一步应把口碑榜单类词条的单点提及做成稳定进榜，并把消化吸收类的成功语料复用到剩余49个未破零词条。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
