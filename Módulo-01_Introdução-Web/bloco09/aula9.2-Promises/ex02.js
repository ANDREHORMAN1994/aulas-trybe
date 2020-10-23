const promise = new Promise((resolve, reject) => {
  let array = [];

  for (let i = 0; i < 10; i += 1) {
    let randomNumber = Math.round(Math.random() * 50);
    array.push(randomNumber);
  }
  // console.log(array);
  array.forEach((number, index) => array[index] = number * number);
  // console.log(array);
  const sum = array.reduce((acc, cur) => acc + cur, 0);
  // console.log(sum);
  sum < 8000 ? resolve(sum) : reject(sum);
})
  .then((sum) => [2, 3, 5, 10].map(number => Math.round(sum / number)))
  .then(array => console.log(`Passou: [${array}], Soma:${array.reduce((acc, cur) => acc + cur)}`))
  .catch((sum) => console.log(`ERROR: ${sum},\nÉ mais de oito mil! Essa promise deve estar quebrada!`));
