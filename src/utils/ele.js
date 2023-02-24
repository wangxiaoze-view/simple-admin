import { ElNotification } from 'element-plus'

/**
 * @description 消息通知
 * @param {*} param0
 */
export function simNotice({
  title = 'title',
  message = 'msg',
  type = 'success',
  duration = 2000,
} = {}) {
  ElNotification.closeAll()
  ElNotification({
    title,
    message,
    type,
    duration,
  })
}
