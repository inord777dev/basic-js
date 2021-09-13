import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  const digits = ('' + n).split("");
  let max = -Infinity;
  for (let i = 0; i < digits.length; i++) {
    max = Math.max(parseInt([...digits.slice(0, i), ...digits.slice(i+ 1)].join('')), max)
  };
  return max;
}
