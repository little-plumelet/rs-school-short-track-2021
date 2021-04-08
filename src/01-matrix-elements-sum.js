/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  function reducer(acc, val) {
    let res;
    if (val >= 0) res = acc + val;
    return res;
  }
  let arr = matrix;
  arr = arr.reduce((acc, val) => acc.concat(val));
  arr = arr.reduce(reducer);
  return arr;
}

module.exports = getMatrixElementsSum;
