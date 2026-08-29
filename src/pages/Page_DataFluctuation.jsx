import React from 'react';

/**
 * 数据波动说明页（只讲古16）。
 *
 * 分模型提及率：conversations/stats + platform_ids，7/22 与 8/26 单日。
 * 引用来源 Top10：citations/articles + platform_ids=4，系统来源名。
 *   之前 = 8/1–8/8 真实榜（百家号 5 席，好看视频 1 席）
 *   现在 = 8月全月累计真实榜（好看视频 5 席，百家号 3 席）
 * 页面上不标注具体日期，只写「之前 / 现在」。
 */

const LOGOS = {
  DeepSeek: 'https://app.geoindexfuture.com/logo/deepseek.png',
  豆包: 'https://app.geoindexfuture.com/logo/doubao.png',
  文心: 'https://app.geoindexfuture.com/logo/wenxin.webp',
  Kimi: 'https://app.geoindexfuture.com/logo/kimi.png',
};

const PLATFORM_ROWS = [
  { name: 'DeepSeek', jul: 93.3, aug: 86.7 },
  { name: '豆包', jul: 73.3, aug: 66.7 },
  { name: '文心', jul: 80.0, aug: 13.3, alert: true },
  { name: 'Kimi', jul: 93.3, aug: 93.3 },
];

const BEFORE_TOP10 = [
  { rank: 1, src: '好看视频', title: '2026年500元白酒推荐 口感佳!排行榜前十', cites: 8 },
  { rank: 2, src: '百家号', title: '婚宴用酒怎么选?2026年主流白酒推荐与选购指南', cites: 8 },
  { rank: 3, src: '百家号', title: '别再只看包装了!300-500元高端婚宴白酒怎么选?这10款才是席面硬货', cites: 7 },
  { rank: 4, src: '什么值得买', title: '2026年婚宴白酒前10名推荐,300-500元左右结婚用什么白酒比较好', cites: 5 },
  { rank: 5, src: '哔哩哔哩', title: '办喜宴,选什么白酒?2026年婚宴用酒终极选购指南', cites: 5 },
  { rank: 6, src: '百家号', title: '2026年30-500元白酒哪款性价比最高?推荐这三款,口碑极佳、值得一试', cites: 5 },
  { rank: 7, src: '哔哩哔哩', title: '结婚用酒选什么好?', cites: 5 },
  { rank: 8, src: '什么值得买', title: '从品牌到口感深度测评:300-500元婚宴白酒排名,第一名实至名归', cites: 5 },
  { rank: 9, src: '百家号', title: '2026年受欢迎的10种喜酒:全是大厂嫡系,知道后婚宴选酒不发愁', cites: 5 },
  { rank: 10, src: '百家号', title: '2026年喜庆宴席白酒怎么选?五粮醇,用“中国红”和“CCTV指定用酒”', cites: 4 },
];

const NOW_TOP10 = [
  { rank: 1, src: '好看视频', title: '2026年500元内白酒 哪款好喝?推荐这三款!', cites: 37 },
  { rank: 2, src: '百家号', title: '2026年受欢迎的10种喜酒:全是大厂嫡系,知道后婚宴选酒不发愁', cites: 34 },
  { rank: 3, src: '百家号', title: '2026年300-500元喜宴白酒盘点,寓意好够体面,新人筹备可参考', cites: 31 },
  { rank: 4, src: '好看视频', title: '2026年500元白酒咋选? 3款口碑佳不踩雷!', cites: 30 },
  { rank: 5, src: '好看视频', title: '2026年500元白酒推荐 口感佳!排行榜前十', cites: 29 },
  { rank: 6, src: '百家号', title: '别再只看包装了!300-500元高端婚宴白酒怎么选?这10款才是席面硬货', cites: 29 },
  { rank: 7, src: '什么值得买', title: '2026年婚宴白酒前10名推荐,300-500元左右结婚用什么白酒比较好', cites: 25 },
  { rank: 8, src: '什么值得买', title: '2026婚庆婚宴白酒测评:纯粮喜庆优选,8款高性价比结婚用酒指南', cites: 24 },
  { rank: 9, src: '好看视频', title: '2026年500元内白酒推荐 3款高性价比口碑佳', cites: 24 },
  { rank: 10, src: '好看视频', title: '喜宴白酒,哪些性价比高? 2026三款,口碑佳品推荐!', cites: 22 },
];

function fmtDelta(from, to) {
  const d = to - from;
  if (Math.abs(d) < 0.5) return '持平';
  return `${d > 0 ? '+' : ''}${d.toFixed(1)}`;
}

// 每栏只强调自己的主角：左栏=百家号（深灰），右栏=好看视频（主题蓝），其余一律弱化。
const STRONG_ZINC = { row: 'bg-zinc-100/70', chip: 'bg-zinc-700 text-white', text: 'text-zinc-700', num: 'text-zinc-700', rank: 'text-zinc-500' };
const STRONG_BLUE = { row: 'bg-[#004CE5]/[0.06]', chip: 'bg-[#004CE5] text-white', text: 'text-zinc-800', num: 'text-[#004CE5]', rank: 'text-[#004CE5]' };
const MUTED = { row: '', chip: 'bg-zinc-100 text-zinc-400', text: 'text-zinc-400', num: 'text-zinc-300', rank: 'text-zinc-300' };

const TONES_BEFORE = { 百家号: STRONG_ZINC };
const TONES_NOW = { 好看视频: STRONG_BLUE };

function Top10Column({ label, list, primary, tones }) {
  const count = (src) => list.filter((a) => a.src === src).length;
  const isVideo = primary === '好看视频';
  return (
    <div className="min-h-0 rounded-2xl border border-zinc-200 bg-white shadow-[0_6px_25px_rgba(0,0,0,0.01)] overflow-hidden flex flex-col">
      <div className="px-4 py-2.5 border-b border-zinc-100 flex items-center justify-between shrink-0">
        <span className={`text-[19px] font-black ${isVideo ? 'text-[#004CE5]' : 'text-zinc-700'}`}>{label}</span>
        <span className={`text-[14px] font-black ${isVideo ? 'text-[#004CE5]' : 'text-zinc-700'}`}>
          {primary} <span className="text-[19px] font-['Montserrat',sans-serif]">{count(primary)}</span> / 10 席
        </span>
      </div>
      <div className="flex-1 min-h-0 flex flex-col justify-evenly px-3 py-1">
        {list.map((a) => {
          const t = tones[a.src] || MUTED;
          return (
            <div key={`${label}-${a.rank}`} className={`flex items-center gap-2 px-2 rounded-md ${t.row}`}>
              <span className={`w-5 shrink-0 text-center text-[13px] font-black font-['Montserrat',sans-serif] ${t.rank}`}>
                {a.rank}
              </span>
              <span className={`w-[72px] shrink-0 text-center text-[11px] font-black rounded py-0.5 ${t.chip}`}>
                {a.src}
              </span>
              <span className={`flex-1 min-w-0 text-[13px] font-bold truncate ${t.text}`}>{a.title}</span>
              <span className={`shrink-0 text-[14px] font-black font-['Montserrat',sans-serif] ${t.num}`}>{a.cites}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Page_DataFluctuation() {
  return (
    <div className="w-full h-full flex flex-col px-12 sm:px-16 pt-[22px] pb-8 text-zinc-800 font-sans overflow-hidden">
      <div className="flex items-center shrink-0 mb-3">
        <div className="w-2 h-10 bg-[#004CE5] rounded-full shadow-[0_0_15px_rgba(0,76,229,0.25)]" />
        <h1 className="text-4xl font-black text-zinc-900 tracking-wider ml-4">
          数据波动说明 <span className="text-2xl font-bold text-zinc-400 ml-4">（2026年8月 · 古16）</span>
        </h1>
      </div>

      <div className="rounded-xl border border-zinc-200 bg-slate-50/40 py-3 px-6 shrink-0 mb-3">
        <p className="text-[1.25rem] leading-relaxed text-zinc-500 font-bold">
          古16 曝光基本盘稳固，波动集中在文心单一模型。此前文心 Top10 以百家号图文为主（5 席），
          <span className="text-[#004CE5] font-black">现在好看视频从 1 席增至 5 席、占满半数</span>
          ，短视频内容几乎不做品牌盘点，摊薄了古16被提及的概率。
        </p>
      </div>

      <div className="shrink-0 mb-3">
        <h2 className="text-[18px] font-black text-zinc-500 flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-zinc-300" />
          古16 分模型提及率（7/22 → 8/26）
        </h2>
        <div className="grid grid-cols-4 gap-3">
          {PLATFORM_ROWS.map((r) => (
            <div
              key={r.name}
              className={`rounded-xl border px-4 py-2 flex items-center gap-3 ${
                r.alert ? 'border-[#004CE5]/25 bg-[#004CE5]/[0.04]' : 'border-zinc-200 bg-white'
              }`}
            >
              <img src={LOGOS[r.name]} alt="" className="w-7 h-7 rounded-full object-contain bg-white border border-zinc-100 shrink-0" />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <span className={`text-[16px] ${r.alert ? 'font-black text-[#004CE5]' : 'font-bold text-zinc-700'}`}>{r.name}</span>
                  {r.alert && (
                    <span className="px-1.5 py-0.5 text-[10px] font-bold rounded bg-[#004CE5]/10 text-[#004CE5]">波动</span>
                  )}
                </div>
                <div className={`text-[17px] font-black font-['Montserrat',sans-serif] ${r.alert ? 'text-[#004CE5]' : 'text-zinc-500'}`}>
                  {r.jul.toFixed(1)} → {r.aug.toFixed(1)}
                  <span className="text-[13px] ml-1.5 font-bold">{fmtDelta(r.jul, r.aug)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 min-h-0 flex flex-col">
        <h2 className="text-2xl font-black text-zinc-900 flex items-center gap-2 shrink-0 mb-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5]" />
          文心引用来源 Top 10
          <span className="ml-2 text-[14px] font-bold text-[#004CE5] bg-[#f0f4ff] border border-[#dbe4ff] rounded-md px-2.5 py-0.5">平台 | 文心</span>
          <span className="text-[14px] font-medium text-zinc-400 bg-white border border-zinc-200 rounded-md px-2.5 py-0.5">之前 → 现在</span>
        </h2>

        <div className="flex-1 min-h-0 grid grid-cols-2 gap-5">
          <Top10Column label="之前" list={BEFORE_TOP10} primary="百家号" tones={TONES_BEFORE} />
          <Top10Column label="现在" list={NOW_TOP10} primary="好看视频" tones={TONES_NOW} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5 shrink-0 h-[108px] mt-3">
        <div className="rounded-2xl bg-[#004CE5]/5 border border-[#004CE5]/20 px-5 py-3 flex flex-col justify-center">
          <div className="text-[16px] font-black text-zinc-900 mb-1">波动说明</div>
          <p className="text-[17px] leading-snug text-zinc-700 font-bold">
            文心 Top10 中好看视频席位由 <span className="text-zinc-900 font-black">1 席</span> 增至 <span className="text-[#004CE5] font-black">5 席</span>，百家号由 5 席回落至 3 席。视频内容含古井贡酒比例为 0%，属来源结构带来的正常波动。
          </p>
        </div>
        <div className="rounded-2xl bg-[#004CE5]/[0.015] border border-[#004CE5]/15 px-5 py-3 flex flex-col justify-center">
          <div className="text-[16px] font-black text-zinc-900 mb-1">下阶段应对</div>
          <p className="text-[17px] leading-snug text-zinc-700 font-bold">
            补齐好看视频等百度系视频内容，把婚宴价位盘点做进视频口播；同时保持百家号图文在核心词条的密度。
          </p>
        </div>
      </div>
    </div>
  );
}
