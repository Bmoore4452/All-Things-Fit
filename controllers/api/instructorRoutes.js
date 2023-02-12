const { Instructor } = require('../../models');
// const { restore, getAttributes } = require('../../models/Cardio');

const router = require('express').Router();

// router.get('/instructor', async(req, res)

router.get('/', async (req, res) => {
  //   res.render('instructor');
  // });


 try{
    const instructorData = await Instructor.findAll({
        include:{
            attributes:['video','title','type','duration']
        }
    });
    const workouts = instructorData.map((workout) => 
        workout.get({plain:true})
    );
    res.render('instructor',{workouts});
    
    if(!instructorData){
        res.status(404).json({message:"There are currently no Insturctor Workouts"})
    }
    res.status(200).json(instructorData);
 } catch(err){
    res.status(500).json(err);
 }
});


module.exports = router;