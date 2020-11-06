const express = require('express')
const {spawn} = require('child_process');
const app = express()
const port = 8000

app.get('/', (req, res) => {
    var dataToSend;
    const python = spawn('python', ['hola.py']);
    python.stdout.on('data', function (data) {
    dataToSend = data.toString();
    });
    python.on('close', (code) => {
    console.log(`Proceso hijo termino con el codigo ${code}`);
    res.send(dataToSend)
    });
});
app.listen(port,function() {
    console.log(`listening in http://localhost:${port}`)
});