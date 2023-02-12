const { UpperBody } = require("../models");

const upperBodyData = [
  {
    workout: "Chest Press",
    numberOfSet: 3,
    numberOfRep: 15,
  },
  {
    workout: "Biscep curls",
    numberOfSet: 3,
    numberOfRep: 15,
  },
  {
    workout: "Tricep Kickback",
    numberOfSet: 2,
    numberOfRep: 20,
  },
  {
    workout: "Skull Crusher",
    numberOfSet: 3,
    numberOfRep: 10,
  },
];


const seedUpperBody = () => UpperBody.bulkCreate(upperBodyData);

module.exports = seedUpperBody;