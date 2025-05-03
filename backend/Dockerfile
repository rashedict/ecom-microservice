# Use official Node.js image from Docker Hub
FROM node:16

# Set working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (for npm install)
COPY package*.json ./

# Install the backend dependencies
RUN npm install

# Copy the rest of the backend application code
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Start the backend server
CMD ["npm", "start"]
