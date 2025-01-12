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
function sortByHeight(arr) {
  const res = [];
  let tmp;
  let counter = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) res.push(arr[i]);
  }
  while (counter) {
    counter = 0;
    for (let i = 1; i < res.length; i++) {
      if (res[i - 1] > res[i]) {
        tmp = res[i];
        res[i] = res[i - 1];
        res[i - 1] = tmp;
        counter++;
      }
    }
    if (!counter) break;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      res.splice(i, 0, -1);
    }
  }
  return res;
}

module.exports = sortByHeight;
