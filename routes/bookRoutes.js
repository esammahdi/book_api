// routes/bookRoutes.js
// Import express module and create a router object
const express = require('express');
const router = express.Router();

const bookController = require('../controllers/bookController');

// Get all books
router.get('/books', bookController.getBooks);

// Get a single book by id
router.get('/books/:id', bookController.getBookById);

// Create a new book
router.post('/', bookController.createBook);

// Update a book by id
router.put('/:id', bookController.updateBookById);

// Delete a book by id
router.delete('/:id', bookController.deleteBookById);

module.exports = router;