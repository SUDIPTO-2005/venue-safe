# Use official Node runtime as a parent image
FROM node:20-slim

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install all dependencies (including dev dependencies needed for Vite build)
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vite React frontend
RUN npm run build

# Expose the port the app runs on (Cloud Run provides PORT environment variable, defaults to 8080)
ENV PORT=8080
EXPOSE 8080

# Command to run the application (starts the Express server)
CMD ["npm", "start"]
