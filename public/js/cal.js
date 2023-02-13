const { response, response } = require("express");
const fitness = require('fitness-calc');
const cal = document.getElementById("oneRep").innerHTML;


const weight = 100;
const reps = 5;

const oneRepMax = fitness.oneRepMaxEpley(weight, reps);
console.log(oneRepMax)



document.getElementById("oneRep").addEventListener(populateCalories);