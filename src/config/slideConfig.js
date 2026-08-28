import React from 'react';
import Page_CoreDataOverview from '../pages/Page_CoreDataOverview';
import Page_CompetitorAnalysis from '../pages/Page_CompetitorAnalysis';
import Page_ContentAnalysis from '../pages/Page_ContentAnalysis';
import Page_ContentDetails from '../pages/Page_ContentDetails';
import Page_QueryDataSystemLink from '../pages/Page_QueryDataSystemLink';

// 词条明细：与数据系统 UI 同款
// 项目 535（美素佳儿源悦）共 61 个词条，监测平台为 DeepSeek / 豆包
// 每平台 4 页 × 每页 16 条，保证 61 条全部展示且不被裁切
const PROJECT_ID = 535;
const PLATFORM_IDS = [1, 2];
const ENTRY_PAGE_SIZE = 16;
const ENTRY_PAGE_COUNT = 4;

const KeywordPages = [];
for (const platformId of PLATFORM_IDS) {
  for (let pageIndex = 0; pageIndex < ENTRY_PAGE_COUNT; pageIndex += 1) {
    KeywordPages.push(() =>
      React.createElement(Page_QueryDataSystemLink, {
        projectId: PROJECT_ID,
        platformId,
        pageIndex,
        pageSize: ENTRY_PAGE_SIZE,
      })
    );
  }
}

export const slideConfig = [
  {
    type: 'cover',
    title: '封面',
    backgroundImage: '/proposal-cover/proposal-cover-new.png',
    brand: 'GEO 索引未来',
    subtitle: '美素佳儿源悦GEO \n 阶段性报告',
    date: 'August 2026',
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
  { type: 'page', title: '美素佳儿源悦 竞品分析', component: Page_CompetitorAnalysis },

  { type: 'chapter', title: '投放内容与引用明细', subtitle: 'CONTENT DETAILS', backgroundImage: '/proposal-chapters/proposal-chapter-cover-03.jpg' },
  { type: 'section', title: '投放渠道与数据明细' },
  { type: 'page', title: '美素佳儿源悦 投放明细', component: Page_ContentDetails },

  { type: 'chapter', title: '内容分析与总结说明', subtitle: 'CONTENT ANALYSIS & SUMMARY', backgroundImage: '/proposal-chapters/proposal-chapter-cover-04.jpg' },
  { type: 'section', title: '内容总结分析' },
  { type: 'page', title: '美素佳儿源悦 内容总结', component: Page_ContentAnalysis },

  { type: 'chapter', title: '词条数据明细', subtitle: 'KEYWORD DETAILS', backgroundImage: '/proposal-chapters/proposal-chapter-cover-03.jpg' },
  { type: 'section', title: '词条监测明细' },
  { type: 'page', title: '美素佳儿源悦 词条数据明细', components: KeywordPages },
];
