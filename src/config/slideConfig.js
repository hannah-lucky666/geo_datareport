import {
  Page_PlatformCoreSmart,
  Page_PlatformCoreAI,
  Page_PlatformCoreMattress,
} from '../pages/Page_PlatformMentionRates';
import {
  Page_MonthCompareSmart,
  Page_MonthCompareAI,
  Page_MonthCompareMattress,
} from '../pages/Page_MonthCompare';
import {
  Page_CompetitorTrendSmart,
  Page_CompetitorTrendAI,
  Page_CompetitorTrendMattress,
} from '../pages/Page_CompetitorTrend';

export const slideConfig = [
  {
    type: 'cover',
    title: '封面',
    backgroundImage: '/proposal-cover/proposal-cover-new.png',
    brand: 'GEO 索引未来',
    subtitle: '慕思GEO \n 阶段性报告',
    date: 'September 2026',
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
  { type: 'section', title: '各平台核心数据' },
  { type: 'page', title: '慕思智能床各平台核心数据', component: Page_PlatformCoreSmart },
  { type: 'page', title: '慕思AI床垫各平台核心数据', component: Page_PlatformCoreAI },
  { type: 'page', title: '慕思床垫各平台核心数据', component: Page_PlatformCoreMattress },
  { type: 'section', title: '月度对比' },
  { type: 'page', title: '慕思智能床核心指标月度对比', component: Page_MonthCompareSmart },
  { type: 'page', title: '慕思AI床垫核心指标月度对比', component: Page_MonthCompareAI },
  { type: 'page', title: '慕思床垫核心指标月度对比', component: Page_MonthCompareMattress },
  { type: 'page', title: '慕思智能床竞品月度对比', component: Page_CompetitorTrendSmart },
  { type: 'page', title: '慕思AI床垫竞品月度对比', component: Page_CompetitorTrendAI },
  { type: 'page', title: '慕思床垫竞品月度对比', component: Page_CompetitorTrendMattress },
];
