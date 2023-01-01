/**
 * @description 切换国际化语言
 */

import i18n from '@i18n';

export function translateTitle(title) {
  const { global } = i18n();
  if (global.te(`sim.${title}`)) return global.t(`sim.${title}`);
  return title;
}
