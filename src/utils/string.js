/**
 * 首字母小写
 * @param {String} str 字符串
 */
export const firstCharToLocaleLowerCase = (str) =>
  str.slice(0, 1).toLocaleLowerCase() + str.slice(1);
