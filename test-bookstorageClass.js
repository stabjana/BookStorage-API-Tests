const BookStorage = require('./bookstorage');
const bookData = require('./datastorage.json'); // Import JSON file

const storage = new BookStorage(bookData);

console.log("Keywords for book ID 1:", storage.get_book_keywords(1));

console.log("Price of book ID 2:", storage.get_Price(2));

console.log("Total price of books by Antony Lee:", storage.get_total_price_of_books_by_writer("Antony Lee"));

console.log("Publisher of 'NoSql - New Hope':", storage.get_publisher_of_book_by_bookname("NoSql - New Hope"));

console.log("All books by Emily White:", storage.get_All_books_By_writer("Emily White"));
