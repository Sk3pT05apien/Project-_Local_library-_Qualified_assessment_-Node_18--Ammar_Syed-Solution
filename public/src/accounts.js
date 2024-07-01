function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
};

function sortAccountsByLastName(accounts) {
return accounts.sort((a, b) => a.name.last.toLowerCase() > b.name.last.toLowerCase() ? 1 : -1);
};

function getTotalNumberOfBorrows(account, books) 
{return books.reduce((total, book) => {
  const borrowCount = book.borrows.filter(borrow => borrow.id === account.id).length;
  return total + borrowCount;
}, 0);
};

function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
}

function getBooksPossessedByAccount(account, books, authors) {
  const possessedBooks = books.filter(book => {
    const recentBorrow = book.borrows[0];
    return recentBorrow.id === account.id && !recentBorrow.returned;
});
return possessedBooks.map(book => ({
  ...book,
  author: findAuthorById(authors, book.authorId)
}));
};

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
