const router = require('express').Router();
const {User} = require("../../models")
// localhost:3001/api/custom

router.get('/', async(req, res) => {
    res.render("customWorkout", { pikachu: req.session.loggedIn });
});

router.post('/add', async(req, res) => {
    Workout.create({ 

    })
    .then()
    .catch(err => console.log(err));
});

module.exports = router;