
//* needed packages
const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
const port = process.env.PORT || 3500;
//* api
require('dotenv').config();

//* middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//* static files
//* note you must add the folder name for the MIME to work on its own
app.use('/styles', express.static(path.join(__dirname, '../styles')));
app.use('/tools', express.static(path.join(__dirname, '../tools')));

//* Routes
//* main app route
app.get('/DevTest', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'MainPage.html'));
});

app.post('/SearchOutput', async (req, res) => {
    try {
        const searchquery = req.body.searchInput;
        if (!searchquery) {
            return res.status(400).json({ error: 'Search query is required.' });
        }

        const url = 'https://api.unsplash.com/search/photos';
        const APIKEY = 'q-Q28KB-Tm1tSvJ-copIMQOGxagnyLiazs6gf0mZMO4';
        const NewURL = `${url}?query=${searchquery}&client_id=${APIKEY}`;

        const response = await axios.get(NewURL);
        res.json(response.data); // Send data to the client
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching data.' });
    }
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
