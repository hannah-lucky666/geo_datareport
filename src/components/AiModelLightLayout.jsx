import React from 'react';

export default function AiModelLightLayout({ title, subtitle, children, contentShiftUp = 0 }) {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#F8FAFC] text-zinc-900 font-['MiSans',sans-serif]">
      <div className="absolute left-[52px] right-[52px] top-[72px] flex items-start gap-5">
        <div className="mt-[7px] h-[63px] w-[8px] shrink-0 rounded-full bg-[#004CE5]" />
        <div className="min-w-0">
          <h1 className="text-[68px] font-black leading-[1.12] tracking-[0.02em]">{title}</h1>
          {subtitle && (
            <p className="mt-2 text-[27px] font-semibold leading-[1.35] text-zinc-700">{subtitle}</p>
          )}
        </div>
      </div>

      <div className="absolute left-[52px] right-[52px] top-[201px] h-px bg-slate-200" />
      <div
        className="absolute left-[52px] right-[52px]"
        style={{
          top: `${(subtitle ? 256 : 225) - contentShiftUp}px`,
          bottom: `${58 + contentShiftUp}px`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
