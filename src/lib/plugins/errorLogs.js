import { errorLogEnv } from '@/config'
import { ErrModuleStore } from '@/store/moudles/error.moudles'

// 是否需要开启错误日志
export const isStartError = () => {
  const envArr = Array.isArray(errorLogEnv) ? [...errorLogEnv] : []
  return envArr.includes(process.env.NODE_ENV)
}

export const setErrorLogs = (error, instance, info) => {
  console.error('[ sim错误拦截信息 ]', error)
  const url = window.location.href
  const { SET_ERROR_LOGS } = ErrModuleStore()
  SET_ERROR_LOGS({
    url,
    error,
    instance,
    info,
  })
}

export function setupErrorLogs(app) {
  if (isStartError()) {
    app.config.performance = true
    app.config.errorHandler = setErrorLogs
  }
}
