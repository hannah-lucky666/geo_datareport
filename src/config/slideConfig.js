import Page_ProposalNav from '../pages/Page_ProposalNav';
import Page_SWOTAnalysis from '../pages/Page_SWOTAnalysis';
import Page_SWOTStrategy from '../pages/Page_SWOTStrategy';

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

  // ——— 篇章1: 品牌信息调研 ———
  { type: 'chapter', title: '品牌信息调研', subtitle: 'BRAND DISCOVERY', backgroundImage: '/' },
  { type: 'section', title: '目标行业信息' },
  { type: 'page', title: '冰箱是什么？', components: [Page_ProposalNav, Page_SWOTAnalysis] },
  { type: 'page', title: '冰箱卖给谁？', component: Page_SWOTAnalysis },
  { type: 'page', title: '冰箱的主要品牌' },
  { type: 'section', title: '目标产品信息' },
  { type: 'page', title: '方太冰箱是什么？' },
  { type: 'page', title: '测试' },
  { type: 'page', title: '新明珠岩板卖给谁？' },
  { type: 'section', title: '测试3' },
  { type: 'page', title: '测试1' },
  { type: 'page', title: '地短发短发' },
  { type: 'page', title: '测试' },

  // ——— 篇章2: GEO体检报告 ———
  { type: 'chapter', title: 'GEO体检报告', subtitle: 'GEO HEALTH CHECK', backgroundImage: '/proposal-chapters/proposal-chapter-cover-02.jpg' },
  { type: 'section', title: '一级标题1' },
  { type: 'page', title: '页面1' },
  { type: 'section', title: '一级标题2' },

  // ——— 篇章3: GEO优化 ———
  { type: 'chapter', title: 'GEO优化', subtitle: 'GEO OPTIMIZATION', backgroundImage: '/proposal-chapters/proposal-chapter-cover-03.jpg' },
  { type: 'section', title: '一级标题1' },
  { type: 'page', title: '页面1', component: Page_SWOTStrategy },
  { type: 'section', title: '一级标题2' },
  { type: 'page', title: '页面2' },
  { type: 'section', title: '一级标题3' },

  // ——— 篇章4: 阶段性复盘报告 ———
  { type: 'chapter', title: '阶段性复盘报告', subtitle: 'PHASE REVIEW', backgroundImage: '/proposal-chapters/proposal-chapter-cover-04.jpg' },
];
