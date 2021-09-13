import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
  let result = [], count;
  for (let i = 0; i < matrix.length; i++) {
    result.push([])

    for (let j = 0; j < matrix[i].length; j++) {
      count = 0;
      for (let k = -1; k < 2; k++) {
        for (let l = -1; l < 2; l++) {
          if ((k != 0 || l != 0)
            && i + k >= 0
            && i + k < matrix.length
            && j + l >= 0
            && j + l < matrix[i].length
            && matrix[i + k][j + l]) {
            count++;
          }
        }
      }

      result[i].push(count);
    }

  }
  return result;
}
