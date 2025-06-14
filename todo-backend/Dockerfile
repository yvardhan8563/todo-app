# Use the official Node.js image ==> You need Node.js to run your backend app, and this image already has Node and npm installed.
FROM node:18


# 2. Set the working directory inside the container ==> All the following commands will run inside this folder. It keeps your app organized inside the container.
WORKDIR /app


# 3. Copy package.json and package-lock.json ==> These files list your app’s dependencies. Docker needs them to install the right packages.
COPY package*.json ./


# 4. Install dependencies ==> This installs all the dependencies listed in package.json, like Express, CORS, etc.
RUN npm install

# 5. Copy the rest of the application code ==> Copies all remaining files (like app.js) into the container.
COPY . .


# 6. Expose the port your app runs on ==> Tells Docker that your app will use port 3000.This is the port your Express server listens on. It allows access from outside the container.
EXPOSE 3000


# 7. Start the application ==> this is the command Docker runs to start your app.It uses the start script from your package.json, which runs node app.js.
CMD ["npm", "start"] 







