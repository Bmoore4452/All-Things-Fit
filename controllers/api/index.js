const router = require("express").Router();
const instructorRoutes = require("./instructorRoutes");
const sharedRoutes = require("./sharedRoutes");
const loginRoutes = require("./loginRoutes");
const signUpRoutes = require("./signUpRoutes");
const landingpage = require("./landingPage");
const randomRoutes = require("./randomRoutes");

router.use("/instructor", instructorRoutes);
router.use("/shared", sharedRoutes);
router.use("/login", loginRoutes);
router.use("/signup", signUpRoutes);
router.use("/landingpage", landingpage);
router.use("/random", randomRoutes);

module.exports = router;
