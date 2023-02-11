const router = require('express').Router();
const instructorRoutes = require('./instructorRoutes');
const sharedRoutes = require('./sharedRoutes');
const loginRoutes = require('./loginRoutes');
const signUpRoutes = require('./signUpRoutes');



router.use("/instructor", instructorRoutes);
router.use("/shared",sharedRoutes);
router.use("/login",loginRoutes);
router.use("/signup",signUpRoutes);

module.exports= router;


