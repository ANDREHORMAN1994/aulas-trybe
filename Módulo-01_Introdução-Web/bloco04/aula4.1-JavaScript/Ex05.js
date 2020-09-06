//QUESTÃO 05
//Faça um programa que defina três variáveis com os valores 
//dos três ângulos internos de um triângulo. 
//Retorne true se os ângulos representarem os ângulos 
//de um triângulo e false caso contrário.

let a = 45;
let b = 45;
let c = 90;

let soma = a + b + c;

if (soma == 180) {
  console.log (true);
} else {
  console.log (false);
}