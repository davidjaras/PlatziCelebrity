const express = require('express');
const router = express.Router();
const registerModel = require('../models/register');

router.post('/', async function(req, res) {
  const body = req.body;
  console.log(body);
  const result = await registerModel.postUser(body);
  res.status(result.status).json(result);
});
module.exports = router;