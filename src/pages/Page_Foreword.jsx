import React from 'react';

export default function Page_Foreword() {
  return (
    <div className="absolute inset-0 bg-[#02050e] text-white flex flex-col justify-between px-16 py-14 overflow-hidden select-none z-50">
      
      {/* Background Radial Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-900/20 blur-[130px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-900/10 blur-[130px]" />
      </div>

      {/* Top Banner (Category Label + Styled Pill Box Container) */}
      <div className="relative z-10 w-full flex items-center justify-between shrink-0">
        
        {/* Left Category Label */}
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-8 bg-blue-500 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.5)]" />
          <span className="text-xl font-black uppercase tracking-[0.25em] text-white/90 font-['Montserrat']">
            FOREWORD / 前言
          </span>
        </div>

        {/* Right Accent Pill Box (Identical to reference image but customized for geo data context) */}
        <div className="bg-white/[0.06] backdrop-blur-md border border-white/10 px-8 py-3 rounded-full flex items-center gap-8 text-xs sm:text-sm font-black tracking-[0.18em] text-white/70 font-['Montserrat'] shadow-lg">
          <span>CONSUMER SHIFT</span>
          <span className="w-[3px] h-3 bg-blue-500 rounded-full" />
          <span>EMOTIONAL VALUE</span>
          <span className="w-[3px] h-3 bg-emerald-500 rounded-full" />
          <span>SPACE REBIRTH</span>
        </div>

      </div>

      {/* Main Content: 3-Column Timeline with Overlapping Ellipses */}
      <div className="relative z-10 flex-1 min-h-0 flex items-center justify-center -my-2">
        
        {/* Horizontal Timeline Line */}
        <div className="absolute left-[8%] right-[8%] h-[1.5px] bg-gradient-to-r from-blue-500/10 via-white/20 to-emerald-500/10" />

        {/* Overlapping Ellipses (Layered exactly behind the columns to provide depth) */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
          {/* Ellipse 1 */}
          <div className="w-[450px] h-[580px] rounded-[50%] bg-[#081329]/30 border border-blue-500/20 shadow-[inset_0_0_50px_rgba(59,130,246,0.1)] -mr-40 backdrop-blur-[1px]" />
          {/* Ellipse 2 */}
          <div className="w-[450px] h-[580px] rounded-[50%] bg-[#081329]/30 border border-blue-500/25 shadow-[inset_0_0_50px_rgba(59,130,246,0.15)] -mr-40 backdrop-blur-[1px]" />
          {/* Ellipse 3 */}
          <div className="w-[450px] h-[580px] rounded-[50%] bg-[#081329]/35 border border-emerald-500/20 shadow-[inset_0_0_50px_rgba(16,185,129,0.1)] backdrop-blur-[1px]" />
        </div>

        {/* Content Columns (3 Columns exactly aligned with the ellipses) */}
        <div className="relative z-10 w-full grid grid-cols-3 gap-6 h-full items-center">
          
          {/* Column 1 */}
          <div className="flex flex-col items-center px-8 text-center">
            {/* Top Stage Label (Above Line) */}
            <div className="mb-10 flex flex-col items-center">
              <span className="text-sm sm:text-base font-black text-blue-400 tracking-[0.2em] uppercase font-['Montserrat']">Stage 01</span>
              <h3 className="text-3xl sm:text-[2.25rem] font-black text-white mt-1.5 tracking-wider">货架变舞台</h3>
            </div>
            
            {/* Glowing Dot on Axis */}
            <div className="w-5 h-5 rounded-full bg-white border-[5px] border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)] z-20" />
            
            {/* Description (Below Line) */}
            <p className="mt-10 text-lg sm:text-[1.42rem] font-bold text-zinc-300 leading-[1.8] max-w-[450px]">
              实体商业正告别单一的“货架”属性，变身为<strong className="text-white font-black">美陈、策展、表演、节庆</strong>等多元舞台；消费者亦转向为<strong className="text-white font-black">情绪价值与独特线下体验</strong>驻足。
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center px-8 text-center">
            {/* Top Stage Label (Above Line) */}
            <div className="mb-10 flex flex-col items-center">
              <span className="text-sm sm:text-base font-black text-blue-400 tracking-[0.2em] uppercase font-['Montserrat']">Stage 02</span>
              <h3 className="text-3xl sm:text-[2.25rem] font-black text-white mt-1.5 tracking-wider">体验重塑灵魂</h3>
            </div>
            
            {/* Glowing Dot on Axis */}
            <div className="w-5 h-5 rounded-full bg-white border-[5px] border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)] z-20" />
            
            {/* Description (Below Line) */}
            <p className="mt-10 text-lg sm:text-[1.42rem] font-bold text-zinc-300 leading-[1.8] max-w-[450px]">
              从浅层打卡到深度入戏，<strong className="text-white font-black">体验重塑空间的有趣灵魂</strong>。商家以更替的内容创造精神共鸣，唤醒被忽视的感受需求。
            </p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center px-8 text-center">
            {/* Top Stage Label (Above Line) */}
            <div className="mb-10 flex flex-col items-center">
              <span className="text-sm sm:text-base font-black text-emerald-400 tracking-[0.2em] uppercase font-['Montserrat']">Stage 03</span>
              <h3 className="text-3xl sm:text-[2.25rem] font-black text-white mt-1.5 tracking-wider">橱窗绽放未来</h3>
            </div>
            
            {/* Glowing Dot on Axis */}
            <div className="w-5 h-5 rounded-full bg-white border-[5px] border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.8)] z-20" />
            
            {/* Description (Below Line) */}
            <p className="mt-10 text-lg sm:text-[1.42rem] font-bold text-zinc-300 leading-[1.8] max-w-[450px]">
              橱窗作为有趣灵魂的百变外衣，成为抓住客流目光、<strong className="text-white font-black">触发消费共鸣的关键入口</strong>，见证城市商业绽放的美好未来。
            </p>
          </div>

        </div>

      </div>

      {/* Bottom Hero Text Block (Identical to reference image but with custom quote) */}
      <div className="relative z-10 w-full shrink-0 mt-2">
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-wide leading-[1.3] max-w-[90%]">
          当物质丰盈成为常态，商业语境已发生深刻变迁。
        </h2>
        <p className="text-lg sm:text-xl font-bold text-zinc-500 mt-3 tracking-[0.15em] uppercase">
          从浅层打卡到深度入戏，体验重塑空间 · 城市商业绽放的美好未来
        </p>
      </div>

    </div>
  );
}
