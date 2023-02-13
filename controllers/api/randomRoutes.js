const { Cardio, LowerBody, UpperBody } = require("../../models");
// const { restore, getAttributes } = require('../../models/Cardio');

const router = require("express").Router();

router.get("/", (req, res) => {
  Cardio.findAll()
    .then((cardioData) => {
      res.render("random", { workout: cardioData });
      console.log(cardioData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;
