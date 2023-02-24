/**
 * @description 拦截错误日志
 */

import { ErrorModuleStore } from '@/store/modules/error.module'

export function setErrorLog(error, instance, info) {
  const errorStore = ErrorModuleStore()
  console.error('[ sim错误拦截信息 ]', error)

  const url = window.location.href

  errorStore.SET_ERROR_LOG({
    url,
    error,
    instance,
    info,
  })
}

export function setupErrorLog(app) {
  app.config.performance = true
  app.config.errorHandler = setErrorLog
}
