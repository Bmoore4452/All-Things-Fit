const { Instructor } = require('../../models');
// const { restore, getAttributes } = require('../../models/Cardio');

const router = require('express').Router();


router.get("/", (req, res) => {
  Instructor.findAll()
    .then(instructorData => {
      res.render("instructor", {instructors: instructorData });
      console.log(instructorData)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



module.exports = router;