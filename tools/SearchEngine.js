document.getElementById('Form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent form submission
    const query = document.getElementById('search-bar').value;
    if (!query) {
        alert('Please enter a search term.');
        return;
    }
    const response = await fetch(`/search?searchInput=${encodeURIComponent(query)}`);
    
    if (response.ok) {
        const data = await response.json();
        displayData(data.results); // Pass the results to the displayData function
    } else {
        console.error('Error fetching data:', response.statusText);
    }
});

function displayData(results) {
    const imageResults = document.querySelector('.img-Display');
    imageResults.innerHTML = ''; // Clear previous results

    results.forEach(image => {
        const img = document.createElement('img');
        img.src = image.urls.small; // Use small-sized images for faster loading
        img.alt = image.alt_description || 'Image';
        img.className = 'search-result-image'; // Optional styling class
        imageResults.appendChild(img);
    });
}
