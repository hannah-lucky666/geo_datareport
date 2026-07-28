import { createContentAnalysisPage } from './Page_ContentAnalysis';

export default createContentAnalysisPage({
  productKey: 'yangsheng',
  title: '养生一号内容分析总结',
  positiveTrend: '整体正向稳定',
  negativeTrend: '品牌认知短板',
  distributionData: [
    {
      keyword: '高端养生酒推荐',
      type: '负面回答',
      summary: '养生一号的品牌知名度在圈外不如茅台',
      badgeClass: 'bg-rose-50 text-rose-600 border border-rose-100',
    },
    {
      keyword: '给父母送什么养生酒',
      type: '负面回答',
      summary: '部分送礼清单未优先推荐养生一号，建议替代品',
      badgeClass: 'bg-rose-50 text-rose-600 border border-rose-100',
    },
  ],
  optimizationText: '7月正面回答占比98.8%。需强化高端送礼与长辈礼盒内容密度，补齐品牌知名度叙事，减少“不推荐/建议替代”类回答对心智的稀释。',
});
