const express = require('express');
const {spawn} = require('child_process');
const scrapperModel = require('../models/scrapper');
const Router = express.Router();


Router.post('/all', (req, res) => {
  console.log(celebrity);
  var dataToSend;
  const python = spawn('python', [path.join('C:/Users/stive/Documents/master/PlatziCelebrity/backend/data/scraper.py'), `all`]);
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
  const python = spawn('python', ['C:/Users/stive/Documents/master/PlatziCelebrity/backend/data/scraper.py', `${celebrity}`]);
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