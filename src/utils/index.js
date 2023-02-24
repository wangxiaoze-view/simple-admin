/**
 * @description 登录的时间提示
 */
export function getNowTimeTitle() {
  const date = new Date()
  const h = date.getHours()
  let str = ''
  if (h > 0 && h <= 6) {
    str = '凌晨好'
  } else if (h > 6 && h < 12) {
    str = '上午好'
  } else if (h > 12 && h < 18) {
    str = '下午好'
  } else {
    str = '晚上好'
  }
  return str
}
