// app.js
// Import express and body-parser modules
const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./api/openapi.json');

// Import the router object for book resource
const bookRoutes = require('./routes/bookRoutes');

// Import the error handler middleware function
const errorHandler = require('./utils/errorHandler');

// Create an express app
const app = express();

// Use body-parser middleware to parse JSON requests
app.use(bodyParser.json());

// Use the router object for book resource
app.use('/', bookRoutes);

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Use the error handler middleware function
app.use(errorHandler);

const port = process.env.PORT || 8080;

// Start the server on port 8080
app.listen(port, () => {
  console.log('Server is running on port 8080');
});