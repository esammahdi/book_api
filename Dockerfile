# Use node:alpine as the base image
FROM node:current-alpine3.17

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app source code
COPY . .

ENV PORT=8080

# Expose port 8080
EXPOSE 8080

# Start the app
CMD [ "npm", "start" ]