import React from 'react';

export default function Page_DataCorrection() {
  return (
    <div className="w-full h-full flex flex-col px-12 sm:px-16 pt-[25px] pb-8 text-zinc-900 font-sans justify-between overflow-hidden bg-white">
      {/* Title Area */}
      <div className="flex items-center shrink-0 mb-[16px]">
        <div className="w-2 h-10 bg-[#FF9900] rounded-full shadow-[0_0_15px_rgba(255,153,0,0.25)]" />
        <h1 className="text-4xl font-black text-zinc-900 tracking-wider ml-4 flex items-center">
          数据指标纠正与词条优化说明
        </h1>
      </div>

      {/* Main Layout */}
      <div className="flex-grow flex flex-col gap-5 min-h-0 justify-start">
        
        {/* Top Info Banner */}
        <div className="rounded-[1.25rem] border border-[#FF9900]/20 bg-[#FF9900]/[0.02] p-5 shrink-0 shadow-sm">
          <p className="text-[20px] leading-relaxed text-zinc-700 font-bold">
            💡 <span className="text-zinc-900 font-black">历史数据偏差修正：</span>
            之前的数据在分母计算上存在一定误区。部分指令类词条（如“帮我查一下物流”、“教我如何查快递”）在AI回复中不会产生具体的查件平台推荐偏向，因而导致数据虚高。本月报告已对此做出了数据修正与降权，实际呈现更客观的数据轨迹。
          </p>
        </div>

        {/* Middle Columns: Anomaly Cases (Two Mock Diagrams) */}
        <div className="grid grid-cols-2 gap-6 flex-grow min-h-0">
          
          {/* Case 1 */}
          <div className="flex flex-col gap-3 h-full min-h-0">
            <h3 className="text-2xl font-black text-zinc-800 flex items-center gap-2 shrink-0">
              <span className="w-2 h-5 bg-[#FF9900] rounded-full" />
              情况一：物流单号查件反问 (图 1)
            </h3>
            <div className="flex-grow rounded-2xl border border-zinc-200 bg-slate-50/50 p-4 flex flex-col justify-between min-h-0 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
              <p className="text-[17px] font-bold text-zinc-600 leading-normal mb-3 shrink-0">
                AI模型对具体单号类检索并不会倾向于推荐特定服务商，而是采取直接反问或提供单号交互输入框的形式进行二次确认。
              </p>
              
              {/* Graphic Mock */}
              <div className="flex-grow rounded-xl bg-white border border-zinc-200/80 p-4 flex flex-col gap-3 justify-center min-h-0">
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-600 font-extrabold text-xs shrink-0">User</div>
                  <div className="bg-slate-100 rounded-2xl rounded-tl-none px-3.5 py-2 text-[15px] font-bold text-zinc-700 max-w-[85%]">
                    帮我查一下这个快递单号：YT2659302910...
                  </div>
                </div>
                <div className="flex items-start gap-2.5 flex-row-reverse">
                  <div className="w-8 h-8 rounded-full bg-[#004CE5] flex items-center justify-center text-white font-extrabold text-xs shrink-0">AI</div>
                  <div className="bg-blue-50/80 border border-blue-100 rounded-2xl rounded-tr-none px-3.5 py-2 text-[15px] font-bold text-zinc-700 max-w-[85%]">
                    已为您准备好单号查询入口。请您点击下方或输入完整单号以开始实时状态追踪：
                    <div className="mt-2 border border-zinc-200/80 rounded-lg p-2.5 bg-white flex items-center justify-between">
                      <span className="text-zinc-400 text-xs font-medium">输入物流单号查询...</span>
                      <span className="bg-[#004CE5] text-white px-3 py-1 rounded text-xs font-bold">查询</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case 2 */}
          <div className="flex flex-col gap-3 h-full min-h-0">
            <h3 className="text-2xl font-black text-zinc-800 flex items-center gap-2 shrink-0">
              <span className="w-2 h-5 bg-[#FF9900] rounded-full" />
              情况二：操作指引类系统性回复 (图 2)
            </h3>
            <div className="flex-grow rounded-2xl border border-zinc-200 bg-slate-50/50 p-4 flex flex-col justify-between min-h-0 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
              <p className="text-[17px] font-bold text-zinc-600 leading-normal mb-3 shrink-0">
                在“如何查快递”类纯咨询词条下，大模型更倾向于返回普适性指引（如短信指引、致电邮政、官网操作），不会引向特定商业品牌。
              </p>
              
              {/* Graphic Mock */}
              <div className="flex-grow rounded-xl bg-white border border-zinc-200/80 p-4 flex flex-col gap-2.5 justify-center min-h-0 text-[14px]">
                <div className="flex items-center gap-2 border-b border-zinc-100 pb-2">
                  <span className="w-2 h-2 rounded-full bg-zinc-300" />
                  <span className="text-zinc-750 font-bold">用户检索：如何查别人给寄的快递？</span>
                </div>
                <div className="flex flex-col gap-1.5 font-bold text-zinc-600">
                  <p className="text-[#004CE5] font-black">AI大模型主要解答：</p>
                  <p>1. <span className="text-zinc-800 font-extrabold">官方渠道</span>：通过国家邮政局申诉平台或各大快递品牌电话核查。</p>
                  <p>2. <span className="text-zinc-800 font-extrabold">实名认证</span>：使用您的手机号在微信官方小程序进行实名绑定查询。</p>
                  <p>3. <span className="text-zinc-800 font-extrabold">短信号码</span>：核查近期收到的取件短信或发货通知。</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Suggestion Card */}
        <div className="rounded-xl border border-zinc-200 bg-slate-50/50 px-6 py-3.5 shrink-0 mt-1">
          <p className="text-[18px] leading-relaxed text-zinc-700 font-bold">
            ⚙️ <span className="text-zinc-900 font-black">词条降权与调整建议：</span>
            建议将无倾向性的指令/操作类词条逐步剔除或降权，重点转为针对“哪家好”、“查件方便的工具测评推荐”、“多包裹管理对比”等能产生明确AI推荐倾斜的高价值检索词条进行深度铺设。
          </p>
        </div>

      </div>
    </div>
  );
}
