const myFizzBuzz = require('../ex04');
// console.log(myFizzBuzz(15))

describe('myFizzBuzz results', () => {
  test('divisible for 3 and 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  test('divisible for 3', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });
  test('divisible for 5', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });
  test('not divisible for 3 and 5', () => {
    expect(myFizzBuzz(14)).not.toBe('fizzbuzz');
    expect(typeof myFizzBuzz(14)).not.toBe('string');
  });
})