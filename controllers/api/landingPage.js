const router = require("express").Router();

router.get("/", async (req, res) => {
  res.render("landingpage", { pikachu: req.session.loggedIn });
});

module.exports = router;
