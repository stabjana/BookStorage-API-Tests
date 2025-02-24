'use strict';

const BookStorage = require('../bookstorage');
const defaultData = require('../datastorage.json');

describe('Testing constructor', () => {
    test('Test 1: missing parameter throw an exception', () => {
        expect(() => new BookStorage())
            .toThrow('data storage missing');
    });
});

