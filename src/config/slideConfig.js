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
import Page_QueryDataSystemLink from '../pages/Page_QueryDataSystemLink';
import Page_QueryDataSystemLink_AI from '../pages/Page_QueryDataSystemLink_AI';

// Product 3 (Mattress) independent page imports
import Page_CompetitorAnalysis_Musi from '../pages/Page_CompetitorAnalysis_Musi';
import Page_ContentDetails_Musi from '../pages/Page_ContentDetails_Musi';
import Page_ContentAnalysis_Musi from '../pages/Page_ContentAnalysis_Musi';
import Page_QueryDataSystemLink_Musi from '../pages/Page_QueryDataSystemLink_Musi';

export const slideConfig = [
  // ——— 封面 & 目录 ———
  {
    type: 'cover',
    title: '封面',
    backgroundImage: '/proposal-cover/proposal-cover-new.png',
    brand: 'GEO 索引未来',
    subtitle: '慕思GEO \n 阶段性报告',
    date: 'June 2026',
  },

  {
    type: 'toc',
    title: '报告目录',
    backgroundImage: '',
    menuText: 'MENU',
    brandLabel: 'GEOINDEXFUTURE // 2026',
    serviceGuide: 'GEO DATA REPORT',
  },

  // ——— 篇章1: 核心数据与竞品分析 ———
  { type: 'chapter', title: '核心数据与竞品分析', subtitle: 'DATA OVERVIEW & COMPETITOR ANALYSIS', backgroundImage: '/' },
  { type: 'section', title: '核心数据总览' },
  { type: 'page', title: '核心数据总览', component: Page_CoreDataOverview },
  { type: 'section', title: '竞品分析' },
  { type: 'page', title: '慕思智能床 竞品分析', component: Page_CompetitorAnalysis },
  { type: 'page', title: '慕思AI床垫 竞品分析', component: Page_CompetitorAnalysis_AI },
  { type: 'page', title: '慕思床垫 竞品分析', component: Page_CompetitorAnalysis_Musi },

  // ——— 篇章2: 投放内容明细 ———
  { type: 'chapter', title: '投放内容与引用明细', subtitle: 'CONTENT DETAILS', backgroundImage: '/proposal-chapters/proposal-chapter-cover-03.jpg' },
  { type: 'section', title: '投放渠道与数据明细' },
  { type: 'page', title: '慕思智能床 投放明细', component: Page_ContentDetails },
  { type: 'page', title: '慕思AI床垫 投放明细', component: Page_ContentDetails_AI },
  { type: 'page', title: '慕思床垫 投放明细', component: Page_ContentDetails_Musi },

  // ——— 篇章3: 内容分析与总结说明 ———
  { type: 'chapter', title: '内容分析与总结说明', subtitle: 'CONTENT ANALYSIS & SUMMARY', backgroundImage: '/proposal-chapters/proposal-chapter-cover-04.jpg' },
  { type: 'section', title: '内容总结分析' },
  { type: 'page', title: '慕思智能床 内容总结', component: Page_ContentAnalysis },
  { type: 'page', title: '慕思AI床垫 内容总结', component: Page_ContentAnalysis_AI },
  { type: 'page', title: '慕思床垫 内容总结', component: Page_ContentAnalysis_Musi },

  // ——— 篇章4: 词条数据明细 ———
  { type: 'chapter', title: '词条数据明细', subtitle: 'CONTENT DETAILS', backgroundImage: '/proposal-chapters/proposal-chapter-cover-03.jpg' },
  { type: 'section', title: '数据系统访问' },
  { type: 'page', title: '慕思智能床 词条数据明细', component: Page_QueryDataSystemLink },
  { type: 'page', title: '慕思AI床垫 词条数据明细', component: Page_QueryDataSystemLink_AI },
  { type: 'page', title: '慕思床垫 词条数据明细', component: Page_QueryDataSystemLink_Musi },
];
