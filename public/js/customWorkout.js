const type = document.getElementById("type");
const title = document.getElementById("title");
const description = document.getElementById("description");
const WOplan = document.getElementById("temp");
const WOprogram = [];
const user = sessionStorage.getItem("userID")
console.log(user);
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
            WOplan.innerHTML += `<div id="${workout.title}"><h5>${workout.title}</h5><p>${workout.type}</p><p>${workout.desc}</p><button onclick="kill('${workout.title}')">Delete</button></div>`;
        }
    });
}

// removes workout from array and view
const kill = (index) => {
    //remove array
    WOprogram.splice(WOprogram.indexOf(index));
    //remove html
    let temp = document.getElementById(index);
    temp.remove();
}

// pushes array to database
const post = () => {
    if (WOprogram.length > 0) {
        let plan = JSON.stringify(WOprogram);
        // call the post api
        fetch('/api/custom/add', {
            method: 'POST',
            headers: {
                Accept: 'application.json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Id: user,
                workout: plan,
            }),
            cache: 'default'
        })
        window.location.replace("/api/shared");
    } else{
        // create error box
        
        console.log(`please add a workout to the plan`);
    }
    
}