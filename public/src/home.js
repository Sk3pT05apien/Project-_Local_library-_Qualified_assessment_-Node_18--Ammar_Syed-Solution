function getTotalBooksCount(books) {
return books.length;
};

function getTotalAccountsCount(accounts) {
  return accounts.length;
};

function getBooksBorrowedCount(books) {
  return books.filter(book => !book.borrows[0].returned).length;
};

function getMostCommonGenres(books) {
  const genreCounts = books.reduce((acc, book) => {
    acc[book.genre] = (acc[book.genre] || 0) + 1;
    return acc;
  }, {});
return Object.entries(genreCounts)
.map(([name, count]) => ({ name, count }))
.sort((a, b) => b.count - a.count)
.slice(0, 25);
}


function getMostPopularBooks(books) {
  return books
    .map(book => ({
      name: book.title,
      count: book.borrows.length
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  const authorBorrows = books.reduce((acc, { authorId, borrows }) => {
    acc[authorId] = (acc[authorId] || 0) + borrows.length;
    return acc;
  }, {});

  return Object.keys(authorBorrows)
    .map(authorId => {
      const { name: { first, last } } = authors.find(author => author.id === parseInt(authorId));
      return {
        name: `${first} ${last}`,
        count: authorBorrows[authorId]
      };
    })
    .sort((a, b) => b.count - a.count)
    .slice(0, 25);
};

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};


// getMostPopularBooks()
//* TypeError: cannot read properties of undefined (reading '0').
//*should limit the list to the top five. TypeError: Cannot read properties of undefined (reading 'length').