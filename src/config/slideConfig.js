import Page_CoreDataOverview from '../pages/Page_CoreDataOverview';
import Page_CompetitorAnalysis from '../pages/Page_CompetitorAnalysis';
import Page_KpiAcceptance from '../pages/Page_KpiAcceptance';
import Page_ContentDetails from '../pages/Page_ContentDetails';
import Page_ContentAnalysis from '../pages/Page_ContentAnalysis';
import Page_DataCorrection from '../pages/Page_DataCorrection';
import Page_QueryDataSystemLink from '../pages/Page_QueryDataSystemLink';

export const slideConfig = [
  // ——— 封面 & 目录 ———
  {
    type: 'cover',
    title: '封面',
    backgroundImage: '/proposal-cover/proposal-cover-new.png',
    brand: 'GEO 索引未来',
    subtitle: '菜鸟GEO \n 阶段性报告',
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
  { type: 'section', title: 'KPI 验收情况' },
  { type: 'page', title: 'KPI 验收情况', component: Page_KpiAcceptance },
  { type: 'section', title: '竞品分析' },
  { type: 'page', title: '菜鸟 竞品分析', component: Page_CompetitorAnalysis },

  // ——— 篇章2: 投放内容明细 ———
  { type: 'chapter', title: '投放内容与引用明细', subtitle: 'CONTENT DETAILS', backgroundImage: '/proposal-chapters/proposal-chapter-cover-03.jpg' },
  { type: 'section', title: '投放渠道与数据明细' },
  { type: 'page', title: '菜鸟 投放明细', component: Page_ContentDetails },

  // ——— 篇章3: 内容分析与总结说明 ———
  { type: 'chapter', title: '内容分析与总结说明', subtitle: 'CONTENT ANALYSIS & SUMMARY', backgroundImage: '/proposal-chapters/proposal-chapter-cover-04.jpg' },
  { type: 'section', title: '内容总结分析' },
  { type: 'page', title: '菜鸟 内容总结', component: Page_ContentAnalysis },
  { type: 'page', title: '数据指标纠正说明', component: Page_DataCorrection },

  // ——— 篇章4: 词条数据明细 ———
  { type: 'chapter', title: '词条数据明细', subtitle: 'CONTENT DETAILS', backgroundImage: '/proposal-chapters/proposal-chapter-cover-03.jpg' },
  { type: 'section', title: '数据系统访问' },
  { type: 'page', title: '菜鸟 词条数据明细', component: Page_QueryDataSystemLink },
];
