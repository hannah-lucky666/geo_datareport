import React from 'react';

export default function Page_ContentDetails_AI() {
  const topArticles = [
    {
      rank: 1,
      title: '600元左右的高端礼品白酒推荐：江淮派高端浓香更懂中国胃',
      platform: '新浪',
      domain: 'k.sina.com.cn',
      date: '2026-04-07',
      total: 107,
      deepseek: 21,
      doubao: 53,
      yuanbao: 0,
      wenxin: 12,
      kimi: 21,
      isCited: '是',
      link: 'https://k.sina.com.cn/article_8339089836_1f10c69ac00101dbg8.html?kdurlshow=1&wm=3049_0047&from=food'
    },
    {
      rank: 2,
      title: '古20：600元左右浓香型白酒品牌排行榜：送礼怕没面子？收好这份清单，每一分钱都花在刀刃上',
      platform: '知乎',
      domain: 'zhihu.com',
      date: '2026-01-13',
      total: 58,
      deepseek: 0,
      doubao: 2,
      yuanbao: 1,
      wenxin: 55,
      kimi: 0,
      isCited: '是',
      link: 'https://zhuanlan.zhihu.com/p/1994422230290023376'
    },
    {
      rank: 3,
      title: '600元左右的高端礼品白酒推荐：江淮派高端浓香更懂中国胃',
      platform: '网易号',
      domain: '163.com',
      date: '2026-04-09',
      total: 52,
      deepseek: 0,
      doubao: 22,
      yuanbao: 0,
      wenxin: 18,
      kimi: 12,
      isCited: '是',
      link: 'http://www.163.com/dy/article/KQFEIBOC05566MDJ.html'
    },
    {
      rank: 4,
      title: '2026年白酒消费指南：600元左右适合送礼与宴请的白酒推荐',
      platform: '今日头条',
      domain: 'toutiao.com',
      date: '2026-01-15',
      total: 52,
      deepseek: 0,
      doubao: 11,
      yuanbao: 0,
      wenxin: 2,
      kimi: 39,
      isCited: '是',
      link: 'https://www.toutiao.com/article/7595839310115029555/'
    },
    {
      rank: 5,
      title: '古20：浓香型白酒 brand 排行榜：600元礼盒8款评分',
      platform: '网易',
      domain: '163.com',
      date: '2026-01-29',
      total: 49,
      deepseek: 27,
      doubao: 11,
      yuanbao: 0,
      wenxin: 11,
      kimi: 0,
      isCited: '是',
      link: 'https://www.163.com/dy/article/KKFGBJO50556JOO4.html'
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
              <span className="text-5xl font-black text-zinc-900 font-['Montserrat',sans-serif]">255</span>
              <span className="text-lg font-black text-zinc-500">篇 全网总投放</span>
            </div>
            <p className="text-[0.98rem] font-bold text-zinc-400 leading-relaxed mt-1">
              覆盖渠道：今日头条、搜狐、新浪、网易、百家号、知乎等。
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
              <span className="text-lg font-black text-zinc-400 font-['Montserrat']">/ 255 篇</span>
              <span className="text-base font-extrabold bg-emerald-50 text-emerald-600 border border-emerald-100 px-2 py-0.5 rounded-lg ml-2 font-['Montserrat']">
                25.5% 被引率
              </span>
            </div>
            <p className="text-[0.98rem] font-bold text-zinc-400 leading-relaxed mt-1">
              投放到新浪、知乎、网易、今日头条等渠道已顺利通过豆包等大模型的检索。
            </p>
          </div>

          {/* Column 3: Effective Cites */}
          <div className="flex flex-col gap-2 justify-center border-l border-zinc-200/80 pl-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-4 rounded-full bg-zinc-800" />
              <span className="text-xs font-extrabold text-zinc-400 uppercase tracking-widest font-['Montserrat']">EFFECTIVE CITATIONS</span>
            </div>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-5xl font-black text-zinc-900 font-['Montserrat',sans-serif]">1065</span>
              <span className="text-lg font-black text-zinc-500">次 累计引用频次</span>
            </div>
            {/* Breakdown */}
            <div className="grid grid-cols-3 gap-x-4 gap-y-1 mt-1.5">
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                豆包：<strong className="text-zinc-800 font-['Montserrat']">336</strong>
              </span>
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Kimi：<strong className="text-zinc-800 font-['Montserrat']">240</strong>
              </span>
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                文心：<strong className="text-zinc-800 font-['Montserrat']">322</strong>
              </span>
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                元宝：<strong className="text-zinc-800 font-['Montserrat']">21</strong>
              </span>
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                DeepSeek：<strong className="text-zinc-800 font-['Montserrat']">146</strong>
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
                    <td className="py-3 px-4 text-xl font-black text-center text-[#004CE5] font-['Montserrat',sans-serif]">1065</td>
                    <td className="py-3 px-4 text-[1.08rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">146</td>
                    <td className="py-3 px-4 text-[1.08rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">336</td>
                    <td className="py-3 px-4 text-[1.08rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">21</td>
                    <td className="py-3 px-4 text-[1.08rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">322</td>
                    <td className="py-3 px-4 text-[1.08rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">240</td>
                    <td className="py-3 px-4 text-[1.08rem] font-black text-center text-emerald-600 font-['Montserrat',sans-serif]">65/255</td>
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
