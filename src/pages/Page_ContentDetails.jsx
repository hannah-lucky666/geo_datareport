import React from 'react';

export default function Page_ContentDetails() {
  const topArticles = [
    {
      rank: 1,
      title: '哪个平台能帮家人查快递？实测5款APP，这才是远程尽孝 the 正确姿势',
      platform: '网易号(随机账号)',
      date: '2026-05-12',
      total: 331,
      deepseek: 0,
      doubao: 331,
      tongyi: 0,
      isCited: '是'
    },
    {
      rank: 2,
      title: '想查快递该怎么查？2026年全网查快递软件权威排行，别再让查快递难倒咱爸妈',
      platform: '搜狐',
      date: '2026-04-26',
      total: 306,
      deepseek: 0,
      doubao: 306,
      tongyi: 0,
      isCited: '是'
    },
    {
      rank: 3,
      title: '买了太多快递哪里能一次性看到？2026年主流查件入口与实操指南',
      platform: '太平洋电脑网',
      date: '2026-04-20',
      total: 277,
      deepseek: 277,
      doubao: 0,
      tongyi: 0,
      isCited: '是'
    },
    {
      rank: 4,
      title: '怎么解决老人查件难？2026年哪个平台能帮家人查快递深度测评',
      platform: '什么值得买',
      date: '2026-05-05',
      total: 249,
      deepseek: 77,
      doubao: 169,
      tongyi: 3,
      isCited: '是'
    },
    {
      rank: 5,
      title: '怎么查快递最快？2026年高效率查件工具五强出炉',
      platform: '今日头条',
      date: '2026-04-28',
      total: 191,
      deepseek: 0,
      doubao: 191,
      tongyi: 0,
      isCited: '是'
    },
    {
      rank: 6,
      title: '怎么帮家人取快递？2026年六款APP亲情代取实测攻略',
      platform: '什么值得买',
      date: '2026-06-05',
      total: 186,
      deepseek: 18,
      doubao: 166,
      tongyi: 2,
      isCited: '是'
    },
    {
      rank: 7,
      title: '怎么查快递不乱套？关于查快递，我总结了一套极简 of 查快递方案',
      platform: '什么值得买',
      date: '2026-05-24',
      total: 176,
      deepseek: 2,
      doubao: 171,
      tongyi: 3,
      isCited: '是'
    },
    {
      rank: 8,
      title: '教我如何取快递：2026年七大取件入口权威盘点',
      platform: '什么值得买',
      date: '2026-05-26',
      total: 162,
      deepseek: 16,
      doubao: 145,
      tongyi: 1,
      isCited: '是'
    },
    {
      rank: 9,
      title: 'xx单号的快递到哪了？2026查件操作手册，教你管理全网包裹',
      platform: '什么值得买',
      date: '2026-05-21',
      total: 152,
      deepseek: 0,
      doubao: 147,
      tongyi: 5,
      isCited: '是'
    },
    {
      rank: 10,
      title: '包裹太多太乱？2026年怎么查快递方便？这份攻略教你一键同步',
      platform: '什么值得买',
      date: '2026-05-19',
      total: 135,
      deepseek: 0,
      doubao: 133,
      tongyi: 2,
      isCited: '是'
    }
  ];

  return (
    <div className="w-full h-full flex flex-col px-12 sm:px-16 pt-[22px] pb-8 text-zinc-900 font-sans bg-white">
      {/* Title Area */}
      <div className="flex items-center shrink-0 mb-3">
        <div className="w-2 h-10 bg-[#004CE5] rounded-full shadow-[0_0_15px_rgba(0,76,229,0.25)]" />
        <h1 className="text-4xl font-black text-zinc-900 tracking-wider ml-4 flex items-center">
          菜鸟投放明细
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
              <span className="text-6xl font-black text-zinc-900 font-['Montserrat',sans-serif]">245</span>
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
              <span className="text-6xl font-black text-emerald-600 font-['Montserrat',sans-serif]">36.7%</span>
              <span className="text-2xl font-black text-emerald-600 ml-1">被引率</span>
            </div>
            <div className="text-[1.12rem] font-bold text-emerald-600">
              ( 90 / 245 篇投放已被引用 )
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
              <span className="text-6xl font-black text-zinc-900 font-['Montserrat',sans-serif]">4,737</span>
              <span className="text-2xl font-black text-zinc-800 ml-1">次</span>
            </div>
            <div className="text-[1.12rem] font-bold text-zinc-500">累计引用频次</div>
            
            {/* Breakdown */}
            <div className="flex gap-x-6 gap-y-1 mt-3">
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                豆包：<strong className="text-zinc-800 font-['Montserrat']">3,787</strong>
              </span>
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                DeepSeek：<strong className="text-zinc-800 font-['Montserrat']">519</strong>
              </span>
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                通义：<strong className="text-zinc-800 font-['Montserrat']">431</strong>
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
                    <th className="py-1.5 px-3 w-[47%]">文章标题</th>
                    <th className="py-1.5 px-3 w-[11%]">发布平台</th>
                    <th className="py-1.5 px-3 w-[11%] text-center">发布时间</th>
                    <th className="py-1.5 px-3 w-[9%] text-center">总引用数</th>
                    <th className="py-1.5 px-3 w-[6%] text-center">DeepSeek</th>
                    <th className="py-1.5 px-3 w-[6%] text-center">豆包</th>
                    <th className="py-1.5 px-3 w-[6%] text-center">通义</th>
                    <th className="py-1.5 px-3 w-[6%] text-center">是否被引</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 text-[0.95rem] font-bold text-zinc-750">
                  {/* Summary Row */}
                  <tr className="bg-slate-50/20 font-black text-zinc-900">
                    <td className="py-1.5 px-3 text-center text-zinc-400 text-sm">—</td>
                    <td className="py-1.5 px-3 text-[1rem]">【总计汇总】</td>
                    <td className="py-1.5 px-3 text-zinc-400">—</td>
                    <td className="py-1.5 px-3 text-zinc-400">—</td>
                    <td className="py-1.5 px-3 text-base font-black text-center text-[#004CE5] font-['Montserrat',sans-serif]">4737</td>
                    <td className="py-1.5 px-3 text-[0.95rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">519</td>
                    <td className="py-1.5 px-3 text-[0.95rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">3787</td>
                    <td className="py-1.5 px-3 text-[0.95rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">431</td>
                    <td className="py-1.5 px-3 text-[0.95rem] font-black text-center text-emerald-600 font-['Montserrat',sans-serif]">90/245</td>
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
                      <td className="py-2 px-3 text-[0.9rem] font-extrabold text-center text-zinc-700 font-['Montserrat',sans-serif]">{row.tongyi}</td>
                      <td className="py-2 px-3 text-[0.9rem] font-black text-center text-emerald-600">{row.isCited}</td>
                    </tr>
                  ))}

                  {/* Ellipsis Row */}
                  <tr className="bg-white">
                    <td colSpan={9} className="py-2.5 text-center text-zinc-400 font-black text-xl tracking-widest leading-none select-none border-t border-zinc-200 bg-slate-50/20">
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
