/**
 * @description 切换国际化语言
 */

import i18n from '@/i18n'
import { AppModuleStore } from '@/store/modules/app.modules'

const { titleDivision, description } = require('@/config')

export function translateTitle(title) {
  const { global } = i18n()
  if (global.te(`sim.${title}`)) {
    return global.t(`sim.${title}`)
  }
  return title
}

export function getPageTitle(pageTitle = '') {
  const store = AppModuleStore()
  const { title } = store
  const { global } = i18n()
  if (global.te(`sim.${title}`)) pageTitle = global.t(`sim.${title}`)
  const titleArr = []
  if (title) titleArr.push(title)
  if (pageTitle) titleArr.push(pageTitle)
  return (
    titleArr.join(titleDivision) +
    (description ? titleDivision + description : '')
  )
}
