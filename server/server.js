//* needed packages
const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
const port = process.env.PORT || 3500;
//* api
require('dotenv').config();

 //* middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());


//* static files
app.use('/styles',express.static(path.join(__dirname,'../styles')));
app.use('/tools',express.static(path.join(__dirname,'../tools')));



//* Routes
//* main app route
app.get('/DevTest',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views','MainPage.html'))
})
//* chatgpt
//* search api route
app.get('/search', async (req, res) => {
    const query = req.query.searchInput; // Get the search term from the query parameters
    console.log(query)

    // Check if the query is provided
    if (!query) {
        return res.status(400).json({ error: 'Search query is required' });
    }

    const unsplashAccessKey = process.env.UNSPLASH_ACCESS_KEY; // Your Unsplash API key

    try {
        const response = await axios.get(`https://api.unsplash.com/search/photos`, {
            params: {
                query: query,
                client_id: unsplashAccessKey // Pass the access key here
            }
        });

        // Send back the results
        res.json(response.data);
      
    } catch (error) {
        // Handle error
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch data from Unsplash API' });
    }
});


app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
})