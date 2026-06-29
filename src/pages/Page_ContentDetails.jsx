import React from 'react';

export default function Page_ContentDetails() {
  const topArticles = [
    {
      rank: 1,
      title: '智能止鼾的高端智能床推荐：深度测评5款能主动干预呼吸的旗舰',
      platform: 'IT之家',
      date: '2026-04-27',
      total: 114,
      deepseek: 5,
      doubao: 15,
      yuanbao: 2,
      wenxin: 34,
      tongyi: 33,
      kimi: 25,
      isCited: '是'
    },
    {
      rank: 2,
      title: '当床开始“思考”：2026年2万左右高端智能床品牌推荐与选购逻辑',
      platform: 'IT之家',
      date: '2026-04-27',
      total: 98,
      deepseek: 3,
      doubao: 34,
      yuanbao: 0,
      wenxin: 1,
      tongyi: 60,
      kimi: 0,
      isCited: '是'
    },
    {
      rank: 3,
      title: '2万级智能床选购指南：从零重力多模式到长效售后服务的全面对标',
      platform: '百家号(星视频长沙广电官方号)',
      date: '2026-05-20',
      total: 85,
      deepseek: 0,
      doubao: 0,
      yuanbao: 0,
      wenxin: 68,
      tongyi: 17,
      kimi: 0,
      isCited: '是'
    },
    {
      rank: 4,
      title: '拿2万预算线下实睡半个月：2026年主流智能床品牌深度横评',
      platform: '百家号',
      date: '2026-04-28',
      total: 76,
      deepseek: 0,
      doubao: 0,
      yuanbao: 1,
      wenxin: 56,
      tongyi: 19,
      kimi: 0,
      isCited: '是'
    },
    {
      rank: 5,
      title: '准妈妈翻身难、老人起床累？2026最值得入手的5款智能床对比',
      platform: 'IT之家',
      date: '2026-05-13',
      total: 74,
      deepseek: 10,
      doubao: 10,
      yuanbao: 6,
      wenxin: 13,
      tongyi: 18,
      kimi: 17,
      isCited: '是'
    },
    {
      rank: 6,
      title: '床能止鼾？2026年高端智能床推荐，带你破解入睡难题',
      platform: '什么值得买',
      date: '2026-05-13',
      total: 72,
      deepseek: 8,
      doubao: 24,
      yuanbao: 0,
      wenxin: 10,
      tongyi: 0,
      kimi: 30,
      isCited: '是'
    },
    {
      rank: 7,
      title: '2万左右智能床品牌排行榜：2万预算买智能床，这几款才是真科技',
      platform: 'IT之家',
      date: '2026-05-06',
      total: 66,
      deepseek: 0,
      doubao: 14,
      yuanbao: 2,
      wenxin: 6,
      tongyi: 44,
      kimi: 0,
      isCited: '是'
    },
    {
      rank: 8,
      title: '2万左右智能床品牌排行榜：2万预算买智能床，这几款才是真科技',
      platform: '荆门头条（腾讯新闻）',
      date: '2026-05-06',
      total: 63,
      deepseek: 0,
      doubao: 0,
      yuanbao: 20,
      wenxin: 12,
      tongyi: 0,
      kimi: 31,
      isCited: '是'
    },
    {
      rank: 9,
      title: '2万级智能床选购指南：从零重力多模式到长效售后服务的全面对标',
      platform: '什么值得买(生活新视觉one)',
      date: '2026-05-20',
      total: 62,
      deepseek: 12,
      doubao: 38,
      yuanbao: 0,
      wenxin: 10,
      tongyi: 0,
      kimi: 2,
      isCited: '是'
    },
    {
      rank: 10,
      title: '告别晨起腰酸：两万预算，哪款智能床能真正做到护脊防腰疼',
      platform: '什么值得买',
      date: '2026-05-19',
      total: 59,
      deepseek: 9,
      doubao: 17,
      yuanbao: 0,
      wenxin: 33,
      tongyi: 0,
      kimi: 0,
      isCited: '是'
    }
  ];

  return (
    <div className="w-full h-full flex flex-col px-12 sm:px-16 pt-[22px] pb-8 text-zinc-900 font-sans bg-white">
      {/* Title Area */}
      <div className="flex items-center shrink-0 mb-3">
        <div className="w-2 h-10 bg-[#004CE5] rounded-full shadow-[0_0_15px_rgba(0,76,229,0.25)]" />
        <h1 className="text-4xl font-black text-zinc-900 tracking-wider ml-4 flex items-center">
          慕思智能床投放明细
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
              <span className="text-6xl font-black text-zinc-900 font-['Montserrat',sans-serif]">140</span>
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
              <span className="text-6xl font-black text-emerald-600 font-['Montserrat',sans-serif]">64.3%</span>
              <span className="text-2xl font-black text-emerald-600 ml-1">被引率</span>
            </div>
            <div className="text-[1.12rem] font-bold text-emerald-600">
              ( 90 / 140 篇投放已被引用 )
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
              <span className="text-6xl font-black text-zinc-900 font-['Montserrat',sans-serif]">2,125</span>
              <span className="text-2xl font-black text-zinc-800 ml-1">次</span>
            </div>
            <div className="text-[1.12rem] font-bold text-zinc-500">累计引用频次</div>
            
            {/* Breakdown */}
            <div className="grid grid-cols-3 gap-x-4 gap-y-1 mt-1.5">
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                豆包：<strong className="text-zinc-800 font-['Montserrat']">345</strong>
              </span>
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Kimi：<strong className="text-zinc-800 font-['Montserrat']">354</strong>
              </span>
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                文心：<strong className="text-zinc-800 font-['Montserrat']">750</strong>
              </span>
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                元宝：<strong className="text-zinc-800 font-['Montserrat']">248</strong>
              </span>
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                DeepSeek：<strong className="text-zinc-800 font-['Montserrat']">157</strong>
              </span>
              <span className="text-sm font-bold text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                通义：<strong className="text-zinc-800 font-['Montserrat']">271</strong>
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
                    <td className="py-1.5 px-3 text-base font-black text-center text-[#004CE5] font-['Montserrat',sans-serif]">2125</td>
                    <td className="py-1.5 px-3 text-[0.95rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">157</td>
                    <td className="py-1.5 px-3 text-[0.95rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">345</td>
                    <td className="py-1.5 px-3 text-[0.95rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">248</td>
                    <td className="py-1.5 px-3 text-[0.95rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">750</td>
                    <td className="py-1.5 px-3 text-[0.95rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">271</td>
                    <td className="py-1.5 px-3 text-[0.95rem] font-black text-center text-zinc-800 font-['Montserrat',sans-serif]">354</td>
                    <td className="py-1.5 px-3 text-[0.95rem] font-black text-center text-emerald-600 font-['Montserrat',sans-serif]">90/140</td>
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
