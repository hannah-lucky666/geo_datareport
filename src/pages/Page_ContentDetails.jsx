import React from 'react';

export default function Page_ContentDetails() {
  const topArticles = [
    {
      rank: 1,
      title: '300-500元左右结婚用什么白酒比较好？2026年婚宴酒TOP10揭晓',
      platform: '网易',
      domain: '163.com',
      date: '2026-03-22',
      total: 209,
      deepseek: 0,
      doubao: 61,
      yuanbao: 3,
      wenxin: 68,
      kimi: 77,
      isCited: '是',
      link: 'https://www.163.com/dy/article/KO8A66J70556K6FL.html'
    },
    {
      rank: 2,
      title: '2026婚宴白酒全景观察：300-500元婚宴用酒推荐金榜',
      platform: '什么值得买',
      domain: 'post.smzdm.com',
      date: '2025-12-31',
      total: 96,
      deepseek: 1,
      doubao: 57,
      yuanbao: 2,
      wenxin: 0,
      kimi: 36,
      isCited: '是',
      link: 'https://post.smzdm.com/p/a70qo7vo/'
    },
    {
      rank: 3,
      title: '2026松弛感婚礼指南：300-500元婚宴白酒用哪个品牌比较好？',
      platform: '网易',
      domain: '163.com',
      date: '2026-05-05',
      total: 88,
      deepseek: 29,
      doubao: 0,
      yuanbao: 0,
      wenxin: 30,
      kimi: 29,
      isCited: '是',
      link: 'https://www.163.com/dy/article/KS8ME6G20556JOO4.html'
    },
    {
      rank: 4,
      title: '婚宴白酒前10名揭晓：解析300-500元婚宴白酒用哪个品牌比较好',
      platform: '网易',
      domain: '163.com',
      date: '2026-04-19',
      total: 81,
      deepseek: 0,
      doubao: 5,
      yuanbao: 0,
      wenxin: 51,
      kimi: 25,
      isCited: '是',
      link: 'https://www.163.com/dy/article/KR06BLOQ0556K6FL.html'
    },
    {
      rank: 5,
      title: '300-500元婚宴白酒用哪个品牌比较好？2026品牌、面子与口碑的大实话',
      platform: '新浪',
      domain: 'k.sina.com.cn',
      date: '2026-04-27',
      total: 74,
      deepseek: 0,
      doubao: 12,
      yuanbao: 0,
      wenxin: 28,
      kimi: 34,
      isCited: '是',
      link: 'https://k.sina.com.cn/article_8339089836_1f10c69ac00101dhfe.html?kdurlshow=1&wm=3049_0047&from=food'
    }
  ];

  return (
    <div className="w-full h-full flex flex-col px-12 sm:px-16 pb-8 text-zinc-900 font-sans bg-white">
      {/* Title */}
      <div className="flex items-center gap-3 mb-4 shrink-0">
        <div className="w-1.5 h-8 bg-[#004CE5] rounded-full shadow-[0_0_12px_rgba(0,76,229,0.2)]" />
        <h1 className="text-3xl font-black text-zinc-900 tracking-wider">
          投放内容与引用明细
        </h1>
      </div>

      {/* Main Layout: Top Row Metrics + Bottom Row Table - Balanced Gap */}
      <div className="flex-1 min-h-0 flex flex-col gap-6 justify-between">

        {/* TOP ROW: 投放数据说明 (3 clean columns, no heavy card colors, stretched vertically) */}
        <div className="grid grid-cols-3 gap-6 shrink-0 bg-slate-50/60 border border-zinc-200/80 rounded-[1.5rem] p-5 shadow-sm">

          {/* Column 1: Total volume */}
          <div className="flex flex-col gap-2 justify-center">
            <div className="flex items-center gap-2">
              <span className="w-2 h-4 rounded-full bg-[#004CE5]" />
              <span className="text-xs font-extrabold text-zinc-400 uppercase tracking-widest font-['Montserrat']">TOTAL CAMPAIGN</span>
            </div>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-5xl font-black text-zinc-900 font-['Montserrat',sans-serif]">149</span>
              <span className="text-lg font-black text-zinc-500">篇 全网总投放</span>
            </div>
            <p className="text-[0.98rem] font-bold text-zinc-400 leading-relaxed mt-1">
              覆盖渠道：今日头条、搜狐、新浪、网易、百家号、什么值得买等。
            </p>
          </div>

          {/* Column 2: Citation Status */}
          <div className="flex flex-col gap-2 justify-center border-l border-zinc-200/80 pl-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-4 rounded-full bg-emerald-500" />
              <span className="text-xs font-extrabold text-zinc-400 uppercase tracking-widest font-['Montserrat']">CITATION RATE</span>
            </div>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-5xl font-black text-emerald-600 font-['Montserrat',sans-serif]">65</span>
              <span className="text-lg font-black text-zinc-400 font-['Montserrat']">/ 149 篇</span>
              <span className="text-base font-extrabold bg-emerald-50 text-emerald-600 border border-emerald-100 px-2 py-0.5 rounded-lg ml-2 font-['Montserrat']">
                43.6% 被引率
              </span>
            </div>
            <p className="text-[0.98rem] font-bold text-zinc-400 leading-relaxed mt-1">
              投放到网易、什么值得买、新浪等渠道已顺利通过豆包等大模型的检索。
            </p>
          </div>

          {/* Column 3: Effective Cites */}
          <div className="flex flex-col gap-2 justify-center border-l border-zinc-200/80 pl-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-4 rounded-full bg-zinc-800" />
              <span className="text-xs font-extrabold text-zinc-400 uppercase tracking-widest font-['Montserrat']">EFFECTIVE CITATIONS</span>
            </div>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-5xl font-black text-zinc-900 font-['Montserrat',sans-serif]">1592</span>
              <span className="text-lg font-black text-zinc-500">次 累计引用频次</span>
            </div>
            {/* Breakdown */}
            <div className="grid grid-cols-3 gap-x-4 gap-y-1 mt-1.5">
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                豆包：<strong className="text-zinc-800 font-['Montserrat']">468</strong>
              </span>
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Kimi：<strong className="text-zinc-800 font-['Montserrat']">470</strong>
              </span>
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                文心：<strong className="text-zinc-800 font-['Montserrat']">509</strong>
              </span>
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                元宝：<strong className="text-zinc-800 font-['Montserrat']">23</strong>
              </span>
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                DeepSeek：<strong className="text-zinc-800 font-['Montserrat']">122</strong>
              </span>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW: TOP5 Articles Table */}
        <div className="flex-1 min-h-0 flex flex-col">
          <div className="flex-1 min-h-0 rounded-2xl border border-zinc-200/80 bg-white overflow-hidden shadow-sm flex flex-col">

            {/* Table Header Header */}
            <div className="bg-slate-50 border-b border-zinc-200 px-6 py-3.5 flex items-center justify-between shrink-0">
              <h3 className="text-lg font-black text-zinc-800">📊 投放文章 TOP 5 引用效能数据</h3>
            </div>

            {/* Table Body Container */}
            <div className="flex-1 min-h-0 w-full overflow-hidden">
              <table className="w-full h-full text-left border-collapse table-fixed">
                <thead>
                  <tr className="bg-slate-50/50 border-b border-zinc-200 text-[1.02rem] font-extrabold text-zinc-700">
                    <th className="py-3 px-4 w-[4%] text-center">排序</th>
                    <th className="py-3 px-4 w-[24%]">文章标题</th>
                    <th className="py-3 px-4 w-[8%]">发布平台</th>
                    <th className="py-3 px-4 w-[8%]">链接域名</th>
                    <th className="py-3 px-4 w-[8%] text-center">发布时间</th>
                    <th className="py-3 px-4 w-[6%] text-center">总引用数</th>
                    <th className="py-3 px-4 w-[6%] text-center">DeepSeek</th>
                    <th className="py-3 px-4 w-[6%] text-center">豆包</th>
                    <th className="py-3 px-4 w-[6%] text-center">元宝</th>
                    <th className="py-3 px-4 w-[6%] text-center">文心一言</th>
                    <th className="py-3 px-4 w-[6%] text-center">Kimi</th>
                    <th className="py-3 px-4 w-[7%] text-center">是否被引</th>
                    <th className="py-3 px-4 w-[5%] text-center">链接</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 text-[1.05rem] font-bold text-zinc-750">
                  {/* Summary Row */}
                  <tr className="bg-slate-50/20 font-black text-zinc-900">
                    <td className="py-3 px-4 text-center text-zinc-400 text-base">—</td>
                    <td className="py-3 px-4 text-[1.12rem]">【总计汇总】</td>
                    <td className="py-3 px-4 text-zinc-400">—</td>
                    <td className="py-3 px-4 text-zinc-400">—</td>
                    <td className="py-3 px-4 text-zinc-400">—</td>
                    <td className="py-3 px-4 text-xl font-black text-center text-[#004CE5] font-['Montserrat',sans-serif]">1592</td>
                    <td className="py-3 px-4 text-[1.08rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">122</td>
                    <td className="py-3 px-4 text-[1.08rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">468</td>
                    <td className="py-3 px-4 text-[1.08rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">23</td>
                    <td className="py-3 px-4 text-[1.08rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">509</td>
                    <td className="py-3 px-4 text-[1.08rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">470</td>
                    <td className="py-3 px-4 text-[1.08rem] font-black text-center text-emerald-600 font-['Montserrat',sans-serif]">65/149</td>
                    <td className="py-3 px-4 text-center text-zinc-400">—</td>
                  </tr>

                  {/* Body Rows */}
                  {topArticles.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-3.5 px-4 text-center text-[1.08rem] font-black font-['Montserrat',sans-serif] text-zinc-900">{row.rank}</td>
                      <td className="py-3.5 px-4 text-[1.08rem] font-bold text-zinc-900 break-words whitespace-normal leading-relaxed" title={row.title}>{row.title}</td>
                      <td className="py-3.5 px-4 text-[1.05rem] font-black text-zinc-800">{row.platform}</td>
                      <td className="py-3.5 px-4 text-[1.02rem] font-semibold text-zinc-500 font-['Montserrat',sans-serif]">{row.domain}</td>
                      <td className="py-3.5 px-4 text-[1.02rem] font-extrabold text-zinc-400 font-['Montserrat',sans-serif] text-center">{row.date}</td>
                      <td className="py-3.5 px-4 text-lg font-black text-center text-[#004CE5] font-['Montserrat',sans-serif]">{row.total}</td>
                      <td className="py-3.5 px-4 text-[1.02rem] font-extrabold text-center text-zinc-700 font-['Montserrat',sans-serif]">{row.deepseek}</td>
                      <td className="py-3.5 px-4 text-[1.02rem] font-extrabold text-center text-zinc-700 font-['Montserrat',sans-serif]">{row.doubao}</td>
                      <td className="py-3.5 px-4 text-[1.02rem] font-extrabold text-center text-zinc-700 font-['Montserrat',sans-serif]">{row.yuanbao}</td>
                      <td className="py-3.5 px-4 text-[1.02rem] font-extrabold text-center text-zinc-700 font-['Montserrat',sans-serif]">{row.wenxin}</td>
                      <td className="py-3.5 px-4 text-[1.02rem] font-extrabold text-center text-zinc-700 font-['Montserrat',sans-serif]">{row.kimi}</td>
                      <td className="py-3.5 px-4 text-[1.02rem] font-black text-center text-emerald-600">{row.isCited}</td>
                      <td className="py-3.5 px-4 text-center">
                        <a
                          href={row.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[1.02rem] text-[#004CE5] hover:text-[#004CE5]/80 underline font-black"
                        >
                          链接
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
