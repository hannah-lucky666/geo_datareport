import React from 'react';

export default function Page_ProposalNav() {
  return (
    <>
      <div className="w-[45%] pl-12 sm:pl-16 flex flex-col justify-center pb-20 relative z-20 pointer-events-none">
        <div className="flex flex-col gap-4">
          <div className="flex items-end gap-3">
            <h1 className="text-4xl sm:text-[4.5rem] font-normal text-white leading-tight tracking-tight font-['AlimamaShuHeiTi']">
              冰箱是什么？
            </h1>
            <svg
              className="w-10 h-10 text-[#004CE5] mb-3 stroke-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex-1 relative flex flex-col justify-center pointer-events-auto items-end pr-12 sm:pr-16 py-8">
        <div className="absolute top-8 bottom-8 left-0 right-12 sm:right-16 bg-[#101010] border border-white/10 rounded-2xl shadow-[-20px_0_50px_rgba(0,0,0,0.2)]" />

        <div className="relative z-10 pl-20 sm:pl-28 pr-12 sm:pr-16 w-full flex flex-col gap-12 text-white justify-center h-full max-w-[95%]">
          <div className="flex flex-col gap-4">
            <div className="w-10 h-10 mb-3 flex items-center justify-center">
              <img
                src="/icons/nav_icon_1.svg"
                alt="icon 1"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>

            <div>
              <h3 className="text-2xl sm:text-[1.8rem] font-bold mb-4 tracking-wide text-white">
                基本概念
              </h3>
              <p className="text-lg sm:text-xl leading-[1.85] font-medium text-white/90">
                冰箱（Refrigerator）是一种通过制冷系统降低内部温度，用于储存和延长食材保鲜时间的家用电器。它通过压缩机驱动制冷剂循环，使冷藏室维持在约
                2–8℃、冷冻室维持在约
                −18℃左右，从而减缓食物腐败、细菌繁殖和水分流失。冰箱通常由冷藏区、冷冻区以及部分变温区组成，可用于储存蔬菜、水果、肉类、乳制品及冷冻食品，是现代家庭长期运行的基础厨房电器。
              </p>
            </div>

            <div className="w-4/5 h-px bg-white/20 mt-4" />
          </div>

          <div className="flex flex-col gap-3">
            <div className="w-10 h-10 mb-3 ml-1 mt-2 flex items-center justify-center">
              <img
                src="/icons/nav_icon_2.svg"
                alt="icon 2"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>

            <div>
              <h3 className="text-2xl sm:text-[1.8rem] font-bold mb-4 tracking-wide text-white">
                其他称呼
              </h3>
              <p className="text-lg sm:text-xl leading-[1.85] font-medium text-white/90">
                1. 电冰箱（正式及书面全称） 2.
                冰柜/冷柜（行业或针对特定深冷功能的称呼）
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
