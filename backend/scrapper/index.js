const express = require('express');
const {spawn} = require('child_process');
const app = express()
const port = 8000
app.get('/', (req, res) => {
 
 var dataToSend;
 const python = spawn('python', ['../store/hola.py']);
 python.stdout.on('data', function (data) {
  console.log('in the console show: ', data.toString());
  dataToSend = data.toString();
 });
 python.on('close', (code) => {
 console.log(`child process close all stdio with code ${code}`);
 console.log(dataToSend);
 res.status(200).send(dataToSend);
 });
 
})
app.listen(port, () => console.log(`Example app listening on port 
${port}!`))