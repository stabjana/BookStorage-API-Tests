'use strict';

module.exports = class BookStorage {
    #books;
    constructor(jsondata) {
        if (!jsondata) {
            throw new Error("data storage missing");
        }
        this.#books = jsondata;
    }

    get_book_keywords(id) {
        if (!id) {
            return [];
        }
        const book = this.#books.find(book => book.ID === id);
        if (book && book.keywords) {
            return book.keywords;
        } else {
            return [];
        }
    }

    get_Price(id) {
        if (!id) {
            throw new Error("missing parameter");
        }

        const book = this.#books.find(book => book.ID === id);
        if (!book) {
            throw new Error("nothing found with given searchValue");
        }
        return book.price; // check if number-funktion!
    }

    get_total_price_of_books_by_writer(searchValue) {
        if (!searchValue) {
            throw new Error("missing parameter");
        }

        const booksByWriter = this.#books.filter(book => book.writer === searchValue);

        if (booksByWriter.length === 0) {
            throw new Error("nothing found with given searchValue");
        }
        return booksByWriter.reduce((total, book) => total + book.price, 0);
    }

    get_publisher_of_book_by_bookname(searchKey) {
        if (!searchKey) {
            throw new Error("missing parameter");
        }

        const book = this.#books.find(book => book.bookname === searchKey);
        if (book) {
            return book.publisher;
        } else {
            return null;
        }
    }

    get_All_books_By_writer(searchValue) {
        if (!searchValue) {
            throw new Error("missing parameter");
        }
        return this.#books.filter(book => book.writer === searchValue);
    }
};