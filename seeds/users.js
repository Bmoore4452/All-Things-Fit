const { User } = require("../models");

const userdata = [
  {
    name: "Tommy John",
    email: "TommysJohn@gmail.com",
  },
  {
    name: "Ham Strings",
    email: "HamsStrings@gmail.com",
  },
  {
    name: "Shin Splints",
    email: "ShinsSplint@aol.com",
  },
  {
    name: "Dream Shake",
    email: "DreamsShake@hotmail.com",
  },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
