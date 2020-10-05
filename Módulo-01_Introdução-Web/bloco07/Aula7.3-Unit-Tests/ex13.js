function secondThirdSmallest(array) {
  let results = [];
  for (let i = 0; i < array.length; i += 1) {
    for (let i2 = 0; i2 < array.length; i2 += 1) {
      if (array[i2] > array[i2 + 1]) {
        let highestNumber = array[i2];
        let nextNumber = array[i2 + 1]
        array[i2] = nextNumber;
        array[i2 + 1] = highestNumber;
      }
    }
  }
  for (let i = 1; i <= 2; i += 1) {
    results.push(array[i]);
  }
  return results;
}

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

// console.log(parameter.sort());
console.log(secondThirdSmallest(parameter));

const assert = require('assert');

assert.deepStrictEqual(secondThirdSmallest(parameter), result);
