const connection = require('../connection');

const getAllBooks = async () => {
  const query = 'SELECT * FROM books;';
  const [data] = await connection.execute(query);
  return data;
};

const getBookById = async (id) => {
  const query = 'SELECT * FROM books WHERE id = ?;';
  const [data] = await connection.execute(query, [id]);
  return data.length
    ? data
    : null;
};

const createNewBook = async (title, author_id) => {
  const query =
  `INSERT INTO books (title, author_id)
  VALUES (?, ?);`;

  const data = await getAllBooks();

  if (!title || typeof title !== 'string' || title.length < 3) return null;
  if (!author_id) return null;
  if (!data.some(book => book.id == author_id)) return null;

  const create = await connection.execute(query,
    [title, author_id]);
  return create;
}

module.exports = {
  getAllBooks,
  getBookById,
  createNewBook
};
