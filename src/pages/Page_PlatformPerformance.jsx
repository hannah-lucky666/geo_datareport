import React from 'react';
import platformCompare from '../data/platform_compare.json';

function fmtPct(v) {
  if (v == null || v === '') return '-';
  return `${Number(v)}%`;
}

function RankBadge({ rank }) {
  if (rank === 1) {
    return (
      <div className="w-7 h-7 rounded-full bg-[#FFD100] text-zinc-900 flex items-center justify-center font-black text-sm shadow-sm">1</div>
    );
  }
  if (rank === 2) {
    return (
      <div className="w-7 h-7 rounded-full bg-zinc-200 text-zinc-600 flex items-center justify-center font-black text-sm">2</div>
    );
  }
  if (rank === 3) {
    return (
      <div className="w-7 h-7 rounded-full bg-[#FFC085] text-zinc-800 flex items-center justify-center font-black text-sm shadow-sm">3</div>
    );
  }
  return <div className="text-zinc-400 font-bold text-base text-center w-7">{rank}</div>;
}

function PlatformCard({ platform }) {
  const rows = (platform.mention_rate || []).slice(0, 5);

  return (
    <div className="flex flex-col gap-2.5 h-full min-h-0">
      <h3 className="text-[1.35rem] font-extrabold text-zinc-800 tracking-wide pl-1 flex items-center gap-2 shrink-0">
        <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.25)]" />
        {platform.platform_logo ? (
          <img
            src={platform.platform_logo}
            alt=""
            className="w-7 h-7 rounded object-contain bg-white"
          />
        ) : null}
        {platform.platform_name}
      </h3>

      <div className="flex-grow rounded-2xl border border-zinc-200 bg-white shadow-[0_6px_25px_rgba(0,0,0,0.01)] overflow-hidden flex flex-col px-3 py-1.5 min-h-0">
        <table className="w-full text-left border-collapse table-fixed flex-grow h-full">
          <thead>
            <tr className="border-b border-zinc-100">
              <th className="py-1 w-[14%]" />
              <th className="py-1 px-1 text-[12px] font-black text-zinc-400 w-[54%]">产品</th>
              <th className="py-1 px-1 text-[12px] font-black text-zinc-400 w-[32%] text-right pr-2">提及率</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((item) => (
              <tr
                key={`${platform.platform_id}-${item.rank}-${item.name}`}
                className={`border-b border-zinc-50 last:border-none ${item.is_target ? 'bg-[#004CE5]/[0.04]' : ''}`}
              >
                <td className="py-1 align-middle">
                  <div className="flex justify-center">
                    <RankBadge rank={item.rank} />
                  </div>
                </td>
                <td className="py-1 px-1 align-middle">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span
                      className={`truncate text-[1rem] leading-tight ${
                        item.is_target ? 'font-black text-[#004CE5]' : 'font-bold text-zinc-800'
                      }`}
                    >
                      {item.name}
                    </span>
                    {item.is_target ? (
                      <span className="shrink-0 px-1.5 py-0.5 text-[10px] font-bold rounded bg-zinc-100 text-zinc-500 border border-zinc-200/50">
                        本品
                      </span>
                    ) : null}
                  </div>
                </td>
                <td
                  className={`py-1 px-1 text-right pr-2 align-middle font-['Montserrat',sans-serif] text-[1.3rem] font-black leading-none ${
                    item.is_target ? 'text-[#004CE5]' : 'text-zinc-700'
                  }`}
                >
                  {fmtPct(item.value)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function createPlatformPerformancePage({ productKey, title, summary }) {
  return function PlatformPerformancePage() {
    const product = platformCompare.products[productKey];
    const platforms = Object.values(product?.platforms || {});

    return (
      <div className="w-full h-full flex flex-col px-12 sm:px-16 pt-[22px] pb-8 text-zinc-800 font-sans justify-between overflow-hidden">
        <div className="flex items-center shrink-0 mb-3">
          <div className="w-2 h-10 bg-[#004CE5] rounded-full shadow-[0_0_15px_rgba(0,76,229,0.25)]" />
          <h1 className="text-4xl font-black text-zinc-900 tracking-wider ml-4 flex items-center">
            {title}
            <span className="text-2xl font-bold text-zinc-400 ml-4">（2026年7月）</span>
          </h1>
        </div>

        <div className="flex-1 min-h-0 grid grid-cols-3 grid-rows-2 gap-x-6 gap-y-5 mt-2 mb-5">
          {platforms.map((pl) => (
            <PlatformCard key={pl.platform_id} platform={pl} />
          ))}
        </div>

        <div className="shrink-0 flex flex-col gap-2.5">
          <h2 className="text-2xl font-black text-zinc-900 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5]" />
            平台竞争小结
          </h2>
          <div className="rounded-2xl bg-[#004CE5]/5 border border-[#004CE5]/20 px-6 py-4">
            <p className="text-[21px] leading-relaxed text-zinc-800 font-bold">{summary}</p>
          </div>
        </div>
      </div>
    );
  };
}

export default createPlatformPerformancePage({
  productKey: 'smart',
  title: '慕思智能床各AI平台表现',
  summary:
    '元宝、Kimi 本品提及率100%稳居第一；文心、豆包领先优势明确。DeepSeek 本品76.7%仅微领先舒福德73.3%，通义千问双方同为73.3%，两平台竞争最胶着，需重点加大投放与对比内容。',
});

export const Page_PlatformPerformance_AI = createPlatformPerformancePage({
  productKey: 'ai',
  title: '慕思AI床垫各AI平台表现',
  summary:
    '文心本品100%断层领先，DeepSeek/豆包/元宝亦居首位。Kimi 本品与喜临门同为96.7%但位列第二，通义千问本品80%而喜临门已至63.3%，两平台需严防竞品分流。',
});

export const Page_PlatformPerformance_Musi = createPlatformPerformancePage({
  productKey: 'mattress',
  title: '慕思床垫各AI平台表现',
  summary:
    'Kimi、文心、DeepSeek、元宝本品均居提及率第一；豆包被雅兰（80%）、金可儿（75%）压制，本品仅排第三（70%）；通义千问与丝涟同为65%并列，两平台是当前最需突破的战场。',
});
