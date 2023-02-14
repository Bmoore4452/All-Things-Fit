const router = require('express').Router();
const {Custom} = require("../../models");
// localhost:3001/api/custom

router.get('/', async(req, res) => {
    res.render("customWorkout");
});

router.post('/add', async(req, res) => {
    const temp = await Custom.create({ 
        workout: req.body.workout,
        user_name: req.session.user_name,
        user_id: req.session.user_id
    })
    .then((data) => {res.json(data)})
    .catch(err => console.log(err));
    console.log(temp);
});

module.exports = router;