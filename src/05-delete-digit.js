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
function deleteDigit(n) {
  const res = n.toString().split('').map((el) => Number(el));
  let min = res[0];
  let index = 0;
  for (let i = 1; i < res.length; i++) {
    if (min > res[i]) {
      min = res[i];
      index = i;
    }
  }
  res.splice(index, 1);
  return Number(res.join(''));
}

module.exports = deleteDigit;
