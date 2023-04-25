# Book API

This is a simple REST API for books built with Node.js, Express and Docker. It allows you to create, read, update and delete books from a mock database. It also provides an OpenAPI swagger page for documenting and testing the API.


## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Usage](#usage)
- [Docker Installation](#docker-installation)
- [API Reference](#aPI-reference)
- [Acknowledgement](#acknowledgement)
- [Contributing](#contributing)
- [License](#License)

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

To use this app without Docker, you need to clone this repository and install the dependencies:

```bash
git clone https://github.com/username/book-api.git
cd book-api
npm install
```

You can then run the app.js file to start the server.

## Docker Installation

You can use the predefined dockerfile/docker-compose files to build an image or you can access a ready version at [DockerHub](https://hub.docker.com/r/esammahdi/book_api). 

Download the image using:
```bash
docker pull esammahdi/book_api
```

You can then run it using:

```bash
docker run --name book-api -p 8080:8080 -d esammahdi/book-api:1.0
```

This will create and start a container called book-api from the esammahdi/book-api:1.0 image. The -p flag maps port 8080 of the container to port 8080 of the host machine. The -d flag runs the container in detached mode, meaning it runs in the background.

You can then open http://localhost:8080 in your browser to see the OpenAPI swagger page for the API.

To stop and remove the container, you can use these commands:

```bash
docker stop book-api
docker rm book-api
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

## Acknowledgement
This project was initiated with the help of Bing AI. It designed the initial OpenAPI document according to the instructions. Then I had it make a NodeJS file depending on it. I then had it modularize the file by spliting it into the files you see in this repo as well as helping in dockerizing the app. Yes there were mistakes but I also solved them with the help of the AI. The chatbot pulled from many other sources during the process, unfortunately they were lost when the page was reloaded.
## Contributing
This is a finished demo project so no need for contribution. But feel free to fork it and add what you want.

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/esammahdi/book_api/blob/main/LICENSE) file for details
