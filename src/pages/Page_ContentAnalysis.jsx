import React from 'react';
import report from '../data/musiJulyReport.json';

function createContentAnalysisPage({
  productKey,
  title,
  positiveTrend,
  negativeTrend,
  distributionData,
  optimizationText,
}) {
  const sent = report.products[productKey].sentiments;
  const summaryData = [
    {
      type: '正面',
      ratio: `${sent.positive}%`,
      trend: positiveTrend,
      desc: `正面核心关键词：${sent.positive_keywords.slice(0, 3).join('、')}`,
      isPositive: true,
      colorClass: 'border-l-4 border-emerald-500',
    },
    {
      type: '负面',
      ratio: `${sent.negative}%`,
      trend: negativeTrend,
      desc: `负面核心关键词：${sent.negative_keywords.slice(0, 3).join('、')}`,
      isPositive: false,
      colorClass: 'border-l-4 border-rose-500',
    },
  ];

  return function ContentAnalysisPage() {
    return (
      <div className="w-full h-full flex flex-col px-12 sm:px-16 pt-[40px] pb-[45px] text-zinc-900 font-sans bg-white overflow-hidden">
        <div className="flex items-center shrink-0 mb-[20px]">
          <div className="w-2 h-10 bg-[#004CE5] rounded-full shadow-[0_0_15px_rgba(0,76,229,0.25)]" />
          <h1 className="text-4xl font-black text-zinc-900 tracking-wider ml-4 flex items-center">
            {title}
            <span className="text-2xl font-bold text-zinc-400 ml-4">（2026年7月）</span>
          </h1>
        </div>

        <div className="flex-grow flex flex-col justify-between min-h-0">
          <div className="rounded-[1.25rem] border border-zinc-200 bg-white shadow-[0_6px_30px_rgba(0,0,0,0.015)] overflow-hidden shrink-0">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-zinc-200">
                  <th className="py-[16px] px-8 text-[1.4rem] font-bold text-zinc-700 tracking-wider w-[18%] pl-10">类型</th>
                  <th className="py-[16px] px-8 text-[1.4rem] font-bold text-zinc-700 tracking-wider w-[18%]">占比</th>
                  <th className="py-[16px] px-8 text-[1.4rem] font-bold text-zinc-700 tracking-wider w-[24%]">趋势</th>
                  <th className="py-[16px] px-8 text-[1.4rem] font-bold text-zinc-700 tracking-wider">核心关键词</th>
                </tr>
              </thead>
              <tbody>
                {summaryData.map((row, idx) => (
                  <tr key={idx} className={`border-b border-zinc-100 last:border-none hover:bg-slate-50/40 transition-colors ${row.colorClass}`}>
                    <td className="py-[24px] px-8 pl-9 align-middle">
                      <span className="font-black text-[1.45rem] flex items-center gap-3.5 text-zinc-800">
                        {row.isPositive ? (
                          <span className="flex items-center justify-center w-7 h-7 rounded-lg border-2 border-emerald-500 text-emerald-500 bg-white shrink-0 shadow-sm shadow-emerald-500/5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                          </span>
                        ) : (
                          <span className="flex items-center justify-center w-7 h-7 rounded-lg border-2 border-rose-500 text-rose-500 bg-white shrink-0 shadow-sm shadow-rose-500/5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                          </span>
                        )}
                        {row.type}
                      </span>
                    </td>
                    <td className="py-[24px] px-8 align-middle">
                      <span className={`text-[2.0rem] font-black font-['Montserrat',sans-serif] ${row.isPositive ? 'text-emerald-600' : 'text-rose-600'}`}>{row.ratio}</span>
                    </td>
                    <td className="py-[24px] px-8 align-middle">
                      <span className="text-[1.45rem] font-bold text-zinc-700">{row.trend}</span>
                    </td>
                    <td className="py-[24px] px-8 align-middle">
                      <p className="text-[1.45rem] font-semibold text-zinc-600 leading-relaxed">{row.desc}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col gap-3.5 shrink-0">
            <h2 className="text-[2.0rem] font-black text-zinc-900 flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-[#004CE5]" />
              负面词条分布分析
            </h2>

            <div className="rounded-[1.25rem] border border-zinc-200 bg-white shadow-[0_6px_30px_rgba(0,0,0,0.015)] overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-zinc-200">
                    <th className="py-[14px] px-8 text-[1.4rem] font-bold text-zinc-700 tracking-wider w-[32%]">出现负面的词条</th>
                    <th className="py-[14px] px-8 text-[1.4rem] font-bold text-zinc-700 tracking-wider w-[22%]">负面类型</th>
                    <th className="py-[14px] px-8 text-[1.4rem] font-bold text-zinc-700 tracking-wider">具体问题摘要</th>
                  </tr>
                </thead>
                <tbody>
                  {distributionData.map((row, idx) => (
                    <tr key={idx} className="border-b border-zinc-100 last:border-none hover:bg-slate-50/50 even:bg-slate-50/15 transition-colors">
                      <td className="py-[20px] px-8 text-[1.45rem] font-bold text-zinc-800 align-middle">
                        {row.keyword}
                      </td>
                      <td className="py-[20px] px-8 align-middle">
                        <span className={`inline-block px-3.5 py-1.5 rounded-lg text-[1.15rem] font-extrabold tracking-wide ${row.badgeClass}`}>
                          {row.type}
                        </span>
                      </td>
                      <td className="py-[20px] px-8 text-[1.45rem] font-semibold text-zinc-600 align-middle leading-relaxed">
                        {row.summary}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-col gap-3 shrink-0">
            <div className="border-t border-zinc-200" />
            <div className="rounded-[1.25rem] border-l-[6px] border-[#004CE5] bg-gradient-to-r from-blue-50/40 via-white to-white py-6 px-8 shadow-[0_6px_20px_rgba(0,76,229,0.015)]">
              <h3 className="text-[1.65rem] font-black text-zinc-900 tracking-wider mb-2">内容优化提升</h3>
              <p className="text-[1.45rem] leading-relaxed text-zinc-700 font-bold" dangerouslySetInnerHTML={{ __html: optimizationText }} />
            </div>
          </div>
        </div>
      </div>
    );
  };
}

const badge = 'bg-rose-50 text-rose-600 border border-rose-100';

export default createContentAnalysisPage({
  productKey: 'smart',
  title: '慕思智能床内容分析总结',
  positiveTrend: '整体稳健偏高',
  negativeTrend: '仍处低位',
  distributionData: [
    {
      keyword: '品质稳定售后有保障的智能床推荐',
      type: '负面回答',
      summary: '售后保障类词条下，模型偶发输出售后体验差、宣传不符等负面评价，削弱服务心智',
      badgeClass: badge,
    },
    {
      keyword: '2万用料扎实质量好的智能床推荐',
      type: '负面回答',
      summary: '质量评价场景中偶发提及质量故障、品控问题，影响品质说服力',
      badgeClass: badge,
    },
  ],
  optimizationText:
    '围绕售后与质量敏感词条补充正面案例与服务承诺语料，强化<strong class="text-[#004CE5] font-black mx-0.5">生态联动、功能全面、技术先进</strong>表达，压降2.8%负面声量对转化的干扰。',
});

export const Page_ContentAnalysis_AI = createContentAnalysisPage({
  productKey: 'ai',
  title: '慕思AI床垫内容分析总结',
  positiveTrend: '保持高位',
  negativeTrend: '需重点压降',
  distributionData: [
    {
      keyword: '经久耐用不塌陷的AI床垫推荐',
      type: '负面回答',
      summary: '耐用性词条下仍有质量故障、品控问题等负面反馈被模型引用',
      badgeClass: badge,
    },
    {
      keyword: '全国联保售后的AI床垫推荐',
      type: '负面回答',
      summary: '售后类词条偶发售后推诿、退换货困难、价格偏高等负面表述，削弱首推信任',
      badgeClass: badge,
    },
  ],
  optimizationText:
    '针对售后推诿、质量故障与价格偏高等负面关键词加强防御性内容铺设，突出<strong class="text-[#004CE5] font-black mx-0.5">功能全面、技术先进、功能丰富</strong>等优势，巩固94.4%正面占比下的推荐稳定性。',
});

export const Page_ContentAnalysis_Musi = createContentAnalysisPage({
  productKey: 'mattress',
  title: '慕思床垫内容分析总结',
  positiveTrend: '表现极优',
  negativeTrend: '近乎忽略',
  distributionData: [
    {
      keyword: '七千左右床垫哪个牌子的质量比较好',
      type: '负面回答',
      summary: '中端价位质量词条下偶发质量故障相关负面被引用，影响性价比认知',
      badgeClass: badge,
    },
    {
      keyword: '知名品牌质量好的床垫推荐',
      type: '负面回答',
      summary: '质量推荐场景中偶发售后推诿类表述，削弱高端定位说服力',
      badgeClass: badge,
    },
  ],
  optimizationText:
    '在质量与售后相关词条补充服务承诺与多价位段产品说明，强化<strong class="text-[#004CE5] font-black mx-0.5">支撑性好、透气性好、技术先进</strong>等正向卖点，继续维持99.2%的高正面占比。',
});
