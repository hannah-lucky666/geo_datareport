import { slideConfig } from './slideConfig';

export function parseConfig(flatConfig) {
  const result = { cover: null, toc: null, chapters: [] };
  let currentChapter = null;
  let currentSection = null;

  for (const item of flatConfig) {
    switch (item.type) {
      case 'cover':
        result.cover = {
          title: item.title,
          backgroundImage: item.backgroundImage,
          brand: item.brand || '',
          subtitle: item.subtitle || '',
          date: item.date || '',
        };
        break;
      case 'toc':
        result.toc = {
          title: item.title,
          backgroundImage: item.backgroundImage,
          menuText: item.menuText,
          brandLabel: item.brandLabel,
          serviceGuide: item.serviceGuide,
        };
        break;
      case 'chapter':
        currentChapter = {
          title: item.title,
          subtitle: item.subtitle || '',
          brandLabel: item.brandLabel || '',
          backgroundImage: item.backgroundImage,
          sections: [],
        };
        currentSection = null;
        result.chapters.push(currentChapter);
        break;
      case 'section':
        currentSection = {
          title: item.title,
          component: item.component || null,
          pages: [],
        };
        if (currentChapter) currentChapter.sections.push(currentSection);
        break;
      case 'page':
        if (currentSection) {
          currentSection.pages.push({
            title: item.title,
            subtitle: item.subtitle || '',
            component: item.component || null,
            components: item.components || null,
          });
        }
        break;
    }
  }

  return result;
}

export function generateSlides(parsed) {
  const slides = [];

  if (parsed.cover) {
    slides.push({
      id: 'cover',
      type: 'cover',
      name: parsed.cover.title,
      backgroundImage: parsed.cover.backgroundImage,
      brand: parsed.cover.brand,
      subtitle: parsed.cover.subtitle,
      date: parsed.cover.date,
    });
  }

  if (parsed.toc) {
    slides.push({
      id: 'toc',
      type: 'toc',
      name: parsed.toc.title,
      backgroundImage: parsed.toc.backgroundImage,
      menuText: parsed.toc.menuText,
      brandLabel: parsed.toc.brandLabel,
      serviceGuide: parsed.toc.serviceGuide,
    });
  }

  parsed.chapters.forEach((chapter, ci) => {
    slides.push({
      id: `chapter-${ci}-cover`,
      type: 'chapter-cover',
      name: chapter.title,
      subtitle: chapter.subtitle,
      brandLabel: chapter.brandLabel,
      backgroundImage: chapter.backgroundImage,
      chapterIndex: ci,
    });

    chapter.sections.forEach((section, si) => {
      if (section.pages.length > 0) {
        section.pages.forEach((page, pi) => {
          const multiComponents = page.components && page.components.length > 1;

          if (multiComponents) {
            page.components.forEach((comp, subPi) => {
              slides.push({
                id: `chapter-${ci}-${si}-${pi}-${subPi}`,
                type: 'content',
                name: page.title,
                subtitle: page.subtitle || '',
                chapterIndex: ci,
                sectionIndex: si,
                pageIndex: pi,
                subPageIndex: subPi,
                component: comp,
              });
            });
          } else {
            slides.push({
              id: `chapter-${ci}-${si}-${pi}`,
              type: 'content',
              name: page.title,
              subtitle: page.subtitle || '',
              chapterIndex: ci,
              sectionIndex: si,
              pageIndex: pi,
              subPageIndex: 0,
              component: page.components?.[0] ?? page.component,
            });
          }
        });
      } else {
        slides.push({
          id: `chapter-${ci}-${si}`,
          type: 'content',
          name: section.title,
          chapterIndex: ci,
          sectionIndex: si,
          pageIndex: null,
          subPageIndex: 0,
          component: section.component,
        });
      }
    });
  });

  return slides;
}

export const parsedConfig = parseConfig(slideConfig);
export const flatSlides = generateSlides(parsedConfig);
