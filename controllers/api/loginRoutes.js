const router = require('express').Router();
const {User} = require('../../models')

router.get('/', async(req, res) => {
    res.render("login")
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
                res.status(200).json({ message: "Success" });
            }else{
                res.status(400).json({ message: "User not found" });
            }
        })
})

module.exports = router;