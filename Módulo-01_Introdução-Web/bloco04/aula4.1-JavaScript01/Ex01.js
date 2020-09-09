// QUESTÃO 01
// Faça cinco programas, um para cada operação aritmética básica. 
// Seu programa deve ter duas variáveis, a e b, 
// definidas no começo com os valores que serão operados. 
// Faça programas para:

// Adição
// Subtracão
// Multiplicação
// Divisão
// Módulo

let a = 20;
let b = 10;

// FORMA DE CONCATENAÇÃO UTILIZANDO "+"
let adição = a + b;
console.log ("A Adição entre " + a + " e " + b + " é = " + adição);

// FORMA DE CONCATENAÇÃO UTILIZANDO O `${}`
let subtração = a - b;
console.log (`A Subtração entre ${a} e ${b} é = ${subtração}`);

let multiplicação = a * b;
console.log (`A Multiplicação entre ${a} e ${b} é = ${multiplicação}`);

let divisão = a / b;
console.log (`A Divisão entre a e b é = ${divisão}`);

// módulo é o resto da divisão, usando %

let módulo = a % b;
console.log (`O Módulo de ${a} e ${b} é = ${módulo}`);

