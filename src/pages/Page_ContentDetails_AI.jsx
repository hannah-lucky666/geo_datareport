import React from 'react';

export default function Page_ContentDetails_AI() {
  const topArticles = [
    {
      rank: 1,
      title: '拒绝智商税：2026年知名品牌质量好的AI床垫推荐清单',
      platform: 'IT之家',
      date: '2026-05-13',
      total: 118,
      deepseek: 0,
      doubao: 52,
      yuanbao: 0,
      wenxin: 17,
      tongyi: 28,
      kimi: 21,
      isCited: '是',
      link: 'https://www.ithome.com/0/949/818.htm'
    },
    {
      rank: 2,
      title: '别花2万块买个电动排骨架！2026年AI床垫品牌前十名指南',
      platform: '百家号',
      date: '2026-05-12',
      total: 103,
      deepseek: 0,
      doubao: 0,
      yuanbao: 0,
      wenxin: 9,
      tongyi: 76,
      kimi: 0,
      isCited: '是',
      link: 'https://baijiahao.baidu.com/s?id=1863887552437837583'
    },
    {
      rank: 3,
      title: '当床开始“思考”：2026年2万左右高端智能床品牌推荐与选购逻辑',
      platform: 'IT之家',
      date: '2026-04-25',
      total: 86,
      deepseek: 8,
      doubao: 37,
      yuanbao: 14,
      wenxin: 8,
      tongyi: 19,
      kimi: 0,
      isCited: '是',
      link: 'http://当床开始“思考”：2026年2万左右高端智能床品牌推荐与选购逻辑'
    },
    {
      rank: 4,
      title: '2026年高端AI床垫品牌推荐：这几款口碑好的高端AI床垫才值得看',
      platform: '新浪',
      date: '2026-04-21',
      total: 57,
      deepseek: 12,
      doubao: 0,
      yuanbao: 0,
      wenxin: 0,
      tongyi: 0,
      kimi: 36,
      isCited: '是',
      link: 'https://k.sina.com.cn/article_8214586963_1e9a0a65300101o86o.html?kdurlshow=1&wm=3049_0047&from=tech&subch=otech'
    },
    {
      rank: 5,
      title: '夫妻睡感不统一？可以左右分区调节的AI床垫推荐，终结睡眠迁就',
      platform: 'IT之家',
      date: '2026-05-06',
      total: 54,
      deepseek: 8,
      doubao: 26,
      yuanbao: 6,
      wenxin: 2,
      tongyi: 12,
      kimi: 0,
      isCited: '是',
      link: 'https://www.ithome.com/0/946/502.htm'
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
              <span className="text-5xl font-black text-zinc-900 font-['Montserrat',sans-serif]">62</span>
              <span className="text-lg font-black text-zinc-500">篇 全网总投放</span>
            </div>
            <p className="text-[0.98rem] font-bold text-zinc-400 leading-relaxed mt-1">
              覆盖渠道：今日头条、搜狐、新浪、网易、百家号、IT之家等。
            </p>
          </div>

          {/* Column 2: Citation Status */}
          <div className="flex flex-col gap-2 justify-center border-l border-zinc-200/80 pl-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-4 rounded-full bg-emerald-500" />
              <span className="text-xs font-extrabold text-zinc-400 uppercase tracking-widest font-['Montserrat']">CITATION RATE</span>
            </div>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-5xl font-black text-emerald-600 font-['Montserrat',sans-serif]">35</span>
              <span className="text-lg font-black text-zinc-400 font-['Montserrat']">/ 62 篇</span>
              <span className="text-base font-extrabold bg-emerald-50 text-emerald-600 border border-emerald-100 px-2 py-0.5 rounded-lg ml-2 font-['Montserrat']">
                56.5% 被引率
              </span>
            </div>
            <p className="text-[0.98rem] font-bold text-zinc-400 leading-relaxed mt-1">
              投放到IT之家、百家号、新浪等渠道 of 稿件已顺利通过豆包及文心等大模型的检索。
            </p>
          </div>

          {/* Column 3: Effective Cites */}
          <div className="flex flex-col gap-2 justify-center border-l border-zinc-200/80 pl-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-4 rounded-full bg-zinc-800" />
              <span className="text-xs font-extrabold text-zinc-400 uppercase tracking-widest font-['Montserrat']">EFFECTIVE CITATIONS</span>
            </div>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-5xl font-black text-zinc-900 font-['Montserrat',sans-serif]">909</span>
              <span className="text-lg font-black text-zinc-500">次 累计引用频次</span>
            </div>
            {/* Breakdown */}
            <div className="grid grid-cols-3 gap-x-4 gap-y-1 mt-1.5">
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                文心：<strong className="text-zinc-800 font-['Montserrat']">353</strong>
              </span>
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                豆包：<strong className="text-zinc-800 font-['Montserrat']">247</strong>
              </span>
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Kimi：<strong className="text-zinc-800 font-['Montserrat']">130</strong>
              </span>
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                通义：<strong className="text-zinc-800 font-['Montserrat']">88</strong>
              </span>
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                元宝：<strong className="text-zinc-800 font-['Montserrat']">50</strong>
              </span>
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                DeepSeek：<strong className="text-zinc-800 font-['Montserrat']">41</strong>
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
                    <th className="py-3 px-4 w-[26%]">文章标题</th>
                    <th className="py-3 px-4 w-[8%]">发布平台</th>
                    <th className="py-3 px-4 w-[8%] text-center">发布时间</th>
                    <th className="py-3 px-4 w-[6%] text-center">总引用数</th>
                    <th className="py-3 px-4 w-[6%] text-center">DeepSeek</th>
                    <th className="py-3 px-4 w-[6%] text-center">豆包</th>
                    <th className="py-3 px-4 w-[6%] text-center">元宝</th>
                    <th className="py-3 px-4 w-[6%] text-center">文心一言</th>
                    <th className="py-3 px-4 w-[6%] text-center">通义千问</th>
                    <th className="py-3 px-4 w-[6%] text-center">Kimi</th>
                    <th className="py-3 px-4 w-[7%] text-center">是否被引</th>
                    <th className="py-3 px-4 w-[6%] text-center">链接</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 text-[1.05rem] font-bold text-zinc-750">
                  {/* Summary Row */}
                  <tr className="bg-slate-50/20 font-black text-zinc-900">
                    <td className="py-3 px-4 text-center text-zinc-400 text-base">—</td>
                    <td className="py-3 px-4 text-[1.12rem]">【总计汇总】</td>
                    <td className="py-3 px-4 text-zinc-400">—</td>
                    <td className="py-3 px-4 text-zinc-400">—</td>
                    <td className="py-3 px-4 text-xl font-black text-center text-[#004CE5] font-['Montserrat',sans-serif]">909</td>
                    <td className="py-3 px-4 text-[1.08rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">41</td>
                    <td className="py-3 px-4 text-[1.08rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">247</td>
                    <td className="py-3 px-4 text-[1.08rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">50</td>
                    <td className="py-3 px-4 text-[1.08rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">353</td>
                    <td className="py-3 px-4 text-[1.08rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">88</td>
                    <td className="py-3 px-4 text-[1.08rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">130</td>
                    <td className="py-3 px-4 text-[1.08rem] font-black text-center text-emerald-600 font-['Montserrat',sans-serif]">35/62</td>
                    <td className="py-3 px-4 text-center text-zinc-400">—</td>
                  </tr>

                  {/* Body Rows */}
                  {topArticles.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-3.5 px-4 text-center text-[1.08rem] font-black font-['Montserrat',sans-serif] text-zinc-900">{row.rank}</td>
                      <td className="py-3.5 px-4 text-[1.08rem] font-bold text-zinc-900 break-words whitespace-normal leading-relaxed" title={row.title}>{row.title}</td>
                      <td className="py-3.5 px-4 text-[1.05rem] font-black text-zinc-800">{row.platform}</td>
                      <td className="py-3.5 px-4 text-[1.02rem] font-extrabold text-zinc-400 font-['Montserrat',sans-serif] text-center">{row.date}</td>
                      <td className="py-3.5 px-4 text-lg font-black text-center text-[#004CE5] font-['Montserrat',sans-serif]">{row.total}</td>
                      <td className="py-3.5 px-4 text-[1.02rem] font-extrabold text-center text-zinc-700 font-['Montserrat',sans-serif]">{row.deepseek}</td>
                      <td className="py-3.5 px-4 text-[1.02rem] font-extrabold text-center text-zinc-700 font-['Montserrat',sans-serif]">{row.doubao}</td>
                      <td className="py-3.5 px-4 text-[1.02rem] font-extrabold text-center text-zinc-700 font-['Montserrat',sans-serif]">{row.yuanbao}</td>
                      <td className="py-3.5 px-4 text-[1.02rem] font-extrabold text-center text-zinc-700 font-['Montserrat',sans-serif]">{row.wenxin}</td>
                      <td className="py-3.5 px-4 text-[1.02rem] font-extrabold text-center text-zinc-700 font-['Montserrat',sans-serif]">{row.tongyi}</td>
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
