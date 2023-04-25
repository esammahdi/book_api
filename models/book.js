// models/book.js
// Define an array of books as a mock database
let books = [
    {
      id: 1,
      title: 'The Hitchhiker\'s Guide to the Galaxy',
      author: 'Douglas Adams',
      genre: 'fiction',
      published: true,
      rating: 4.5
    },
    {
      id: 2,
      title: 'The Art of War',
      author: 'Sun Tzu',
      genre: 'non-fiction',
      published: true,
      rating: 4.0
    },
    {
      id: 3,
      title: 'Harry Potter and the Philosopher\'s Stone',
      author: 'J.K. Rowling',
      genre: 'fiction',
      published: true,
      rating: 4.8
    }
  ];

  // Define a schema for a book object
let schema = {
    type: 'object',
    properties: {
      id: { type: 'integer' },
      title: { type: 'string' },
      author: { type: 'string' },
      genre: { type: 'string', enum: ['fiction', 'non-fiction', 'biography', 'poetry'] },
      published: { type: 'boolean' },
      rating: { type: 'number', format: 'float', minimum: 0, maximum: 5 }
    },
    required: ['id', 'title', 'author']
  };
  
  // Define a model class for a book resource
  class Book {
  
    // A static method to get all books
    static getAll() {
      return books;
    }
  
    // A static method to find a book by ID
    static findById(id) {
      return books.find(book => book.id === id);
    }
  
    // A static method to add a new book to the books array
    static add(book) {
      books.push(book);
    }
    // A static method to update a book in the books array by ID
static update(id, book) {
    let index = books.findIndex(b => b.id === id);
    books[index] = book;
    }
    
    // A static method to delete a book from the books array by ID
    static delete(id) {
    let index = books.findIndex(b => b.id === id);
    books.splice(index, 1);
    }
    
    }
    
    // Export the schema and the model class as named exports
    module.exports = { schema, Book };
     