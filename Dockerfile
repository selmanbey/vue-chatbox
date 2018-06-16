# Build docker on node
FROM node:jessie

# Create an app folder and cd into it
WORKDIR /app

# Copy everything to app folder
COPY package*.json ./

# Install npm packages
RUN npm install

COPY . .

EXPOSE 8080

RUN npm start
