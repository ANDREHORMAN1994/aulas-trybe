const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};
// console.log(customer);

customer.lastname = 'Uzumaki';
customer['firstName'] = 'Naruto';
// console.log(customer);

let newKey = 'skill';
const skill = 'rasengan';
customer[newKey] = skill;
// console.log(customer);

newKey = 'love';
const love = 'hinata';
customer[newKey] = love;
// console.log(customer);

console.log(Object.keys(customer));
console.log(Object.keys(customer).length);