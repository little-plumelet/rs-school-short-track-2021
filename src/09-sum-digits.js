/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  function reducer(acc, val) {
    return Number(acc) + Number(val);
  }

  let arr = n.toString().split('');
  let res = 5555;
  while (res > 9) {
    res = arr.reduce(reducer);
    arr = res.toString().split('');
  }
  return res;
}

module.exports = getSumOfDigits;
