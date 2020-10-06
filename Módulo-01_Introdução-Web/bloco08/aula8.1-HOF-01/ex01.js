const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// console.log(books[4].author.name);

// MÉTODO 01 DE USAR FIND
// function authorBornIn1947() {
//   return books.find((item) => {
//     return item.author.name === 'Stephen King';
//   }).author.name;
// }
// console.log(authorBornIn1947());


// MÉTODO 02 DE USAR FIND
// const author = (item) => {
//   return item.author.name === 'Stephen King';
// };

// function authorBornIn1947() {
//   return books.find(author).author.name;
// }
// console.log(authorBornIn1947());


// MÉTODO 03 DE USAR FIND
function authorBornIn1947() {
  const result = books.find(({author}) => author.name === 'Stephen King');
  return result.author.name;
}
console.log(authorBornIn1947());

assert.equal(authorBornIn1947(), 'Stephen King');
