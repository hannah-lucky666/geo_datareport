import React from 'react';
import core from '../data/platformCoreSep.json';

const COPY = {
  smart: {
    title: '慕思智能床各平台核心数据',
    note: 'Kimi 三项最高，提及率 100%、Top1 70%、Top3 83.3%。通义千问 Top1 只有 5.7%。豆包提及率 97.1%，Top1 只有 23.5%。',
  },
  ai: {
    title: '慕思AI床垫各平台核心数据',
    note: 'DeepSeek 三项接近满格，提及率 100%、Top1 96.7%、Top3 100%。豆包提及率 80%，Top1 只有 20%。元宝提及率 73.3%，是六个平台里最低的。',
  },
  mattress: {
    title: '慕思床垫各平台核心数据',
    note: '通义千问 Top1 为 0%，Top3 13.3%。元宝提及率 46.7%，是六个平台里最低的。豆包、DeepSeek、Kimi 的 Top1 都是 33.3%。',
  },
};

const METRICS = [
  { key: 'mention_rate', label: '提及率', head: 'bg-[#004CE5]' },
  { key: 'top1_mention_rate', label: 'Top1 提及率', head: 'bg-[#1A62E5]' },
  { key: 'top3_mention_rate', label: 'Top3 提及率', head: 'bg-[#2A6CF0]' },
];

function fmtPct(v) {
  return `${Number(v)}%`;
}

function platformLabel(name) {
  return name.toLowerCase() === 'kimi' ? 'Kimi' : name;
}

export default function Page_PlatformCore({ productKey }) {
  const product = core.products[productKey];
  const copy = COPY[productKey];

  return (
    <div className="w-full h-full flex flex-col px-12 sm:px-16 pt-[22px] pb-8 text-zinc-800 font-sans overflow-hidden">
      <div className="flex items-center shrink-0 mb-[27px]">
        <div className="w-2 h-10 bg-[#004CE5] rounded-full shadow-[0_0_15px_rgba(0,76,229,0.25)]" />
        <h1 className="text-4xl font-black text-zinc-900 tracking-wider ml-4">
          {copy.title}
          <span className="text-2xl font-bold text-zinc-400 ml-4">（2026年9月）</span>
        </h1>
      </div>

      <div className="rounded-2xl border border-zinc-300 bg-white shadow-[0_4px_30px_rgba(0,0,0,0.015)] overflow-hidden flex-1 min-h-0 flex flex-col mb-4">
        <table className="w-full h-full text-left border-collapse table-fixed">
          <thead>
            <tr className="text-white">
              <th className="py-5 px-4 text-2xl font-black text-center w-[28%] bg-zinc-800 border-r border-white/10">平台</th>
              {METRICS.map((metric) => (
                <th key={metric.key} className={`py-5 px-2 text-2xl font-black text-center border-l border-white/10 ${metric.head}`}>
                  {metric.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {product.platforms.map((platform) => (
              <tr key={platform.platform_id} className="border-b border-zinc-200 bg-white" style={{ height: `${100 / product.platforms.length}%` }}>
                <td className="px-6 border-r border-zinc-200 bg-slate-50/10">
                  <div className="flex items-center justify-center gap-4">
                    <img
                      src={platform.platform_logo}
                      alt=""
                      className="w-11 h-11 rounded-full object-cover bg-white border border-zinc-100 shadow-sm shrink-0"
                    />
                    <span className="text-2xl font-black text-zinc-800">
                      {platformLabel(platform.platform_name)}
                    </span>
                  </div>
                </td>
                {METRICS.map((metric) => (
                  <td
                    key={metric.key}
                    className="px-2 text-center border-l border-zinc-200 text-3xl font-bold text-zinc-900 font-['Montserrat',sans-serif]"
                  >
                    {fmtPct(platform[metric.key])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="rounded-xl border border-[#004CE5]/20 bg-[#004CE5]/[0.04] px-6 py-3.5 shrink-0 flex items-center gap-5">
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-1.5 h-8 bg-[#004CE5] rounded-full shadow-[0_0_10px_rgba(0,76,229,0.25)]" />
          <h3 className="text-2xl font-black text-[#004CE5] tracking-wider whitespace-nowrap">平台差异</h3>
        </div>
        <div className="w-px h-10 bg-[#004CE5]/15 shrink-0" />
        <p className="text-[21px] leading-snug text-zinc-700 font-bold min-w-0">{copy.note}</p>
      </div>
    </div>
  );
}

export function Page_PlatformCoreSmart() {
  return <Page_PlatformCore productKey="smart" />;
}

export function Page_PlatformCoreAI() {
  return <Page_PlatformCore productKey="ai" />;
}

export function Page_PlatformCoreMattress() {
  return <Page_PlatformCore productKey="mattress" />;
}
