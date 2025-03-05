# Test cases for BookStorage

## **Constructor Tests**

### Test 1: Missing parameter should throw an exception

```js
expect(() => new BookStorage()).toThrow("data storage missing");
```

---

## **get_book_keywords(searchKey)**

Returns an array of book keywords. If none are found, returns an empty array.

### Test 1: Testing if id parameter is missing

```js
const storage = new BookStorage(defaultData);
storage.get_book_keywords();
```

Expect to return:

```json
[]
```

### Test 2: Testing if book is not found

```js
const storage = new BookStorage(defaultData);
storage.get_book_keywords(99);
```

Expect to return:

```json
[]
```

### Test 3: Testing if keywords are missing

```js
const storage = new BookStorage(defaultData);
storage.get_book_keywords(6);
```

Expect to return:

```json
[]
```

### Test 4: Valid id should return correct keywords

```js
const storage = new BookStorage(defaultData);
storage.get_book_keywords(1);
```

Expect to return:

```json
["mystery", "databases", "History"]
```

### Test 5: ID is undefined should return empty array

```js
const storage = new BookStorage(defaultData);
storage.get_book_keywords(undefined);
```

Expect to return:

```json
[]
```

### Test 6: ID is a string should return empty array

```js
const storage = new BookStorage(defaultData);
storage.get_book_keywords("abc");
```

Expect to return:

```json
[]
```

### Test 7: ID is a boolean should return empty array

```js
const storage = new BookStorage(defaultData);
storage.get_book_keywords(true);
```

Expect to return:

```json
[]
```

---

## **get_Price(ID)**

Returns the price of a book. If no book is found, throws an exception.

### Test 1: ID not found should throw an exception

```js
const storage = new BookStorage(defaultData);
storage.get_Price(99);
```

Expect to throw:

```plaintext
"nothing found with given searchValue"
```

### Test 2: Valid ID should return correct price

```js
const storage = new BookStorage(defaultData);
storage.get_Price(1);
```

Expect to return:

```json
25
```

### Test 3: ID is a string should throw an exception

```js
const storage = new BookStorage(defaultData);
storage.get_Price("abc");
```

Expect to throw:

```plaintext
"invalid ID"
```

### Test 4: ID is undefined should throw an exception

```js
const storage = new BookStorage(defaultData);
storage.get_Price(undefined);
```

Expect to throw:

```plaintext
"missing parameter"
```

---

## **get_total_price_of_books_by_writer(searchValue)**

Returns the total price of all books by the given writer. If no books are found, throws an exception.

### Test 1: Non-existing writer should throw an exception

```js
const storage = new BookStorage(defaultData);
storage.get_total_price_of_books_by_writer("Notreal Name");
```

Expect to throw:

```plaintext
"nothing found with given searchValue"
```

### Test 2: Valid writer should return correct total price

```js
const storage = new BookStorage(defaultData);
storage.get_total_price_of_books_by_writer("Antony Lee");
```

Expect to return:

```json
225
```

### Test 3: Writer is null should throw an exception

```js
const storage = new BookStorage(defaultData);
storage.get_total_price_of_books_by_writer(null);
```

Expect to throw:

```plaintext
"missing parameter"
```

### Test 4: Writer is undefined should throw an exception

```js
const storage = new BookStorage(defaultData);
storage.get_total_price_of_books_by_writer(undefined);
```

Expect to throw:

```plaintext
"missing parameter"
```

### Test 5: Writer exists but has no books should throw an exception

```js
const storage = new BookStorage([
  { ID: 7, bookname: "Unknown Book", price: 30, publisher: "Some Publisher" },
]);
storage.get_total_price_of_books_by_writer("Antony Lee");
```

Expect to throw:

```plaintext
"nothing found with given searchValue"
```

### Test 6: Writer exists but all books have no price should return 0

```js
const storage = new BookStorage([
  { ID: 11, bookname: "Book without price", writer: "Emily White" },
  { ID: 12, bookname: "Another one", writer: "Emily White" },
]);
storage.get_total_price_of_books_by_writer("Emily White");
```

Expect to return:

```json
0
```

---

## **get_publisher_of_book_by_bookname(searchKey)**

Returns the publisher of the book matching the bookname. If no match is found, returns null.

### Test 1: Non-existing bookname should return null

```js
const storage = new BookStorage(defaultData);
storage.get_publisher_of_book_by_bookname("Unknown Book");
```

Expect to return:

```json
null
```

### Test 2: Valid bookname should return correct publisher

```js
const storage = new BookStorage(defaultData);
storage.get_publisher_of_book_by_bookname("NoSql - New Hope");
```

Expect to return:

```json
"Antony Lee publishing"
```

### Test 3: Book exists but has no publisher should return null

```js
const storage = new BookStorage([
  { ID: 8, bookname: "Lost Book", price: 20, writer: "Unknown" },
]);
storage.get_publisher_of_book_by_bookname("Lost Book");
```

Expect to return:

```json
null
```
