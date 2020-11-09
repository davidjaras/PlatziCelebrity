const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config();
//controllers
const registerController = require('./controllers/register');
const postController = require('./controllers/post');
const profileController = require('./controllers/profile');
const loginController = require('./controllers/login');
const scrapperController = require('./controllers/scrapper');
const index = require('../frontend/public/index');


app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json());


//Routes
app.use('/', index);
app.use('/scrapper', scrapperController);
app.use('/login', loginController);
app.use('/profile', profileController);
app.use('/register', registerController);
app.use('/home', postController);

app.listen( process.env.PORT || 5000 ,'0.0.0.0',  function (){
    console.log("running in http://'0.0.0.0:",process.env.PORT)
});

