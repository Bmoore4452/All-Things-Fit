const workoutlist =document.querySelector(".db-list");



const instructorHandlebar = ()=>{
const response = await fetch("/api/instructor",{
    body: JSON.stringify({title,type,duration}),
    headers:{"content-type: 'application/json"
},
})
}