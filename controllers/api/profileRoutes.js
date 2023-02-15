const router = require("express").Router();
const fitness = require('fitness-calc');
const { Profile } = require("../../models");
let weight = 100;
let height= 5;
let age =56;
const reps = 5;
const mensBMR = fitness.BMR_men(weight, height, age);
const womensBMR = fitness.BMR_women(weight, height, age);
const idealBodyWeightW = fitness.IBW_women(height, age);
const idealBodyWeightM = fitness.IBW_men(height, age);


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
const profileData = await Profile.findOne({where:{ user_id: req.session }})
res.status(200).json(profileData);
})


router.get("/data", async (req,res)=> {
    // console.log('~~~ session', user_id)
    
    const profileData = await Profile.findOne({ where:user_id} )
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

// localhost:3001/api/profile
router.post('/infouser', async(req,res) =>{
  
    // getIBW({ gender, height, age });
    // getBMR({ gender, weight, height, age })
    // descructuring req.body to use though the create
    const { weight, height, age, gender, goal,ibw,bmr } = req.body 
    // await getIBW({ gender, height, age });
    // await getBMR({ gender, weight, height, age })
    Profile.create({
        height,
        weight,
        gender,
        age, 
        bmr: await getBMR({ gender, weight, height, age }),
        ibw: await ibw,
        goal,
        user_id:req.session.userId,
    })
    .then((data) => {res.json(data)})
    .catch(err=>{
        res.status(500).json(err)
    })


})

// router.post("/", async (req, res) => {});

module.exports = router;
