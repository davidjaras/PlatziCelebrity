const {spawn} = require('child_process');
const express = require('express');
const Router = express.Router();

Router.get('/', function(req, res){
    let data;
    const python = spawn ("python", ["hola.py"]);
    python.stdout.on ('data', function (data){
        console.log(`data: ${data}`);
        dataToSend = data.toString();
    });
    /*python.stderr.on ('data', function (data){
        console.log(`data: ${data}`);
        dataToSend = data.toString();*/
    });
    console.log(dataToSend);
    python.on('close', (code) => {
        console.log(`the message end with code ${code}`);
        
    });
    //res.send(dataToSend);
}); 
    

module.exports = router;