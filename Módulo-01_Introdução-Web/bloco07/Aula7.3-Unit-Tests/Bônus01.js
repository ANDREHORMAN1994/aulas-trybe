const getChange = (price, payed) => {
  let change = payed - price;
  let arrayCoins = [];
  let sumCoins = 0;
  let message = '';
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];

  if (price > payed) {
    // arrayCoins = 'Valor insuficiente para a compra';
    throw new Error('paid value is not enough');
  } else if (price === payed) {
    arrayCoins = [];
  } else {
    message = `O troco é ${change}`;
    for (let i in coins) {
      for (let j in coins) {
        if (coins[i] + sumCoins <= change) {
          arrayCoins.push(coins[i]);
          sumCoins += coins[i];
        }
      }
    }
    sumCoins = 0;
  }
  // return `${message}\n${arrayCoins}`;
  return arrayCoins;
};

console.log(getChange(12, 15));

const { throws } = require('assert');
const assert = require('assert');

let result = getChange(1, 1); // no change/coins just an empty array
let expected = [];
assert.deepEqual(result, expected);

result = getChange(215, 300); // expect an array containing [50, 20, 10, 5]
expected = [50, 20, 10, 5];
assert.deepEqual(result, expected);

result = getChange(486, 600); // expect an array containing [100, 10, 2, 2]
expected = [100, 10, 2, 2];
assert.deepEqual(result, expected);

result = getChange(12, 400); // expect an array containing [200, 100, 50, 20, 10, 5, 2, 1]
expected = [200, 100, 50, 20, 10, 5, 2, 1];
assert.deepEqual(result, expected);

assert.throws(() => { getChange(100, 10); }, /^Error: paid value is not enough$/);
