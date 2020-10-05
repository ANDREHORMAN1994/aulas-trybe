let newObject = {};

function createObject(newkey, value) {
  newObject[newkey] = value;
  // console.table(newObject);
}
createObject('dbz', 'Goku');
createObject('naruto', 'Pain');
createObject('bleach', 'Ichigo');

// OBJETO
console.log(newObject);
// ARRAY DE CHAVES
console.log(Object.keys(newObject));
// ARRAY DE VALORES
console.log(Object.values(newObject));
// ARRAY DE ARRAYS
console.log(Object.entries(newObject));
