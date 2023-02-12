// const workoutlist =document.querySelector(".db-list");



// const instructorHandlebar = ()=>{
// const response = await fetch("/api/instructor",{
//     body: JSON.stringify({title,type,duration}),
//     headers:{"content-type: 'application/json"
// },
// })
// }

const generateWorkout= (id)=>{
    fetch(`/api/instructor/${id}`)
    .then(resp => resp.json())
    .then(data => {
        // console.log(data)
        let videoId = data.video.split("v=")[1]
        console.log(videoId)
        document.getElementById("workout-name").textContent= data.title;
        document.getElementById("workout-video").innerHTML = `
        <iframe
src="http://www.youtube.com/embed/${videoId}">
</iframe>
        `
    })
}