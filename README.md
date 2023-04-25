# Book API

This is a simple REST API for books built with Node.js, Express and Docker. It allows you to create, read, update and delete books from a mock database. It also provides an OpenAPI swagger page for documenting and testing the API.

## Features

- CRUD operations for books
- Validation of book data using a schema
- Error handling and logging
- Dockerization of the app using a lightweight alpine image
- OpenAPI swagger page for documentation and testing

## Prerequisites

- Node.js and npm installed on your machine
- Docker installed on your machine (If you want to run it as a docker image)

## Usage

To use this app, you need to clone this repository and install the dependencies:

```bash
git clone https://github.com/username/book-api.git
cd book-api
npm install
```
Then, you need to build a Docker image for the app:

```bash
docker build -t username/book-api:latest .
```

This will create an image called username/book-api with the tag latest. You can then run a container from this image:

```bash
docker run --name book-api-container -p 8080:8080 -d username/book-api:latest
```

This will create and start a container called book-api-container from the username/book-api:latest image. The -p flag maps port 8080 of the container to port 8080 of the host machine. The -d flag runs the container in detached mode, meaning it runs in the background.

You can then open http://localhost:8080 in your browser and see your app running. You can also open http://localhost:8080/docs to see the OpenAPI swagger page for the API.

To stop and remove the container, you can use these commands:

```bash
docker stop book-api-container
docker rm book-api-container
```

## API Reference
The API has five endpoints:

- GET /books : returns a list of all books
- GET /books/:id : returns a single book by id
- POST /books : creates a new book with the data in the request body
- PUT /books/:id : updates an existing book by id with the data in the request body
- DELETE /books/:id : deletes an existing book by id

The book data has the following schema:
```json
{
  "type": "object",
  "properties": {
    "id": { "type": "integer" },
    "title": { "type": "string" },
    "author": { "type": "string" },
    "genre": { "type": "string", "enum": ["fiction", "non-fiction", "biography", "poetry"] },
    "published": { "type": "boolean" },
    "rating": { "type": "number", "format": "float", "minimum": 0, "maximum": 5 }
  },
  "required": ["id", "title", "author"]
}
```

For more details and examples, please refer to the OpenAPI swagger page at http://localhost:8080/

## Contributing

## License
This project is licensed under the MIT License - see the LICENSE.md file for details
