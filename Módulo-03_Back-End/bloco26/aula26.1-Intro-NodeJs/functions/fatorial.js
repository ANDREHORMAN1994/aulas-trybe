const inquirer = require('inquirer');

function fatorialRecursivo(number) {
  return number <= 1 ? 1 : fatorialRecursivo(number -1) * number;
}
// console.log(fatorialRecursivo(5));

const fatorial = (number) => {
  if (number <= 1) {
    return 1;
  } else {
    let result = number;
    for (let i = number -1; i >= 1; i -= 1) {
      result *= i;
    }
    return result;
  }
}
// console.log(fatorial(5));

const question = inquirer.prompt([
  {
    type: 'string',
    name: 'fatorial',
    message: 'Escolha o valor de n!',
    default: 0,
    validate: (value) => {
      if (!value.includes(',') && !value.includes('.') && parseInt(value, 10)) {
        return true;
      }
      return 'Valor com formato inválido';
    }
  }
]);

function returnFatorial() {
  question.then((data) => {
    console.log(fatorial(parseInt(data.fatorial, 10)));
  });
}

returnFatorial();
