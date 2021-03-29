function calcularDivisao(num1, num2) {
  
  const promise = new Promise((resolve, reject) => {
    if (num2 === 0) reject( new Error('Não pode ser dividido por zero') );
    resolve(num1 / num2);
  })

  return promise;
}

calcularDivisao(10, 0)
  .then((data) => console.log('O resultado é: %s', data))
  .catch((error) => console.log('ERRO: %s', error.message));
