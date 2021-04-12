const connection = require('../connection');

const addNewAtribute = (obj) => {
  const { firstName, middleName, lastName } = obj;
  const fullName = [firstName, middleName, lastName]
    .filter((atributes) => atributes)
    .join(' ');

  const newObj = { ...obj, fullName };
  return newObj;
};

const getAllAuthors = () => {
  return connection()
    .then((db) => db.collection('authors').find().toArray())
    .then((authors) => {
      return authors.map((author) => {
        return addNewAtribute(author);
      });
    });
};

module.exports = {
  getAllAuthors,
};
