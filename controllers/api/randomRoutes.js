const { Cardio, LowerBody, UpperBody } = require("../../models");
// const { restore, getAttributes } = require('../../models/Cardio');

const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("random", { pikachu: req.session.loggedIn });
});
router.get("/cardio", (req, res) => {
  Cardio.findAll()
    .then((cardioData) => {
      res.status(200).json(cardioData);
      console.log(cardioData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/LowerBody", (req, res) => {
  LowerBody.findAll()
    .then((LowerBodyData) => {
      res.status(200).json(LowerBodyData);
      console.log(LowerBodyData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.get("/UpperBody", (req, res) => {
  UpperBody.findAll()
    .then((UpperBodyData) => {
      res.status(200).json(UpperBodyData);
      console.log(UpperBodyData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
