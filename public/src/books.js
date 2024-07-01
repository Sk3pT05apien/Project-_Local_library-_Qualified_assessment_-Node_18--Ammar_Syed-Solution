function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
};

function findBookById(books, id) {
  return books.find(book => book.id === id);
};

function partitionBooksByBorrowedStatus(books) {
  const borrowed = books.filter(book => !book.borrows[0].returned);
  const returned = books.filter(book => book.borrows[0].returned);
  return [borrowed, returned];
};

function findAccountsById(accounts, id) {
  return accounts.find(account => account.id === id);
};

function getBorrowersForBook(book, accounts) {
  return book.borrows
  .map(borrow => {
    const account = accounts.find(acc => acc.id === borrow.id);
    return { ...borrow, ...account };
  })
  .slice(0, 10);
};

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
