import React from 'react';
import { parsedConfig } from '../config/parseConfig';

export default function TOCSlide({ bgImage, title, menuText, brandLabel, serviceGuide }) {
  const { chapters } = parsedConfig;
  const debug = false;
  const dbg = debug ? 'bg-red-500/40' : '';

  return (
    <div className="w-full h-full flex flex-col relative overflow-hidden bg-black">
      {bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}

      {/* Top-right brand line */}
      <div className={`absolute z-10 flex items-center gap-[16px] ${dbg}`} style={{ top: '38px', right: '93px' }}>
        <div className="h-[1px] bg-white/30" style={{ width: '200px' }} />
        <span
          className="text-white font-light"
          style={{ fontSize: '26px', letterSpacing: '0.3em', fontFamily: "'Montserrat', sans-serif" }}
        >
          {brandLabel}
        </span>
      </div>

      {/* Left: title */}
      <div className={`absolute z-10 ${dbg}`} style={{ top: '233px', left: '130px' }}>
        <h1
          className="text-white font-black"
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
              style={{ fontSize: '70px', fontFamily: "'MiSans', sans-serif", fontWeight: 200 }}
            >
              {String(i + 1).padStart(2, '0')}.
            </span>
            <span
              className="text-white"
              style={{ fontSize: '68px', letterSpacing: '0px', fontFamily: "'MiSans', sans-serif", fontWeight: 200 }}
            >
              {chapter.title}
            </span>
          </div>
        ))}
      </div>

      {/* Right: MENU */}
      <div className={`absolute z-10 flex flex-col items-end ${dbg}`} style={{ right: '114px', top: '76%', transform: 'translateY(-50%)' }}>
        <span
          className="text-white font-black leading-none select-none"
          style={{ fontSize: '261px', letterSpacing: '0', fontFamily: "'Roboto', sans-serif" }}
        >
          {menuText}
        </span>
        <span
          className="text-white font-light"
          style={{ fontSize: '32px', letterSpacing: '0', marginTop: '42px', marginRight: '10px' }}
        >
          {serviceGuide}
        </span>
      </div>
    </div>
  );
}
