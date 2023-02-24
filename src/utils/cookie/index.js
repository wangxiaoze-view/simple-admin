import vueCookies from 'vue-cookies'
import { isJson } from '@/utils/regular/index'

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
