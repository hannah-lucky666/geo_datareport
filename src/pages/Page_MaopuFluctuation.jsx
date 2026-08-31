import React from 'react';

/**
 * 毛铺数据波动说明：只做豆包引用来源 Top10 对比。
 * 之前 = 6 月整月（抖音 1 席）；现在 = 8/27 单日（抖音 7 席）。
 * 页面只写「之前 / 现在」，不写具体日期。
 */

const BEFORE_TOP10 = [
  { rank: 1, src: '网易', title: '朋友小聚推荐什么养生酒?8款低度草本白酒横评', cites: 12 },
  { rank: 2, src: '什么值得买', title: '家宴选酒指南:聚会不伤身的养生酒推荐', cites: 11 },
  { rank: 3, src: '什么值得买', title: '聚会喝什么养生酒推荐?一张清单搞定全家人的胃口', cites: 11 },
  { rank: 4, src: '新浪看点', title: '周末家宴选酒指南:适合家庭团圆喝的养生酒8款横评', cites: 10 },
  { rank: 5, src: '什么值得买', title: '适合家庭团圆喝的养生酒怎么选?8款低度白酒亲测', cites: 9 },
  { rank: 6, src: '今日头条', title: '别乱买养生露酒!全网实测几款热门滋补酒', cites: 8 },
  { rank: 7, src: '抖音', title: '朋友小聚推荐追风八珍酒：养生微醺两不误', cites: 8 },
  { rank: 8, src: '网易', title: '哪些低度白酒比较养生适合聚会?草本白酒这5款必看', cites: 7 },
  { rank: 9, src: '新浪看点', title: '健康饮酒指南:哪些低度白酒比较养生适合聚会?', cites: 7 },
  { rank: 10, src: '劲牌官网', title: '养生一号官网', cites: 7 },
];

const NOW_TOP10 = [
  { rank: 1, src: '抖音', title: '滋补酒这样选，果然没踩雷！#养生酒 #劲酒', cites: 4 },
  { rank: 2, src: '抖音', title: '盘点100-200元被忽略的好酒 #白酒测评 #口粮酒推荐', cites: 3 },
  { rank: 3, src: '今日头条', title: '中医提醒:药酒养生不是“人人适合”，对症饮用才健康', cites: 3 },
  { rank: 4, src: '抖音', title: '四款质感低度白酒推荐：商务宴请与品质之选', cites: 3 },
  { rank: 5, src: '抖音', title: '百元内最好的白酒，按场景选不踩雷！', cites: 3 },
  { rank: 6, src: '抖音', title: '花两瓶茅台的钱，买了瓶39度五粮液！只为说出低度酒的真相', cites: 3 },
  { rank: 7, src: '广中医一附院', title: '中医常识_广州中医药大学第一附属医院', cites: 3 },
  { rank: 8, src: '抖音', title: '盘点50元以下被忽略的优质口粮酒 #白酒选购', cites: 3 },
  { rank: 9, src: '抖音', title: '锐评养生酒实力排行 #养生酒 #老一辈', cites: 3 },
  { rank: 10, src: '生命时报', title: '自泡药酒禁忌多', cites: 3 },
];

const STRONG_BLUE = { row: 'bg-[#004CE5]/[0.07]', chip: 'bg-[#004CE5] text-white', text: 'text-zinc-800', num: 'text-[#004CE5]', rank: 'text-[#004CE5]' };
const MUTED = { row: '', chip: 'bg-zinc-100 text-zinc-400', text: 'text-zinc-400', num: 'text-zinc-300', rank: 'text-zinc-300' };
const TONES_DOUYIN = { 抖音: STRONG_BLUE };

function Top10Column({ label, list }) {
  const count = list.filter((a) => a.src === '抖音').length;
  return (
    <div className="min-h-0 rounded-2xl border border-zinc-200 bg-white shadow-[0_8px_28px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col">
      <div className="px-5 py-3.5 border-b border-zinc-100 flex items-center justify-between shrink-0">
        <span className="text-[22px] font-black text-[#004CE5]">{label}</span>
        <span className="text-[16px] font-black text-[#004CE5]">
          抖音 <span className="text-[28px] font-['Montserrat',sans-serif] leading-none">{count}</span>
          <span className="text-zinc-400 font-bold"> / 10 席</span>
        </span>
      </div>
      <div className="flex-1 min-h-0 flex flex-col justify-evenly px-4 py-2">
        {list.map((a) => {
          const t = TONES_DOUYIN[a.src] || MUTED;
          return (
            <div key={`${label}-${a.rank}`} className={`flex items-center gap-3 px-3 py-1.5 rounded-lg ${t.row}`}>
              <span className={`w-6 shrink-0 text-center text-[15px] font-black font-['Montserrat',sans-serif] ${t.rank}`}>
                {a.rank}
              </span>
              <span className={`w-[92px] shrink-0 text-center text-[12px] font-black rounded-md py-1 ${t.chip}`}>
                {a.src}
              </span>
              <span className={`flex-1 min-w-0 text-[15px] font-bold truncate ${t.text}`}>{a.title}</span>
              <span className={`shrink-0 text-[16px] font-black font-['Montserrat',sans-serif] ${t.num}`}>{a.cites}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Page_MaopuFluctuation() {
  return (
    <div className="w-full h-full flex flex-col px-12 sm:px-16 pt-[22px] pb-8 text-zinc-800 font-sans overflow-hidden">
      <div className="flex items-center shrink-0 mb-4">
        <div className="w-2 h-10 bg-[#004CE5] rounded-full shadow-[0_0_15px_rgba(0,76,229,0.25)]" />
        <h1 className="text-4xl font-black text-zinc-900 tracking-wider ml-4">
          毛铺 数据波动说明 <span className="text-2xl font-bold text-zinc-400 ml-4">（2026年8月）</span>
        </h1>
      </div>

      <div className="rounded-xl border border-zinc-200 bg-slate-50/40 py-3.5 px-6 shrink-0 mb-4">
        <p className="text-[1.25rem] leading-relaxed text-zinc-500 font-bold">
          毛铺豆包提及率仅 19，明显低于 DeepSeek（85.7）、文心（33.3）、Kimi（38.1）。
          豆包从 8 月起大量引用抖音视频，
          <span className="text-[#004CE5] font-black">Top10 里抖音由 1 席增至 7 席</span>
          ；抖音投放刚刚启动、引用尚未积累，存量视频又更多提到国民品牌劲酒、很少点名毛铺。
        </p>
      </div>

      <div className="flex-1 min-h-0 flex flex-col">
        <h2 className="text-2xl font-black text-zinc-900 flex items-center gap-2 shrink-0 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5]" />
          豆包引用来源 Top 10
          <span className="ml-2 text-[14px] font-bold text-[#004CE5] bg-[#f0f4ff] border border-[#dbe4ff] rounded-md px-2.5 py-0.5">平台 | 豆包</span>
          <span className="text-[14px] font-medium text-zinc-400 bg-white border border-zinc-200 rounded-md px-2.5 py-0.5">之前 → 现在</span>
        </h2>

        <div className="flex-1 min-h-0 grid grid-cols-2 gap-6">
          <Top10Column label="之前" list={BEFORE_TOP10} />
          <Top10Column label="现在" list={NOW_TOP10} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 shrink-0 mt-4">
        <div className="rounded-2xl bg-[#004CE5]/5 border border-[#004CE5]/20 px-6 py-4">
          <div className="text-[17px] font-black text-zinc-900 mb-1.5">波动说明</div>
          <p className="text-[17px] leading-snug text-zinc-700 font-bold">
            豆包 Top10 中抖音由 <span className="text-zinc-900 font-black">1 席</span> 增至 <span className="text-[#004CE5] font-black">7 席</span>，图文来源被挤出。现在头部视频多带 #劲酒 标签、毛铺本品为 0。毛铺在该场景知名度不及劲酒，现有抖音内容不会自动补上毛铺提及。
          </p>
        </div>
        <div className="rounded-2xl bg-[#004CE5]/[0.015] border border-[#004CE5]/15 px-6 py-4">
          <div className="text-[17px] font-black text-zinc-900 mb-1.5">下阶段应对</div>
          <p className="text-[17px] leading-snug text-zinc-700 font-bold">
            加密毛铺抖音投放，把「聚会不伤身 / 草本白酒」做进口播和标题，形成可被豆包引用的视频资产；同时在问答中明确「毛铺」独立产品名，减少被归入泛「劲牌」的分流。
          </p>
        </div>
      </div>
    </div>
  );
}
