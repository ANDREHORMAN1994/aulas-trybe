const assert = require('assert');

const alunos = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const notas = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

// Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas }. Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos, aqui além de reduce será necessário utilizar também a função map. Dica: Você pode acessar o index do array dentro de map, e você pode ver o objeto esperado na constante expected.

// function studentAverage() {
//   let nota1 = notas[0];
//   let nota2 = notas[1];
//   let nota3 = notas[2];
//   // console.log(nota3);
//   let average1 = nota1.reduce((acc, cur) => acc + cur);
//   let average2 = nota2.reduce((acc, cur) => acc + cur);
//   let average3 = nota3.reduce((acc, cur) => acc + cur);
//   const newArrayAverage = [average1/nota1.length, average2/nota2.length, average3/nota3.length];
//   // console.log(average1/nota1.length);
//   // console.log(average2/nota2.length);
//   // console.log(average3/nota3.length);
//   const result = alunos.map((name, index) => {
//     return {name: name, average: newArrayAverage[index]};
//   });
//   console.log(result);
// }
// console.log(studentAverage());

const media = () => {
  return notas.map((array) => {
    return array.reduce((acc, cur) => acc + cur) / array.length;
  });
};
console.log(media());

function studentAverage() {
  return alunos.map((name, index) => {
    return { name: name, average: media()[index] };
  });
}
console.log(studentAverage());

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepEqual(studentAverage(), expected);
