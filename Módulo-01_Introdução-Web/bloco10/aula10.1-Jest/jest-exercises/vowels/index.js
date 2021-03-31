// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const array = ['a', 'e', 'i', 'o', 'u'];
  const newArray = [...str];
  let count = 0;
  newArray.forEach((letters) => {
    array.forEach((voewl) => {
      if(letters === voewl) count += 1;
      if(letters === voewl.toUpperCase()) count += 1;
    })
  })
  return count;
}
// console.log(vowels('why?'));

module.exports = vowels;
