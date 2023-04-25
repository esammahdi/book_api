// utils/bookValidator.js
// Import the book schema
const { schema } = require('../models/book');
const Ajv = require('ajv');
const addFormats = require("ajv-formats")

// Create a new Ajv instance
const ajv = new Ajv();
addFormats(ajv)

// Compile the schema into a validation function and assign it to the validate variable
const validate = ajv.compile(schema);

// Define a function to validate a book object
function validateBook(book) {
   // Convert the id value to an integer if it exists
   if (book.id) {
    book.id = parseInt(book.id);
  }

  if (book.rating) {
    book.rating = parseFloat(book.rating);
  }
  // Return the result of the validation function
  return validate(book);
}

// Export the validateBook function
module.exports = validateBook;