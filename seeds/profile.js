const {Profile} = require("../models")
//userName, height,weight, age, goal,user_id

const profileData = [
    {
       userName: "Fred",
       height: 72,
       weight: 189,
       age:35,
       goal: "get bigger",
       gender:"male",
       user_id: 2,
    },
    {
        userName: "Annie",
        height: 52,
        weight: 105,
        age:21,
        goal: "lose weight",
        gender:"female",
        user_id: 5,
     },
     {
        userName: "Jenzie",
        height: 60,
        weight: 120,
        age:18,
        goal: "Workout 5 times a week. ",
        gender:"female",
        user_id: 10,
     },
     {
        userName: "Jenzie",
        height: 73,
        weight: 220,
        age:27,
        goal: "Be ready for a 5K. ",
        gender:"female",
        user_id: 6,
     }

]

const seedProfile = () => Profile.bulkCreate(profileData);
module.exports = seedProfile;