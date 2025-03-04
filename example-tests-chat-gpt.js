const BookStorage = require('../BookStorage');

const testData = [
    { ID: 1, bookname: "Test Book", writer: "Test Author", price: 20, publisher: "Test Publisher", keywords: ["fiction"] },
    { ID: 2, bookname: "Another Book", writer: "Test Author", price: 30, publisher: "Another Publisher", keywords: [] }
];

describe("BookStorage Tests", () => {
    let storage;

    beforeEach(() => {
        storage = new BookStorage(testData);
    });

    test("get_book_keywords should return keywords", () => {
        expect(storage.get_book_keywords(1)).toEqual(["fiction"]);
    });

    test("get_Price should return price", () => {
        expect(storage.get_Price(1)).toBe(20);
    });

    test("get_total_price_of_books_by_writer should return total price", () => {
        expect(storage.get_total_price_of_books_by_writer("Test Author")).toBe(50);
    });

    test("get_publisher_of_book_by_bookname should return publisher", () => {
        expect(storage.get_publisher_of_book_by_bookname("Test Book")).toBe("Test Publisher");
    });

    test("get_All_books_By_writer should return books", () => {
        expect(storage.get_All_books_By_writer("Test Author").length).toBe(2);
    });
});
