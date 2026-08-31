import React, { useState, useEffect, useRef } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import SlideContainer from './components/SlideContainer';
import CoverSlide from './templates/CoverSlide';
import TOCSlide from './templates/TOCSlide';
import Page_ProposalChapterCover from './pages/Page_ProposalChapterCover';
import ChapterPage from './components/ChapterPage';
import { flatSlides, parsedConfig } from './config/parseConfig';
import initialOrder from './slideOrder.json';

const slideDictionary = {};
flatSlides.forEach((slide) => {
  let component;
  switch (slide.type) {
    case 'cover':
      component = (
        <CoverSlide
          key={slide.id}
          bgImage={slide.backgroundImage}
          brand={slide.brand}
          subtitle={slide.subtitle}
          date={slide.date}
        />
      );
      break;
    case 'toc':
      component = <TOCSlide key={slide.id} bgImage={slide.backgroundImage} title={slide.name} menuText={slide.menuText} brandLabel={slide.brandLabel} serviceGuide={slide.serviceGuide} />;
      break;
    case 'chapter-cover':
      component = (
        <Page_ProposalChapterCover
          key={slide.id}
          bgImage={slide.backgroundImage}
          title={slide.name}
          subtitle={slide.subtitle}
          brandLabel={slide.brandLabel || parsedConfig.toc?.brandLabel}
          chapterIndex={slide.chapterIndex}
          chapters={parsedConfig.chapters}
        />
      );
      break;
    case 'content':
      component = (
        <ChapterPage
          key={slide.id}
          chapterIndex={slide.chapterIndex}
          sectionIndex={slide.sectionIndex}
          pageIndex={slide.pageIndex}
          component={slide.component}
          title={slide.name}
          subtitle={slide.subtitle}
        />
      );
      break;
  }
  slideDictionary[slide.id] = { name: slide.name, component };
});

const defaultOrder = flatSlides.map((s) => s.id);

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getInitialOrder = () => {
    const validIds = new Set(Object.keys(slideDictionary));
    const initialSet = new Set(initialOrder);

    // 过滤掉已从 config 删除的旧页面
    const filteredInitial = initialOrder.filter((id) => validIds.has(id));

    // 找出 config 中新增但不在已保存顺序里的页面
    const newSlides = defaultOrder.filter((id) => !initialSet.has(id));

    if (newSlides.length === 0) return filteredInitial;

    // 将新页面插入到它们在 defaultOrder 中自然位置的对应位置
    const result = [...filteredInitial];
    for (const newId of newSlides) {
      const defaultIndex = defaultOrder.indexOf(newId);
      let insertAfterIndex = -1;
      for (let i = defaultIndex - 1; i >= 0; i--) {
        const existingIndex = result.indexOf(defaultOrder[i]);
        if (existingIndex !== -1) {
          insertAfterIndex = existingIndex;
          break;
        }
      }
      result.splice(insertAfterIndex + 1, 0, newId);
    }

    return result;
  };

  const [slideOrder, setSlideOrder] = useState(getInitialOrder);
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState(null);

  const savedOrderRef = useRef(slideOrder);
  const isOrderDirty =
    JSON.stringify(slideOrder) !== JSON.stringify(savedOrderRef.current);

  const slideData = slideOrder
    .map((id) => slideDictionary[id])
    .filter(Boolean);

  // 导出脚本用 #slide=N 直达某一页，避免每个浏览器进程连按方向键
  useEffect(() => {
    const applyHash = () => {
      const match = window.location.hash.match(/^#slide=(\d+)/);
      if (!match) return;
      const index = Number(match[1]);
      if (!Number.isFinite(index) || slideData.length === 0) return;
      setCurrentSlide(Math.max(0, Math.min(index, slideData.length - 1)));
    };
    applyHash();
    window.addEventListener('hashchange', applyHash);
    return () => window.removeEventListener('hashchange', applyHash);
  }, [slideData.length]);

  const handleNextSlide = () => {
    if (isMenuOpen) return;
    setCurrentSlide((prev) => Math.min(prev + 1, slideData.length - 1));
  };

  const handlePrevSlide = () => {
    if (isMenuOpen) return;
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')
        return;

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        handleNextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        handlePrevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen, slideData.length]);

  const jumpToSlide = (index) => {
    setCurrentSlide(index);
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(slideOrder);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setSlideOrder(items);

    if (result.source.index === currentSlide) {
      setCurrentSlide(result.destination.index);
    } else if (
      result.source.index < currentSlide &&
      result.destination.index >= currentSlide
    ) {
      setCurrentSlide(currentSlide - 1);
    } else if (
      result.source.index > currentSlide &&
      result.destination.index <= currentSlide
    ) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const saveOrder = async () => {
    setIsSaving(true);
    setSaveStatus(null);
    try {
      const response = await fetch('/api/save-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ order: slideOrder }),
      });
      if (!response.ok) throw new Error('Save failed');

      setSaveStatus('success');
      savedOrderRef.current = [...slideOrder];
      setTimeout(() => setSaveStatus(null), 2000);
    } catch (err) {
      console.error(err);
      setSaveStatus('error');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div
      onClick={handleNextSlide}
      className="relative w-screen h-screen overflow-hidden cursor-pointer select-none"
    >
      <SlideContainer>
        <div key={currentSlide} className="w-full h-full">
          {slideData[currentSlide]?.component}
        </div>
      </SlideContainer>

      {/* Menu trigger */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsMenuOpen(true);
        }}
        className="absolute top-4 left-4 sm:top-8 sm:left-8 z-50 p-3 rounded-full bg-white/80 hover:bg-white border border-zinc-200/60 text-zinc-500 hover:text-zinc-800 shadow-sm transition-colors backdrop-blur-md opacity-0 hover:opacity-100 focus:opacity-100 group"
        title="打开目录"
      >
        <div className="w-5 h-4 flex flex-col justify-between opacity-50 group-hover:opacity-100">
          <span className="w-full h-[2px] bg-current rounded-full" />
          <span className="w-full h-[2px] bg-current rounded-full" />
          <span className="w-full h-[2px] bg-current rounded-full" />
        </div>
      </button>

      {/* Permanent menu hint */}
      {!isMenuOpen && (
        <div className="absolute top-4 left-4 sm:top-8 sm:left-8 z-40 p-3 pointer-events-none opacity-20 transition-opacity">
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className="w-full h-[2px] bg-zinc-800 rounded-full" />
            <span className="w-full h-[2px] bg-zinc-800 rounded-full" />
            <span className="w-full h-[2px] bg-zinc-800 rounded-full" />
          </div>
        </div>
      )}

      {/* TOC Sidebar Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 sm:w-80 bg-white/95 backdrop-blur-2xl border-r border-zinc-200/80 z-50 transform transition-transform duration-500 ease-out shadow-2xl flex flex-col ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8 flex flex-col h-full">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-zinc-800 font-semibold tracking-widest text-sm uppercase">
              目录面板
            </h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-zinc-400 hover:text-zinc-900 transition-colors p-2 -mr-2"
            >
              ✕
            </button>
          </div>

          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="toc-list">
              {(provided) => (
                <nav
                  className="flex-grow flex flex-col gap-2 overflow-y-auto pr-2 custom-scrollbar pb-24"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {slideData.map((slide, index) => (
                    <Draggable
                      key={`${slideOrder[index]}-${index}`}
                      draggableId={`${slideOrder[index]}-${index}`}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          className={`flex items-center rounded-xl transition-all duration-200 ${
                            snapshot.isDragging
                              ? 'bg-zinc-100 shadow-xl opacity-90 z-50 scale-[1.02]'
                              : currentSlide === index
                                ? 'bg-[#004CE5]/10 text-[#004CE5] font-semibold'
                                : 'text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 cursor-pointer'
                          }`}
                          onClick={() => jumpToSlide(index)}
                        >
                          <div
                            {...provided.dragHandleProps}
                            className="p-3 text-zinc-400 hover:text-zinc-600 cursor-grab active:cursor-grabbing flex items-center justify-center"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <line x1="8" y1="6" x2="21" y2="6" />
                              <line x1="8" y1="12" x2="21" y2="12" />
                              <line x1="8" y1="18" x2="21" y2="18" />
                              <line x1="3" y1="6" x2="3.01" y2="6" />
                              <line x1="3" y1="12" x2="3.01" y2="12" />
                              <line x1="3" y1="18" x2="3.01" y2="18" />
                            </svg>
                          </div>

                          <div className="py-3 pr-4 flex-grow truncate flex items-center">
                            <span className="text-[10px] opacity-60 mr-3 font-mono bg-zinc-100 text-zinc-500 px-1.5 py-0.5 rounded">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                            <span className="truncate">{slide.name}</span>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </nav>
              )}
            </Droppable>
          </DragDropContext>

          {/* Save button area */}
          <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-white via-white/90 to-transparent pt-12">
            <div className="flex flex-col gap-3">
              {isOrderDirty && (
                <button
                  onClick={saveOrder}
                  disabled={isSaving}
                  className={`w-full py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-lg ${
                    saveStatus === 'success'
                      ? 'bg-emerald-500/20 text-emerald-600 border border-emerald-500/50'
                      : saveStatus === 'error'
                        ? 'bg-red-500/20 text-red-600 border border-red-500/50'
                        : 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-900/20'
                  }`}
                >
                  {isSaving ? (
                    <span className="animate-pulse">保存中...</span>
                  ) : saveStatus === 'success' ? (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      保存成功
                    </>
                  ) : saveStatus === 'error' ? (
                    '保存失败'
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                        <polyline points="17 21 17 13 7 13 7 21" />
                        <polyline points="7 3 7 8 15 8" />
                      </svg>
                      保存目录修改
                    </>
                  )}
                </button>
              )}

              <p className="text-[10px] text-zinc-400 font-mono tracking-wide text-center">
                SLIDE ENGINE v1.0
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay to close menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 transition-opacity"
          onClick={(e) => {
            e.stopPropagation();
            setIsMenuOpen(false);
          }}
        />
      )}

      {/* Fullscreen Toggle */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => {});
          } else {
            if (document.exitFullscreen) document.exitFullscreen();
          }
        }}
        className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 p-3 rounded-full bg-white/80 hover:bg-white border border-zinc-200/60 text-zinc-500 hover:text-zinc-800 shadow-sm transition-colors backdrop-blur-md opacity-20 hover:opacity-100 group pointer-events-auto"
        title="全屏演示"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
        </svg>
      </button>
    </div>
  );
}
