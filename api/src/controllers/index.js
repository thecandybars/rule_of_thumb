const { People } = require("../db.js");

async function getAllPeople() {
  const people = await People.findAll({ order: [["id", "ASC"]] });
  return { success: !!people.length, data: people };
}
async function votePerson(data) {
  const { body } = data;
  const person = await People.findByPk(body.id);
  let peopleEdited = {};
  if (person) {
    const resp = body.vote
      ? {
          ...person.dataValues,
          lastUpdated: new Date(),
          votePositive: person.votePositive + 1,
        }
      : {
          ...person.dataValues,
          lastUpdated: new Date(),
          voteNegative: person.voteNegative + 1,
        };
    peopleEdited = await People.upsert({ ...resp });
  }
  return {
    success: !!person,
    data: peopleEdited[0],
  };
}
module.exports = {
  getAllPeople,
  votePerson,
};
