import vueCookies from 'vue-cookies'
import { isJson } from './regular'

/**
 * @description	获取缓存数据
 * @param key
 * @returns {boolean|any}
 */
export function getLocalStorage(key) {
  const value = localStorage.getItem(key)
  if (isJson(value)) {
    return JSON.parse(value)
  }
  return false
}

/**
 * @description	设置cookies
 * @param key {String} key
 * @param value {*} value
 * @param time {Number|String} time
 */
export function setCookies(key, value, time = null) {
  vueCookies.set(key, value, time)
}

/**
 * @description	获取cookies
 * @param key {String} KEY
 * @returns {*}
 */
export function getCookies(key) {
  return vueCookies.get(key)
}

/**
 * @description 生成随机数
 * @param {Number} min
 * @param {Number} max
 * @returns
 */
export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * @description 随机颜色
 * @param {Number} min
 * @param {Number} max
 */
export function randomColor(min, max) {
  const getRandomNum = this.randomNum(min, max)
  return `rgba(${getRandomNum}, ${getRandomNum}, ${getRandomNum}, 0.8)`
}

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
