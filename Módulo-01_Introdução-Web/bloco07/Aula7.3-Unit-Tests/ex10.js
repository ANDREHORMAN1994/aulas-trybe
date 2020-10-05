const greetPeople = (people) => {
  let greeting = 'Hello';
  let newArray = [];
  for (let i = 0; i < people.length; i+= 1) {
    newArray.push(`${greeting} ${people[i]}`);
  }
  return newArray;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

console.log(greetPeople(parameter));

const assert = require('assert');

assert.deepStrictEqual(greetPeople(parameter), result);

