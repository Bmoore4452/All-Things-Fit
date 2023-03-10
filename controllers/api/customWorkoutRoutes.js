const router = require('express').Router();
const {Custom} = require("../../models");
// localhost:3001/api/custom

router.get('/', async(req, res) => {
    res.render("customWorkout", { pikachu: req.session.loggedIn });
});
//localhost:3001/api/custom/add
router.post('/add', async(req, res) => {
    console.log(req.body.workout);
    const temp = await Custom.create({ 
        workout: req.body.workout,
        user_name: req.session.userName,
        user_id: req.session.userId
    })
    .then((data) => {res.json(data)})
    .catch(err => console.log(err));
});

module.exports = router;