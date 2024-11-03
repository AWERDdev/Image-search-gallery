//* needed packages
const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
const port = process.env.PORT || 3500;
 //* middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());


//* static files
app.use(express.static(path.join(__dirname,'../styles')));
app.use(express.static(path.join(__dirname,'../tools')));
app.use(express.static(path.join(__dirname,'../imgs')));
//* MIME
app.get('/styles/:file',(req,res)=>{
    const file = req.params.file;
    res.setHeader('Content-Type','text/css')
    res.sendFile(path.join(__dirname,'../styles',file))
})
app.get('/tools/:file',(req,res)=>{
    const file = req.params.file;
    res.setHeader('Content-Type','application/javascript')
    res.sendFile(path.join(__dirname,'../tools',file))
})
//* Routes

app.get('/DevTest',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views','MainPage.html'))
})
app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
})