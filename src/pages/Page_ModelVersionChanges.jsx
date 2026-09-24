import React, { useState } from 'react';
import AiModelLightLayout from '../components/AiModelLightLayout';

/**
 * 主流 AI 模型版本变更（豆包 / DeepSeek / 千问 / 元宝 / 蚂蚁阿福）
 * 模型与产品版本节点，依据各家官方公告；更新至 2026.09.24。
 */

const PLATFORMS = [
  {
    name: '豆包',
    vendor: '字节跳动',
    logo: '/ai-logos/doubao.png',
    current: '豆包 2.1 Pro',
    currentNote: 'Seed 2.1 Pro · 9/15 新版本',
    timeline: [
      { date: '2026.02', text: 'Seed 2.0 发布，含 Pro、Lite、Mini、Code', source: 'https://developer.volcengine.com/articles/7610285824933445675' },
      { date: '2026.04', text: '2.0 Lite 更新，支持文本、图像、音视频理解', source: 'https://docs.volcengine.com/docs/ark/model-release-announcement?lang=zh' },
      { date: '2026.06', text: '2.1 Pro / Turbo 发布，强化编程与 Agent', source: 'https://docs.volcengine.com/docs/ark/model-release-announcement?lang=zh' },
      { date: '2026.09', text: '2.1 Pro / Lite 推出 9/15 新版本', source: 'https://docs.volcengine.com/docs/ark/model-release-announcement?lang=zh' },
    ],
    takeaway: '2.1 在 6 月发布，9 月更新 Pro 与 Lite。',
  },
  {
    name: 'DeepSeek',
    vendor: '深度求索',
    logo: '/ai-logos/deepseek.png',
    current: 'DeepSeek-V4.1-Flash',
    currentNote: '9/10 API 上线 · V4-Pro 仍可用',
    timeline: [
      { date: '2025.12', text: 'V3.2 正式版发布，强化推理与工具调用', source: 'https://deepseek.com/news/deepseek-v3-2/' },
      { date: '2026.04', text: 'V4 预览版发布并开源，支持 1M 上下文', source: 'https://deepseek.com/news/v4-preview/' },
      { date: '2026.08', text: 'V4-Pro 正式版上线 App、网页与 API', source: 'https://api-docs.deepseek.com/zh-cn/news/news260813/' },
      { date: '2026.09', text: 'V4.1-Flash 发布，原生支持视觉理解', source: 'https://api-docs.deepseek.com/updates/' },
    ],
    takeaway: '最新发布的是 V4.1-Flash；官方确认 V4-Pro 的 API 服务继续提供。',
  },
  {
    name: '千问',
    vendor: '阿里巴巴',
    logo: '/ai-logos/qwen.png',
    current: 'Qwen3.8-Max',
    currentNote: '9 月再升级 · 1M 上下文',
    timeline: [
      { date: '2026.05', text: 'Qwen3.7-Max 预览版开放', source: 'https://www.alibabacloud.com/help/en/model-studio/newly-released-models' },
      { date: '2026.08', text: 'Qwen3.8-Max 正式发布，2.4T 参数', source: 'https://www.alibabacloud.com/en/press-room/alibaba-unveils-qwen3-8-max' },
      { date: '2026.09', text: '推出 Max-0902 快照，改进编程与视觉', source: 'https://www.alibabacloud.com/help/en/model-studio/newly-released-models' },
      { date: '2026.09', text: '9/22 公布 Max 再升级；Qwen 4 仍在训练', source: 'https://www.alibabacloud.com/en/press-room/alibaba-unveils-roadmap-on-full-stack-ai-strategy' },
    ],
    takeaway: '当前旗舰仍为 Qwen3.8-Max；Qwen 4 是研发计划，尚未发布。',
  },
  {
    name: '元宝',
    vendor: '腾讯混元',
    logo: '/ai-logos/yuanbao.png',
    current: '混元 Hy4 preview',
    currentNote: '元宝已接入 · 1M 上下文',
    timeline: [
      { date: '2026.04', text: 'Hy3 preview 发布，重建后的首个版本', source: 'https://www.tencent.com/zh-hk/tencent-hunyuan-officially-releases-hy3-advancing-agent-capabilities-and-deeper-product-integration/' },
      { date: '2026.07', text: 'Hy3 正式发布，接入元宝等产品', source: 'https://www.tencent.com/zh-hk/tencent-hunyuan-officially-releases-hy3-advancing-agent-capabilities-and-deeper-product-integration/' },
      { date: '2026.08', text: 'Hy4 preview 发布并开源，元宝同步首发', source: 'https://www.tencent.com/zh-cn/tencent-releases-and-open-sources-tencent-hy4-preview/' },
    ],
    takeaway: 'Hy4 目前是预览版；元宝可体验，正式版发布日期尚未公布。',
  },
  {
    name: '蚂蚁阿福',
    vendor: '蚂蚁健康',
    logo: '/geo-platforms/afu.png',
    current: '蚂蚁阿福 App',
    currentNote: 'AI 健康助手 · 按产品功能迭代',
    timeline: [
      { date: '2025.12', text: 'AQ 启用中文名「蚂蚁阿福」', source: 'https://apps.apple.com/cn/app/id6743828427' },
      { date: '2026.05', text: '推出体检报告解读关怀行动', source: 'https://www.antgroup.com/hk/press-releases/1778054400000' },
      { date: '2026.08', text: '阿福医生版上线，打通医生与患者端', source: 'https://www.antgroup.com/en/news-media/press-releases/1786503600000' },
      { date: '2026.09', text: '联合中国营养学会上线「AI 饮食分」', source: 'https://www.sina.cn/media/7904381190' },
    ],
    takeaway: '阿福是医疗健康产品；以可核验的功能更新记录进展。',
  },
];

function LogoBadge({ src, name }) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <span className="w-[40px] h-[40px] shrink-0 rounded-[10px] bg-blue-100 flex items-center justify-center text-[17px] font-bold text-[#004CE5]">
        {name.slice(0, 1)}
      </span>
    );
  }

  return (
    <span className="w-[40px] h-[40px] shrink-0 rounded-[10px] bg-white overflow-hidden flex items-center justify-center">
      <img
        src={src}
        alt={name}
        onError={() => setFailed(true)}
        className="w-full h-full object-contain"
      />
    </span>
  );
}

function PlatformCard({ p }) {
  return (
    <div className="h-full min-w-0 rounded-[20px] border border-slate-200 bg-white shadow-[0_2px_10px_rgba(15,23,42,0.04)] px-5 py-6 flex flex-col">
      {/* 头部 */}
      <div className="shrink-0 h-[50px] flex items-center gap-2.5">
        <LogoBadge src={p.logo} name={p.name} />
        <div className="min-w-0">
          <p className="text-[26px] font-bold text-zinc-800 leading-none whitespace-nowrap">{p.name}</p>
          <p className="mt-2 text-[16px] text-zinc-700 leading-none whitespace-nowrap">{p.vendor}</p>
        </div>
      </div>

      {/* 当前主力版本 */}
      <div className="shrink-0 h-[122px] mt-5 rounded-[14px] border border-slate-200 bg-slate-50 px-4 py-4 flex flex-col">
        <p className="text-[15px] font-bold text-[#004CE5] leading-none tracking-wide">最新模型 / 产品</p>
        <p className="mt-3 text-[23px] font-bold text-zinc-800 leading-tight">{p.current}</p>
        <p className="mt-2 text-[16px] text-zinc-700 leading-none">{p.currentNote}</p>
      </div>

      {/* 版本变更时间线 */}
      <div className="flex-1 min-h-0 mt-6 relative pl-1">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-slate-300" />
        <div className="h-full flex flex-col justify-between">
          {p.timeline.map((item, idx) => (
            <div key={`${p.name}-${item.date}-${idx}`} className="relative flex items-start gap-3">
              <span
                className={`relative z-10 mt-1.5 w-[15px] h-[15px] rounded-full border-[3px] shrink-0 ${
                  idx === p.timeline.length - 1
                    ? 'bg-[#004CE5] border-[#004CE5]'
                    : 'bg-white border-slate-400'
                }`}
              />
              <div className="min-w-0">
                <a href={item.source} target="_blank" rel="noreferrer" title="查看官方来源" className="text-[16px] font-bold tracking-wide leading-none font-['Montserrat'] text-zinc-800 hover:text-[#004CE5]">
                  {item.date}
                </a>
                <p className="mt-2 text-[17px] text-zinc-800 leading-[24px]">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 这一栏的小结 */}
      <div className="shrink-0 h-[116px] mt-6 rounded-[14px] border border-slate-200 bg-slate-50 px-4 py-4 flex flex-col">
        <p className="text-[15px] font-bold text-[#004CE5] leading-none tracking-wide">怎么看</p>
        <p className="mt-2.5 text-[18px] text-zinc-800 leading-[26px]">{p.takeaway}</p>
      </div>
    </div>
  );
}

export default function Page_ModelVersionChanges() {
  return (
    <AiModelLightLayout title="主流AI模型版本变更" subtitle="截至 2026.09.24 · 四家基础模型与一款医疗 AI 产品">
      <div className="w-full h-full grid grid-cols-5 gap-4 select-none animate-fadeIn font-['MiSans']">
        {PLATFORMS.map((p) => (
          <PlatformCard key={p.name} p={p} />
        ))}
      </div>
    </AiModelLightLayout>
  );
}

Page_ModelVersionChanges.hideHeader = true;
Page_ModelVersionChanges.fullBleed = true;
