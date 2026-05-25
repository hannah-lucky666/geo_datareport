import React from 'react';
import { parsedConfig } from '../config/parseConfig';

export default function ChapterNav({ chapterIndex, sectionIndex, pageIndex }) {
  const chapter = parsedConfig.chapters[chapterIndex];
  if (!chapter) return null;

  const sections = chapter.sections;
  const activeSection = sections[sectionIndex];
  const hasPages = activeSection?.pages?.length > 0;

  return (
    <div className="relative z-10 w-full px-12 sm:px-16 pt-8 sm:pt-10">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col md:flex-row items-start md:items-center w-full gap-4 md:gap-8">
          <div className="flex items-center gap-3 pl-2 shrink-0">
            <div className="w-1.5 h-6 bg-[#004CE5] rounded-full shadow-[0_0_10px_rgba(0,76,229,0.3)]" />
            <span className="text-xl sm:text-2xl font-bold text-white tracking-widest drop-shadow-md select-none">
              {chapter.title}
            </span>
          </div>

          {sections.length > 0 && (
            <div className="flex-1 flex items-center gap-2 sm:gap-4 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl p-2">
              {sections.map((section, i) => {
                const isActive = i === sectionIndex;
                return (
                  <div
                    key={i}
                    className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-3 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.1)]'
                        : 'text-zinc-500'
                    }`}
                  >
                    <span
                      className={`text-sm font-bold ${
                        isActive ? 'text-[#004CE5]' : 'text-zinc-600'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`text-sm sm:text-base font-medium tracking-wider ${
                        isActive ? 'text-white' : 'text-zinc-500'
                      }`}
                    >
                      {section.title}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {hasPages && (
          <div className="flex items-center gap-6 pl-4 mt-2">
            {activeSection.pages.map((page, j) => {
              const isChildActive = j === pageIndex;
              return (
                <div
                  key={j}
                  className={`flex items-center pb-1 border-b-2 transition-colors duration-300 ${
                    isChildActive ? 'border-[#004CE5]' : 'border-transparent'
                  }`}
                >
                  <span
                    className={`text-[0.95rem] sm:text-base tracking-wide ${
                      isChildActive
                        ? 'text-white font-medium'
                        : 'text-zinc-500'
                    }`}
                  >
                    {j + 1}. {page.title}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
