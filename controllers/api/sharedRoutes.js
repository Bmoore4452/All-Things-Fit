const router = require('express').Router();
const {Custom} = require("../../models")

router.get('/', async(req, res) => {
    console.log(Custom);
    res.render("sharedWorkout", {pikachu:req.session.userId, Gangar:req.session.userName, eve:Custom});
});

module.exports = router;