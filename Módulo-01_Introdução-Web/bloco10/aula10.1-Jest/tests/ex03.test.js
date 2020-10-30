const myRemoveWithoutCopy = require('../ex03');
// console.log(myRemoveWithoutCopy([1, 2, 3, 4, 5, 6, 7], 2));

describe('myRemoveWithoutCopy results', () => {
	it('should return the expected', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
  it('should not return the expected', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
  })
});
