const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config();
const { request } = require('express');
const {PORT_SERVER} = process.env;
//const db = require('./store/database')
const registerController = require('./controllers/register');
const postController = require('./controllers/post');
const profileController = require('./controllers/profile');
const loginController = require('./controllers/login');

/* autenticacion: login y register
post
celebridades y perfil, notificaciones*/ 
app.use(bodyParser.json());
app.get('/', function (req, res, next){
    res.send("index");
})
/*
app.get('/query/:table', async(req,res) =>{
    try{
    const table = req.params.table;
        console.log('eso')
        const result = await db.query(table); 
        res.status(200).json(result);
        
    }catch(error){
        res.send(error)
    }
})
app.get('/query/:id', async(req,res) =>{
    try{
        const id = req.params.id;
        const result = await db.queryId(id); 
        res.status(200).json(result);
    }catch(error){
        res.send(error)
    }
})
app.post('/post', async(req,res) =>{
    try{
        const values = req.body;
        const result = await db.post(values); 
        res.status(201).json({
            message:"Created register",
            result
        });
    }catch(error){
        res.send(error)
    }
})

app.put('/post/:id', async(req,res) =>{
    try{
        const values = req.body;
        const id = req.params.id;
        const result = await db.put(values, id); 
        res.status(200).json(result);
    }catch(error){
        const result = await db.put(values, id); 
        res.send(result)
    }
})

app.delete('/remove/:id', async(req,res) =>{
    try{
        const id = req.params.id;
        const result = await db.remove(id); 
        res.status(200).json(result);
    }catch(error){
        const result = await db.remove(id); 
        res.send(result)
    }
})*/




app.use('/login', loginController);
app.use('/profile', profileController);
app.use('/register', registerController);
app.use('/home', postController);
app.listen( PORT_SERVER, function () {
    console.log(`Server running in http://Localhost:${PORT_SERVER}`);
});

