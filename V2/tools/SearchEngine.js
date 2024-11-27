
const url = ' https://api.unsplash.com/search/photos';
const APIKEY = 'q-Q28KB-Tm1tSvJ-copIMQOGxagnyLiazs6gf0mZMO4';
const search_btn = document.getElementById('search-btn');
search_btn.addEventListener('click',customiseURL)
let newURL;

//* function that will set the url needed to fetch the data from the API
 function  customiseURL(){
    //* get search query
    const searchInput = document.getElementById('search-bar').value.trim();
    if(!searchInput){
console.log('please enter a value')
    }else{
        let newURL = `${url}?query=${searchInput}&client_id=${APIKEY}`
        console.log(searchInput)//test
        console.log(newURL)
    }

 
}
function fetchData(){

}