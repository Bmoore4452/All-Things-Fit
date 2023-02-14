// place holder to pass in the workout that is generated from the randomizer.
const generatedWorkout = {};
const generatedWorkout2 = {};
const generatedWorkout3 = {};
// associate the id from cardio handlebar file to the cardio js file.
const cardioRandom = document.getElementById("addCardio");
let randCard = document.getElementById("randomCardio");
const LowerBodyRandom = document.getElementById("addLowerbody");
let randLower = document.getElementById("randomLowerBody");
const UpperBodyRandom = document.getElementById("addUpperbody");
let randUpper = document.getElementById("randomUpperBody");
//
const generateCardio = () => {
  fetch("/api/random/cardio")
    .then((resp) => resp.json())
    .then((data) => {
      random(data);
    });

  //   const workoutlist = document.querySelector(".db-list");
  // function to get data from the cardio database. The fetch data will be used in the random function to  generate a random number that will then be used to select which workout will be passed back to the page.
  console.log("here");
};
const generateLowerBody = () => {
  fetch("/api/random/Lowerbody")
    .then((resp) => resp.json())
    .then((data) => {
      random2(data);
    });

  //   const workoutlist = document.querySelector(".db-list");
  // function to get data from the cardio database. The fetch data will be used in the random function to  generate a random number that will then be used to select which workout will be passed back to the page.
  console.log("here");
};
const generateUpperBody = () => {
  fetch("/api/random/Upperbody")
    .then((resp) => resp.json())
    .then((data) => {
      random3(data);
    });

  //   const workoutlist = document.querySelector(".db-list");
  // function to get data from the cardio database. The fetch data will be used in the random function to  generate a random number that will then be used to select which workout will be passed back to the page.
  console.log("here");
};

// random function the data passed in will be workoutData from the fetch.
// it will get the lenght of the workoutData and will generate a random number.
function random(data) {
  var cardio = data;
  var cardioLength = cardio.length;

  const generatedWorkout = Math.floor(Math.random() * cardioLength);
  const workoutToDisplay = cardio[generatedWorkout];
  console.log(workoutToDisplay.description);
  const description = `<div id="tester"> Your Cardio exercise is ${workoutToDisplay.workout}</div>`;
  if (!document.getElementById("tester")) {
    randCard.innerHTML += description;
  }
}
function random2(data) {
  var lower = data;
  var lowerLength = lower.length;

  const generatedWorkout2 = Math.floor(Math.random() * lowerLength);
  const workoutToDisplay2 = lower[generatedWorkout2];
  console.log(workoutToDisplay2.workout);
  const description = `<div id="tester2"> Your Lower Body exercise is ${workoutToDisplay2.workout}</div>`;
  if (!document.getElementById("tester2")) {
    randLower.innerHTML += description;
  }
}
function random3(data) {
  var upper = data;
  var upperLength = upper.length;

  const generatedWorkout3 = Math.floor(Math.random() * upperLength);
  const workoutToDisplay3 = upper[generatedWorkout3];
  console.log(workoutToDisplay3.workout);
  const description = `<div id="tester3"> Your Upper Body exercise is ${workoutToDisplay3.workout}</div>`;
  if (!document.getElementById("tester3")) {
    randUpper.innerHTML += description;
  }
}

function test() {
  console.log("clicked");
}
// user can select which of the types workouts they would like to include in the workout generation.
cardioRandom.addEventListener("click", generateCardio);
LowerBodyRandom.addEventListener("click", generateLowerBody);
UpperBodyRandom.addEventListener("click", generateUpperBody);

// instructorHandlebar();
// when the user selects it will then be added to the randomWork[] When they are ready to generate do a foreach with the randomWork and each will do use the random function and  the workout will be pushed or mapped to the showGenerated workout.

// will start the function to generate random workouts.
// document.getElementById("randomWorkout").addEventListener("click",());
// add function after click

// need to get workout using the number that is generated by random function.