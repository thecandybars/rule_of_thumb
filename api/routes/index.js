const { Router } = require("express");

const router = Router();
const { getAllPeople } = require("../controllers/index.js");

router.get("/", async (req, res) => {
  const response = await getAllPeople();
  res.json(response);
});

module.exports = router;
