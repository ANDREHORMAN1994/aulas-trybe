const randomNumber = () => {
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

return sum < 8000 ? sum : "ERROR"
}
// console.log(randomNumber());

const generateArrayFromSum = sum => [2, 3, 5, 10].map(number => sum / number);
const promise = async () => {
  try {
    const sum = await sumRandomNumbers();
    const array = await generateArrayFromSum(sum);
    console.log(array);
  } catch(e) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
}
promise();
