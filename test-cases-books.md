# Test cases for BookStorage

## **get_book_keywords(searchKey)**

Returns an array of book keywords. If none are found, returns an empty array.

### Test 1: Testing if id parameter is missing

Create storage with default data

```js
const storage = new BookStorage(defaultData);
storage.get_book_keywords();
```

Expect to return:

```json
[]
```

### Test 2: Testing if book is not found

Create storage with default data

```js
const storage = new BookStorage(defaultData);
storage.get_book_keywords(99);
```

Expect to return:

```json
[]
```

### Test 3: Testing if keywords are missing

Create storage with default data

```js
const storage = new BookStorage(defaultData);
storage.get_book_keywords(3);
```

Expect to return:

```json
[]
```

### Test 4: Valid id should return correct keywords

Create storage with default data

```js
const storage = new BookStorage(defaultData);
storage.get_book_keywords(1);
```

Expect to return:

```json
["mystery", "databases", "History"]
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

---

## **get_total_price_of_books_by_writer(searchValue)**

Returns the total price of all books by the given writer. If no books are found, throws an exception.

### Test 1: Non-existing writer should throw an exception

```js
const storage = new BookStorage(defaultData);
storage.get_total_price_of_books_by_writer("Notreal Name");
```

Expect to throw an exception `'nothing found with given searchValue'`

### Test 2: Valid writer should return correct total price

```js
const storage = new BookStorage(defaultData);
storage.get_total_price_of_books_by_writer("Antony Lee");
```

Expect to return:

```json
225
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

---

## **get_All_books_By_writer(searchValue)**

Returns an array of books by the given writer. If no books are found, returns an empty array.

### Test 1: Non-existing writer should return an empty array

```js
const storage = new BookStorage(defaultData);
storage.get_All_books_By_writer("Unknown Writer");
```

Expect to return:

```json
[]
```

### Test 2: Valid writer should return all books by the writer

```js
const storage = new BookStorage(defaultData);
storage.get_All_books_By_writer("Antony Lee");
```

Expect to return:

```json
[
  {
    "ID": 1,
    "bookname": "Rebellion of Sophie Q. Lister",
    "writer": "Antony Lee",
    "price": 25,
    "publisher": "Leila Hökki & co",
    "keywords": ["mystery", "databases", "History"],
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
    "keywords": ["Computers", "Future SQL", "inventions"],
    "details": {
      "notes": "-",
      "booktype": "hardcover",
      "edition": "second edition"
    }
  }
]
```
