// controllers/bookController.js
// Import the book model and the validateBook function
const { Book } = require('../models/book');
const validateBook = require('../utils/bookValidator');


// Define a controller function for GET /books endpoint
exports.getBooks = (req, res, next) => {
  // Get the books array from the book model
  let books = Book.getAll();
  // Send a JSON response with the books array
  res.json(books);
};

// Define a controller function for GET /books/{id} endpoint
exports.getBookById = (req, res, next) => {
  // Get the book ID from the request parameters
  let id = parseInt(req.params.id);
  // Find the book by ID using the book model
  let book = Book.findById(id);
  // Check if the book exists
  if (book) {
    // Send a JSON response with the book object
    console.log("Book Found");
    res.json(book);
  } else {
    // Create an error object and pass it to the next middleware function
    let error = new Error('The book was not found');
    error.status = 404;
    next(error);
  }
};

// Define a controller function for POST /books endpoint
exports.createBook = (req, res, next) => {
  // Get the book object from the request body
  let book = req.body;
  // Validate the book object
  if (validateBook(book)) {
    // Add the book to the books array using the book model
    Book.add(book);
    // Send a JSON response with the created book and status code 201
    res.status(201).json(book);
  } else {
    // Create an error object and pass it to the next middleware function
    let error = new Error('Invalid book data');
    error.status = 400;
    next(error);
  }
};


// Define a controller function for PUT /books/{id} endpoint
exports.updateBookById = (req, res, next) => {
    // Get the book ID from the request parameters
    let id = parseInt(req.params.id);
    // Get the book object from the request body
    let book = req.body;
    // Find the book by ID using the book model
    let oldBook = Book.findById(id);
    // Check if the book exists
    if (oldBook) {
      // Validate the book object
      if (validateBook(book)) {
        // Update the book in the books array using the book model
        Book.update(id, book);
        // Send a JSON response with the updated book
        res.json(book);
      } else {
        // Create an error object and pass it to the next middleware function
        let error = new Error('Invalid book data');
        error.status = 400;
        next(error);
      }
    } else {
      // Create an error object and pass it to the next middleware function
      let error = new Error('The book was not found');
      error.status = 404;
      next(error);
    }
  };

  // Define a controller function for DELETE /books/{id} endpoint
exports.deleteBookById = (req, res, next) => {
    // Get the book ID from the request parameters
    let id = parseInt(req.params.id);
    // Find the book by ID using the book model
    let book = Book.findById(id);
    // Check if the book exists
    if (book) {
      // Delete the book from the books array using the book model
      Book.delete(id);
      // Send an empty response and status code 204
      res.status(204).send();
    } else {
      // Create an error object and pass it to the next middleware function
      let error = new Error('The book was not found');
      error.status = 404;
      next(error);
    }
  };