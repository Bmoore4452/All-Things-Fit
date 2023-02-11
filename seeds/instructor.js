const { Instructor } = require("../models");

const instructorData = [
  {
    video: "https://www.youtube.com/watch?v=M0uO8X3_tEA",
    title: "Full Body Blast",
    type: "Full Body",
    duration: "00:29:02",
  },
  {
    video: "https://www.youtube.com/watch?v=6hOAGDbkLOw",
    title: "Glute Jam",
    type: "Lower Body",
    duration: "00:10:17",
  },
  {
    video: "https://www.youtube.com/watch?v=RPbscYct3I4",
    title: "Dumbbell Drive",
    type: "Upper Body",
    duration: "00:25:31",
  },
];

const seedInstructor = () => Instructor.bulkCreate(instructorData);

module.exports = seedInstructor;
