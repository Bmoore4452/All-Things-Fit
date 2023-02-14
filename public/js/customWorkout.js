const type = document.getElementById("type");
const title = document.getElementById("title");
const description = document.getElementById("description");
const WOplan = document.getElementById("temp");
const WOprogram = [];

const addWorkout = () => {
    let obj = {
        type: type.value,
        title: title.value,
        desc: description.value,
    }
    if(!document.getElementById(obj.title)){
        WOprogram.push(obj);
    }
    
    WOprogram.forEach(workout => {
        if(!document.getElementById(workout.title)){
            WOplan.innerHTML += `<div id="${workout.title}"><h5>${workout.title}</h5><p>${workout.type}</p><p>${workout.desc}</p></div>`;
        }
    });
}
