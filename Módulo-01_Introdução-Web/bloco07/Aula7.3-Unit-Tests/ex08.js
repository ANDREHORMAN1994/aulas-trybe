const addAllnumbers = (sum) => {
  let sumNumbers = 0;
  for (let i = 0; i < sum.length; i += 1) {
    sumNumbers += sum[i];
  }
  return sumNumbers;
};
console.log(addAllnumbers([9, 23, 10, 3, 8]));

const assert = require('assert');
// escreva a função addAllnumbers aqui

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);
