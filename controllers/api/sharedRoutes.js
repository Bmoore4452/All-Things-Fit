const router = require('express').Router();
const{Custom} = require("../../models");

router.get('/', async(req, res) => {
    Custom.findAll()
        .then((data) => {
            res.render("sharedWorkout", {Custom: data});
            console.log(Custom);
        })
        .catch((err) => {
            res.status(500).jason(err);
        })
});

module.exports = router;