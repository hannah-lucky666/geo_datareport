import React from 'react';
import AiModelLightLayout from '../components/AiModelLightLayout';

const platforms = [
  { name: 'WorkBuddy', company: '腾讯', value: 2097, width: '100%', color: 'bg-[#004CE5]' },
  { name: 'TRAE IDE', company: '字节 · 国内版', value: 1279, width: '61%', color: 'bg-[#80A9ED]' },
  { name: 'QoderWork', company: '阿里', value: 788, width: '38%', color: 'bg-[#ADC7EF]' },
];

function PlatformBar({ item }) {
  return (
    <div className="space-y-3">
      <div className="flex items-baseline justify-between gap-4">
        <div className="flex items-baseline gap-3">
          <span className="text-[24px] font-black text-slate-900">{item.name}</span>
          <span className="text-[16px] text-slate-500">{item.company}</span>
        </div>
        <span className={`text-[26px] font-black ${item.name === 'WorkBuddy' ? 'text-[#004CE5]' : 'text-slate-700'}`}>
          {item.value.toLocaleString('zh-CN')} <span className="text-[17px] font-semibold">万次</span>
        </span>
      </div>
      <div className="h-[29px] overflow-hidden rounded-full bg-[#EEF2F8]">
        <div className={`h-full rounded-full ${item.color}`} style={{ width: item.width }} />
      </div>
    </div>
  );
}

const products = [
  {
    name: 'WorkBuddy',
    icon: '/workbuddy/workbuddy-icon.svg',
    position: 'AI 办公工作台',
    work: '整理资料，生成或编辑报告、表格、演示稿',
    highlight: true,
  },
  {
    name: 'Cursor',
    icon: '/workbuddy/cursor-icon.svg',
    position: '带 AI 的代码编辑器',
    work: '在编辑器中查找、编写和修改代码',
  },
  {
    name: 'Codex',
    icon: '/workbuddy/codex-icon.png',
    position: '可接任务的 AI 代理',
    work: '跨文件处理项目任务，运行命令并检查结果',
  },
];

export default function Page_WorkBuddyMarket() {
  return (
    <AiModelLightLayout
      title="AI新产品：腾讯WorkBuddy"
      subtitle="市场定位与用户量"
    >
      <div className="grid h-full w-full grid-cols-[0.92fr_1.08fr] gap-7 font-['MiSans']">
        <section className="flex min-h-0 min-w-0 flex-col rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_10px_42px_rgba(15,23,42,0.05)]">
          <div className="rounded-[22px] bg-[#004CE5] px-7 py-5 text-white shadow-[0_10px_32px_rgba(0,76,229,0.15)]">
            <h2 className="text-[31px] font-black leading-tight">腾讯 WorkBuddy 月访问量居首</h2>
            <p className="mt-2 text-[17px] leading-snug text-blue-100">在易观统计的 17 款中国桌面端 AI 原生办公智能体中，达到 2,097 万次。</p>
          </div>

          <div className="mt-7 flex items-baseline justify-between gap-4">
            <h3 className="text-[27px] font-black text-slate-900">同期代表产品访问次数</h3>
            <span className="rounded-full bg-[#EEF4FF] px-4 py-2 text-[16px] font-bold text-[#004CE5]">单位：万次</span>
          </div>

          <div className="mt-6 flex min-h-0 flex-1 flex-col justify-around gap-4">
            {platforms.map((item) => <PlatformBar key={item.name} item={item} />)}
          </div>

          <div className="mt-5 rounded-[16px] bg-[#F0F5FD] px-5 py-3 text-[18px] leading-snug text-[#31517D]">
            注：这里是平台访问次数，不能直接理解为去重用户数或月活人数。
          </div>
          <p className="mt-3 text-[14px] leading-snug text-slate-400">来源：易观分析《2026 年 6 月中国桌面端 AI 原生办公智能体平台访问量出炉》</p>
        </section>

        <section className="flex min-h-0 min-w-0 flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_10px_42px_rgba(15,23,42,0.05)]">
          <p className="shrink-0 text-[16px] font-bold tracking-[0.18em] text-[#004CE5]">PRODUCT ESSENCE</p>
          <h2 className="mt-3 shrink-0 text-[34px] font-black leading-tight text-slate-900">WorkBuddy 到底是什么？</h2>
          <p className="mt-4 shrink-0 text-[22px] leading-[1.48] text-slate-800">
            它是面向国内办公流程优化的轻量版 Cursor 或 Codex，
            <br />
            侧重报告、表格与演示稿等办公交付。
          </p>

          <h3 className="mt-5 shrink-0 text-[27px] font-black text-slate-900">与 Cursor、Codex 的核心区别</h3>
          <div className="mt-3 flex min-h-0 flex-1 flex-col overflow-hidden rounded-[18px] border border-[#D8E4F3]">
            <div className="grid shrink-0 grid-cols-[205px_250px_1fr] bg-[#EDF4FF] text-[18px] font-bold text-[#31537F]">
              <div className="px-5 py-3">产品</div>
              <div className="border-l border-[#D8E4F3] px-5 py-3">一句话定位</div>
              <div className="border-l border-[#D8E4F3] px-5 py-3">主要做的事</div>
            </div>
            {products.map((product) => (
              <div
                key={product.name}
                className={`grid min-h-0 flex-1 grid-cols-[205px_250px_1fr] border-t border-[#D8E4F3] text-[20px] leading-[1.38] ${product.highlight ? 'bg-[#F5F9FF]' : 'bg-white'}`}
              >
                <div className="flex items-center gap-2.5 px-4 font-black text-slate-900">
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-[12px] ${product.name === 'Codex' ? 'bg-[#111827]' : 'bg-white'}`}>
                    <img src={product.icon} alt="" className={product.name === 'Codex' ? 'h-9 w-9 object-contain' : 'h-11 w-11 object-contain'} />
                  </span>
                  <span>{product.name}</span>
                </div>
                <div className="flex items-center border-l border-[#D8E4F3] px-5 font-semibold text-slate-800">{product.position}</div>
                <div className="flex items-center border-l border-[#D8E4F3] px-5 text-slate-600">{product.work}</div>
              </div>
            ))}
          </div>

          <div className="mt-4 shrink-0 rounded-[16px] bg-[#004CE5] px-6 py-5 text-white shadow-[0_10px_28px_rgba(0,76,229,0.18)]">
            <p className="text-[15px] font-bold tracking-[0.16em] text-blue-100">初步观察</p>
            <p className="mt-2 text-[24px] font-black leading-[1.45]">
              国内访问量增长较快，可能与其对国内办公场景和本地生态的适配有关。
              <br />
              后续仍宜继续观察，不宜过早下定论。
            </p>
          </div>
          <p className="mt-3 shrink-0 text-[14px] text-slate-400">资料：腾讯云 WorkBuddy 文档；Cursor Agent 文档；OpenAI Docs · Codex</p>
        </section>
      </div>
    </AiModelLightLayout>
  );
}

Page_WorkBuddyMarket.hideHeader = true;
Page_WorkBuddyMarket.fullBleed = true;
