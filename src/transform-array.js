import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  let res = [], discard = false, double = false;
  arr.forEach( (x, i, arr) => {
    switch (x) {
      case '--discard-next':
        if (i < arr.length) {
          arr[i + 1] = 'skip';
        }
        break;
      case '--discard-prev':
        if (res.length) {
          res.pop()
        }
        break;
      case '--double-next':
        if (i < arr.length) {
          res.push(arr[i + 1])
        }
        break;
      case '--double-prev':
        if (i > 0) {
          res.push(arr[i - 1])
        }
        break;
      default: 
        if (x != 'skip') {
          res.push(x)
        }
        break;
    } 
  })
  return res;
}
