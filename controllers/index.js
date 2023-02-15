const router = require('express').Router();
// const landingPageRoute = require("/landingPageRoute");
const apiRoutes = require('./api');
const homepageRoute = require('./homeRoutes')

router.use('/', homepageRoute);
router.use('/api',apiRoutes);


module.exports = router;