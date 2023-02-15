const router = require("express").Router();
const fitness = require('fitness-calc');
const { Profile } = require("../../models");
// const mensBMR = fitness.BMR_men(weight, height, age);
// const womensBMR = BMR_women(weight, height, age);
// const idealBodyWeightW = IBW_women(height, age);
// const idealBodyWeightM = IBW_men(height, age);


// using destructuring the argument to make it easier to call and read. 
function getBMR({ gender, weight, height, age }) {
    if(gender === "female"){
        bmr= fitness.BMR_women(weight, height, age);
        return brm;
    }else{ 
        bmr =fitness.BMR_men(weight, height, age)
        return bmr;
    }
}
function getIBW({ height, age }){
    if (gender === "female"){
        ibw = fitness.IBW_women( height, age);
        return brm;
    }
       ibw = fitness.IBW_men( height, age)
        return bmr;
    
}
router.get('/', async(req, res) => {
    res.render("profile", { pikachu: req.session.loggedIn });
});

router.get("/api/profile/data/", async (req,res)=> {
const profileData = await Profile.findOne({where:{}})
res.status(200).json(profileData);
})


router.get("/data", async (req,res)=> {
    console.log('~~~ session', req.session)
    
    const profileData = await Profile.findOne({ where:{ user_id: req.session } })
    console.log('~~~ profileData', profileData)
    
    res.status(200)
    res.render("profile",{
       
        age:profileData.age,
        height:profileData.height, 
        weight: profileData.weight, 
        gender:profileData,
        goal:profileData
    });
})


router.post('/userinfo', async(req,res) =>{
    console.log('~~~ session', { session: req.session })
    const { user_id } = req.session
    // descructuring req.body to use though the create
    const { weight, height, age, gender, goal } = req.body 
    Profile.create({
        height,
        weight,
        gender,
        age, 
        bmr: getBMR({ gender, weight, height, age }),
        ibw: getIBW({gender, height, age}),
        goal,
        user_id,
    })
    .catch(err=>{
        res.status(500).json(err)
    })


})

// router.post("/", async (req, res) => {});

module.exports = router;
