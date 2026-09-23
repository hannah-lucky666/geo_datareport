/**
 * 临时包装：思美封面、封底，以及每页右上角 logo。
 * 素材来自《慕思GEO阶段性报告（8月）.pptx》的封面、封底、内容页右上角 icon。
 *
 * 改回来只改这一处：把 enabled 设为 false。
 * 封面和封底会从页面序列里消失，右上角 logo 也会一起去掉。
 * slideOrder.json 里的 brand-cover / brand-back 在关闭后会被自动忽略。
 */
export const tempBranding = {
  enabled: true,
  coverSrc: '/temp-branding/simei-cover.png',
  backSrc: '/temp-branding/simei-back.png',
  logoSrc: '/temp-branding/simei-logo.png',
};
