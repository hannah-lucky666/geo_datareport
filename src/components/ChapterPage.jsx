import React from 'react';

function DefaultPlaceholder({ title, subtitle }) {
  return (
    <div className="w-full h-full flex flex-col px-12 sm:px-16 text-zinc-900 font-sans">
      {/* Title */}
      <div className="flex items-center gap-3 mb-4 shrink-0">
        <div className="w-1.5 h-8 bg-[#004CE5] rounded-full shadow-[0_0_12px_rgba(0,76,229,0.2)]" />
        <h1 className="text-3xl font-black text-zinc-900 tracking-wider flex items-baseline gap-3">
          <span>{title}</span>
          {subtitle && (
            <span className="text-xl font-bold text-zinc-400 font-['Montserrat',sans-serif] ml-2">
              {subtitle}
            </span>
          )}
        </h1>
      </div>

      {/* Centered Placeholder Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-zinc-400">内容待添加</p>
        </div>
      </div>
    </div>
  );
}


export default function ChapterPage({ chapterIndex, sectionIndex, pageIndex, component: ContentComponent, title, subtitle }) {

  return (
    <div className="w-full h-full flex flex-col relative bg-slate-50 overflow-hidden text-zinc-800">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, #94a3b8 1.5px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="flex-1 relative z-10 w-full flex items-stretch mt-8 pb-8 overflow-hidden">
        {ContentComponent ? (
          <ContentComponent />
        ) : (
          <DefaultPlaceholder title={title} subtitle={subtitle} />
        )}
      </div>
    </div>
  );
}
