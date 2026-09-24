import React, { useState } from 'react';
import AiModelLightLayout from '../components/AiModelLightLayout';

const SCREENSHOT = '/workbuddy/workbuddy-task-demo.png';

function ScreenshotPanel() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="flex h-full min-w-0 flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_10px_42px_rgba(15,23,42,0.05)]">
      <div className="flex shrink-0 items-start justify-between gap-6">
        <div>
          <p className="text-[16px] font-bold tracking-[0.18em] text-[#004CE5]">PRODUCT VIEW</p>
          <h2 className="mt-2 text-[29px] font-black text-slate-900">任务执行界面</h2>
        </div>
        <span className="rounded-full bg-[#EEF4FF] px-4 py-2 text-[17px] font-bold text-[#004CE5]">截图位</span>
      </div>

      <div className={`relative mt-5 min-h-0 flex-1 overflow-hidden rounded-[22px] border ${loaded ? 'border-slate-200 bg-white' : 'border-dashed border-[#8EB0EE] bg-[#F7FAFF]'}`}>
        {!loaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
            <div className="relative h-[138px] w-[214px] rounded-[16px] border border-[#BCD2FB] bg-white shadow-[0_14px_36px_rgba(0,76,229,0.09)]">
              <div className="flex h-[28px] items-center gap-[7px] rounded-t-[16px] border-b border-[#E1EAFA] bg-[#EFF5FF] px-4">
                <span className="h-[7px] w-[7px] rounded-full bg-[#80A8EE]" />
                <span className="h-[7px] w-[7px] rounded-full bg-[#A3BDEC]" />
                <span className="h-[7px] w-[7px] rounded-full bg-[#C2D4F3]" />
              </div>
              <div className="space-y-3 px-5 py-5">
                <div className="h-[10px] w-[75%] rounded-full bg-[#B9D0F9]" />
                <div className="h-[10px] w-full rounded-full bg-[#E0EAFB]" />
                <div className="h-[10px] w-[64%] rounded-full bg-[#E0EAFB]" />
              </div>
            </div>
            <p className="mt-7 text-[27px] font-black text-slate-800">放入 WorkBuddy 真实使用截图</p>
            <p className="mt-3 text-[19px] text-slate-500">建议包含任务输入、执行步骤与交付文件</p>
            <p className="mt-7 rounded-lg bg-white px-4 py-2 font-mono text-[17px] text-[#004CE5]">workbuddy-task-demo.png</p>
          </div>
        )}
        <img
          src={SCREENSHOT}
          alt={loaded ? 'WorkBuddy 任务执行界面截图' : ''}
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(false)}
          className={`absolute inset-0 h-full w-full object-contain ${loaded ? 'block' : 'hidden'}`}
        />
      </div>
      <p className="mt-4 shrink-0 text-[18px] leading-snug text-slate-500">图示流程为功能示意；实际能力取决于所选模型、技能与授权范围。</p>
    </section>
  );
}

export default function Page_WorkBuddyWorkflow() {
  return (
    <AiModelLightLayout
      title="AI新产品：腾讯WorkBuddy"
      subtitle="架构与界面"
    >
      <div className="grid h-full w-full grid-cols-[0.91fr_1.09fr] gap-7 font-['MiSans']">
        <section className="flex min-h-0 min-w-0 flex-col rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_10px_42px_rgba(15,23,42,0.05)]">
          <p className="text-[16px] font-bold tracking-[0.18em] text-[#004CE5]">WORKFLOW</p>
          <h2 className="mt-2 text-[32px] font-black leading-tight text-slate-900">WorkBuddy 如何完成一项任务</h2>
          <p className="mt-2 text-[20px] leading-[1.4] text-slate-600">目标与资料进入任务中枢，经模型和工具处理后形成可用文件。</p>
          <img
            src="/workbuddy/workbuddy-workflow.svg"
            alt="WorkBuddy 将目标与资料汇入任务中枢，再调用模型、技能和文件工具，交付可编辑成果的流程图"
            className="mt-5 min-h-0 w-full flex-1 object-contain"
          />
          <p className="mt-3 shrink-0 text-[15px] text-slate-400">资料：腾讯云 WorkBuddy 文档 · 模型配置 / 技能 / 默认权限与安全沙箱</p>
        </section>
        <ScreenshotPanel />
      </div>
    </AiModelLightLayout>
  );
}

Page_WorkBuddyWorkflow.hideHeader = true;
Page_WorkBuddyWorkflow.fullBleed = true;
