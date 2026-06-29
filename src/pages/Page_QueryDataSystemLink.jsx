import React from 'react';

export default function Page_QueryDataSystemLink() {
  return (
    <div className="w-full h-full flex flex-col px-12 sm:px-16 pt-[22px] pb-8 text-zinc-800 font-sans justify-between overflow-hidden">
      {/* Title Area */}
      <div className="flex items-center shrink-0 mb-3">
        <div className="w-2 h-10 bg-[#004CE5] rounded-full shadow-[0_0_15px_rgba(0,76,229,0.25)]" />
        <h1 className="text-4xl font-black text-zinc-900 tracking-wider ml-4">
          劲酒词条数据明细
        </h1>
      </div>

      {/* Main Content Area - Blank page for overlays/notes */}
      <div className="flex-grow min-h-0" />

      {/* Empty bottom element to balance vertical flex stretch */}
      <div className="shrink-0 h-6" />
    </div>
  );
}
