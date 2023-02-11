const router = require('express').Router();

router.get('/', async(req, res) => {
    res.render("signup")
});

router.post('/', async(req, res) => {

});

module.exports = router;