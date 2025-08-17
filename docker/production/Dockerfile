# Using Lightweight docker image for node
FROM node:22.17.1-alpine AS base

# Setting up working directory
WORKDIR /usr/src/backend-app

# Copy package file
COPY package*.json ./

# Installing Dependencies // ci -> clean install (same version install) // only production it's only install dependencies, not dev-dependencies
RUN npm ci --only=production

# copy file
COPY . .    

# Build Type Script Project
RUN npm run dist

# Exposing port
EXPOSE 3000

# Start Application
CMD ["npm", "start"]