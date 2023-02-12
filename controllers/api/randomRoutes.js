const { Cardio, LowerBody, UpperBody } = require("../../models");
// const { restore, getAttributes } = require('../../models/Cardio');

const router = require("express").Router();

router.get("/", (req, res) => {
  Cardio.findAll()
    .then((cardioData) => {
      var workout = {};
      var cardio = cardioData;
      var cardioLength = cardio.length;

      workout = Math.floor(Math.random() * cardioLength) + 1;

      res.render("random", { workout: cardioData });
      console.log(workout);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
