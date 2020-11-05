const { obj1, obj2, obj3 } = require('../ex05');

// console.log(obj2)

describe('testing the contents of the objects below', () => {
	test('if the obj1 and obj2 are equal', () => {
		expect(obj1).toEqual(obj2);
  });
  test('if the obj1 and obj2 are different from obj3', () => {
    expect(obj1).not.toEqual(obj3);
    expect(obj2).not.toEqual(obj3);
  })
});
