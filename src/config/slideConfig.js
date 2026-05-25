import Page_CoreDataOverview from '../pages/Page_CoreDataOverview';
import Page_CompetitorAnalysis from '../pages/Page_CompetitorAnalysis';
import Page_OptimizationStrategy from '../pages/Page_OptimizationStrategy';
import Page_KeywordCategorization from '../pages/Page_KeywordCategorization';
import Page_KpiAcceptance from '../pages/Page_KpiAcceptance';
import Page_DataTroubleshooting from '../pages/Page_DataTroubleshooting';
import Page_DataTroubleshootingSummary from '../pages/Page_DataTroubleshootingSummary';
import Page_ContentDetails from '../pages/Page_ContentDetails';
import Page_Foreword from '../pages/Page_Foreword';

export const slideConfig = [
  // ——— 封面 & 目录 ———
  {
    type: 'cover',
    title: '封面',
    backgroundImage: '/proposal-cover/proposal-cover-new.png',
    brand: 'GEO 索引未来',
    subtitle: '菜鸟快递 \n 月度报告',
    date: 'March 2026',
  },

  {
    type: 'toc',
    title: '报告目录',
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
  { type: 'page', title: '词条归类总结', component: Page_KeywordCategorization },
  { type: 'page', title: 'KPI验收情况', component: Page_KpiAcceptance },

  // ——— 篇章2: 异常数据排查结果 ———
  { type: 'chapter', title: '异常数据排查', subtitle: 'DATA TROUBLESHOOTING', backgroundImage: '/proposal-chapters/proposal-chapter-cover-02.jpg' },
  { type: 'section', title: '异常数据排查结果' },
  { type: 'page', title: '数据排查与核心变量测试', component: Page_DataTroubleshooting },
  { type: 'page', title: '排查归因总结与下一步规划', component: Page_DataTroubleshootingSummary },

  // ——— 篇章3: 投放内容明细 ———
  { type: 'chapter', title: '投放内容明细', subtitle: 'CONTENT DETAILS', backgroundImage: '/proposal-chapters/proposal-chapter-cover-03.jpg' },
  { type: 'section', title: '投放渠道与数据明细' },
  { type: 'page', title: '投放文章与数据解读', component: Page_ContentDetails },
  // { type: 'page', title: '体验重塑与前言寄语', component: Page_Foreword },

  // ——— 篇章4: 附录 ———
  { type: 'chapter', title: '附录', subtitle: 'APPENDIX', backgroundImage: '/proposal-chapters/proposal-chapter-cover-04.jpg' },
];
