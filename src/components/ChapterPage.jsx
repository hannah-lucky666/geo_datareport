import React from 'react';

function DefaultPlaceholder({ title }) {
  return (
    <div className="w-full h-full flex items-center justify-center pointer-events-none">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-zinc-800/40 mb-6">{title}</h2>
        <p className="text-lg text-zinc-400">内容待添加</p>
      </div>
    </div>
  );
}

export default function ChapterPage({ chapterIndex, sectionIndex, pageIndex, component: ContentComponent, title }) {

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
          <DefaultPlaceholder title={title} />
        )}
      </div>
    </div>
  );
}
