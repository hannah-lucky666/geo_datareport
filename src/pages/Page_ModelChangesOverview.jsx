import React from 'react';
import AiModelLightLayout from '../components/AiModelLightLayout';

/**
 * 近期国内主流模型 / 平台更新记录
 * 时间范围：2026.01—2026.09.24；两排共 16 个可核验节点。
 * source 指向发布方原始公告或官方产品记录。
 * highlight：本场讲解重点（对应后续单页展开的平台变化）
 */
const EVENTS = [
  // —— 第一排 ——
  {
    date: '2026.01',
    platform: '文心',
    logo: '/ai-logos/wenxin.png',
    title: '文心 5.0 正式发布',
    desc: '1/22：2.4T 原生全模态正式版上线',
    source: 'https://cloud.baidu.com/news/news_eacd5e1a-b6ad-4874-b920-15390d26e656',
  },
  {
    date: '2026.01',
    platform: 'Kimi',
    logo: '/ai-logos/kimi.png',
    title: 'K2.5 发布并开源',
    desc: '1/27：引入 Agent 集群能力',
    source: 'https://www.kimi.com/en/blog/kimi-k2-5',
  },
  {
    date: '2026.02',
    platform: '豆包',
    logo: '/ai-logos/doubao.png',
    title: 'Seed 2.0 系列发布',
    desc: '2/15：Pro、Lite、Mini、Code 同步上线',
    source: 'https://developer.volcengine.com/articles/7610285824933445675',
  },
  {
    date: '2026.04',
    platform: 'DeepSeek',
    logo: '/ai-logos/deepseek.png',
    title: 'V4 预览版发布并开源',
    desc: '4/24：Pro / Flash 支持 1M 上下文',
    source: 'https://deepseek.com/news/v4-preview/',
    highlight: true,
  },
  {
    date: '2026.05',
    platform: '文心',
    logo: '/ai-logos/wenxin.png',
    title: '文心 5.1 正式发布',
    desc: '5/9：强化 Agent 与推理能力',
    source: 'https://yiyan.baidu.com/blog/zh/posts/ernie-5.1-0508-release/',
  },
  {
    date: '2026.07',
    platform: '元宝',
    logo: '/ai-logos/yuanbao.png',
    title: 'Hy3 正式发布并接入元宝',
    desc: '7/6：295B MoE，256K 上下文',
    source: 'https://www.tencent.com/zh-hk/tencent-hunyuan-officially-releases-hy3-advancing-agent-capabilities-and-deeper-product-integration/',
    highlight: true,
  },
  {
    date: '2026.07',
    platform: 'Kimi',
    logo: '/ai-logos/kimi.png',
    title: 'K3 模型发布',
    desc: '7/16：2.8T 参数；7/27 开放权重',
    source: 'https://www.kimi.com/en/blog/kimi-k3',
  },
  {
    date: '2026.08',
    platform: '千问',
    logo: '/ai-logos/qwen.png',
    title: 'Qwen3.8-Max 正式发布',
    desc: '8/3：2.4T 参数，支持 1M 上下文',
    source: 'https://www.alibabacloud.com/en/press-room/alibaba-unveils-qwen3-8-max',
  },
  // —— 第二排 ——
  {
    date: '2026.08',
    platform: '蚂蚁阿福',
    logo: '/geo-platforms/afu.png',
    title: '阿福医生版上线',
    desc: '8/12：医生与患者端打通',
    source: 'https://www.antgroup.com/en/news-media/press-releases/1786503600000',
  },
  {
    date: '2026.08',
    platform: 'DeepSeek',
    logo: '/ai-logos/deepseek.png',
    title: 'V4-Pro 正式版上线',
    desc: '8/13：App、网页和 API 同步更新',
    source: 'https://api-docs.deepseek.com/zh-cn/news/news260813/',
  },
  {
    date: '2026.08',
    platform: '元宝',
    logo: '/ai-logos/yuanbao.png',
    title: 'Hy4 preview 接入元宝',
    desc: '8/28：新模型开源，支持 1M 上下文',
    source: 'https://www.tencent.com/zh-cn/tencent-releases-and-open-sources-tencent-hy4-preview/',
    highlight: true,
  },
  {
    date: '2026.09',
    platform: '千问',
    logo: '/ai-logos/qwen.png',
    title: 'Max-0902 快照发布',
    desc: '9/2：增强编程、协作 Agent 与视觉理解',
    source: 'https://www.alibabacloud.com/help/en/model-studio/newly-released-models',
  },
  {
    date: '2026.09',
    platform: 'DeepSeek',
    logo: '/ai-logos/deepseek.png',
    title: 'V4.1-Flash 发布',
    desc: '9/10：新架构，原生视觉理解',
    source: 'https://api-docs.deepseek.com/updates/',
    highlight: true,
  },
  {
    date: '2026.09',
    platform: '豆包',
    logo: '/ai-logos/doubao.png',
    title: 'Seed 2.1 更新',
    desc: '9/15：Pro 与 Lite 推出新版本',
    source: 'https://docs.volcengine.com/docs/ark/model-release-announcement?lang=zh',
    highlight: true,
  },
  {
    date: '2026.09',
    platform: '蚂蚁阿福',
    logo: '/geo-platforms/afu.png',
    title: '上线「AI 饮食分」',
    desc: '9/16：联合中国营养学会推出',
    source: 'https://www.sina.cn/media/7904381190',
  },
  {
    date: '2026.09',
    platform: '千问',
    logo: '/ai-logos/qwen.png',
    title: 'Qwen3.8-Max 再升级',
    desc: '9/22：官方披露更新；Qwen 4 仍在训练',
    source: 'https://www.alibabacloud.com/en/press-room/alibaba-unveils-roadmap-on-full-stack-ai-strategy',
  },
];

const ROW1 = EVENTS.slice(0, 8);
const ROW2 = EVENTS.slice(8, 16);

/** 末两字不拆开，避免最后一行只剩一个字 */
function NoOrphan({ text }) {
  const chars = [...text];
  if (chars.length < 2) return text;
  const head = chars.slice(0, -2).join('');
  const tail = chars.slice(-2).join('');
  return (
    <>
      {head}
      <span className="whitespace-nowrap">{tail}</span>
    </>
  );
}

function EventCard({ ev }) {
  return (
    <div
      className={`relative rounded-[16px] px-3.5 py-[18px] flex flex-col min-h-[214px] ${
        ev.highlight
          ? 'border border-[#004CE5]/30 bg-[#004CE5]/[0.06] shadow-[0_2px_10px_rgba(15,23,42,0.04)]'
          : 'border border-slate-200 bg-white shadow-[0_2px_10px_rgba(15,23,42,0.04)]'
      }`}
    >
      <div className="shrink-0 flex items-center gap-2 min-h-[36px]">
        <img
          src={ev.logo}
          alt={ev.platform}
          className="w-9 h-9 rounded-lg object-cover shrink-0"
        />
        <span
          className={`text-[15px] font-bold tracking-wide leading-tight ${
            ev.highlight ? 'text-[#004CE5]' : 'text-zinc-700'
          }`}
        >
          {ev.platform}
        </span>
      </div>
      <a href={ev.source} target="_blank" rel="noreferrer" title="查看发布来源" aria-label={`${ev.platform}：${ev.title}，查看发布来源`} className="absolute top-3 right-3 text-[18px] leading-none text-slate-400 hover:text-[#004CE5]">↗</a>

      <p className="shrink-0 mt-3.5 h-[44px] text-[17px] font-bold text-zinc-800 leading-[22px]">
        <NoOrphan text={ev.title} />
      </p>

      <p
        className={`mt-3 h-[54px] text-[15px] leading-[18px] ${
          ev.highlight ? 'text-zinc-800' : 'text-zinc-700'
        }`}
      >
        <NoOrphan text={ev.desc} />
      </p>
    </div>
  );
}

function TimelineRow({ events }) {
  return (
    <div className="relative shrink-0 px-1 mt-5">
      <div className="absolute left-[6%] right-[6%] top-[10px] h-[2px] bg-slate-300 rounded-full" />
      <div className="grid grid-cols-8 gap-2.5 relative z-10">
        {events.map((ev, idx) => (
          <div key={`node-${ev.date}-${ev.title}-${idx}`} className="flex flex-col items-center gap-2">
            <div
              className={`w-[18px] h-[18px] rounded-full border-[3px] ${
                ev.highlight
                  ? 'bg-[#004CE5] border-[#004CE5] shadow-[0_0_0_5px_rgba(76,141,255,0.18)]'
                  : 'bg-white border-slate-400'
              }`}
            />
            <span
              className={`text-[15px] font-bold tracking-wide font-['Montserrat'] ${
                ev.highlight ? 'text-[#004CE5]' : 'text-zinc-700'
              }`}
            >
              {ev.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Page_ModelChangesOverview() {
  return (
    <AiModelLightLayout title="近期主流模型更新记录">
      <div className="w-full h-full flex flex-col select-none animate-fadeIn font-['MiSans']">

        <p className="shrink-0 text-[22px] text-zinc-800 leading-snug mb-4">
          2026 年 1 月—9 月 24 日国内关键节点 · 蓝色标记为本场讲解重点 · ↗ 查看来源
        </p>

        <div className="flex-1 min-h-0 flex flex-col justify-center gap-[72px]">
          {/* 第一排 */}
          <div className="flex flex-col shrink-0">
            <div className="grid grid-cols-8 gap-2.5">
              {ROW1.map((ev, idx) => (
                <EventCard key={`r1-${idx}`} ev={ev} />
              ))}
            </div>
            <TimelineRow events={ROW1} />
          </div>

          {/* 第二排 */}
          <div className="flex flex-col shrink-0">
            <div className="grid grid-cols-8 gap-2.5">
              {ROW2.map((ev, idx) => (
                <EventCard key={`r2-${idx}`} ev={ev} />
              ))}
            </div>
            <TimelineRow events={ROW2} />
          </div>
        </div>
      </div>
    </AiModelLightLayout>
  );
}

Page_ModelChangesOverview.hideHeader = true;
Page_ModelChangesOverview.fullBleed = true;
