const router = require("express").Router();
const fitness = require('fitness-calc');
// const mensBMR = BMR_men(weight, height, age);
// const womensBMR = BMR_women(weight, height, age);
// const idealBodyWeightW = IBW_women(height, age);
// const idealBodyWeightM = IBW_men(height, age);



router.get("/", async (req, res) => {
  res.render("profile");
});

router.post("/", async (req, res) => {});

module.exports = router;



// const weight = 100;
// const reps = 5;

// const oneRepMax = fitness.oneRepMaxEpley(weight, reps);
// console.log(oneRepMax);

// res.render("profile",{title:oneRepMax});