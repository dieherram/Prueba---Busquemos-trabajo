// PRUEBA FINAL ->
const baseUrl ='https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?'
let full_time = true;
const btn = document.getElementById(`getJobs`);
var description = document.getElementById(`description`).value;
var location = document.getElementById(`location`).value;
btn.addEventListener('click', function () {
axios.get(`${baseUrl}description=${description}&full_time=${full_time}&location=${location}`)
.then(response => {
    if(response.data.length == 0){
        alert('No hay empleos para tu búsqueda')
    }
    response.data.forEach(job => drawJob(job))
})
})

function drawJob(job){
    var parr = document.createElement('p')
    var text = document.createTextNode(job.title)
    parr.appendChild(text)
    document.body.appendChild(parr)
}