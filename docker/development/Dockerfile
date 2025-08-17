# Using Lightweight docker image for node
FROM node:22.17.1-alpine AS base

# Setting up working directory
WORKDIR /usr/src/backend-app

# Copy package file
COPY package*.json ./

# Installing Dependencies // ci -> clean install (same version install)
RUN npm ci

# copy file
COPY . .

# Exposing port
EXPOSE 3000

# Start Application
CMD ["npm", "run", "dev"]