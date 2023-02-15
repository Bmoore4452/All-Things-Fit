const router = require('express').Router();

router.get('/', async(req, res) => {
    res.render("shared", { pikachu: req.session.loggedIn });
});

module.exports = router;