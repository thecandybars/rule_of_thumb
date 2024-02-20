# 👋 Welcome to Rule of Thumb™️

## Overview

Our client's app Rule of Thumb™️ tracks the sentiment of their users on trending and controversial people from different fields, including politics, business, media and entertainment, etc. The website has the following requirement: they need to present their users with an easy way to share their opinion on each presented celebrity, using votes (thumbs up and down), and display the results to the user while the poll is open. These features should be available to all users, regardless of where they're accessing the website from, whether it's a smartphone, a tablet or a desktop computer.

## The project

The project consists of a single repository containing the backend and the frontend on two different folders.

### Backend

The app relies on a Postgres database to ensure data persistance

1. Install Postgress on your local machine and open it
2. Create a database with the following properties. You can find them in the .env file
   - user: postgres
   - password: 1234
   - host: localhost
   - name: ruleofthumb
   - localhost: 5432
3. Open the project folder on the console
4. On the project folder, change to api folder (cd api)
5. Install dependencies (npm install)
6. Run the backend server (nodemon or node index.js)
7. NOTE : anytime the backend server is executed (step 6) all the data in the database table will return to the default state. This is useful the first time you run the app because otherwise the table would be empty. However, if you want the data to persist even if the server is stopped and run again, you need to do the following:
   - Open the file index.js located in api/src
   - Replace line 9 with const force = false;

### Client

1. Open the project folder on the console
2. Change to client folder (cd client)
3. Install dependencies (npm install)
4. Run the project (npm run dev)
5. Open your browser and navigate to http://localhost:5173

Happy voting! 🙌
