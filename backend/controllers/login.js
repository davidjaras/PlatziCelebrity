const express = require('express');
const router = express.Router();
const loginModel = require('../models/login');


router.get('/', async function(req, res) {
  res.send('welcome to the join of people news')
 });

router.post('/', async function(req, res) {
  try{
   const body = req.body 
    const result = await loginModel.login(body);
    res.status(200)
          .json(result);
  } catch{
    res.status(204)
  }
  });

module.exports = router;
