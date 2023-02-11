const { Instructor } = require('../models');
const { restore, getAttributes } = require('../models/Cardio');

const router = require('express').Router();

router.get('/', async(req, res) => {
 try{
    const instructorData = await Instructor.findAll({
        include:{
            attributes:['video','title','type','duration']
        }
    });
    if(!instructorData){
        res.status(404).json({message:"There are currently no Insturctor Workouts"})
    }
    res.status(200).json(instructorData);
 } catch(err){
    res.status(500).json(err);
 }
});

module.exports = router;