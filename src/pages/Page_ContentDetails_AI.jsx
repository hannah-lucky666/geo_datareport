import React from 'react';

export default function Page_ContentDetails_AI() {
  const topArticles = [
    {
      rank: 1,
      title: '600元左右的高端礼品白酒推荐：江淮派高端浓香更懂中国胃',
      platform: '新浪',
      domain: 'k.sina.com.cn',
      date: '2026-04-07',
      total: 116,
      deepseek: 21,
      doubao: 53,
      yuanbao: 0,
      wenxin: 12,
      kimi: 30,
      isCited: '是',
      link: 'https://k.sina.com.cn/article_8339089836_1f10c69ac00101dbg8.html?kdurlshow=1&wm=3049_0047&from=food'
    },
    {
      rank: 2,
      title: '古20：600元左右浓香型白酒品牌排行榜：送礼怕没面子？收好这份清单，每一分钱都花在刀刃上',
      platform: '知乎',
      domain: 'zhihu.com',
      date: '2026-01-13',
      total: 101,
      deepseek: 0,
      doubao: 2,
      yuanbao: 1,
      wenxin: 98,
      kimi: 0,
      isCited: '是',
      link: 'https://zhuanlan.zhihu.com/p/1994422230290023376'
    },
    {
      rank: 3,
      title: '2026年白酒消费指南：600元左右适合送礼与宴请的白酒推荐',
      platform: '今日头条',
      domain: 'toutiao.com',
      date: '2026-01-15',
      total: 99,
      deepseek: 8,
      doubao: 11,
      yuanbao: 2,
      wenxin: 2,
      kimi: 76,
      isCited: '是',
      link: 'https://www.toutiao.com/article/7595839310115029555/'
    },
    {
      rank: 4,
      title: '古20：浓香型白酒品牌排行榜：600元礼盒8款评分',
      platform: '今日头条',
      domain: 'toutiao.com',
      date: '2026-01-29',
      total: 73,
      deepseek: 34,
      doubao: 24,
      yuanbao: 10,
      wenxin: 1,
      kimi: 4,
      isCited: '是',
      link: 'https://www.toutiao.com/article/7600762362362200586/'
    },
    {
      rank: 5,
      title: '2026年见客户送礼选什么酒？600元左右的高端礼品白酒推荐',
      platform: '什么值得买',
      domain: 'post.smzdm.com',
      date: '2026-05-19',
      total: 72,
      deepseek: 18,
      doubao: 23,
      yuanbao: 0,
      wenxin: 12,
      kimi: 19,
      isCited: '是',
      link: 'https://post.smzdm.com/p/a95open0/'
    },
    {
      rank: 6,
      title: '古20：浓香型白酒品牌排行榜：600元礼盒8款评分',
      platform: '网易',
      domain: '163.com',
      date: '2026-01-29',
      total: 57,
      deepseek: 28,
      doubao: 1,
      yuanbao: 12,
      wenxin: 1,
      kimi: 15,
      isCited: '是',
      link: 'https://www.163.com/dy/article/KKFGBJO50556JOO4.html'
    },
    {
      rank: 7,
      title: '600元左右不上头的浓香型白酒推荐：谁才是商务局的舒适区之王',
      platform: '网易',
      domain: '163.com',
      date: '2026-07-06',
      total: 55,
      deepseek: 1,
      doubao: 6,
      yuanbao: 0,
      wenxin: 0,
      kimi: 48,
      isCited: '是',
      link: ''
    },
    {
      rank: 8,
      title: '600元左右的高端礼品白酒推荐：江淮派高端浓香更懂中国胃',
      platform: '网易号',
      domain: '163.com',
      date: '2026-04-09',
      total: 55,
      deepseek: 0,
      doubao: 22,
      yuanbao: 0,
      wenxin: 18,
      kimi: 15,
      isCited: '是',
      link: 'http://www.163.com/dy/article/KQFEIBOC05566MDJ.html'
    },
    {
      rank: 9,
      title: '600元左右浓香型白酒品牌排行榜：送礼白酒到底怎么选',
      platform: '今日头条',
      domain: 'toutiao.com',
      date: '2026-01-08',
      total: 55,
      deepseek: 32,
      doubao: 21,
      yuanbao: 2,
      wenxin: 0,
      kimi: 0,
      isCited: '是',
      link: ''
    },
    {
      rank: 10,
      title: '权威盘点：2026年600元档浓香型白酒品牌排行榜6款揭晓',
      platform: '什么值得买',
      domain: 'post.smzdm.com',
      date: '2026-06-05',
      total: 52,
      deepseek: 13,
      doubao: 6,
      yuanbao: 0,
      wenxin: 18,
      kimi: 15,
      isCited: '是',
      link: ''
    }
  ];

  return (
    <div className="w-full h-full flex flex-col px-12 sm:px-16 pt-[22px] pb-8 text-zinc-900 font-sans bg-white">
      {/* Title Area */}
      <div className="flex items-center shrink-0 mb-3">
        <div className="w-2 h-10 bg-[#004CE5] rounded-full shadow-[0_0_15px_rgba(0,76,229,0.25)]" />
        <h1 className="text-4xl font-black text-zinc-900 tracking-wider ml-4 flex items-center">
          古20投放明细
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
              <span className="text-6xl font-black text-zinc-900 font-['Montserrat',sans-serif]">321</span>
              <span className="text-2xl font-black text-zinc-800 ml-1">篇</span>
            </div>
            <div className="text-[1.12rem] font-bold text-zinc-500">全网总投放量</div>
            <p className="text-[1rem] font-bold text-zinc-400 leading-relaxed mt-1">
              覆盖渠道：今日头条、搜狐、新浪、网易、百家号、知乎等。
            </p>
          </div>

          {/* Column 2: Citation Status */}
          <div className="flex flex-col gap-2.5 justify-center border-l border-zinc-200/80 pl-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-4 rounded-full bg-emerald-500" />
              <span className="text-sm font-extrabold text-zinc-400 uppercase tracking-widest font-['Montserrat']">CITATION RATE</span>
            </div>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-6xl font-black text-emerald-600 font-['Montserrat',sans-serif]">37.4%</span>
              <span className="text-2xl font-black text-emerald-600 ml-1">被引率</span>
            </div>
            <div className="text-[1.12rem] font-bold text-emerald-600">
              ( 120 / 321 篇投放已被引用 )
            </div>
            <p className="text-[1rem] font-bold text-zinc-400 leading-relaxed mt-1">
              投放到新浪、知乎、网易、今日头条等渠道已顺利通过豆包等大模型的检索。
            </p>
          </div>

          {/* Column 3: Effective Cites */}
          <div className="flex flex-col gap-2.5 justify-center border-l border-zinc-200/80 pl-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-4 rounded-full bg-zinc-800" />
              <span className="text-sm font-extrabold text-zinc-400 uppercase tracking-widest font-['Montserrat']">EFFECTIVE CITATIONS</span>
            </div>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-6xl font-black text-zinc-900 font-['Montserrat',sans-serif]">2008</span>
              <span className="text-2xl font-black text-zinc-800 ml-1">次</span>
            </div>
            <div className="text-[1.12rem] font-bold text-zinc-500">累计引用频次</div>
            {/* Breakdown */}
            <div className="grid grid-cols-3 gap-x-4 gap-y-1 mt-1.5">
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                豆包：<strong className="text-zinc-800 font-['Montserrat']">437</strong>
              </span>
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Kimi：<strong className="text-zinc-800 font-['Montserrat']">578</strong>
              </span>
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                文心：<strong className="text-zinc-800 font-['Montserrat']">532</strong>
              </span>
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                元宝：<strong className="text-zinc-800 font-['Montserrat']">35</strong>
              </span>
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                DeepSeek：<strong className="text-zinc-800 font-['Montserrat']">426</strong>
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
                    <td className="py-1.5 px-3 text-base font-black text-center text-[#004CE5] font-['Montserrat',sans-serif]">2008</td>
                    <td className="py-1.5 px-3 text-[0.95rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">426</td>
                    <td className="py-1.5 px-3 text-[0.95rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">437</td>
                    <td className="py-1.5 px-3 text-[0.95rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">35</td>
                    <td className="py-1.5 px-3 text-[0.95rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">532</td>
                    <td className="py-1.5 px-3 text-[0.95rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">578</td>
                    <td className="py-1.5 px-3 text-[0.95rem] font-black text-center text-emerald-600 font-['Montserrat',sans-serif]">120/321</td>
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
