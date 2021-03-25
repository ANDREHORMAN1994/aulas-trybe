const readline = require('readline-sync');
const inquirer = require('inquirer');

const calcularImc = (peso, altura) => {
  return (peso / Math.pow(altura, 2)).toFixed(2);
};
// console.log(calcularImc(90, 1.75));

const analisandoImc = (imc) => {
  switch (true) {
    case imc < 17:
      return 'Muito abaixo do peso';
    case imc >= 17 && imc <= 18.49:
      return 'Abaixo do peso';
    case imc >= 18.5 && imc <= 24.99:
      return 'Peso normal';
    case imc >= 25 && imc <= 29.99:
      return 'Acima do peso';
    case imc >= 30 && imc <= 34.99:
      return 'Obesidade I';
    case imc >= 35 && imc <= 39.99:
      return 'Obesidade II (severa)';
    case imc > 40:
      return 'Obesidade III (mórbida)';
    default:
      return 'valor inválido';
  }
};
// console.log(analisandoImc(50));

const executarImc = () => {
  // const peso = readline.questionInt('Qual seu peso ?');
  // const altura = readline.questionFloat('Qual sua altura ?');

  // console.log(`Seu peso é ${peso}\nSua altura é ${altura}`);
  // console.log('Seu IMC é: ' + calcularImc(peso, altura));
  // console.log(analisandoImc(calcularImc(peso, altura)));

  const perguntas = inquirer.prompt([
    {
      type: 'input',
      name: 'peso',
      message: 'Qual seu Peso ?',
      validate: (value) => {
        if (!value.includes(',') && parseInt(value)) return true;
        return 'Coloque um número válido';
      },
      default: 'Responda aqui',
    },
    {
      type: 'input',
      name: 'altura',
      message: 'Qual sua altura ?',
      validate: (value) => {
        if (!value.includes(',') && parseFloat(value)) return true;
        return 'Coloque um número válido';
      },
      default: 'Responda aqui',
    },
  ]);

  perguntas.then((data) => {
    const { peso, altura } = data;
    console.log(`Seu peso é ${peso}\nSua altura é ${altura}`);
    console.log('Seu IMC é: ' + calcularImc(peso, altura));
    console.log(analisandoImc(calcularImc(peso, altura)));
  });
};

executarImc();
