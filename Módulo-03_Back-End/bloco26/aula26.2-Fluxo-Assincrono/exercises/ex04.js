// const data = require('./simpsons.json');
const fs = require('fs').promises;


// FAZ A LEITURA DO ARQUIVO SIMPSONS.JSON
const data = fs
  .readFile('./simpsons.json', 'utf-8')
  .then((response) => {
    return JSON.parse(response);
  })
  .catch((error) => console.log(error.message));
// console.log(data);


// MOSTRA TODOS OS DADOS NESSE FORMATO: ID - NAME
const showNames = async () => {
  const response = await data;
  response.forEach((person) => {
    const { id, name } = person;
    console.log(`${id} - ${name}`);
  });
};
// showNames();


// RETORNA UM ID - NAME ESPECÍFICO
const showPerson = async (id) => {
  const response = await data;
  const promise = new Promise((resolve, reject) => {
    if (!response.some((person) => parseInt(person.id, 10) === id)) {
      reject(new Error('id não encontrado'));
    }
    const obj = response.find((person) => parseInt(person.id, 10) === id);
    resolve(`${obj.id} - ${obj.name}`);
  });
  return promise;
};
// showPerson(3)
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error.message));


// REMOVE ELEMENTOS COM IDS ESPECÍFICOS DO ARRAY SIMPSONS
const removeIds = async (idArray) => {
  const response = await data;
  let newArray = response;
  
  idArray.forEach((id) => {
    newArray = newArray.filter((elem) => parseInt(elem.id, 10) !== id);
  });
  
  // console.log(newArray);
  fs.writeFile('simpsons.json', JSON.stringify(newArray));
}
// removeIds([10, 6]);
// showNames();


// CRIA UM NOVO ARQUIVO SIMPSONFAMILY
const createFile = async (id) => {
  const response = await data;
  const newArray = response.filter((elem) => parseInt(elem.id) <= id);
  fs.writeFile('./simpsonFamily.json', JSON.stringify(newArray));
}
// createFile(4);


// ADICIONA UM NOVO USUÁRIO NO SIMPSONFAMILY
const addUser = async (user) => {
  const response = await fs.readFile('./simpsonFamily.json', 'utf-8')
    .then((response) => {
      return JSON.parse(response);
    })
    .catch((error) => console.log(error.message));

  const lastId = parseInt(response[response.length - 1].id, 10);
  const obj = { id: JSON.stringify(lastId + 1),  name: user };
  response.push(obj);
  fs.writeFile('./simpsonFamily.json', JSON.stringify(response));
}
// addUser('Nelson Muntz');


// ALTERA UM USUÁRIO ESPECIFICO NO SIMPSONFAMILY
const changeUser = async (oldUser, newUser) => {
  const response = await fs.readFile('./simpsonFamily.json', 'utf-8')
    .then((response) => {
      return JSON.parse(response);
    })
    .catch((error) => console.log(error.message));

  response.forEach((person) => {
    if (person.name === oldUser) {
      person.name = newUser;
    }
  });

  fs.writeFile('./simpsonFamily.json', JSON.stringify(response));
}
changeUser('Nelson Muntz', 'Maggie Simpson');
