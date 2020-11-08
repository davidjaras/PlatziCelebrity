const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config();
const PORT = process.env.PORT_SERV || 5000;
const HOST = '0.0.0.0';
//controllers
const registerController = require('./controllers/register');
const postController = require('./controllers/post');
const profileController = require('./controllers/profile');
const loginController = require('./controllers/login');
const scrapperController = require('./controllers/scrapper');



app.use(bodyParser.json());
app.get('/', function (req, res, next){
    res.send("index");
})
//Routes
app.use('/scrapper', scrapperController);
app.use('/login', loginController);
app.use('/profile', profileController);
app.use('/register', registerController);
app.use('/home', postController);

app.listen( PORT,HOST,function () {
    console.log(`Server running `);
});

