/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  let tmp;
  let counter;
  for (let i = 0; i < str.length; i++) {
    tmp = str[i];
    counter = 0;
    while (str[i] === tmp) {
      counter++;
      i++;
    }
    i--;
    if (counter > 1) res += `${counter}${tmp}`;
    else res += `${tmp}`;
  }
  return res;
}

module.exports = encodeLine;
