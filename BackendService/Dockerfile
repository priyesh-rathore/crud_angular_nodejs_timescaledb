# Use an official Node runtime as a parent image
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Bundle the app source inside the Docker image
COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Define environment variable for database connection
ENV DB_HOST=localhost
ENV DB_PORT=5432
ENV DB_USER=myuser
ENV DB_PASS=mypassword
ENV DB_NAME=mydatabase

# Run the app when the container launches
CMD ["npm", "run", "dev"]
