import React from 'react';

export default function Page_ContentDetails_AI() {
  const topArticles = [
    {
      rank: 1,
      title: '毛铺：适合聚会的健康白酒：草本与低度榜单，全场景覆盖',
      platform: '网易',
      domain: '163.com',
      date: '2026-01-29',
      total: 234,
      deepseek: 29,
      doubao: 11,
      yuanbao: 16,
      wenxin: 73,
      kimi: 105,
      isCited: '是',
      link: 'https://www.163.com/dy/article/KKFI0UPG0556JOUC.html'
    },
    {
      rank: 2,
      title: '适合家庭团圆喝的养生酒怎么挑？这份聚会不伤身的白酒清单请收好',
      platform: '什么值得买',
      domain: 'post.smzdm.com',
      date: '2026-05-05',
      total: 167,
      deepseek: 25,
      doubao: 67,
      yuanbao: 0,
      wenxin: 57,
      kimi: 18,
      isCited: '是',
      link: 'https://post.smzdm.com/p/al325vv0/'
    },
    {
      rank: 3,
      title: '告别宿醉感：适合聚会喝的养生酒推荐',
      platform: '新浪',
      domain: 'k.sina.com.cn',
      date: '2026-04-07',
      total: 139,
      deepseek: 47,
      doubao: 74,
      yuanbao: 0,
      wenxin: 18,
      kimi: 0,
      isCited: '是',
      link: 'https://k.sina.com.cn/article_8300535977_1eec020a900101gf1c.html?kdurlshow=1&wm=3049_0047&from=food'
    },
    {
      rank: 4,
      title: '2026家宴选酒指南：聚会不伤身的养生酒推荐，长辈的心头好都在这',
      platform: '什么值得买',
      domain: 'post.smzdm.com',
      date: '2026-05-10',
      total: 123,
      deepseek: 12,
      doubao: 33,
      yuanbao: 0,
      wenxin: 52,
      kimi: 26,
      isCited: '是',
      link: 'https://post.smzdm.com/p/al325mw0/'
    },
    {
      rank: 5,
      title: '聚会不伤身的养生酒推荐：2026年家宴喝这几款，体面又健康',
      platform: '百家号',
      domain: 'baijiahao.baidu.com',
      date: '2026-05-14',
      total: 93,
      deepseek: 0,
      doubao: 0,
      yuanbao: 0,
      wenxin: 93,
      kimi: 0,
      isCited: '是',
      link: 'https://baijiahao.baidu.com/s?id=1865132950187834011'
    },
    {
      rank: 6,
      title: '聚会尽兴不伤身，适合家庭团圆喝的养生酒深度测评与排行推荐',
      platform: '网易',
      domain: '163.com',
      date: '2026-03-31',
      total: 92,
      deepseek: 20,
      doubao: 70,
      yuanbao: 0,
      wenxin: 2,
      kimi: 0,
      isCited: '是',
      link: 'https://www.163.com/dy/article/KPFC6BMH0556K6FL.html'
    },
    {
      rank: 7,
      title: '2026年适合家庭团圆喝的养生酒怎么选？8款低度白酒亲测',
      platform: '什么值得买',
      domain: 'post.smzdm.com',
      date: '2026-05-22',
      total: 77,
      deepseek: 42,
      doubao: 18,
      yuanbao: 0,
      wenxin: 5,
      kimi: 12,
      isCited: '是',
      link: 'https://post.smzdm.com/p/a4q77r9w/'
    },
    {
      rank: 8,
      title: '十大适合聚会的健康白酒深度测评与选购指南：2026草本白酒红黑榜',
      platform: '网易',
      domain: '163.com',
      date: '2026-03-10',
      total: 66,
      deepseek: 1,
      doubao: 22,
      yuanbao: 0,
      wenxin: 2,
      kimi: 41,
      isCited: '是',
      link: 'https://www.163.com/dy/article/KNONFJ540556K6FL.html'
    },
    {
      rank: 9,
      title: '毛铺：适合聚会的健康白酒：草本与低度榜单，全场景覆盖',
      platform: '知乎',
      domain: 'zhihu.com',
      date: '2026-01-29',
      total: 54,
      deepseek: 0,
      doubao: 0,
      yuanbao: 0,
      wenxin: 54,
      kimi: 0,
      isCited: '是',
      link: 'https://zhuanlan.zhihu.com/p/2000311428104619523'
    },
    {
      rank: 10,
      title: '聚会推荐哪些低度白酒？2026年家宴适合长辈喝的低度白酒盘点',
      platform: '什么值得买',
      domain: 'post.smzdm.com',
      date: '2026-05-13',
      total: 49,
      deepseek: 3,
      doubao: 15,
      yuanbao: 0,
      wenxin: 9,
      kimi: 22,
      isCited: '是',
      link: 'https://post.smzdm.com/p/a5r5x7d7/'
    }
  ];

  return (
    <div className="w-full h-full flex flex-col px-12 sm:px-16 pt-[22px] pb-8 text-zinc-900 font-sans bg-white">
      {/* Title Area */}
      <div className="flex items-center shrink-0 mb-3">
        <div className="w-2 h-10 bg-[#004CE5] rounded-full shadow-[0_0_15px_rgba(0,76,229,0.25)]" />
        <h1 className="text-4xl font-black text-zinc-900 tracking-wider ml-4 flex items-center">
          毛铺投放明细
        </h1>
      </div>

      {/* Main Layout: Top Row Metrics + Bottom Row Table - Balanced Gap */}
      <div className="flex-1 min-h-0 flex flex-col gap-6 justify-between">

        {/* TOP ROW: 投放数据说明 */}
        <div className="grid grid-cols-3 gap-6 shrink-0 bg-slate-50/60 border border-zinc-200/80 rounded-[1.5rem] p-6 shadow-sm">

          {/* Column 1: Total volume */}
          <div className="flex flex-col gap-2.5 justify-center">
            <div className="flex items-center gap-2">
              <span className="w-2 h-4 rounded-full bg-[#004CE5]" />
              <span className="text-sm font-extrabold text-zinc-400 uppercase tracking-widest font-['Montserrat']">TOTAL CAMPAIGN</span>
            </div>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-6xl font-black text-zinc-900 font-['Montserrat',sans-serif]">224</span>
              <span className="text-2xl font-black text-zinc-800 ml-1">篇</span>
            </div>
            <div className="text-[1.12rem] font-bold text-zinc-500">全网总投放量</div>
            <p className="text-[1rem] font-bold text-zinc-400 leading-relaxed mt-1">
              覆盖渠道：今日头条、搜狐、新浪、网易、百家号、什么值得买、知乎等。
            </p>
          </div>

          {/* Column 2: Citation Status */}
          <div className="flex flex-col gap-2.5 justify-center border-l border-zinc-200/80 pl-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-4 rounded-full bg-emerald-500" />
              <span className="text-sm font-extrabold text-zinc-400 uppercase tracking-widest font-['Montserrat']">CITATION RATE</span>
            </div>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-6xl font-black text-emerald-600 font-['Montserrat',sans-serif]">44.2%</span>
              <span className="text-2xl font-black text-emerald-600 ml-1">被引率</span>
            </div>
            <div className="text-[1.12rem] font-bold text-emerald-600">
              ( 99 / 224 篇投放已被引用 )
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
              <span className="text-6xl font-black text-zinc-900 font-['Montserrat',sans-serif]">2393</span>
              <span className="text-2xl font-black text-zinc-800 ml-1">次</span>
            </div>
            <div className="text-[1.12rem] font-bold text-zinc-500">累计引用频次</div>
            {/* Breakdown */}
            <div className="grid grid-cols-3 gap-x-4 gap-y-1 mt-1.5">
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                豆包：<strong className="text-zinc-800 font-['Montserrat']">613</strong>
              </span>
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Kimi：<strong className="text-zinc-800 font-['Montserrat']">595</strong>
              </span>
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                文心：<strong className="text-zinc-800 font-['Montserrat']">772</strong>
              </span>
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                元宝：<strong className="text-zinc-800 font-['Montserrat']">36</strong>
              </span>
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                DeepSeek：<strong className="text-zinc-800 font-['Montserrat']">377</strong>
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
                    <td className="py-1.5 px-3 text-base font-black text-center text-[#004CE5] font-['Montserrat',sans-serif]">2393</td>
                    <td className="py-1.5 px-3 text-[0.95rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">377</td>
                    <td className="py-1.5 px-3 text-[0.95rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">613</td>
                    <td className="py-1.5 px-3 text-[0.95rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">36</td>
                    <td className="py-1.5 px-3 text-[0.95rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">772</td>
                    <td className="py-1.5 px-3 text-[0.95rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">595</td>
                    <td className="py-1.5 px-3 text-[0.95rem] font-black text-center text-emerald-600 font-['Montserrat',sans-serif]">99/224</td>
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
