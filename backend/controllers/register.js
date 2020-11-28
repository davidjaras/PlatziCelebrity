<<<<<<< HEAD

const express = require('express');
const router = express.Router();
const registerModel = require('../models/register');


router.get('/', function(req, res) {
  res.send('Register page');
});

router.post('/', async function(req, res) {
  const body = req.body 
  const result = await registerModel.postUser(body);
  console.log(result);
  res.status(200)
        .json(result);
});


router.post('/category', async function(req, res) {
  const body = req.body 
  console.log(body);
  const result = await registerModel.postCategory(body);
  console.log(result);
  res.status(200)
        .json(result);

});

=======

const express = require('express');
const router = express.Router();
const registerModel = require('../models/register');


router.get('/', function(req, res) {
  res.send('Register page');
});

router.post('/', async function(req, res) {
  const body = req.body 
  const result = await registerModel.postUser(body);
  res.status(200)
        .json(result);
});

router.get('/category', function(req, res){
  res.send('Register categories page')
})

router.post('/category/:id', async function(req, res) {
  const id = req.params.id;
  const body = req.body 
  const result = await registerModel.postCategory(body, id);
  res.status(200)
        .json(result);

});


>>>>>>> 4d687fc07faef7c591c8501ac5bf844bacfebf6e
module.exports = router;