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
app.use(express.static(path.join(__dirname,'../styles')));
app.use(express.static(path.join(__dirname,'../tools')));
app.use(express.static(path.join(__dirname,'../imgs')));
//* MIME
//* css MIME Fix
app.get('/styles/:file',(req,res)=>{
    const file = req.params.file;
    res.setHeader('Content-Type','text/css')
    res.sendFile(path.join(__dirname,'../styles',file))
})
//* JS MIME Fix
app.get('/tools/:file',(req,res)=>{
    const file = req.params.file;
    res.setHeader('Content-Type','application/javascript')
    res.sendFile(path.join(__dirname,'../tools',file))
})
//* IMGS MIME Fix
app.get('/imgs/:file',(req,res)=>{
    const file = req.params.file;
    res.setHeader('Content-Type','image/jpg')
    res.sendFile(path.join(__dirname,'../imgs',file))
})

//* Routes
//* main app route
app.get('/DevTest',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views','MainPage.html'))
})
//* chatgpt
//* search api route
app.get('/search', async (req, res) => {
    const query = req.query.query; // Get the search query from the request
    const apiKey = process.env.UNSPLASH_API_KEY;

    try {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query },
            headers: {
                Authorization: `Client-ID ${apiKey}`,
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching images');
    }
});



// app.get('/DevTest/LearnMore',(req,res)=>{
//     res.sendFile(path.join(__dirname,'../views','LearnMore.html'))
// })


app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
})