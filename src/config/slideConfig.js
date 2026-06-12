import Page_CoreDataOverview from '../pages/Page_CoreDataOverview';
import Page_CompetitorAnalysis from '../pages/Page_CompetitorAnalysis';
import Page_KeywordCategorization from '../pages/Page_KeywordCategorization';
import Page_KpiAcceptance from '../pages/Page_KpiAcceptance';
import Page_ContentAnalysis from '../pages/Page_ContentAnalysis';
import Page_DataTroubleshooting from '../pages/Page_DataTroubleshooting';
import Page_DataTroubleshootingSummary from '../pages/Page_DataTroubleshootingSummary';
import Page_ContentDetails from '../pages/Page_ContentDetails';
import Page_Foreword from '../pages/Page_Foreword';

// Product 2 (AI Mattress) independent page imports
import Page_CoreDataOverview_AI from '../pages/Page_CoreDataOverview_AI';
import Page_CompetitorAnalysis_AI from '../pages/Page_CompetitorAnalysis_AI';
import Page_KeywordCategorization_AI from '../pages/Page_KeywordCategorization_AI';
import Page_KpiAcceptance_AI from '../pages/Page_KpiAcceptance_AI';
import Page_ContentAnalysis_AI from '../pages/Page_ContentAnalysis_AI';
import Page_ContentDetails_AI from '../pages/Page_ContentDetails_AI';

export const slideConfig = [
  // ——— 封面 & 目录 ———
  {
    type: 'cover',
    title: '封面',
    backgroundImage: '/proposal-cover/proposal-cover-new.png',
    brand: 'GEO 索引未来',
    subtitle: '古井贡酒GEO \n 阶段性报告',
    date: 'May 2026',
  },

  {
    type: 'toc',
    title: '报告目录',
    backgroundImage: '',
    menuText: 'MENU',
    brandLabel: 'GEOINDEXFUTURE // 2026',
    serviceGuide: 'GEO DATA REPORT',
  },

  // ==================== 产品一：古井贡酒古16 ====================

  // ——— 篇章1: 核心数据总览 ———
  { type: 'chapter', title: '古井贡酒古16核心数据总览', subtitle: 'GU16 - CORE DATA OVERVIEW', backgroundImage: '/' },
  { type: 'section', title: '核心数据与验收情况' },
  { type: 'page', title: '核心数据总览', component: Page_CoreDataOverview },
  { type: 'page', title: '竞品分析', component: Page_CompetitorAnalysis },
  { type: 'page', title: '词条归类与优化策略', component: Page_KeywordCategorization },
  { type: 'page', title: 'KPI验收情况', component: Page_KpiAcceptance },
  { type: 'page', title: '内容分析总结', component: Page_ContentAnalysis },

  // ——— 篇章2: 投放内容明细 ———
  { type: 'chapter', title: '古井贡酒古16投放内容明细', subtitle: 'GU16 - CONTENT DETAILS', backgroundImage: '/proposal-chapters/proposal-chapter-cover-03.jpg' },
  { type: 'section', title: '投放渠道与数据明细' },
  { type: 'page', title: '投放文章与数据解读', component: Page_ContentDetails },

  // ——— 篇章3: 附录 ———
  { type: 'chapter', title: '古井贡酒古16附录', subtitle: 'GU16 - APPENDIX', backgroundImage: '/proposal-chapters/proposal-chapter-cover-04.jpg' },
  { type: 'section', title: '附录数据明细' },
  { type: 'page', title: '附录1 词条数据明细', subtitle: 'Deepseek' },
  { type: 'page', title: '附录1 词条数据明细', subtitle: '豆包' },
  { type: 'page', title: '附录1 词条数据明细', subtitle: '通义千问' },
  { type: 'page', title: '附录1 词条数据明细', subtitle: '元宝' },
  { type: 'page', title: '附录1 词条数据明细', subtitle: '文心一言' },
  { type: 'page', title: '附录1 词条数据明细', subtitle: 'Kimi' },

  // ==================== 产品二：古井贡酒古20 ====================

  // ——— 篇章4: 核心数据总览 ———
  { type: 'chapter', title: '古井贡酒古20  核心数据总览', subtitle: 'GU20 - CORE DATA OVERVIEW', backgroundImage: '/' },
  { type: 'section', title: '核心数据与验收情况' },
  { type: 'page', title: '核心数据总览', component: Page_CoreDataOverview_AI },
  { type: 'page', title: '竞品分析', component: Page_CompetitorAnalysis_AI },
  { type: 'page', title: '词条归类与优化策略', component: Page_KeywordCategorization_AI },
  { type: 'page', title: 'KPI验收情况', component: Page_KpiAcceptance_AI },
  { type: 'page', title: '内容分析总结', component: Page_ContentAnalysis_AI },

  // ——— 篇章5: 投放内容明细 ———
  { type: 'chapter', title: '古井贡酒古20  投放内容明细', subtitle: 'GU20 - CONTENT DETAILS', backgroundImage: '/proposal-chapters/proposal-chapter-cover-03.jpg' },
  { type: 'section', title: '投放渠道与数据明细' },
  { type: 'page', title: '投放文章与数据解读', component: Page_ContentDetails_AI },

  // ——— 篇章6: 附录 ———
  { type: 'chapter', title: '古井贡酒古20  附录', subtitle: 'GU20 - APPENDIX', backgroundImage: '/proposal-chapters/proposal-chapter-cover-04.jpg' },
  { type: 'section', title: '附录数据明细' },
  { type: 'page', title: '附录1 词条数据明细', subtitle: 'Deepseek' },
  { type: 'page', title: '附录1 词条数据明细', subtitle: '豆包' },
  { type: 'page', title: '附录1 词条数据明细', subtitle: '通义千问' },
];
