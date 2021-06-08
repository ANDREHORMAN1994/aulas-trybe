const Author = require('../models/Author');

const listAuthors = async (req, res) => {
  const authors = await Author.getAll();

  res.status(200).render('authors/index', { authors });
};

const showAuthor = async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id);

  if (!author) return res.status(404).render('404');

  res.status(200).render('authors/show', { author });
};

const newAuthor = (req, res) => {
  res.render('authors/new', { message: null });
};

const createAuthor = async (req, res) => {
  const { firstName, middleName, lastName } = req.body;
  console.log(req.body);

  if (!Author.isValid(firstName, middleName, lastName)) {
    console.log(firstName, middleName, lastName);
    return res.render('authors/new', { message: 'Dados inválidos' });
  }

  await Author.create(firstName, middleName, lastName);
  res.redirect('authors');
};

module.exports = {
  listAuthors,
  showAuthor,
  newAuthor,
  createAuthor,
};
