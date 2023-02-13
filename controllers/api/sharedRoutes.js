const router = require('express').Router();

router.get('/', async(req, res) => {
res.render(sharedWorkout)
});

router.post('/', async(req, res) => {

});

module.exports = router;