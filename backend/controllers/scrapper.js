const express = require('express');
const {spawn} = require('child_process');
const scrapperModel = require('../models/scrapper');
const path = require('path');
const Router = express.Router();
const pathAbsolute = path.join(__dirname, "../data/scraper.py");


Router.post('/all', (req, res) => {
  console.log(celebrity);
  var dataToSend;
  const python = spawn('python', [pathAbsolute, `all`]);
  python.stdout.on('data', function (data) {
  dataToSend = data.toString();

 });
 
 python.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});
 python.on('close', (code) => {
 console.log(`child process close all stdio with code ${code}`);
 res.send(dataToSend)
 console.log("the data is:", dataToSend);
 });
 
})

//CELEBRITY
Router.post('/search', (req, res) => {
  let celebrity = req.body.name;
  console.log(celebrity);
  var dataToSend;
  const python = spawn('python', [pathAbsolute, `${celebrity}`]);
  python.stdout.on('data', function (data) {
  dataToSend = data.toString();
  });
  
  python.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
 });
  python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
    res.send(dataToSend);
    console.log(dataToSend);
  });
 })
module.exports = Router;