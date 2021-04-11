/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const re = /@\w+[-]*\w*\.[a-z]+/ig;
  let res = email.match(re);
  if (res) {
    res = res[0].split('');
    res.splice(0, 1);
    res = res.join('');
  }
  return res;
}

module.exports = getEmailDomain;
