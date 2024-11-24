const url = ' https://api.unsplash.com/search/photos';
const APIKEY = 'q-Q28KB-Tm1tSvJ-copIMQOGxagnyLiazs6gf0mZMO4';
const search_btn = document.getElementById('search-btn');
search_btn.addEventListener('click',customiseURL)
async function  customiseURL(){
    try{
        const searchInput = document.getElementById('search-bar').value.trim();
        console.log(searchInput)

    }catch(error){
        console.error(error)

    }
}