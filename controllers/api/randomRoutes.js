const router = require("express").Router();

router.get("/", async (req, res) => {
  res.render("random");
});

module.exports = router;