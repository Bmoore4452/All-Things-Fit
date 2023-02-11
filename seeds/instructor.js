const { Intructor } = require("../models");

const instructorData = [
  {
    video: "",
    title: "",
    type: "",
    duration: "",
  },
  {
    video: "",
    title: "",
    type: "",
    duration: "",
  },
];

const seedInstructor = () => Intructor.bulkCreate(instructorData);

module.exports = seedInstructor;
