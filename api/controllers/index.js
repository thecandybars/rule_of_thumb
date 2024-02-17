const axios = require("axios");
const { People } = require("../db.js");

async function getAllPeople() {
  const people = await People.findAll({});
  return people;
}
module.exports = {
  getAllPeople,
};
