const router = require("express").Router();
const fitness = require('fitness-calc');
const { Profile } = require("../../models");
// const mensBMR = fitness.BMR_men(weight, height, age);
// const womensBMR = BMR_women(weight, height, age);
// const idealBodyWeightW = IBW_women(height, age);
// const idealBodyWeightM = IBW_men(height, age);

function getBMR(gender,weight,height,age){
    if(gender === "female"){
        bmr= fitness.BMR_women(weight, height, age);
        return brm;
    }else{ 
        bmr =fitness.BMR_men(weight, height, age)
        return bmr;
    }
}

router.get('/', async(req, res) => {
    res.render("profile")
});

router.get("/data/:id", async (req,res)=> {
const profileData = await Profile.findOne({where:{user_id:req.params.id}})
res.status(200).json(profileData);
})


router.post('/userinfo', async(req,res) =>{
    
    Profile.create({
        height:req.body.height,
        weight: req.body.weight,
        gender:req.body.gender,
        age:req.body.age, 
        bmr:getBMR(req.body.gender.req.body.weight,req.body.height,req.body.age),
        goal:req.body.goal,
        user_id: req.session.userId,


    })
    .catch(err=>{
        res.status(500).json(err)
    })


})

// router.post("/", async (req, res) => {});

module.exports = router;
