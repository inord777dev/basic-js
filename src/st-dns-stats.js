import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  const result = {}
  let parts, address ;
  domains.forEach( x => {
    parts =  x.split('.');
    address = '';
    for (let i = parts.length - 1; i >= 0; i--) {
      address += '.' + parts[i];
      if (!result.hasOwnProperty(address)) {
        result[address] = 0;
      }
      result[address]++;
    }
  })
  return result;
}
