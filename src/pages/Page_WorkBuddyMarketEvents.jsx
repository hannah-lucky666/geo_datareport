import React from 'react';
import AiModelLightLayout from '../components/AiModelLightLayout';

const timeline = [
  { date: '03.09', title: '公测上线', featured: true },
  { date: '03.12', title: '接入微信' },
  { date: '07.22', title: '用户量登顶', featured: true },
  { date: '08.12', title: '腾讯优先投入' },
  { date: '09.02', title: '开放平台上线', featured: true },
];

const events = [
  {
    number: '01',
    tag: '公测破圈',
    date: '2026.03',
    title: '首日流量超预期，服务扩容 10 倍',
    detail: 'WorkBuddy 公测后，登录及服务不稳；腾讯当晚致歉。',
    image: '/workbuddy/events/launch-coverage.png',
    imageAlt: '新浪科技关于 WorkBuddy 公测流量超预期、腾讯紧急扩容 10 倍的报道截图',
    source: '新浪科技 · 03.10',
    url: 'https://finance.sina.com.cn/tech/roll/2026-03-10/doc-inhqnmhw0208066.shtml',
    tone: 'blue',
  },
  {
    number: '02',
    tag: '市场验证',
    date: '2026.07',
    title: '6 月访问量在 17 款产品中居首',
    detail: '易观统计 WorkBuddy 为 2,097 万次，高于第二、三名之和。',
    image: '/workbuddy/events/analysys-chart-excerpt.png',
    imageAlt: '易观分析 2026 年 6 月桌面端 AI 原生办公智能体访问量图表截图',
    source: '易观分析 · 07.22',
    url: 'https://m.analysys.cn/article/detail/20021498',
    tone: 'teal',
  },
  {
    number: '03',
    tag: '开放生态',
    date: '2026.09',
    title: '开放平台首批接入超百家伙伴',
    detail: '9 月 2 日上线，面向硬件、行业应用与开发者开放能力。',
    image: '/workbuddy/events/platform-coverage.png',
    imageAlt: '每日经济新闻关于 WorkBuddy 开放平台上线的报道截图',
    source: '每日经济新闻 · 09.03',
    url: 'https://www.nbd.com.cn/articles/2026-09-03/4571266.html',
    tone: 'slate',
  },
];

const tones = {
  blue: 'bg-[#EAF1FF] text-[#004CE5]',
  teal: 'bg-[#E8F8F4] text-[#087F69]',
  slate: 'bg-[#EEF2F7] text-[#334155]',
};

function EvidenceCard({ event }) {
  return (
    <article className="flex min-h-0 flex-col overflow-hidden rounded-[22px] border border-[#DAE3EF] bg-white shadow-[0_10px_32px_rgba(15,23,42,0.055)]">
      <div className="relative h-[270px] shrink-0 overflow-hidden bg-[#F5F8FC]">
        <img src={event.image} alt={event.imageAlt} className="h-full w-full object-cover object-top" />
        <div className="absolute inset-x-0 bottom-0 h-[34px] bg-gradient-to-t from-slate-900/10 to-transparent" />
      </div>
      <div className="flex min-h-0 flex-1 flex-col px-6 pb-5 pt-5">
        <div className="flex items-center justify-between gap-4">
          <span className={`rounded-full px-4 py-1.5 text-[22px] font-extrabold ${tones[event.tone]}`}>
            {event.number} · {event.tag}
          </span>
          <span className="text-[16px] font-semibold text-slate-400">{event.date}</span>
        </div>
        <h2 className="mt-3 text-[27px] font-black leading-[1.2] text-slate-900">{event.title}</h2>
        <p className="mt-2 text-[19px] leading-[1.4] text-slate-600">{event.detail}</p>
        <a href={event.url} target="_blank" rel="noreferrer" className="mt-auto pt-3 text-[15px] font-semibold text-[#426B9E] underline decoration-[#A7C1E3] underline-offset-4">
          图源：{event.source}
        </a>
      </div>
    </article>
  );
}

export default function Page_WorkBuddyMarketEvents() {
  return (
    <AiModelLightLayout title="AI新产品：腾讯WorkBuddy" subtitle="市场反馈与代表事件">
      <div className="flex h-full w-full flex-col font-['MiSans']">
        <div className="relative -top-8 flex shrink-0 items-center justify-between gap-8">
          <p className="text-[28px] font-bold leading-[1.35] text-slate-800">
            公众热议集中在公测期；之后的关键信号是访问量领先、腾讯优先投入与开放生态。
          </p>
          <span className="shrink-0 border-l-[4px] border-[#004CE5] pl-4 text-[17px] font-bold text-[#426B9E]">2026 关键节点</span>
        </div>

        <div className="relative mt-6 grid h-[154px] shrink-0 grid-cols-5 gap-5 px-3">
          <div className="absolute left-[9%] right-[9%] top-[58px] h-[3px] bg-[#D8E5F7]" />
          {timeline.map((node) => (
            <div key={node.date} className="relative z-10 flex flex-col items-center text-center">
              <span className={`text-[25px] font-black ${node.featured ? 'text-[#004CE5]' : 'text-slate-500'}`}>{node.date}</span>
              <span className={`mt-[17px] h-[17px] w-[17px] rounded-full border-[4px] border-[#F8FAFC] shadow-[0_0_0_2px_#A9C2EA] ${node.featured ? 'bg-[#004CE5]' : 'bg-[#AFC3DE]'}`} />
              <span className={`mt-4 text-[20px] leading-tight ${node.featured ? 'font-black text-slate-900' : 'font-semibold text-slate-500'}`}>{node.title}</span>
            </div>
          ))}
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-3 gap-6">
          {events.map((event) => <EvidenceCard key={event.number} event={event} />)}
        </div>

        <p className="mt-3 shrink-0 text-[14px] leading-snug text-slate-400">
          时间轴补充：3 月 12 日微信直连（腾讯云）；8 月 12 日业绩会上腾讯表示将优先投入 WorkBuddy。访问量为平台使用次数，不等于去重用户数。
        </p>
      </div>
    </AiModelLightLayout>
  );
}

Page_WorkBuddyMarketEvents.hideHeader = true;
Page_WorkBuddyMarketEvents.fullBleed = true;
