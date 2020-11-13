const express = require('express');
const {spawn} = require('child_process');
const Router = express.Router();
const path = require('path');

var rootPath = path.normalize(__dirname +'/../../data/');
  console.log(rootPath);

Router.get('/', async function (req, res){
  
  var dataToSend;
  const python = spawn('python', [`C:/Users/stive/Documents/master/PlatziCelebrity/data/scraper.py`,' lionel messi']);
  python.stdout.on('data', function (data) {
  console.log('the file say: ', data.toString());
  dataToSend = data.toString();
  });
  python.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });
  python.on('close', (code) => {
  console.log(`the process end with de code ${code}`);
  res.json(dataToSend)
  });

});
module.exports = Router;