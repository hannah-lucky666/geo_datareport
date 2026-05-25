import React from 'react';
import { parsedConfig } from '../config/parseConfig';

export default function TOCSlide({ bgImage, title, menuText, brandLabel, serviceGuide }) {
  const { chapters } = parsedConfig;
  const debug = false;
  const dbg = debug ? 'bg-red-500/40' : '';

  return (
    <div className="w-full h-full flex flex-col relative overflow-hidden bg-gradient-to-br from-slate-50 via-zinc-100 to-white">
      {bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center z-0 opacity-10 mix-blend-multiply"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}

      {/* Top-right brand line */}
      <div className={`absolute z-10 flex items-center gap-[16px] ${dbg}`} style={{ top: '38px', right: '93px' }}>
        <div className="h-[1px] bg-zinc-800/20" style={{ width: '200px' }} />
        <span
          className="text-zinc-800 font-light"
          style={{ fontSize: '26px', letterSpacing: '0.3em', fontFamily: "'Montserrat', sans-serif" }}
        >
          {brandLabel}
        </span>
      </div>

      {/* Left: title */}
      <div className={`absolute z-10 ${dbg}`} style={{ top: '233px', left: '130px' }}>
        <h1
          className="text-zinc-900 font-black"
          style={{ fontSize: '78px', letterSpacing: '0.05em', fontFamily: "'AlimamaShuHeiTi', sans-serif" }}
        >
          {title}
        </h1>
      </div>

      {/* Left: chapter list */}
      <div className={`absolute z-10 flex flex-col ${dbg}`} style={{ top: '607px', left: '132px', gap: '0px' }}>
        {chapters.map((chapter, i) => (
          <div key={i} className="flex items-baseline" style={{ gap: '43px', lineHeight: '1.4' }}>
            <span
              className="text-[#004CE5]"
              style={{ fontSize: '70px', fontFamily: "'MiSans', sans-serif", fontWeight: 300 }}
            >
              {String(i + 1).padStart(2, '0')}.
            </span>
            <span
              className="text-zinc-800"
              style={{ fontSize: '68px', letterSpacing: '0px', fontFamily: "'MiSans', sans-serif", fontWeight: 300 }}
            >
              {chapter.title}
            </span>
          </div>
        ))}
      </div>

      {/* Right: MENU */}
      <div className={`absolute z-10 flex flex-col items-end ${dbg}`} style={{ right: '114px', top: '76%', transform: 'translateY(-50%)' }}>
        <span
          className="text-zinc-900/[0.05] font-black leading-none select-none"
          style={{ fontSize: '261px', letterSpacing: '0', fontFamily: "'Roboto', sans-serif" }}
        >
          {menuText}
        </span>
        <span
          className="text-zinc-500 font-light"
          style={{ fontSize: '32px', letterSpacing: '0', marginTop: '42px', marginRight: '10px' }}
        >
          {serviceGuide}
        </span>
      </div>
    </div>
  );
}
