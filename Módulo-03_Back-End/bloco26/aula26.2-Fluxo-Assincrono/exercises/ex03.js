const gerarNumero = () => {
  const number = Math.round(Math.random() * 100);
  return number;
};
// console.log(gerarNumero());

function exercicio01(num1, num2, num3) {
  const promise = new Promise((resolve, reject) => {
    if (
      typeof num1 !== 'number' ||
      typeof num2 !== 'number' ||
      typeof num3 !== 'number'
    ) {
      reject(new Error('Informe apenas números'));
    } else {
      const result = (num1 + num2) * num3;
      if (result < 50) {
        reject(new Error('Valor muito baixo'));
      }
      resolve((num1 + num2) * num3);
    }
  });
  return promise;
}

// exercicio01(gerarNumero(), gerarNumero(), gerarNumero())
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error.message));

async function results() {
  try {
    const response = await exercicio01(gerarNumero(), gerarNumero(), gerarNumero());
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
}
results();
