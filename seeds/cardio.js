const { Cardio } = require("../models");
const cardioData = [
  {
    workout: "Run",
    description:
      "This is a high intensity run with short periods of walking. You will alternate running and walking. ",
    distance: "2 miles",
    time: 20,
    numberOfSet: 4,
  },
  {
    workout: "Walk",
    description:
      "Low impact exercise that will have you outside and enjoying the fresh air. ",
    distance: "2 miles",
    time: 35,
    numberOfSet: 1,
  },
  {
    workout: "Swimming",
    description:
      "This will give you the opprutinity to enjoy the water and get exercise. ",
    distance: "50 laps",
    time: 35,
    numberOfSet: 5,
  },
  {
    workout: "Cycling",
    description:
      "Great indoor workout that will have you listening to good music and sweating. ",
    distance: "10 miles",
    time: 60,
    numberOfSet: 1,
  },
];

const seedCardio = () => Cardio.bulkCreate(cardioData);

module.exports = seedCardio;
