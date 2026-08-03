import React from 'react';
import Page_CoreDataOverview from '../pages/Page_CoreDataOverview';
import Page_CompetitorAnalysis from '../pages/Page_CompetitorAnalysis';
import Page_ContentAnalysis from '../pages/Page_ContentAnalysis';
import Page_ContentDetails from '../pages/Page_ContentDetails';
import Page_ContentAnalysis_AI from '../pages/Page_ContentAnalysis_AI';
import Page_ContentDetails_AI from '../pages/Page_ContentDetails_AI';
import Page_CompetitorAnalysis_AI from '../pages/Page_CompetitorAnalysis_AI';
import Page_CompetitorAnalysis_Musi from '../pages/Page_CompetitorAnalysis_Musi';
import Page_PlatformPerformance from '../pages/Page_PlatformPerformance';
import Page_PlatformPerformance_AI from '../pages/Page_PlatformPerformance_AI';
import Page_PlatformPerformance_Musi from '../pages/Page_PlatformPerformance_Musi';
import Page_ContentDetails_Musi from '../pages/Page_ContentDetails_Musi';
import Page_ContentAnalysis_Musi from '../pages/Page_ContentAnalysis_Musi';
import Page_QueryDataSystemLink from '../pages/Page_QueryDataSystemLink';

// 词条明细：与 Report_gujinggong 同款数据系统 UI
// 30 词产品：每平台 2 页（每页 15）
// 20 词产品：每平台 2 页（每页 10），保证 20 条全部展示且不被裁切
const PLATFORM_IDS = [1, 2, 3, 4, 5, 6];

function makeEntryPages(projectId, pageCount, pageSize) {
  const pages = [];
  for (const platformId of PLATFORM_IDS) {
    for (let pageIndex = 0; pageIndex < pageCount; pageIndex += 1) {
      pages.push(() =>
        React.createElement(Page_QueryDataSystemLink, {
          projectId,
          platformId,
          pageIndex,
          pageSize,
        })
      );
    }
  }
  return pages;
}

const KeywordPages_Smart = makeEntryPages(392, 2, 15);
const KeywordPages_AI = makeEntryPages(391, 2, 15);
const KeywordPages_Musi = makeEntryPages(393, 2, 10);

export const slideConfig = [
  {
    type: 'cover',
    title: '封面',
    backgroundImage: '/proposal-cover/proposal-cover-new.png',
    brand: 'GEO 索引未来',
    subtitle: '慕思GEO \n 阶段性报告',
    date: 'July 2026',
  },

  {
    type: 'toc',
    title: '报告目录',
    backgroundImage: '',
    menuText: 'MENU',
    brandLabel: 'GEOINDEXFUTURE // 2026',
    serviceGuide: 'GEO DATA REPORT',
  },

  { type: 'chapter', title: '核心数据与竞品分析', subtitle: 'DATA OVERVIEW & COMPETITOR ANALYSIS', backgroundImage: '/' },
  { type: 'section', title: '核心数据总览' },
  { type: 'page', title: '核心数据总览', component: Page_CoreDataOverview },
  { type: 'section', title: '竞品分析' },
  { type: 'page', title: '慕思智能床 竞品分析', component: Page_CompetitorAnalysis },
  { type: 'page', title: '慕思AI床垫 竞品分析', component: Page_CompetitorAnalysis_AI },
  { type: 'page', title: '慕思床垫 竞品分析', component: Page_CompetitorAnalysis_Musi },
  { type: 'section', title: '各AI平台表现' },
  { type: 'page', title: '慕思智能床 各AI平台表现', component: Page_PlatformPerformance },
  { type: 'page', title: '慕思AI床垫 各AI平台表现', component: Page_PlatformPerformance_AI },
  { type: 'page', title: '慕思床垫 各AI平台表现', component: Page_PlatformPerformance_Musi },

  { type: 'chapter', title: '投放内容与引用明细', subtitle: 'CONTENT DETAILS', backgroundImage: '/proposal-chapters/proposal-chapter-cover-03.jpg' },
  { type: 'section', title: '投放渠道与数据明细' },
  { type: 'page', title: '慕思智能床 投放明细', component: Page_ContentDetails },
  { type: 'page', title: '慕思AI床垫 投放明细', component: Page_ContentDetails_AI },
  { type: 'page', title: '慕思床垫 投放明细', component: Page_ContentDetails_Musi },

  { type: 'chapter', title: '内容分析与总结说明', subtitle: 'CONTENT ANALYSIS & SUMMARY', backgroundImage: '/proposal-chapters/proposal-chapter-cover-04.jpg' },
  { type: 'section', title: '内容总结分析' },
  { type: 'page', title: '慕思智能床 内容总结', component: Page_ContentAnalysis },
  { type: 'page', title: '慕思AI床垫 内容总结', component: Page_ContentAnalysis_AI },
  { type: 'page', title: '慕思床垫 内容总结', component: Page_ContentAnalysis_Musi },

  { type: 'chapter', title: '词条数据明细', subtitle: 'KEYWORD DETAILS', backgroundImage: '/proposal-chapters/proposal-chapter-cover-03.jpg' },
  { type: 'section', title: '词条监测明细' },
  { type: 'page', title: '慕思智能床 词条数据明细', components: KeywordPages_Smart },
  { type: 'page', title: '慕思AI床垫 词条数据明细', components: KeywordPages_AI },
  { type: 'page', title: '慕思床垫 词条数据明细', components: KeywordPages_Musi },
];
