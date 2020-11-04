let { randomNumber, divisible } = require('./tofix01');
// console.log(randomNumber())
// console.log(divisible(randomNumber()));

describe('test the randomNumber', () => {
	test('the result from randomNumber', () => {
		randomNumber = jest.fn().mockReturnValue(10);

    expect(randomNumber()).toBe(10);
    expect(randomNumber).toHaveBeenCalled();
  });
  
  test('the value from randomNumber called in divisible function', () => {
    divisible(random) = jest.fn().mockReturnValue(20 / random);

    expect(divisible()).toBe(1);
    expect(divisible).toHaveBeenCalled();
  })
});
