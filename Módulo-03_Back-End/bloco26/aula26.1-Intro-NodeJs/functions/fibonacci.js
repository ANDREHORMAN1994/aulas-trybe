const inquirer = require('inquirer');
const question = inquirer.prompt([
  {
    type: 'string',
    name: 'fibonacci',
    message: 'Escolha o valor de n:',
    default: 0,
    validate: (value) => {
      if (!value.includes('.') && !value.includes(',') && parseInt(value, 10)) {
        return true;
      }
      return 'formato inválido';
    },
  },
]);

function Fibonacci(num){
	var before = 0;
	var actual = 1;
	var next;

	for(let i = 0; i < num; i++){
		if (i < 2) {
      console.log(i);
    } else {
      next = before + actual;
      before = actual;
      actual = next;
      console.log(next);
    }
	}
}

const calcularFibonacci = () => {
  question.then((data) => {
    console.log(Fibonacci(data.fibonacci));
  })
}
calcularFibonacci();
