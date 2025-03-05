# BookStorage-API-Tests

1. The BookStorage class manages a collection of books and requires JSON data upon creation—otherwise, it throws an error.

2. The get_book_keywords(id) method returns an array of keywords for a given book ID, or an empty array if no keywords exist or the ID is invalid.

3. The get_Price(id) method fetches a book’s price but throws errors if the ID is missing, not a number, or if no book is found.

4. The get_total_price_of_books_by_writer(searchValue) method calculates the total price of all books by a given writer—throws errors if the writer is missing or no books are found but returns 0 if books exist without a price.

5. The get_publisher_of_book_by_bookname(searchKey) method finds the publisher of a book by its name but returns null if no publisher exists.

6. The get_All_books_By_writer(searchValue) method retrieves all books by a writer, throwing an error if no writer is provided.

7. The test file validates these methods by checking expected return values and ensuring errors are thrown when necessary.

8. Edge cases like missing parameters, invalid data types, and books without certain properties are covered in the tests.

## How to use it

clone the repo and install dependencies

```shell
npm install
```

run the tests with

```shell
npm test
```
