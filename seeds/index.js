const sequelize = require("../config/connection");

const seedInstructor = require("./instructor");
const seedUsers = require("./users");
const seedCardio = require("./cardio");
const seedLowerBody = require("./lowerbody");
const seedUpperBody = require("./upperbody");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedInstructor();

  await seedUsers();

  await seedCardio();

  await seedLowerBody();
  
  await seedUpperBody();

  process.exit(0);
};

seedAll();
