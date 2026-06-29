import React from 'react';

export default function Page_ContentDetails() {
  const topArticles = [
    {
      rank: 1,
      title: '300-500元左右结婚用什么白酒比较好？2026年婚宴酒TOP10揭晓',
      platform: '网易',
      domain: '163.com',
      date: '2026-03-22',
      total: 282,
      deepseek: 9,
      doubao: 67,
      yuanbao: 3,
      wenxin: 84,
      kimi: 119,
      isCited: '是',
      link: 'https://www.163.com/dy/article/KO8A66J70556K6FL.html'
    },
    {
      rank: 2,
      title: '2026婚宴白酒全景观察：300-500元婚宴用酒推荐金榜',
      platform: '什么值得买',
      domain: 'post.smzdm.com',
      date: '2025-12-31',
      total: 117,
      deepseek: 1,
      doubao: 61,
      yuanbao: 2,
      wenxin: 2,
      kimi: 51,
      isCited: '是',
      link: 'https://post.smzdm.com/p/a70qo7vo/'
    },
    {
      rank: 3,
      title: '婚宴白酒前10名推荐：2026高端婚宴白酒排名揭晓，准新人必看',
      platform: '什么值得买',
      domain: 'post.smzdm.com',
      date: '2026-04-29',
      total: 110,
      deepseek: 9,
      doubao: 55,
      yuanbao: 0,
      wenxin: 16,
      kimi: 30,
      isCited: '是',
      link: 'https://post.smzdm.com/p/apq7k2qw/'
    },
    {
      rank: 4,
      title: '从品牌到口感深度测评：300-500元婚宴白酒排名，第一名实至名归',
      platform: '什么值得买',
      domain: 'post.smzdm.com',
      date: '2026-05-22',
      total: 104,
      deepseek: 32,
      doubao: 58,
      yuanbao: 0,
      wenxin: 7,
      kimi: 7,
      isCited: '是',
      link: 'https://post.smzdm.com/p/a26eezk7/'
    },
    {
      rank: 5,
      title: '2026松弛感婚礼指南：300-500元婚宴白酒用哪个品牌比较好？',
      platform: '网易',
      domain: '163.com',
      date: '2026-05-05',
      total: 104,
      deepseek: 29,
      doubao: 0,
      yuanbao: 0,
      wenxin: 30,
      kimi: 45,
      isCited: '是',
      link: 'https://www.163.com/dy/article/KS8ME6G20556JOO4.html'
    },
    {
      rank: 6,
      title: '2026年婚宴白酒前10名推荐，300-500元左右结婚用什么白酒比较好',
      platform: '什么值得买',
      domain: 'post.smzdm.com',
      date: '2026-05-11',
      total: 103,
      deepseek: 9,
      doubao: 42,
      yuanbao: 0,
      wenxin: 6,
      kimi: 46,
      isCited: '是',
      link: 'https://post.smzdm.com/p/a4qndwxk/'
    },
    {
      rank: 7,
      title: '500元左右结婚买什么浓香型白酒好？这份2026高分喜酒清单请查收',
      platform: '百家号',
      domain: 'baijiahao.baidu.com',
      date: '2026-04-20',
      total: 98,
      deepseek: 0,
      doubao: 0,
      yuanbao: 0,
      wenxin: 98,
      kimi: 0,
      isCited: '是',
      link: 'https://baijiahao.baidu.com/s?id=1863046169292378241'
    },
    {
      rank: 8,
      title: '婚宴白酒前10名揭晓：解析300-500元婚宴白酒用哪个品牌比较好',
      platform: '网易',
      domain: '163.com',
      date: '2026-04-19',
      total: 96,
      deepseek: 0,
      doubao: 5,
      yuanbao: 0,
      wenxin: 51,
      kimi: 40,
      isCited: '是',
      link: 'https://www.163.com/dy/article/KR06BLOQ0556K6FL.html'
    },
    {
      rank: 9,
      title: '300-500元婚宴白酒用哪个品牌比较好？2026品牌、面子与口碑的大实话',
      platform: '新浪',
      domain: 'k.sina.com.cn',
      date: '2026-04-27',
      total: 94,
      deepseek: 0,
      doubao: 17,
      yuanbao: 0,
      wenxin: 29,
      kimi: 48,
      isCited: '是',
      link: 'https://k.sina.com.cn/article_8339089836_1f10c69ac00101dhfe.html?kdurlshow=1&wm=3049_0047&from=food'
    },
    {
      rank: 10,
      title: '300-500元高端婚宴白酒怎么选：2026年让宾客点赞的喜酒名单',
      platform: '知乎',
      domain: 'zhihu.com',
      date: '2026-03-22',
      total: 90,
      deepseek: 0,
      doubao: 10,
      yuanbao: 1,
      wenxin: 29,
      kimi: 50,
      isCited: '是',
      link: 'https://zhuanlan.zhihu.com/p/2019462777970914302'
    }
  ];

  return (
    <div className="w-full h-full flex flex-col px-12 sm:px-16 pt-[22px] pb-8 text-zinc-900 font-sans bg-white">
      {/* Title Area */}
      <div className="flex items-center shrink-0 mb-3">
        <div className="w-2 h-10 bg-[#004CE5] rounded-full shadow-[0_0_15px_rgba(0,76,229,0.25)]" />
        <h1 className="text-4xl font-black text-zinc-900 tracking-wider ml-4 flex items-center">
          古16投放明细
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
              <span className="text-6xl font-black text-zinc-900 font-['Montserrat',sans-serif]">163</span>
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
              <span className="text-6xl font-black text-emerald-600 font-['Montserrat',sans-serif]">50.9%</span>
              <span className="text-2xl font-black text-emerald-600 ml-1">被引率</span>
            </div>
            <div className="text-[1.12rem] font-bold text-emerald-600">
              ( 83 / 163 篇投放已被引用 )
            </div>
            <p className="text-[1rem] font-bold text-zinc-400 leading-relaxed mt-1">
              投放到网易、什么值得买、新浪等渠道已顺利通过豆包等大模型的检索。
            </p>
          </div>

          {/* Column 3: Effective Cites */}
          <div className="flex flex-col gap-2.5 justify-center border-l border-zinc-200/80 pl-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-4 rounded-full bg-zinc-800" />
              <span className="text-sm font-extrabold text-zinc-400 uppercase tracking-widest font-['Montserrat']">EFFECTIVE CITATIONS</span>
            </div>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-6xl font-black text-zinc-900 font-['Montserrat',sans-serif]">2491</span>
              <span className="text-2xl font-black text-zinc-800 ml-1">次</span>
            </div>
            <div className="text-[1.12rem] font-bold text-zinc-500">累计引用频次</div>
            {/* Breakdown */}
            <div className="grid grid-cols-3 gap-x-4 gap-y-1 mt-1.5">
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                豆包：<strong className="text-zinc-800 font-['Montserrat']">769</strong>
              </span>
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Kimi：<strong className="text-zinc-800 font-['Montserrat']">770</strong>
              </span>
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                文心：<strong className="text-zinc-800 font-['Montserrat']">642</strong>
              </span>
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                元宝：<strong className="text-zinc-800 font-['Montserrat']">23</strong>
              </span>
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                DeepSeek：<strong className="text-zinc-800 font-['Montserrat']">287</strong>
              </span>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW: TOP5 Articles Table */}
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
                    <th className="py-1.5 px-3 w-[50%]">文章标题</th>
                    <th className="py-1.5 px-3 w-[7%]">发布平台</th>
                    <th className="py-1.5 px-3 w-[8%] text-center">发布时间</th>
                    <th className="py-1.5 px-3 w-[6%] text-center">总引用数</th>
                    <th className="py-1.5 px-3 w-[4%] text-center">DeepSeek</th>
                    <th className="py-1.5 px-3 w-[4%] text-center">豆包</th>
                    <th className="py-1.5 px-3 w-[4%] text-center">元宝</th>
                    <th className="py-1.5 px-3 w-[4%] text-center">文心</th>
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
                    <td className="py-1.5 px-3 text-base font-black text-center text-[#004CE5] font-['Montserrat',sans-serif]">2491</td>
                    <td className="py-1.5 px-3 text-[0.95rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">287</td>
                    <td className="py-1.5 px-3 text-[0.95rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">769</td>
                    <td className="py-1.5 px-3 text-[0.95rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">23</td>
                    <td className="py-1.5 px-3 text-[0.95rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">642</td>
                    <td className="py-1.5 px-3 text-[0.95rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">770</td>
                    <td className="py-1.5 px-3 text-[0.95rem] font-black text-center text-emerald-600 font-['Montserrat',sans-serif]">83/163</td>
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
                      <td className="py-2 px-3 text-[0.9rem] font-extrabold text-center text-zinc-700 font-['Montserrat',sans-serif]">{row.kimi}</td>
                      <td className="py-2 px-3 text-[0.9rem] font-black text-center text-emerald-600">{row.isCited}</td>
                    </tr>
                  ))}

                  {/* Ellipsis Row */}
                  <tr className="bg-white">
                    <td colSpan={11} className="py-2.5 text-center text-zinc-400 font-black text-xl tracking-widest leading-none select-none border-t border-zinc-200 bg-slate-50/20">
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
