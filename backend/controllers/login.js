const express = require('express');
const router = express.Router();
const loginModel = require('../models/login');

router.post('/', async function(req, res) {
   const body = req.body;
    console.log(body);
    const result = await loginModel.login(body);
    res.status(result.status).json(result);
  });

module.exports = router;