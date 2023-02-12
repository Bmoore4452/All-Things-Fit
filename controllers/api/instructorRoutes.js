const { Instructor } = require('../../models');
// const { restore, getAttributes } = require('../../models/Cardio');

const router = require('express').Router();

// router.get('/instructor', async(req, res)
// gett all workouts for 
router.get('/', async (req, res) => {

 try{
    const instructorData = await Instructor.findAll()
        // {
    //     include:{
    //         attributes:['title','type','duration']
    //     }
        

    const workouts = instructorData.map((workout) => 
        workout.get({plain:true})
    );
    res.render('instructor',{workouts});
    
    // if(!instructorData){
    //     res.status(404).json({message:"There are currently no Insturctor Workouts"})
    // }
    // res.status(200).json(instructorData);
 }catch(err){
    res.status(500).json(err);
 }
});



// get video by workout id

// router.get("/", async(req,res)=>{
//   try{
//     const instructorData = await Instructor.findByPk(req.param.id),{
//       include:{
//         attributes:'video';
//     }
//     }
// }})
  

module.exports = router;