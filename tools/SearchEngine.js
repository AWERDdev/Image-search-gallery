document.getElementById('search-button').addEventListener('click', async () => {
    const query = document.getElementById('search-bar').value;
    const response = await fetch(`/search?query=${encodeURIComponent(query)}`);
    
    // Check if the response is OK
    if (response.ok) {
        const data = await response.json();
        displayData(data.results); // Pass the results to the displayData function
    } else {
        console.error('Error fetching data:', response.statusText);
    }
});

function displayData(results) {
    const imageResults = document.getElementById('img-Display');
    imageResults.innerHTML = ''; // Clear previous results

    results.forEach(image => {
        const img = document.createElement('img'); // Create an img element
        img.src = image.urls.small; // Set the source to the image URL
        img.alt = image.alt_description || 'Image'; // Set alt text
        imageResults.appendChild(img); // Append the img to the results container
    });
}
