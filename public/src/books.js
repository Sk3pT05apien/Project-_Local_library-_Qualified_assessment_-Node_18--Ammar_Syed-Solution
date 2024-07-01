function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
}

function findBookById(books, id) {
  return books.find(book => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const borrowed = books.filter(book => !book.borrows[0].returned);
  const returned = books.filter(book => book.borrows[0].returned);
  return [borrowed, returned];
}

function findAccountsById(accounts, id) {
  return accounts.find(account => account.id === id);
}

function getBorrowersForBook(book, accounts) {
  return book.borrows
  .map(borrow => {
    const account = accounts.find(acc => acc.id === borrow.id);
    return { ...borrow, ...account };
  })
  .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};


//Errors:
//partitionBooksByBorrowedStatus()
//*should return an array with two arrays: borrowed books and returned books. TypeError: partionBooksByBorrowedStatus is not a function or its return value is not iterable.
//getBorrowersForBook()
//*should return an array for a book of all borrowers with their information and return status. expected undefined to deeply equal { first: 'Barber' , last: 'Waters' }.
//*should limit the list to ten borrowers. expected 11 to equal 10.
//getMostPopularBooks()
//*should return an ordered list of most popular books. TypeError: cannot read properties of undefined (reading '0').
//*should limit the list to the top five. TypeError: Cannot read properties of undefined (reading 'length').