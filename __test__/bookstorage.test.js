'use strict';

const { TopologyDescriptionChangedEvent } = require('mongodb');
const BookStorage = require('../bookstorage');
const defaultData = require('../datastorage.json');

describe('Testing constructor', () => {
    test('Test 1: missing parameter throw an exception', () => {
        expect(() => new BookStorage())
            .toThrow('data storage missing');
    });
});

describe('Test get_book_keywords', () => {
    test('Test 1: Testing if id parameter is missing', () => {
        const storage = new BookStorage(defaultData);
        expect(storage.get_book_keywords()).toEqual([]);
    });
    test('Test 2: Testing if book is not found', () => {
        const storage = new BookStorage(defaultData);
        expect(storage.get_book_keywords(99)).toEqual([]);
    });
    test('Test 3: Testing if keywords is missing', () => {
        const storage = new BookStorage(defaultData);
        expect(storage.get_book_keywords(6)).toEqual([]);
    });
    test('Test 4: Valid id should return correct keywords', () => {
        const storage = new BookStorage(defaultData);
        expect(storage.get_book_keywords(1)).toEqual([
            "mystery",
            "databases",
            "History"
        ]);
    });
    test('Test 5: ID is undefined should return empty array', () => {
        const storage = new BookStorage(defaultData);
        expect(storage.get_book_keywords(undefined)).toEqual([]);
    });
    test('Test 6: ID is a string should return empty array', () => {
        const storage = new BookStorage(defaultData);
        expect(storage.get_book_keywords("abc")).toEqual([]);
    });
    test('Test 7: ID is a boolean should return empty array', () => {
        const storage = new BookStorage(defaultData);
        expect(storage.get_book_keywords(true)).toEqual([]);
    });
});

describe('Test get_Price', () => {
    test('Test 1: Id not found should throw an exception', () => {
        const storage = new BookStorage(defaultData);
        expect(() => storage.get_Price(99)).toThrow('nothing found with given searchValue');
    });
    test('Test 2: Valid id should return correct price', () => {
        const storage = new BookStorage(defaultData);
        expect(storage.get_Price(1)).toEqual(25);
    });
    test('Test 3: ID is a string should throw an exception', () => {
        const storage = new BookStorage(defaultData);
        expect(() => storage.get_Price("abc")).toThrow("invalid ID");
    });
    test('Test 4: ID is undefined should throw an exception', () => {
        const storage = new BookStorage(defaultData);
        expect(() => storage.get_Price(undefined)).toThrow("missing parameter");
    });
});

describe('Test get_total_price_of_books_by_writer', () => {
    test('TEst 1: Not existing writer should throw an exception', () => {
        const storage = new BookStorage(defaultData);
        expect(() => storage.get_total_price_of_books_by_writer("Notreal Name"))
            .toThrow('nothing found with given searchValue');
    });
    test('Test 2: Valid writer should return correct total price', () => {
        const storage = new BookStorage(defaultData);
        expect(storage.get_total_price_of_books_by_writer("Antony Lee")).toEqual(225);
    });
    test('Test 3: Writer is null should throw an exception', () => {
        const storage = new BookStorage(defaultData);
        expect(() => storage.get_total_price_of_books_by_writer(null))
            .toThrow("missing parameter");
    });
    test('Test 4: Writer is undefined should throw an exception', () => {
        const storage = new BookStorage(defaultData);
        expect(() => storage.get_total_price_of_books_by_writer(undefined))
            .toThrow("missing parameter");
    });
    test('Test 5: Writer exists but has no books should throw an exception', () => {
        const storage = new BookStorage([
            { ID: 7, bookname: "Unknown Book", price: 30, publisher: "Some Publisher" }
        ]);
        expect(() => storage.get_total_price_of_books_by_writer("Antony Lee"))
            .toThrow("nothing found with given searchValue");
    });
    test('Test 6: Writer exists but all books have no price should return 0', () => {
        const storage = new BookStorage([
            { ID: 11, bookname: "Book without price", writer: "Emily White" },
            { ID: 12, bookname: "Another one", writer: "Emily White" }
        ]);
        expect(storage.get_total_price_of_books_by_writer("Emily White")).toEqual(0);
    });

});

describe('Test get_publisher_of_book_by_bookname', () => {
    test('Test 1: Not existing bookname should return null', () => {
        const storage = new BookStorage(defaultData);
        expect(storage.get_publisher_of_book_by_bookname("Unknown Book")).toBe(null);
    });
    test('Test 2: Valid bookname should return correct publisher', () => {
        const storage = new BookStorage(defaultData);
        expect(storage.get_publisher_of_book_by_bookname("NoSql - New Hope")).toEqual("Antony Lee publishing");
    });
    test('Test 3: Book exists but has no publisher should return null', () => {
        const storage = new BookStorage([
            { ID: 8, bookname: "Lost Book", price: 20, writer: "Unknown" }
        ]);
        expect(storage.get_publisher_of_book_by_bookname("Lost Book")).toBe(null);
    });
});

describe('Test get_All_books_By_writer', () => {
    test('Test 1: Non existing writer should return empty array', () => {
        const storage = new BookStorage(defaultData);
        expect(storage.get_All_books_By_writer("Unknown Writer")).toEqual([]);
    });
    test('Test 2: Valid writer should return all books by writer', () => {
        const storage = new BookStorage(defaultData);
        expect(storage.get_All_books_By_writer("Antony Lee")).toEqual(
            [
                {
                    "ID": 1,
                    "bookname": "Rebellion of Sophie Q. Lister",
                    "writer": "Antony Lee",
                    "price": 25,
                    "publisher": "Leila Hökki & co",
                    "keywords": [
                        "mystery",
                        "databases",
                        "History"
                    ],
                    "details": {
                        "notes": "first folio",
                        "booktype": "softcover",
                        "edition": "third edition"
                    }
                },
                {
                    "ID": 3,
                    "bookname": "Databases - The rise and fall",
                    "writer": "Antony Lee",
                    "price": 200,
                    "publisher": "Lion books",
                    "keywords": [
                        "Computers",
                        "Future SQL",
                        "inventions"
                    ],
                    "details": {
                        "notes": "-",
                        "booktype": "hardcover",
                        "edition": "second edition"
                    }
                }
            ]);
    });
    test('Test 3: Writer exists but has no books should return empty array', () => {
        const storage = new BookStorage([
            { ID: 10, bookname: "Some Book", price: 25, publisher: "A Publisher" }
        ]);
        expect(storage.get_All_books_By_writer("Antony Lee")).toEqual([]);
    });
});