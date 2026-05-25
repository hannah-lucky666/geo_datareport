import React from 'react';

export default function Page_DataTroubleshootingSummary() {
  return (
    <div className="w-full h-full flex flex-col px-12 sm:px-16 pb-16 text-zinc-900 font-sans">
      {/* Page Title */}
      <div className="flex items-center gap-3 mb-6 shrink-0">
        <div className="w-1.5 h-8 bg-[#004CE5] rounded-full shadow-[0_0_12px_rgba(0,76,229,0.2)]" />
        <h1 className="text-3xl font-black text-zinc-900 tracking-wider">
          排查归因总结与下一步规划
        </h1>
      </div>

      {/* Main Content Area: Stacked Top & Bottom with absolute vertical fullness */}
      <div className="flex-1 min-h-0 flex flex-col gap-8 justify-between">
        
        {/* TOP SECTION: 核心原因总结 (2 columns, stretched to fill vertically) */}
        <div className="flex-1 flex flex-col gap-3.5 min-h-0">
          {/* H2 Title */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="w-2.5 h-6 rounded bg-[#004CE5]" />
            <h2 className="text-3xl font-black text-zinc-900 tracking-wide">核心原因总结</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-6 flex-1 min-h-0">
            {/* Reason 1 */}
            <div className="bg-white border border-zinc-200/80 rounded-[2rem] p-8 pt-14 shadow-[0_12px_45px_rgba(15,23,42,0.01)] flex flex-col justify-start h-full hover:shadow-[0_20px_50px_rgba(0,0,0,0.02)] transition-all duration-300">
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xl sm:text-2xl font-black text-[#004CE5] font-['Montserrat',sans-serif]">01 /</span>
                  <h3 className="text-2xl sm:text-[1.65rem] font-black text-zinc-900 tracking-wide">
                    平台稳定性差异（豆包最不稳定）
                  </h3>
                </div>
                <p className="text-xl sm:text-[1.42rem] lg:text-[1.5rem] leading-[1.8] text-zinc-500 font-bold">
                  在出现数据波动的记录中，豆包平台的随机性最大，不同账号之间给出的回答经常出现分歧。
                </p>
              </div>
            </div>

            {/* Reason 2 */}
            <div className="bg-white border border-zinc-200/80 rounded-[2rem] p-8 pt-14 shadow-[0_12px_45px_rgba(15,23,42,0.01)] flex flex-col justify-start h-full hover:shadow-[0_20px_50px_rgba(0,0,0,0.02)] transition-all duration-300">
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xl sm:text-2xl font-black text-[#004CE5] font-['Montserrat',sans-serif]">02 /</span>
                  <h3 className="text-2xl sm:text-[1.65rem] font-black text-zinc-900 tracking-wide">
                    底层检索机制差异（推测调用了老数据）
                  </h3>
                </div>
                <p className="text-xl sm:text-[1.42rem] lg:text-[1.5rem] leading-[1.8] text-zinc-500 font-bold">
                  针对豆包的不稳定表现，我们推测最大的可能性是：在部分账号或特定提问下，平台默认没有触发“实时互联网搜索”，而是直接调用了其模型早期抓取的旧数据。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: 下一步规划 (3 columns, stretched to fill vertically) */}
        <div className="flex-1 flex flex-col gap-3.5 min-h-0">
          {/* H2 Title */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="w-2.5 h-6 rounded bg-emerald-600" />
            <h2 className="text-3xl font-black text-zinc-900 tracking-wide">下一步规划</h2>
          </div>

          <div className="grid grid-cols-3 gap-6 flex-1 min-h-0">
            {/* Plan 1 */}
            <div className="bg-white border border-zinc-200/80 rounded-[2rem] p-8 pt-14 shadow-[0_12px_45px_rgba(15,23,42,0.01)] flex flex-col justify-start h-full hover:shadow-[0_20px_50px_rgba(0,0,0,0.02)] transition-all duration-300">
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-3 border-b border-zinc-100 pb-3 shrink-0">
                  <span className="text-sm font-black text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-lg border border-emerald-100 font-['Montserrat']">STEP 01</span>
                  <h3 className="text-xl sm:text-2xl font-black text-zinc-900">
                    持续观测与复现测试
                  </h3>
                </div>
                <p className="text-lg sm:text-[1.35rem] leading-[1.8] text-zinc-500 font-bold mt-1">
                  下个月我们将继续保留交叉测试，观测这种现象是否会稳定复现。
                </p>
              </div>
            </div>

            {/* Plan 2 */}
            <div className="bg-white border border-zinc-200/80 rounded-[2rem] p-8 pt-14 shadow-[0_12px_45px_rgba(15,23,42,0.01)] flex flex-col justify-start h-full hover:shadow-[0_20px_50px_rgba(0,0,0,0.02)] transition-all duration-300">
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-3 border-b border-zinc-100 pb-3 shrink-0">
                  <span className="text-sm font-black text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-lg border border-emerald-100 font-['Montserrat']">STEP 02</span>
                  <h3 className="text-xl sm:text-2xl font-black text-zinc-900">
                    长期优化规划
                  </h3>
                </div>
                <p className="text-lg sm:text-[1.35rem] leading-[1.8] text-zinc-500 font-bold mt-1">
                  如果反复测试确认确实是“不触发实时搜索、依赖老数据”机制导致的，属于底座更新周期问题。我们将据此调整策略，通过持续语料投喂逐步“洗掉”老数据。
                </p>
              </div>
            </div>

            {/* Plan 3 */}
            <div className="bg-white border border-zinc-200/80 rounded-[2rem] p-8 pt-14 shadow-[0_12px_45px_rgba(15,23,42,0.01)] flex flex-col justify-start h-full hover:shadow-[0_20px_50px_rgba(0,0,0,0.02)] transition-all duration-300">
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-3 border-b border-zinc-100 pb-3 shrink-0">
                  <span className="text-sm font-black text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-lg border border-emerald-100 font-['Montserrat']">STEP 03</span>
                  <h3 className="text-xl sm:text-2xl font-black text-zinc-900">
                    测试流程迭代
                  </h3>
                </div>
                <p className="text-lg sm:text-[1.35rem] leading-[1.8] text-zinc-500 font-bold mt-1">
                  则说明偏差可能由偶发因素引起。届时我们将升级测试流程，排除干扰项，以求找到更精准的底层原因。
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
