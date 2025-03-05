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
        expect(storage.get_book_keywords(3)).toEqual([]);
    });

    test('Test 4: Valid id should return correct keywords', () => {
        const storage = new BookStorage(defaultData);
        expect(storage.get_book_keywords(1)).toEqual([
            "mystery",
            "databases",
            "History"
        ]);
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
});