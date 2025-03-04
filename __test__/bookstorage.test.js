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
})