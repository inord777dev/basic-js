import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let index = 0, count = 1, result = ''
  while (index < str.length) {
    if (index + 1 < str.length && str[index] == str[index + 1] ) {
      count++
    } else {
      result += (count > 1 ? count : '') + str[index]
      count = 1
    }
    index++
  }
  return result;
}
