
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


module.exports = router;