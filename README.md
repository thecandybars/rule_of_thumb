# 👋 Welcome to Rule of Thumb™️

## Overview

Rule of Thumb™️ is an app for tracking users' sentiment on trending or controversial people from different fields. Some of the main requirements were:

- Build an interface for users to browse celebrities and cast their votes with a simple thumbs up or down system.
- Ensure the interface is accessible on mobile phones, tablets, and desktop computers.
- User-introduced votes should persist after a page reload.
- The design must adapt to the base HTML, CSS, and Figma files provided by the client.

## Technology Stack

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **Styled Components**: Utilized for styling within the component files in React applications.
- **Axios**: A promise-based HTTP client for making requests to the backend.

### Backend

- **Node.js**: A runtime environment to run JavaScript on the server.
- **Express**: A web application framework for Node.js, designed for building web applications and APIs.
- **Sequelize**: An ORM (Object-Relational Mapping) library for Node.js, used for interacting with SQL databases like PostgreSQL.
- **PostgreSQL**: An open-source, powerful relational database system.
- **Axios**: Used for making HTTP requests from the Node.js server.

## The project

The project consists of a single repository containing the backend and frontend in two different folders.

## Installation

### Backend

The app relies on a Postgres database to ensure data persistence.

1. Install PostgreSQL on your local machine and open it.
2. Create a database with the following properties (you can find or modify them using the .env file located in /api):
   - user: postgres
   - password: 1234
   - host: localhost
   - database name: ruleofthumb
   - port: 5432
3. Open the project folder in the console.
4. In the project folder, change to the api folder (cd api).
5. Install dependencies (npm install).
6. Run the backend server (type `nodemon` or `node index.js`).
7. **Note**: Anytime the backend server is executed (step 6), all data in the database table will return to its default state. This is useful the first time you run the app because otherwise, the table would be empty. However, if you want the data to persist even if the server is stopped and restarted, you need to do the following:
   - Open the file `index.js` located in `api/src`.
   - Replace line 9 with `const force = false;`.

### Client

1. Open the project folder in the console.
2. Change to the client folder (cd client).
3. Install dependencies (npm install).
4. Run the project (npm run dev).
5. Open your browser and navigate to http://localhost:5173.

Happy voting! 🙌
