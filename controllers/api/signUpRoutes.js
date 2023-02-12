const router = require('express').Router();
const {User} = require('../../models')
router.get('/', async(req, res) => {
    res.render("signup")
});

router.post('/', async(req, res) => {
    User.create({
        name: req.body.name,
        email: req.body.email
    })
    .then(createdUser => {
        req.session.save(()=>{
            req.session.userId = createdUser.id
            req.session.loggedIn = true
            res.redirect("/api/landingpage")
        })

    })
    .catch (err => {
        res.status(500).json(err)
    })
});

module.exports = router;