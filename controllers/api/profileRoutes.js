const router = require("express").Router();
const fitness = require('fitness-calc');
const { Profile } = require("../../models");
// const mensBMR = BMR_men(weight, height, age);
// const womensBMR = BMR_women(weight, height, age);
// const idealBodyWeightW = IBW_women(height, age);
// const idealBodyWeightM = IBW_men(height, age);





router.get("/data/:id", async (req,res)=> {
const profileData = await Profile.findOne({where:{user_id:req.params.id}})
res.status(200).json(profileData);
})



router.post("/", async (req, res) => {});

module.exports = router;


