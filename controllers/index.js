const router = require('express').Router();
// const landingPageRoute = require("/landingPageRoute");
const apiRoutes = require('./api');
const hompepage =require('./homepageRouter.js');

router.use('/', hompepage);
router.use("/api",apiRoutes);


module.exports = router;