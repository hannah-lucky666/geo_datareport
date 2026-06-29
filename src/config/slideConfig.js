import Page_CoreDataOverview from '../pages/Page_CoreDataOverview';
import Page_CompetitorAnalysis from '../pages/Page_CompetitorAnalysis';
import Page_CompetitorAnalysis_AI from '../pages/Page_CompetitorAnalysis_AI';
import Page_CompetitorAnalysis_Premium from '../pages/Page_CompetitorAnalysis_Premium';
import Page_ContentDetails from '../pages/Page_ContentDetails';
import Page_ContentDetails_AI from '../pages/Page_ContentDetails_AI';
import Page_ContentDetails_Premium from '../pages/Page_ContentDetails_Premium';
import Page_ContentAnalysis from '../pages/Page_ContentAnalysis';
import Page_ContentAnalysis_AI from '../pages/Page_ContentAnalysis_AI';
import Page_ContentAnalysis_Premium from '../pages/Page_ContentAnalysis_Premium';
import Page_QueryDataSystemLink from '../pages/Page_QueryDataSystemLink';
import Page_QueryDataSystemLink_AI from '../pages/Page_QueryDataSystemLink_AI';
import Page_QueryDataSystemLink_Premium from '../pages/Page_QueryDataSystemLink_Premium';

export const slideConfig = [
  // ——— 封面 & 目录 ———
  {
    type: 'cover',
    title: '封面',
    backgroundImage: '/proposal-cover/proposal-cover-new.png',
    brand: 'GEO 索引未来',
    subtitle: '劲牌GEO \n 阶段性报告',
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
  { type: 'page', title: '劲酒 竞品分析', component: Page_CompetitorAnalysis },
  { type: 'page', title: '毛铺 竞品分析', component: Page_CompetitorAnalysis_AI },
  { type: 'page', title: '养生一号 竞品分析', component: Page_CompetitorAnalysis_Premium },

  // ——— 篇章2: 投放内容明细 ———
  { type: 'chapter', title: '投放内容与引用明细', subtitle: 'CONTENT DETAILS', backgroundImage: '/proposal-chapters/proposal-chapter-cover-03.jpg' },
  { type: 'section', title: '投放渠道与数据明细' },
  { type: 'page', title: '劲酒 投放明细', component: Page_ContentDetails },
  { type: 'page', title: '毛铺 投放明细', component: Page_ContentDetails_AI },
  { type: 'page', title: '养生一号 投放明细', component: Page_ContentDetails_Premium },

  // ——— 篇章3: 内容分析与总结说明 ———
  { type: 'chapter', title: '内容分析与总结说明', subtitle: 'CONTENT ANALYSIS & SUMMARY', backgroundImage: '/proposal-chapters/proposal-chapter-cover-04.jpg' },
  { type: 'section', title: '内容总结分析' },
  { type: 'page', title: '劲酒 内容总结', component: Page_ContentAnalysis },
  { type: 'page', title: '毛铺 内容总结', component: Page_ContentAnalysis_AI },
  { type: 'page', title: '养生一号 内容总结', component: Page_ContentAnalysis_Premium },

  // ——— 篇章4: 词条数据明细 ———
  { type: 'chapter', title: '词条数据明细', subtitle: 'CONTENT DETAILS', backgroundImage: '/proposal-chapters/proposal-chapter-cover-03.jpg' },
  { type: 'section', title: '数据系统访问' },
  { type: 'page', title: '劲酒 词条数据明细', component: Page_QueryDataSystemLink },
  { type: 'page', title: '毛铺 词条数据明细', component: Page_QueryDataSystemLink_AI },
  { type: 'page', title: '养生一号 词条数据明细', component: Page_QueryDataSystemLink_Premium },

];
