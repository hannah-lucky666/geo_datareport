import React from 'react';
import AiModelLightLayout from '../components/AiModelLightLayout';

// 豆包断网证据-0924.html「豆包每日联网率」曲线，截取 2026-07-15 至 2026-08-13。
// 联网口径：回答中至少有一条引用来源。8 月 9 日后的入库率受换账号等措施影响。
const DAILY = [
  ['07-15', 84.2], ['07-16', 91.4], ['07-17', 90.6], ['07-18', 62.8],
  ['07-19', 93.0], ['07-20', 91.5], ['07-21', 88.1], ['07-22', 69.4],
  ['07-23', 76.8], ['07-24', 63.7], ['07-25', 62.5], ['07-26', 35.6],
  ['07-27', 14.1], ['07-28', 6.9], ['07-29', 18.3], ['07-30', 7.5],
  ['07-31', 7.0], ['08-01', 1.2], ['08-02', 9.7], ['08-03', 5.0],
  ['08-04', 9.5], ['08-05', 22.1], ['08-06', 3.3], ['08-07', 2.4],
  ['08-08', 39.9], ['08-09', 85.1], ['08-10', 99.6], ['08-11', 93.2],
  ['08-12', 96.9], ['08-13', 89.6],
];

// 来源：同一 HTML「只有豆包掉，其他平台正常（入库数据）」表的 07-27、08-03 两周。
const PLATFORM_COMPARISON = [
  { name: 'DeepSeek', logo: '/ai-logos/deepseek.png', rates: [100, 100] },
  { name: '豆包', logo: '/ai-logos/doubao.png', rates: [10, 17], highlight: true },
  { name: '元宝', logo: '/ai-logos/yuanbao.png', rates: [100, 99] },
  { name: '文心', logo: '/ai-logos/wenxin.png', rates: [100, 99] },
  { name: '千问', logo: '/ai-logos/qwen.png', rates: [97, 98] },
];

const LOW_START = 11;
const LOW_END = 24;
const X0 = 92;
const X1 = 1630;
const Y0 = 312;
const Y1 = 78;
const STEP = (X1 - X0) / (DAILY.length - 1);
const xAt = (index) => X0 + index * STEP;
const yAt = (rate) => Y0 - (rate / 100) * (Y0 - Y1);
const points = (first, last) => DAILY.slice(first, last + 1)
  .map(([, rate], index) => `${xAt(first + index).toFixed(1)},${yAt(rate).toFixed(1)}`)
  .join(' ');

function LegendItem({ color, dashed = false, children }) {
  return (
    <span className="inline-flex items-center gap-3 whitespace-nowrap text-[20px] font-medium text-zinc-600">
      <span
        className="w-10 border-t-[4px]"
        style={{ borderColor: color, borderStyle: dashed ? 'dashed' : 'solid' }}
      />
      {children}
    </span>
  );
}

function ComparisonCard({ platform }) {
  return (
    <div className={`min-w-0 rounded-[15px] border px-4 py-3 flex flex-col justify-between ${
      platform.highlight ? 'border-[#E8A39C] bg-[#FFF6F4]' : 'border-slate-200 bg-white'
    }`}>
      <div className="flex items-center gap-2.5">
        <img src={platform.logo} alt="" className="h-8 w-8 shrink-0 rounded-lg object-contain" />
        <span className="text-[20px] font-black text-zinc-800">{platform.name}</span>
        {platform.highlight && (
          <span className="ml-auto rounded-full bg-[#C4362A]/10 px-2.5 py-0.5 text-[15px] font-bold text-[#C4362A]">唯一低位</span>
        )}
      </div>
      <div className="space-y-2.5">
        {platform.rates.map((rate, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="w-[112px] shrink-0 whitespace-nowrap text-[15px] font-medium text-zinc-500">{index === 0 ? '7月27日那周' : '8月3日那周'}</span>
            <div className="h-2.5 min-w-0 flex-1 overflow-hidden rounded-full bg-slate-100">
              <div
                className={`h-full rounded-full ${platform.highlight ? 'bg-[#C4362A]' : 'bg-[#004CE5]'}`}
                style={{ width: `${rate}%` }}
              />
            </div>
            <span className={`w-[46px] shrink-0 text-right text-[20px] font-black ${platform.highlight ? 'text-[#C4362A]' : 'text-zinc-800'}`}>
              {rate}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlatformComparison() {
  return (
    <div className="h-[246px] shrink-0 rounded-[20px] border border-slate-200 bg-white px-7 py-4 shadow-[0_3px_16px_rgba(15,23,42,0.04)] flex flex-col">
      <div className="flex shrink-0 items-center justify-between gap-6">
        <h2 className="text-[25px] font-black text-zinc-800">同期对照：只有豆包跌到低位</h2>
        <span className="text-[17px] font-medium text-zinc-500">7月27日、8月3日那两周的入库联网率</span>
      </div>
      <div className="mt-3 min-h-0 flex-1 grid grid-cols-5 gap-3.5">
        {PLATFORM_COMPARISON.map((platform) => (
          <ComparisonCard key={platform.name} platform={platform} />
        ))}
      </div>
      <p className="mt-2 shrink-0 text-[15px] leading-[20px] text-zinc-500">
        口径与上图一致；同期其他四个平台均保持 97% 以上。
      </p>
    </div>
  );
}

function NetworkChart() {
  const ticks = [0, 25, 50, 75, 100];
  const dates = [0, 5, 11, 17, 24, 29];
  const bandStart = xAt(LOW_START) - STEP / 2;
  const bandEnd = xAt(LOW_END) + STEP / 2;

  return (
    <div className="min-h-0 flex-1 rounded-[22px] border border-slate-200 bg-white shadow-[0_4px_24px_rgba(15,23,42,0.04)] px-7 pt-5 pb-4 flex flex-col">
      <div className="flex shrink-0 items-center justify-between gap-8">
        <h2 className="text-[28px] font-black text-zinc-800">每日联网率</h2>
        <div className="flex items-center gap-9">
          <LegendItem color="#004CE5">异常前及低位期</LegendItem>
          <LegendItem color="#8A98AD" dashed>换账号等措施后的入库率</LegendItem>
        </div>
      </div>

      <svg
        className="mt-1 w-full flex-1 min-h-0"
        viewBox="0 0 1720 382"
        role="img"
        aria-label="豆包每日联网率：7月26日至8月8日大幅下降，8月9日起采取换账号等措施后入库率回升"
      >
        <rect x={bandStart} y="64" width={bandEnd - bandStart} height={Y0 - 64} fill="#FFF0EE" />
        {ticks.map((tick) => (
          <g key={tick}>
            <line x1={X0} x2={X1} y1={yAt(tick)} y2={yAt(tick)} stroke="#E3E8EF" strokeWidth="1.5" />
            <text x="66" y={yAt(tick) + 7} textAnchor="end" fill="#7B8795" fontSize="22" fontFamily="MiSans, sans-serif">
              {tick}%
            </text>
          </g>
        ))}

        <line x1={bandStart} x2={bandStart} y1="64" y2={Y0} stroke="#F5B7AF" strokeWidth="2" strokeDasharray="7 7" />
        <line x1={bandEnd} x2={bandEnd} y1="64" y2={Y0} stroke="#F5B7AF" strokeWidth="2" strokeDasharray="7 7" />
        <text x={(bandStart + bandEnd) / 2} y="42" textAnchor="middle" fill="#C4362A" fontSize="26" fontWeight="700" fontFamily="MiSans, sans-serif">
          7/26—8/08 持续低位
        </text>

        <polyline points={points(0, LOW_END)} fill="none" stroke="#004CE5" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points={points(LOW_END, DAILY.length - 1)} fill="none" stroke="#8A98AD" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="11 9" />

        {[LOW_START, 17, LOW_END].map((index) => (
          <circle key={index} cx={xAt(index)} cy={yAt(DAILY[index][1])} r="8" fill="#004CE5" stroke="white" strokeWidth="4" />
        ))}

        {dates.map((index) => (
          <g key={index}>
            <line x1={xAt(index)} x2={xAt(index)} y1={Y0} y2={Y0 + 8} stroke="#A8B2C1" strokeWidth="2" />
            <text
              x={xAt(index)} y={Y0 + 40} textAnchor="middle" fontSize="22" fontFamily="MiSans, sans-serif"
              fill={index === LOW_START || index === LOW_END ? '#C4362A' : '#6B7280'}
              fontWeight={index === LOW_START || index === LOW_END ? '700' : '500'}
            >
              {DAILY[index][0].replace('-', '/')}
            </text>
          </g>
        ))}
      </svg>

      <p className="shrink-0 pl-2 text-[17px] leading-[26px] text-zinc-500">
        口径：回答至少含 1 条引用来源。数据来自 GEO 生产库每日采集结果；右侧虚线仅展示至 8 月 13 日。
      </p>
    </div>
  );
}

export default function Page_DoubaoNetworkShift() {
  return (
    <AiModelLightLayout
      title="豆包隐性变动：搜索不联网"
      subtitle="从连续低位的采集数据，看豆包联网搜索能力的变化"
    >
      <div className="w-full h-full flex flex-col gap-5 select-none font-['MiSans']">
        <NetworkChart />

        <PlatformComparison />
      </div>
    </AiModelLightLayout>
  );
}

Page_DoubaoNetworkShift.hideHeader = true;
Page_DoubaoNetworkShift.fullBleed = true;
