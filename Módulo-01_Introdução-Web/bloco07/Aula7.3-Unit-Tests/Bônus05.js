const assert = require('assert');

const verify = (password) => {
  let result = true;
  if (password === null || password === undefined) {
    result = false;
  } else if (password.length <= 8) {
    result = false;
  } else if (password === password.toLowerCase()) {
    result = false;
  } else if (password === password.toUpperCase()) {
    result = false;
  }
  return result;
};

console.log(verify('OiEuSouoGoku'));
console.log(typeof verify);

assert.strictEqual(typeof verify, 'function');
assert.strictEqual(verify('12345678'), false);
assert.strictEqual(verify(null), false);
assert.strictEqual(verify('gandalfthegray'), false);
assert.strictEqual(verify('YOUSHALLNOTPASS'), false);
