// QUERO SABER QUAL NÚMERO MAIS SE REPETE NO ARRAY

let array = [2, 11, 12, 11, 3, 5, 5, 11, 20, 2];
console.log (`Esse é meu array = ${array}`);

let object = {};
let arrayObject = [];

for (let i = 0; i < array.length; i += 1) {
  if (object[array[i]] == undefined) {
    object[array[i]] = 1;
  } else if (object[array[i]] == object[array[i]]) {
    object[array[i]] += 1;
  }
}
// RETORNANDO MEU OBJETO COM AS KEYS E VALORES RESPECTIVOS DE QUANTAS VZS SE REPETEM NO ARRAY;
console.log(object);

for (let i in object) {
  arrayObject.push(i);
}
// RETORNANDO APENAS AS KEYS DO MEU OBJETO EM ORDEM CRESCENTE
console.log(arrayObject);

let highestKey = 0;

for (let key in object) {
  if(object[key] > highestKey) {
    highestKey = key;
  }
}
console.log(highestKey, object[highestKey]);
