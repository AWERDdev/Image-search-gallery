const ImageDisplay = document.querySelector('.img-Display');// Image container
const url = ' https://api.unsplash.com/search/photos';
const APIKEY = 'q-Q28KB-Tm1tSvJ-copIMQOGxagnyLiazs6gf0mZMO4';
const search_btn = document.getElementById('search-btn');
search_btn.addEventListener('click',customiseURL)
search_btn.addEventListener('click',fetchData)
let newURL;

//* function that will set the url needed to fetch the data from the API
 function  customiseURL(){
    //* get search query
        ImageDisplay.innerHTML = ''
    const searchInput = document.getElementById('search-bar').value.trim();
    if(!searchInput){
console.log('please enter a value')
    }else{
         newURL = `${url}?query=${searchInput}&client_id=${APIKEY}`
        // console.log(searchInput)//test
        // console.log(newURL)
    }

 
}
async function fetchData(){
try{
const response = await fetch(newURL);
const data = await response.json()
renderImgae(data.results)
console.log(data)
}catch(error){
    console.error(`failed to fecth data ${error}`)
}
}
//*for rendering Images
function renderImgae(results){
    results.forEach(image =>{
        const Img = document.createElement('img');//* image element
        Img.classList.add('img');//* styling
        Img.src = image.urls.small//* image source
    ImageDisplay.appendChild(Img)//* appending image
    })
}