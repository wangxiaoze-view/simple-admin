import { ElMessage, ElNotification } from 'element-plus'

/**
 * @description 消息通知
 * @param {*} param0
 */
export function simNotice({
  title = 'title',
  message = 'msg',
  type = 'success',
  duration = 2000,
  isCloseBefore = false,
} = {}) {
  if (isCloseBefore) simNoticeClose()
  ElNotification({
    title,
    message,
    type,
    duration,
  })
}

export function simNoticeClose() {
  ElNotification.closeAll()
}

export function simMessage(params) {
  ElMessage(params)
}
