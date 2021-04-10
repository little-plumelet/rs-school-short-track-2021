/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }
  // function getKeyByValue(obj, vl) {
  //   return Object.keys(obj).find((key) => obj[key] === vl);
  // }
  // const res = { ...array };
  // return Number(getKeyByValue(res, value));
  return -1;
}

module.exports = findIndex;
