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
//* note you must add the folder name for the MIME to work on it's own
app.use('/styles', express.static(path.join(__dirname, '../styles')));
app.use('/tools', express.static(path.join(__dirname, '../tools')));



//* Routes
//* main app route
app.get('/DevTest',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views','MainPage.html'))
})
app.get('/SearchOutput',(req,res)=>{
    const url = ' https://api.unsplash.com/search/photos'
    const APIKEY = 'q-Q28KB-Tm1tSvJ-copIMQOGxagnyLiazs6gf0mZMO4';
    let NewURL;
    const searchInput = req.query.searchInput;
    NewURL = `${url}?query=${searchInput}&client_id=${APIKEY}`
    console.log(NewURL);
    // console.log(searchInput)
    res.send(NewURL)
     res.redirect('/DevTest')
})
app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
})