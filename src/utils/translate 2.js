/**
 * @description 切换国际化语言
 */

import i18n from '@/i18n'
import { titleDivision, description } from '@/config'
import { AppMoudleStore } from '@/store/moudles/app.moudles'

export function translateTitle(title) {
  const { global } = i18n()
  if (global.te(`sim.${title}`)) {
    return global.t(`sim.${title}`)
  }
  return title
}

/**
 * @description 获取网站标题
 * @param {String} pageTitle
 * @returns
 */
export function getPageTitle(pageTitle = '') {
  const store = AppMoudleStore()
  const { title } = store
  const { global } = i18n()
  if (global.te(`sim.${title}`)) {
    pageTitle = global.t(`sim.${title}`)
  }
  const titleArr = []
  if (title) {
    titleArr.push(title)
  }
  if (pageTitle) {
    titleArr.push(pageTitle)
  }
  return (
    titleArr.join(titleDivision) +
    (description ? titleDivision + description : '')
  )
}
