import React from 'react';
import Page_CoreDataOverview from '../pages/Page_CoreDataOverview';
import Page_CompetitorAnalysis from '../pages/Page_CompetitorAnalysis';
import Page_KeywordCategorization from '../pages/Page_KeywordCategorization';
import Page_KpiAcceptance from '../pages/Page_KpiAcceptance';
import Page_ContentAnalysis from '../pages/Page_ContentAnalysis';
import Page_DataTroubleshooting from '../pages/Page_DataTroubleshooting';
import Page_DataTroubleshootingSummary from '../pages/Page_DataTroubleshootingSummary';
import Page_ContentDetails from '../pages/Page_ContentDetails';
import Page_Foreword from '../pages/Page_Foreword';
import Page_TrendAnalysis from '../pages/Page_TrendAnalysis';
import Page_HalfYearSummary from '../pages/Page_HalfYearSummary';

// Product 2 (AI Mattress) independent page imports
import Page_CoreDataOverview_AI from '../pages/Page_CoreDataOverview_AI';
import Page_CompetitorAnalysis_AI from '../pages/Page_CompetitorAnalysis_AI';
import Page_KeywordCategorization_AI from '../pages/Page_KeywordCategorization_AI';
import Page_ContentAnalysis_AI from '../pages/Page_ContentAnalysis_AI';
import Page_ContentDetails_AI from '../pages/Page_ContentDetails_AI';
import Page_QueryDataSystemLink from '../pages/Page_QueryDataSystemLink';
import Page_CompetitorInterception from '../pages/Page_CompetitorInterception';

// Stable component wrappers for platform-specific keyword details using standard JS createElement
const Page_Entries_123_1 = () => React.createElement(Page_QueryDataSystemLink, { projectId: 123, platformId: 1 });
const Page_Entries_123_2 = () => React.createElement(Page_QueryDataSystemLink, { projectId: 123, platformId: 2 });
const Page_Entries_123_4 = () => React.createElement(Page_QueryDataSystemLink, { projectId: 123, platformId: 4 });
const Page_Entries_123_6 = () => React.createElement(Page_QueryDataSystemLink, { projectId: 123, platformId: 6 });

const Page_Entries_124_1 = () => React.createElement(Page_QueryDataSystemLink, { projectId: 124, platformId: 1 });
const Page_Entries_124_2 = () => React.createElement(Page_QueryDataSystemLink, { projectId: 124, platformId: 2 });
const Page_Entries_124_4 = () => React.createElement(Page_QueryDataSystemLink, { projectId: 124, platformId: 4 });
const Page_Entries_124_6 = () => React.createElement(Page_QueryDataSystemLink, { projectId: 124, platformId: 6 });

export const slideConfig = [
  // ——— 封面 & 目录 ———
  {
    type: 'cover',
    title: '封面',
    backgroundImage: '/proposal-cover/proposal-cover-new.png',
    brand: 'GEO 索引未来',
    subtitle: '古井贡酒GEO \n 年中报告',
    date: 'Jan — Jun 2026',
  },

  {
    type: 'toc',
    title: '报告目录',
    backgroundImage: '',
    menuText: 'MENU',
    brandLabel: 'GEOINDEXFUTURE // 2026',
    serviceGuide: 'GEO HALF-YEAR REPORT',
  },

  // ——— 篇章1: 核心数据与半年趋势 ———
  { type: 'chapter', title: '核心数据\n与趋势', subtitle: 'CORE DATA & HALF-YEAR TREND', backgroundImage: '/' },
  { type: 'section', title: '年中优化成果总结' },
  { type: 'page', title: '年中优化成果总结', component: Page_HalfYearSummary },
  { type: 'section', title: '半年核心数据总览' },
  { type: 'page', title: '核心数据总览', component: Page_CoreDataOverview },
  { type: 'section', title: '半年趋势走势' },
  { type: 'page', title: '核心指标趋势', component: Page_TrendAnalysis },
  { type: 'section', title: '竞品分析' },
  { type: 'page', title: '古井贡酒古16 竞品分析', component: Page_CompetitorAnalysis },
  { type: 'page', title: '古井贡酒古20 竞品分析', component: Page_CompetitorAnalysis_AI },
  { type: 'page', title: '竞品拦截复盘', component: Page_CompetitorInterception },
  // { type: 'section', title: 'KPI达标验收' },
  // { type: 'page', title: 'KPI 达标验收汇总', component: Page_KpiAcceptance },

  // ——— 篇章2: 半年投放内容与引用明细 ———
  { type: 'chapter', title: '半年投放\n与引用明细', subtitle: 'CONTENT DETAILS', backgroundImage: '/proposal-chapters/proposal-chapter-cover-03.jpg' },
  { type: 'section', title: '半年投放渠道与数据明细' },
  { type: 'page', title: '古井贡酒古16 投放明细', component: Page_ContentDetails },
  { type: 'page', title: '古井贡酒古20 投放明细', component: Page_ContentDetails_AI },

  // ——— 篇章3: 内容分析与总结说明 ———
  { type: 'chapter', title: '内容分析\n与总结说明', subtitle: 'CONTENT ANALYSIS & SUMMARY', backgroundImage: '/proposal-chapters/proposal-chapter-cover-04.jpg' },
  { type: 'section', title: '内容总结分析' },
  { type: 'page', title: '古井贡酒古16 内容总结', component: Page_ContentAnalysis },
  { type: 'page', title: '古井贡酒古20 内容总结', component: Page_ContentAnalysis_AI },

  // ——— 篇章4: 词条数据明细 ———
  { type: 'chapter', title: '词条数据明细', subtitle: 'CONTENT DETAILS', backgroundImage: '/proposal-chapters/proposal-chapter-cover-03.jpg' },
  { type: 'section', title: '古井贡酒古16 平台明细' },
  { type: 'page', title: '古16 DeepSeek 词条明细', component: Page_Entries_123_1 },
  { type: 'page', title: '古16 豆包 词条明细', component: Page_Entries_123_2 },
  { type: 'page', title: '古16 文心一言 词条明细', component: Page_Entries_123_4 },
  { type: 'page', title: '古16 Kimi 词条明细', component: Page_Entries_123_6 },
  { type: 'section', title: '古井贡酒古20 平台明细' },
  { type: 'page', title: '古20 DeepSeek 词条明细', component: Page_Entries_124_1 },
  { type: 'page', title: '古20 豆包 词条明细', component: Page_Entries_124_2 },
  { type: 'page', title: '古20 文心一言 词条明细', component: Page_Entries_124_4 },
  { type: 'page', title: '古20 Kimi 词条明细', component: Page_Entries_124_6 },

];
