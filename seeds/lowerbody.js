const { LowerBody } = require("../Model");

const lowerBodyData = [
  {
    workout: "Leg Press",
    numberOfSet: 3,
    numberOfRep: 15,
  },
  {
    workout: "Leg Extention",
    numberOfSet: 3,
    numberOfRep: 15,
  },
  {
    workout: "Squats",
    numberOfSet: 2,
    numberOfRep: 20,
  },
  {
    workout: "Calf Raises",
    numberOfSet: 3,
    numberOfRep: 10,
  },
];

const seedLowerBody = () => LowerBody.bulkCreate(lowerBodyData);

module.exports = seedLowerBody;