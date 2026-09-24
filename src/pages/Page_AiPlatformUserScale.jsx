import React, { useState } from 'react';
import AiModelLightLayout from '../components/AiModelLightLayout';

/**
 * 各 AI 平台用户量
 * 前六行口径一致：QuestMobile《2026 年 AI 应用市场发展半年报》
 *   2026 年 6 月独立 AI 原生 App 月活，剔除手机厂商预装助手，共 TOP10
 *   01 豆包 38230 万 / 02 千问 16718.43 万 / 03 DeepSeek 12981.94 万
 *   04 元宝 4984.11 万 / 05 蚂蚁阿福 2896.86 万 / 06 豆包爱学 1943.81 万
 *   07 即梦 AI / 08 Lovekey / 09 Kimi 729.46 万 / 10 快对 AI
 * 后四行未进该 TOP10，无同口径月活：
 *   文心、智谱清言取自 AI 产品榜 AICPB 2026 年 6 月国内总榜，口径与 QuestMobile 不同
 *   小荷 AI 医生、讯飞晓医从未公开月活，只列各自公开过的数字
 */

const MAX_MAU = 38230; // 万，豆包

const APPS = [
  {
    rank: '01',
    name: '豆包',
    vendor: '字节跳动',
    logo: '/ai-logos/doubao.png',
    mau: 38230,
    label: '3.82',
    unit: '亿',
    note: '同比 +172.1%，唯一的第一梯队',
  },
  {
    rank: '02',
    name: '千问',
    vendor: '阿里巴巴',
    logo: '/ai-logos/qwen.png',
    mau: 16718,
    label: '1.67',
    unit: '亿',
    note: '同比 +5792.9%，增速全榜第一',
  },
  {
    rank: '03',
    name: 'DeepSeek',
    vendor: '深度求索',
    logo: '/ai-logos/deepseek.png',
    mau: 12982,
    label: '1.30',
    unit: '亿',
    note: '同比 −20.3%，前三里唯一缩水的',
  },
  {
    rank: '04',
    name: '元宝',
    vendor: '腾讯',
    logo: '/ai-logos/yuanbao.png',
    mau: 4984,
    label: '4984',
    unit: '万',
    note: '与前三差着一个数量级',
  },
  {
    rank: '05',
    name: '蚂蚁阿福',
    vendor: '蚂蚁健康 · 医疗垂类',
    logo: '/geo-platforms/afu.png',
    mau: 2897,
    label: '2897',
    unit: '万',
    note: '累计服务用户超 1.3 亿，单日提问超 1000 万',
  },
  {
    rank: '09',
    name: 'Kimi',
    vendor: '月之暗面',
    logo: '/ai-logos/kimi.png',
    mau: 729,
    label: '729',
    unit: '万',
    note: '同比 −42.7%，唯一跌破千万的综合助手',
  },
  {
    rank: '—',
    name: '文心',
    vendor: '百度 · AI 产品榜口径',
    logo: '/ai-logos/wenxin.png',
    mau: 657,
    label: '657',
    unit: '万',
    note: '原文小言，3 月跌出 QuestMobile 前十',
  },
  {
    rank: '—',
    name: '智谱清言',
    vendor: '智谱 · AI 产品榜口径',
    logo: null,
    mau: 482,
    label: '482',
    unit: '万',
    note: '同样未进 QuestMobile 前十',
  },
  {
    rank: '—',
    name: '小荷AI医生',
    vendor: '字节跳动 · 医疗垂类',
    logo: '/ai-logos/xiaohe-aidoctor.png',
    mau: null,
    label: '未公开',
    unit: '',
    note: 'App Store 医疗榜第 3，主入口在抖音',
  },
  {
    rank: '—',
    name: '讯飞晓医',
    vendor: '科大讯飞 · 医疗垂类',
    logo: '/ai-logos/xunfei-xiaoyi.png',
    mau: null,
    label: '未公开',
    unit: '',
    note: '累计下载 2600 万，AI 咨询 1.6 亿次',
  },
];

function LogoBadge({ src, name }) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <span className="w-[40px] h-[40px] shrink-0 rounded-[11px] bg-blue-100 flex items-center justify-center text-[17px] font-bold text-[#004CE5]">
        {name.slice(0, 1)}
      </span>
    );
  }

  return (
    <span className="w-[40px] h-[40px] shrink-0 rounded-[11px] bg-white overflow-hidden flex items-center justify-center">
      <img src={src} alt={name} onError={() => setFailed(true)} className="w-full h-full object-contain" />
    </span>
  );
}

function AppRow({ app }) {
  const pct = app.mau ? Math.max((app.mau / MAX_MAU) * 100, 1.5) : 0;

  return (
    <div className="flex-1 min-h-0 rounded-[14px] border border-slate-200 bg-white shadow-[0_2px_10px_rgba(15,23,42,0.04)] px-6 flex items-center gap-6">
      <span className="w-[36px] shrink-0 text-[18px] font-bold leading-none font-['Montserrat'] text-zinc-800">
        {app.rank}
      </span>

      <div className="w-[290px] shrink-0 flex items-center gap-3">
        <LogoBadge src={app.logo} name={app.name} />
        <div className="min-w-0">
          <p className="text-[22px] font-bold text-zinc-800 leading-none whitespace-nowrap">{app.name}</p>
          <p className="mt-1.5 text-[15px] text-zinc-700 leading-none whitespace-nowrap">{app.vendor}</p>
        </div>
      </div>

      <div className="flex-1 min-w-0 h-[20px] rounded-full bg-slate-100 overflow-hidden">
        {app.mau ? (
          <div className="h-full rounded-full bg-[#004CE5]" style={{ width: `${pct}%` }} />
        ) : (
          <div className="h-full w-full rounded-full border border-dashed border-slate-300" />
        )}
      </div>

      <div className="w-[180px] shrink-0 flex items-baseline justify-end gap-2">
        {app.unit ? (
          <>
            <span className="text-[34px] font-bold leading-none font-['Montserrat'] text-zinc-800">
              {app.label}
            </span>
            <span className="text-[20px] font-bold leading-none text-zinc-800">{app.unit}</span>
          </>
        ) : (
          <span className="text-[20px] font-bold leading-none text-zinc-800">{app.label}</span>
        )}
      </div>

      <span className="w-[450px] shrink-0 text-[18px] leading-none text-right text-zinc-800">{app.note}</span>
    </div>
  );
}

export default function Page_AiPlatformUserScale() {
  return (
    <AiModelLightLayout
      title="各AI平台用户量"
      subtitle="QuestMobile 2026 年 6 月 AI 原生 App 月活榜，剔除手机厂商预装助手"
    >
      <div className="w-full h-full flex flex-col select-none animate-fadeIn font-['MiSans']">

        <div className="shrink-0 h-[34px] flex items-center gap-4">
          <h3 className="text-[28px] font-bold text-zinc-800 leading-none whitespace-nowrap">
            月活跃用户规模
          </h3>
          <span className="text-[19px] text-zinc-700 leading-none whitespace-nowrap">
            统计月份 2026.06
          </span>
          <span className="flex-1 h-px bg-slate-200" />
        </div>

        <div className="flex-1 min-h-0 mt-4 flex flex-col gap-2">
          {APPS.map((app) => (
            <AppRow key={app.name} app={app} />
          ))}
        </div>

        <div className="shrink-0 mt-4 flex items-start gap-8">
          <p className="flex-1 text-[17px] text-zinc-700 leading-[24px]">
            前六行出自 QuestMobile 同一口径；略去的第 6 至 8 名是豆包爱学（1944 万）、即梦 AI、Lovekey，与医疗无关。
          </p>
          <p className="w-[780px] shrink-0 text-[17px] text-zinc-700 leading-[24px]">
            后四行未进 QuestMobile 前十。文心、智谱清言取自 AI 产品榜，口径不同，条长只作示意；小荷、晓医从未公开月活。
          </p>
        </div>
      </div>
    </AiModelLightLayout>
  );
}

Page_AiPlatformUserScale.hideHeader = true;
Page_AiPlatformUserScale.fullBleed = true;
