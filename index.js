const express=require('express');
const port=8000;
const app=express();
var bodyParser=require('body-parser');


const db=require('./config/mongoose');



//setup the view engine
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.urlencoded());//for parsing
app.use(express.static('assets'));//accessing static files
app.use(bodyParser.json());
app.use('/',require('./routes/index'));

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server:${err}`);
        return;
    }
    console.log(`Server is up and is running on PORT:${port}`);


});