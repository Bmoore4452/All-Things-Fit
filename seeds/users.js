const { User } = require("../models");

const userdata = [
  {
    name: "Tommy John",
    email: "TommysJohn@gmail.com",
    password: "JohnTom369"
  },
  {
    name: "Ham Strings",
    email: "HamsStrings@gmail.com",
    password: "eatMOREkale420"
  },
  {
    name: "Shin Splints",
    email: "ShinsSplint@aol.com",
    password: "runningHURTSme"
  },
  {
    name: "Dream Shake",
    email: "DreamsShake@hotmail.com",
    password: "chugMOREmilk"
  },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
