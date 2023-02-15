const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('homepage',{pikachu: req.session.loggedIn});
  });
// keey commented out till sessions are working
//   router.get("/profile", async (req, res) => {
//     fetch("/api/profile/data/"+ req.session.userId).then(response=>{
// return response.json()
//     }).then(data=>{
//       res.render("profile",{name:profileData.userName,age:profileData.age,height:profileData.height, weight: profileData.weight, gender:profileData});
//     })
   
//   });


  module.exports= router;