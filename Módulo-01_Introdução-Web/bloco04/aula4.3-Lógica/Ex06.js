// BONUS 02

// Faça um programa que diz se um número definido numa variável é primo ou não.
// Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.

function primo(n) {
  let count = 0;
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      count += 1;
      return `${n} não é primo`;
    } else if (count !== 0) {
      return `${n} não é primo`;
    }
  }
  if (count == 0 && n % 1 == 0 && n % n == 0) {
    return `${n} é primo`;
  }
}

console.log(primo(11));
