import Page_CoreDataOverview from '../pages/Page_CoreDataOverview';
import Page_CompetitorAnalysis from '../pages/Page_CompetitorAnalysis';
import Page_OptimizationStrategy from '../pages/Page_OptimizationStrategy';

export const slideConfig = [
  // ——— 封面 & 目录 ———
  {
    type: 'cover',
    title: '封面',
    backgroundImage: '/proposal-cover/proposal-cover-new.png',
    brand: '方太冰箱',
    subtitle: 'GEO\n年度规划方案',
    date: 'March 2026',
  },

  {
    type: 'toc',
    title: '方案目录',
    backgroundImage: '',
    menuText: 'MENU',
    brandLabel: 'GEOINDEXFUTURE // 2026',
    serviceGuide: 'GEO SERVICE GUIDE',
  },

  // ——— 篇章1: 核心数据总览 ———
  { type: 'chapter', title: '核心数据总览', subtitle: 'CORE DATA OVERVIEW', backgroundImage: '/' },
  { type: 'section', title: '核心数据与验收情况' },
  { type: 'page', title: '核心数据总览（2026年5月）', component: Page_CoreDataOverview },
  { type: 'page', title: '竞品分析', component: Page_CompetitorAnalysis },
  { type: 'page', title: '重点优化策略', component: Page_OptimizationStrategy },

  // ——— 篇章2: 异常数据排查结果 ———
  { type: 'chapter', title: '异常数据排查结果', subtitle: 'DATA TROUBLESHOOTING', backgroundImage: '/proposal-chapters/proposal-chapter-cover-02.jpg' },

  // ——— 篇章3: 投放内容明细 ———
  { type: 'chapter', title: '投放内容明细', subtitle: 'CONTENT DETAILS', backgroundImage: '/proposal-chapters/proposal-chapter-cover-03.jpg' },

  // ——— 篇章4: 附录 ———
  { type: 'chapter', title: '附录', subtitle: 'APPENDIX', backgroundImage: '/proposal-chapters/proposal-chapter-cover-04.jpg' },
];
