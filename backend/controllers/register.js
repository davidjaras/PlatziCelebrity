
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

module.exports = router;