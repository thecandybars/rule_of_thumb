require("dotenv").config();
const People = require("./models/People");

const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

let sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  { logging: false, native: false }
);

People(sequelize);

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
