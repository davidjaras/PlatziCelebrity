const express = require('express');
const {spawn} = require('child_process');
const Router = express.Router();

Router.get('/', async function (req, res) { 
 var dataToSend;
 const python = spawn('python', ['../scrapper/hola.py']);
 python.stdout.on('data', async function (data) {
  console.log('Transformando informacion del archivo ', python);
    dataToSend = await data.toString();
 });
 python.on('close', (code) => {
 console.log(`child process close all stdio with code ${code}`);
 console.log(dataToSend);
 res.send(dataToSend)
 });
 
})
module.exports = Router;