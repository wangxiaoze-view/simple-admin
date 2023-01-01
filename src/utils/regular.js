/**
 * @description	判断是否为Json
 * @param value	{*}
 * @returns {boolean}
 */
export function isJson(value) {
  if (typeof value === 'string') {
    const obj = JSON.parse(value);
    return !!(obj && typeof obj === 'object');
  }
  return false;
}

/**
 * @description		密码是否大于三位
 * @param value {String}
 * @returns {boolean}
 */
export function isPassword(value) {
  return value.length >= 3;
}
