const uppercase = require('../ex01');
// uppercase('andre', console.log);

describe('testing the results from uppercase function', () => {
  test('if the string passed as a argument return with uppercase letters', () => {
    uppercase('andre', (str) => expect(str).toBe('ANDRE'));
  }) 
});
