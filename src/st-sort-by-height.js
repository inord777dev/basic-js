import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  const tmp = arr.filter(x => x > -1 ).sort( (a, b) => {
    if (a == -1 || b == -1) {
      return 0
    } else {
      return a - b
    }
  })
  let i = 0;
  return arr.map( x => {
    if (x == -1) {
      return x;
    } else {
      return tmp[i++];
    }
  });
}
