

fetch('/search')
.then(res =>res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

function displayData(){
    
}