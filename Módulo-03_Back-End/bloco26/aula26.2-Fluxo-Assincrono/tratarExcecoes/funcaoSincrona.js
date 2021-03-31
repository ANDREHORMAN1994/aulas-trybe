function calcularDivisao(num1, num2) {
  if (num2 === 0) throw new Error('Não pode dividir por zero');
  return num1 / num2;
}

try {
  console.log('O resultado da divisao é %s', calcularDivisao(10, 0));
} catch (error) {
  console.log('O erro é: %s', error.message);
}
