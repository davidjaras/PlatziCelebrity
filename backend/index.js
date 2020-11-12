const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config();
const path = require('path');

//controllers
const registerController = require('./controllers/register');
const postController = require('./controllers/post');
const profileController = require('./controllers/profile');
const loginController = require('./controllers/login');
const scrapperController = require('./controllers/scrapper');

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //res.header('content-type: application/json; charset=utf-8');
    next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes
app.use('/api/scrapper', scrapperController);
app.use('/api/login', loginController);
app.use('/api/profile', profileController);
app.use('/api/register', registerController);
app.use('/api/home', postController);

app.use(express.static(path.join(__dirname, './frontend/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './frontend/build/index.html'))
});

app.listen( process.env.PORT || 5000 ,'0.0.0.0',  function (){
    console.log("running in http://'0.0.0.0:",process.env.PORT)
});

