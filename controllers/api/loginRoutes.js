const router = require('express').Router();
const {User} = require('../../models')

router.get('/', async(req, res) => {
    res.render("login", { pikachu: req.session.loggedIn });
});

router.post('/', (req, res) => {
    // destructure username and password?
    User.findOne({
        where: 
        {name: req.body.name,
        password: req.body.password
        }})
        .then((user)=>{
            if(user){
                req.session.save(()=>{
                    req.session.userId = user.id
                    req.session.userName = user.name
                    req.session.loggedIn = true
                    res.status(200).json({ message: "Success" });
                });
            }else{
                res.status(400).json({ message: "User not found" });
            }
        })
})

module.exports = router;