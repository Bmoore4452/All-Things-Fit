const router = require('express').Router();

router.get('/', async(req, res) => {
    res.render("shared");
});

module.exports = router;