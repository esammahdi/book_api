// utils/errorHandler.js
// Define a middleware function to handle errors
function errorHandler(error, req, res, next) {
    // Get the status and message from the error object
    let { status, message } = error;
    // If no status is provided, default to 500 (Internal Server Error)
    status = status || 500;
    // If no message is provided, default to a generic message based on the status code
    message = message || {
      400: 'Bad Request',
      404: 'Not Found',
      500: 'Internal Server Error'
    }[status];
    // Send a JSON response with the status and message
    console.log("IN error handler");
    res.status(status).json({ status, message });
  }
  
  // Export the errorHandler function
  module.exports = errorHandler;