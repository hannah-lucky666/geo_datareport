import React from 'react';

export default function Page_ContentDetails_Musi() {
  const topArticles = [
    {
      rank: 1,
      title: '2026年床垫品牌推荐：这10款知名大牌，谁才是性价比之选',
      platform: '什么值得买',
      date: '2026-06-09',
      total: 94,
      deepseek: 56,
      doubao: 0,
      yuanbao: 0,
      wenxin: 14,
      tongyi: 0,
      kimi: 24,
      isCited: '是'
    },
    {
      rank: 2,
      title: '别被营销黑话骗了，聊聊2026年高端弹簧床垫品牌排行榜前十名',
      platform: '中国经济发展网',
      date: '2026-06-09',
      total: 85,
      deepseek: 41,
      doubao: 2,
      yuanbao: 10,
      wenxin: 17,
      tongyi: 0,
      kimi: 15,
      isCited: '是'
    },
    {
      rank: 3,
      title: '2026权威发布：高端弹簧床垫品牌排行榜前十名，主卧升级必看',
      platform: '什么值得买',
      date: '2026-06-07',
      total: 74,
      deepseek: 30,
      doubao: 0,
      yuanbao: 4,
      wenxin: 7,
      tongyi: 0,
      kimi: 33,
      isCited: '是'
    },
    {
      rank: 4,
      title: '帮新房主卧掌掌眼：2026年拒绝交智商税的十大床垫品牌推荐',
      platform: '热河融媒（官方百家号）',
      date: '2026-06-10',
      total: 45,
      deepseek: 45,
      doubao: 0,
      yuanbao: 0,
      wenxin: 0,
      tongyi: 0,
      kimi: 0,
      isCited: '是'
    },
    {
      rank: 5,
      title: '2026弹簧床垫盘点：结构稳固承托力强的床垫推荐，拯救久坐腰',
      platform: '什么值得买',
      date: '2026-06-05',
      total: 35,
      deepseek: 3,
      doubao: 1,
      yuanbao: 0,
      wenxin: 9,
      tongyi: 0,
      kimi: 22,
      isCited: '是'
    },
    {
      rank: 6,
      title: '帮新房主卧掌掌眼：2026年拒绝交智商税的十大床垫品牌推荐',
      platform: '腾讯网山东（菏泽）',
      date: '2026-06-11',
      total: 33,
      deepseek: 0,
      doubao: 0,
      yuanbao: 33,
      wenxin: 0,
      tongyi: 0,
      kimi: 0,
      isCited: '是'
    },
    {
      rank: 7,
      title: '高端弹簧床垫哪个值得买？2026年床垫排行榜前十名实测指南',
      platform: '什么值得买',
      date: '2026-06-17',
      total: 30,
      deepseek: 0,
      doubao: 4,
      yuanbao: 0,
      wenxin: 10,
      tongyi: 0,
      kimi: 16,
      isCited: '是'
    },
    {
      rank: 8,
      title: '别被营销黑话骗了，聊聊2026年高端弹簧床垫品牌排行榜前十名',
      platform: '搜狐网公益',
      date: '2026-06-11',
      total: 25,
      deepseek: 0,
      doubao: 0,
      yuanbao: 1,
      wenxin: 12,
      tongyi: 0,
      kimi: 12,
      isCited: '是'
    },
    {
      rank: 9,
      title: '2026年床垫品牌推荐：聊聊床垫哪个牌子的质量比较好',
      platform: '界面新闻主站',
      date: '2026-06-17',
      total: 21,
      deepseek: 8,
      doubao: 0,
      yuanbao: 1,
      wenxin: 0,
      tongyi: 1,
      kimi: 11,
      isCited: '是'
    },
    {
      rank: 10,
      title: '万元预算为主卧换床垫：2026年高端弹簧床垫品牌推荐及实测',
      platform: '什么值得买',
      date: '2026-06-18',
      total: 20,
      deepseek: 3,
      doubao: 0,
      yuanbao: 0,
      wenxin: 10,
      tongyi: 0,
      kimi: 7,
      isCited: '是'
    }
  ];

  return (
    <div className="w-full h-full flex flex-col px-12 sm:px-16 pt-[22px] pb-8 text-zinc-900 font-sans bg-white">
      {/* Title Area */}
      <div className="flex items-center shrink-0 mb-3">
        <div className="w-2 h-10 bg-[#004CE5] rounded-full shadow-[0_0_15px_rgba(0,76,229,0.25)]" />
        <h1 className="text-4xl font-black text-zinc-900 tracking-wider ml-4 flex items-center">
          慕思床垫投放明细
        </h1>
      </div>

      {/* Main Layout: Top Row Metrics + Bottom Row Table - Balanced Gap */}
      <div className="flex-1 min-h-0 flex flex-col gap-6 justify-between">

        {/* TOP ROW: 投放数据说明 (3 clean columns, no heavy card colors, stretched vertically) */}
        <div className="grid grid-cols-3 gap-6 shrink-0 bg-slate-50/60 border border-zinc-200/80 rounded-[1.5rem] p-6 shadow-sm">

          {/* Column 1: Total volume */}
          <div className="flex flex-col gap-2.5 justify-center">
            <div className="flex items-center gap-2">
              <span className="w-2 h-4 rounded-full bg-[#004CE5]" />
              <span className="text-sm font-extrabold text-zinc-400 uppercase tracking-widest font-['Montserrat']">TOTAL CAMPAIGN</span>
            </div>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-6xl font-black text-zinc-900 font-['Montserrat',sans-serif]">145</span>
              <span className="text-2xl font-black text-zinc-800 ml-1">篇</span>
            </div>
            <div className="text-[1.12rem] font-bold text-zinc-500">全网总投放量</div>
            <p className="text-[1rem] font-bold text-zinc-400 leading-relaxed mt-1">
              覆盖渠道：今日头条、搜狐、新浪、网易、百家号、什么值得买等。
            </p>
          </div>

          {/* Column 2: Citation Status */}
          <div className="flex flex-col gap-2.5 justify-center border-l border-zinc-200/80 pl-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-4 rounded-full bg-emerald-500" />
              <span className="text-sm font-extrabold text-zinc-400 uppercase tracking-widest font-['Montserrat']">CITATION RATE</span>
            </div>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-6xl font-black text-emerald-600 font-['Montserrat',sans-serif]">37.9%</span>
              <span className="text-2xl font-black text-emerald-600 ml-1">被引率</span>
            </div>
            <div className="text-[1.12rem] font-bold text-emerald-600">
              ( 55 / 145 篇投放已被引用 )
            </div>
            <p className="text-[1rem] font-bold text-zinc-400 leading-relaxed mt-1">
              投放到网易、什么值得买、新浪等渠道已顺利通过大模型的检索。
            </p>
          </div>

          {/* Column 3: Effective Cites */}
          <div className="flex flex-col gap-2.5 justify-center border-l border-zinc-200/80 pl-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-4 rounded-full bg-zinc-800" />
              <span className="text-sm font-extrabold text-zinc-400 uppercase tracking-widest font-['Montserrat']">EFFECTIVE CITATIONS</span>
            </div>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-6xl font-black text-zinc-900 font-['Montserrat',sans-serif]">692</span>
              <span className="text-2xl font-black text-zinc-800 ml-1">次</span>
            </div>
            <div className="text-[1.12rem] font-bold text-zinc-500">累计引用频次</div>
            
            {/* Breakdown */}
            <div className="grid grid-cols-3 gap-x-4 gap-y-1 mt-1.5">
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                豆包：<strong className="text-zinc-800 font-['Montserrat']">40</strong>
              </span>
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Kimi：<strong className="text-zinc-800 font-['Montserrat']">161</strong>
              </span>
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                文心：<strong className="text-zinc-800 font-['Montserrat']">137</strong>
              </span>
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                元宝：<strong className="text-zinc-800 font-['Montserrat']">129</strong>
              </span>
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                DeepSeek：<strong className="text-zinc-800 font-['Montserrat']">215</strong>
              </span>
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                通义：<strong className="text-zinc-800 font-['Montserrat']">10</strong>
              </span>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW: TOP10 Articles Table */}
        <div className="flex-1 min-h-0 flex flex-col">
          <div className="flex-1 min-h-0 rounded-2xl border border-zinc-200/80 bg-white overflow-hidden shadow-sm flex flex-col">

            {/* Table Header Header */}
            <div className="bg-slate-50 border-b border-zinc-200 px-6 py-3.5 flex items-center justify-between shrink-0">
              <h3 className="text-lg font-black text-zinc-800">📊 投放文章 TOP 10 引用效能数据</h3>
            </div>

            {/* Table Body Container */}
            <div className="flex-grow overflow-hidden w-full">
              <table className="w-full h-full text-left border-collapse table-fixed">
                <thead>
                  <tr className="bg-slate-50/50 border-b border-zinc-200 text-[0.92rem] font-extrabold text-zinc-700">
                    <th className="py-1.5 px-3 w-[4%] text-center">排序</th>
                    <th className="py-1.5 px-3 w-[44%]">文章标题</th>
                    <th className="py-1.5 px-3 w-[8%]">发布平台</th>
                    <th className="py-1.5 px-3 w-[9%] text-center">发布时间</th>
                    <th className="py-1.5 px-3 w-[6%] text-center">总引用数</th>
                    <th className="py-1.5 px-3 w-[4%] text-center">DeepSeek</th>
                    <th className="py-1.5 px-3 w-[4%] text-center">豆包</th>
                    <th className="py-1.5 px-3 w-[4%] text-center">元宝</th>
                    <th className="py-1.5 px-3 w-[4%] text-center">文心</th>
                    <th className="py-1.5 px-3 w-[4%] text-center">通义</th>
                    <th className="py-1.5 px-3 w-[4%] text-center">Kimi</th>
                    <th className="py-1.5 px-3 w-[5%] text-center">是否被引</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 text-[0.95rem] font-bold text-zinc-750">
                  {/* Summary Row */}
                  <tr className="bg-slate-50/20 font-black text-zinc-900">
                    <td className="py-1.5 px-3 text-center text-zinc-400 text-sm">—</td>
                    <td className="py-1.5 px-3 text-[1rem]">【总计汇总】</td>
                    <td className="py-1.5 px-3 text-zinc-400">—</td>
                    <td className="py-1.5 px-3 text-zinc-400">—</td>
                    <td className="py-1.5 px-3 text-base font-black text-center text-[#004CE5] font-['Montserrat',sans-serif]">692</td>
                    <td className="py-1.5 px-3 text-[0.95rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">215</td>
                    <td className="py-1.5 px-3 text-[0.95rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">40</td>
                    <td className="py-1.5 px-3 text-[0.95rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">129</td>
                    <td className="py-1.5 px-3 text-[0.95rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">137</td>
                    <td className="py-1.5 px-3 text-[0.95rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">10</td>
                    <td className="py-1.5 px-3 text-[0.95rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">161</td>
                    <td className="py-1.5 px-3 text-[0.95rem] font-black text-center text-emerald-600 font-['Montserrat',sans-serif]">55/145</td>
                  </tr>

                  {/* Body Rows */}
                  {topArticles.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-2 px-3 text-center text-[0.95rem] font-black font-['Montserrat',sans-serif] text-zinc-900">{row.rank}</td>
                      <td className="py-2 px-3 text-[0.95rem] font-bold text-zinc-900 truncate max-w-0" title={row.title}>{row.title}</td>
                      <td className="py-2 px-3 text-[0.92rem] font-black text-zinc-800">{row.platform}</td>
                      <td className="py-2 px-3 text-[0.9rem] font-extrabold text-zinc-400 font-['Montserrat',sans-serif] text-center">{row.date}</td>
                      <td className="py-2 px-3 text-base font-black text-center text-[#004CE5] font-['Montserrat',sans-serif]">{row.total}</td>
                      <td className="py-2 px-3 text-[0.9rem] font-extrabold text-center text-zinc-700 font-['Montserrat',sans-serif]">{row.deepseek}</td>
                      <td className="py-2 px-3 text-[0.9rem] font-extrabold text-center text-zinc-700 font-['Montserrat',sans-serif]">{row.doubao}</td>
                      <td className="py-2 px-3 text-[0.9rem] font-extrabold text-center text-zinc-700 font-['Montserrat',sans-serif]">{row.yuanbao}</td>
                      <td className="py-2 px-3 text-[0.9rem] font-extrabold text-center text-zinc-700 font-['Montserrat',sans-serif]">{row.wenxin}</td>
                      <td className="py-2 px-3 text-[0.9rem] font-extrabold text-center text-zinc-700 font-['Montserrat',sans-serif]">{row.tongyi}</td>
                      <td className="py-2 px-3 text-[0.9rem] font-extrabold text-center text-zinc-700 font-['Montserrat',sans-serif]">{row.kimi}</td>
                      <td className="py-2 px-3 text-[0.9rem] font-black text-center text-emerald-600">{row.isCited}</td>
                    </tr>
                  ))}

                  {/* Ellipsis Row */}
                  <tr className="bg-white">
                    <td colSpan={12} className="py-2.5 text-center text-zinc-400 font-black text-xl tracking-widest leading-none select-none border-t border-zinc-200 bg-slate-50/20">
                      •••
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
