const { Router } = require("express");

const router = Router();
const { getAllPeople, votePerson } = require("../controllers/index.js");

router.get("/", async (req, res) => {
  const response = await getAllPeople();
  res.json(response);
});
router.put("/", async (req, res) => {
  const response = await votePerson(req);
  res.json(response);
});

module.exports = router;
