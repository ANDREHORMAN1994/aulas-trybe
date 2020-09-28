// DIFERENÇA DE ESCOPO UTILIZANDO LET E VAR

// LET NÃO QUEBRA O ESCOPO
function letCheckScope() {
  'use strict';
  let i = 'function scope';
  if (true) {
   let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}
letCheckScope();

// VAR QUEBRA O ESCOPO DO IF, FOR E WHILE
function varCheckScope() {
  'use strict';
  var i = 'function scope';
  if (true) {
   var i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}
varCheckScope();
