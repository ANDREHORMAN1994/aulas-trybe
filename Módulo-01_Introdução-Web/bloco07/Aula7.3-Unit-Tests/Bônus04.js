const getLargestNumber = (array) => {
  let largestNumber = array[0];
  for (let i = 0; i < array.length; i += 1) {
      if (largestNumber < array[i]) {
          largestNumber = array[i];
      }
  }
  return largestNumber;
}
console.log(getLargestNumber([45, 8, 2, 50, 1, 7, 99]));

const parameter = [45, 8, 2, 50, 1, 7, 99];
const result = 99;

const assert = require('assert');

assert.strictEqual(getLargestNumber(parameter), result);
