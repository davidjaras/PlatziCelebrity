const express = require('express');
const {spawn} = require('child_process');
const Router = express.Router();

Router.get('/', (req, res) => {
var dataToSend;
const python = spawn('python', ['C:/Users/user/dir/PlatziCelebrity/backend/scrapper/hola.py']);
python.stdout.on('data', function (data) {
console.log('the file say: ', data.toString());
dataToSend = data.toString();
});
python.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});
python.on('close', (code) => {
console.log(`the process end with de code ${code}`);
res.send(dataToSend)
});

});
module.exports = Router;