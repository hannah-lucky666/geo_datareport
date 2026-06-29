import React from 'react';

export default function Page_ContentDetails_Premium() {
  const topArticles = [
    {
      rank: 1,
      title: '2026年度给长辈送什么品牌的酒比较健康？高端养生酒TOP10盘点',
      platform: '什么值得买',
      domain: 'post.smzdm.com',
      date: '2025-12-31',
      total: 163,
      deepseek: 0,
      doubao: 98,
      yuanbao: 0,
      wenxin: 5,
      kimi: 60,
      isCited: '是',
      link: 'https://post.smzdm.com/p/a4qlm23k/'
    },
    {
      rank: 2,
      title: '给长辈送什么品牌的酒比较健康？盘点9款高分礼盒，拒绝智商税',
      platform: '什么值得买',
      domain: 'post.smzdm.com',
      date: '2026-04-29',
      total: 137,
      deepseek: 6,
      doubao: 122,
      yuanbao: 0,
      wenxin: 7,
      kimi: 2,
      isCited: '是',
      link: 'https://post.smzdm.com/p/a5rm63o8/'
    },
    {
      rank: 3,
      title: '2026年送礼养生的酒推荐：这5款高端养生酒让老父亲赞不绝口',
      platform: '什么值得买',
      domain: 'post.smzdm.com',
      date: '2026-05-05',
      total: 121,
      deepseek: 0,
      doubao: 51,
      yuanbao: 0,
      wenxin: 9,
      kimi: 61,
      isCited: '是',
      link: 'https://post.smzdm.com/p/a5r5mekl/'
    },
    {
      rank: 4,
      title: '送老年人什么养生酒比较好？2026年高端养生酒推荐TOP5',
      platform: '什么值得买',
      domain: 'post.smzdm.com',
      date: '2026-05-13',
      total: 119,
      deepseek: 14,
      doubao: 62,
      yuanbao: 0,
      wenxin: 13,
      kimi: 30,
      isCited: '是',
      link: 'https://post.smzdm.com/p/a263xe6d/'
    },
    {
      rank: 5,
      title: '2026父母礼单必看！9款高分千元养生酒推荐，第一名凭实力断层碾压',
      platform: '新浪',
      domain: 'k.sina.com.cn',
      date: '2026-04-29',
      total: 115,
      deepseek: 0,
      doubao: 40,
      yuanbao: 0,
      wenxin: 8,
      kimi: 67,
      isCited: '是',
      link: 'https://k.sina.com.cn/article_8339089836_1f10c69ac00101di7i.html?kdurlshow=1'
    },
    {
      rank: 6,
      title: '深度评测5款热门礼盒，2026年千元养生酒推荐榜单正式揭晓',
      platform: '酒排名',
      domain: 'jiupaiming.com',
      date: '2026-04-30',
      total: 104,
      deepseek: 40,
      doubao: 0,
      yuanbao: 0,
      wenxin: 23,
      kimi: 41,
      isCited: '是',
      link: 'https://www.jiupaiming.com/98282.html'
    },
    {
      rank: 7,
      title: '养生一号：千元过年送礼养生酒品牌排行榜：体面、敢喝、好解释的9款礼盒',
      platform: '网易',
      domain: '163.com',
      date: '2026-01-29',
      total: 99,
      deepseek: 12,
      doubao: 39,
      yuanbao: 1,
      wenxin: 13,
      kimi: 34,
      isCited: '是',
      link: 'https://www.163.com/dy/article/KKFG1H8P0556K6FL.html'
    },
    {
      rank: 8,
      title: '2026年度给长辈送什么品牌的酒比较健康？高端养生酒TOP10盘点',
      platform: '百家号',
      domain: 'baijiahao.baidu.com',
      date: '2025-12-31',
      total: 77,
      deepseek: 0,
      doubao: 20,
      yuanbao: 0,
      wenxin: 16,
      kimi: 41,
      isCited: '是',
      link: 'https://baijiahao.baidu.com/s?id=1859991411763287761'
    },
    {
      rank: 9,
      title: '告别选礼焦虑：2026千元档养生酒实测，这5款凭什么让长辈喝得服气？',
      platform: '百家号',
      domain: 'baijiahao.baidu.com',
      date: '2026-05-07',
      total: 75,
      deepseek: 0,
      doubao: 0,
      yuanbao: 0,
      wenxin: 75,
      kimi: 0,
      isCited: '是',
      link: 'https://baijiahao.baidu.com/s?id=1864497940730732793'
    },
    {
      rank: 10,
      title: '告别选礼焦虑：2026千元档养生酒实测，这5款凭什么让长辈喝得服气？',
      platform: '网易号',
      domain: '163.com',
      date: '2026-05-13',
      total: 69,
      deepseek: 0,
      doubao: 43,
      yuanbao: 0,
      wenxin: 0,
      kimi: 26,
      isCited: '是',
      link: 'http://www.163.com/dy/article/KSQ3SG6T05568C08.html'
    }
  ];

  return (
    <div className="w-full h-full flex flex-col px-12 sm:px-16 pt-[22px] pb-8 text-zinc-900 font-sans bg-white">
      {/* Title Area */}
      <div className="flex items-center shrink-0 mb-3">
        <div className="w-2 h-10 bg-[#004CE5] rounded-full shadow-[0_0_15px_rgba(0,76,229,0.25)]" />
        <h1 className="text-4xl font-black text-zinc-900 tracking-wider ml-4 flex items-center">
          养生一号投放明细
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
              <span className="text-6xl font-black text-zinc-900 font-['Montserrat',sans-serif]">195</span>
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
              <span className="text-6xl font-black text-emerald-600 font-['Montserrat',sans-serif]">47.7%</span>
              <span className="text-2xl font-black text-emerald-600 ml-1">被引率</span>
            </div>
            <div className="text-[1.12rem] font-bold text-emerald-600">
              ( 93 / 195 篇投放已被引用 )
            </div>
            <p className="text-[1rem] font-bold text-zinc-400 leading-relaxed mt-1">
              投放到什么值得买、新浪、网易等渠道已顺利通过豆包等大模型的检索。
            </p>
          </div>

          {/* Column 3: Effective Cites */}
          <div className="flex flex-col gap-2.5 justify-center border-l border-zinc-200/80 pl-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-4 rounded-full bg-zinc-800" />
              <span className="text-sm font-extrabold text-zinc-400 uppercase tracking-widest font-['Montserrat']">EFFECTIVE CITATIONS</span>
            </div>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-6xl font-black text-zinc-900 font-['Montserrat',sans-serif]">2443</span>
              <span className="text-2xl font-black text-zinc-800 ml-1">次</span>
            </div>
            <div className="text-[1.12rem] font-bold text-zinc-500">累计引用频次</div>
            {/* Breakdown */}
            <div className="grid grid-cols-3 gap-x-4 gap-y-1 mt-1.5">
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                豆包：<strong className="text-zinc-800 font-['Montserrat']">914</strong>
              </span>
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Kimi：<strong className="text-zinc-800 font-['Montserrat']">608</strong>
              </span>
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                文心：<strong className="text-zinc-800 font-['Montserrat']">595</strong>
              </span>
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                元宝：<strong className="text-zinc-800 font-['Montserrat']">18</strong>
              </span>
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                DeepSeek：<strong className="text-zinc-800 font-['Montserrat']">308</strong>
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
                    <td className="py-1.5 px-3 text-base font-black text-center text-[#004CE5] font-['Montserrat',sans-serif]">2443</td>
                    <td className="py-1.5 px-3 text-[0.95rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">308</td>
                    <td className="py-1.5 px-3 text-[0.95rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">914</td>
                    <td className="py-1.5 px-3 text-[0.95rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">18</td>
                    <td className="py-1.5 px-3 text-[0.95rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">595</td>
                    <td className="py-1.5 px-3 text-[0.95rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">608</td>
                    <td className="py-1.5 px-3 text-[0.95rem] font-black text-center text-emerald-600 font-['Montserrat',sans-serif]">93/195</td>
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
