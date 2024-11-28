const search_btn = document.getElementById('search-btn'); 
const img_Display = document.querySelector('.img-Display');
const form = document.getElementById('Form')
form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const searchInput = document.getElementById('search-bar').value.trim();
    if (!searchInput) {
        img_Display.innerHTML = '<p>Please enter a search query.</p>';
        return;
    }

    try {
        // Send the search query to the server
        const response = await fetch('/SearchOutput', {
            method: 'POST', // Use POST for better data handling
            headers: {
                'Content-Type': 'application/json',
            },
        });
console.log(searchInput)
        
        if (!response.ok) {
            throw new Error('Failed to fetch data from the server.');
        }

        const data = await response.json();
        displayResults(data); // Display the fetched results
    } catch (error) {
        console.error(error);
        img_Display.innerHTML = '<p>An error occurred while fetching data.</p>';
    }
});

function displayResults(data) {
    // Clear previous results
    img_Display.innerHTML = '';

    // Display images from the server response
    if (data.results && data.results.length > 0) {
        data.results.forEach((result) => {
            const img = document.createElement('img');
            img.src = result.urls.small;
            img.alt = result.alt_description || 'Unsplash image';
            img.style.margin = '10px';
              img_Display.appendChild(img);
        });
    } else {
        img_Display.innerHTML = '<p>No results found.</p>';
    }
}