const router = require('express').Router();
const {User} = require("../../models")
// localhost:3001/api/custom

router.get('/', async(req, res) => {
    res.render("customWorkout");
});

router.post('/add', async(req, res) => {
    let {} = req.body;

    temp.create({
        UserName,
        Workout
    })
    .then()
    .catch(err => console.log(err));
});

module.exports = router;