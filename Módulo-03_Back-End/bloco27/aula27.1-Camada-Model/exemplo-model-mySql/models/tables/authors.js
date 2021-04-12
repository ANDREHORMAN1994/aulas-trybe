const connection = require('../connection');

const convertToCamelCase = (data) => {
  const {
    id,
    first_name,
    middle_name,
    last_name,
    birthday,
    nationality,
  } = data;

  const newObj = {
    id: id,
    firstName: first_name,
    middleName: middle_name,
    lastName: last_name,
    birthday: birthday,
    nationality: nationality,
  };
  return newObj;
};

const addNewAtribute = (obj) => {
  const { firstName, middleName, lastName } = obj;
  const fullName = [firstName, middleName, lastName]
    .filter(atributes => atributes)
    .join(' ');
  
  const newObj = { ...obj, fullName };
  return newObj;
}

const getAllAuthors = async () => {
  const query = 'SELECT * FROM authors;';
  const [data] = await connection.execute(query);
  return data
    .map(author => convertToCamelCase(author))
    .map(author => addNewAtribute(author));
};

module.exports = {
  getAllAuthors,
};
