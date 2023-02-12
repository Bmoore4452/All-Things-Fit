const { response, response } = require("express");

const gerneratedWorkout = {};

const generateId = () => {
  const workoutlist = document.querySelector(".db-list");

  const instructorHandlebar = async () => {
    const response = await fetch("/api/random", {
      headers: { "content-type": "application/json" },
      body: JSON.stringify(workout),
    }).then(random(response));
  };
};

function random(data) {
  var workout = {};
  var cardio = data;
  var cardioLength = cardio.length;

  workout = Math.floor(Math.random() * cardioLength) + 1;
}
