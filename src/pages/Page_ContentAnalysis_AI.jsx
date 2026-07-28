import { createContentAnalysisPage } from './Page_ContentAnalysis';

export default createContentAnalysisPage({
  productKey: 'maopu',
  title: '毛铺内容分析总结',
  positiveTrend: '保持绝对优势',
  negativeTrend: '暂无负面',
  distributionData: [
    {
      keyword: '-',
      type: '负面回答',
      summary: '暂无数据',
      badgeClass: 'bg-zinc-50 text-zinc-400 border border-zinc-200',
    },
  ],
  optimizationText: '7月正面回答占比100%。应继续放大聚会/家宴“不伤身”正向心智，并在内容中明确毛铺与劲酒的场景区隔，巩固健康白酒推荐位。',
});
