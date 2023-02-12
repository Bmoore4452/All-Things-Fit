const { LowerBody } = require("../models");

const lowerBodyData = [
  {
    workout: "Leg Press",
    numberOfSets: 3,
    numberOfReps: 15,
  },
  {
    workout: "Leg Extention",
    numberOfSets: 3,
    numberOfReps: 15,
  },
  {
    workout: "Squats",
    numberOfSets: 2,
    numberOfReps: 20,
  },
  {
    workout: "Calf Raises",
    numberOfSets: 3,
    numberOfReps: 10,
  },
];

const seedLowerBody = () => LowerBody.bulkCreate(lowerBodyData);

module.exports = seedLowerBody;