const express = require('express');
const router = express.Router();
const postModel = require('../models/post');

router.post('/', async function(req, res) {
    const id = req.body.id; 
    const result = await postModel.home(id);
    res.status(result.status).json(result);
});
router.post('/category', async function(req, res) {
    const category = req.body.category;
    const result = await postModel.category(category);
    res.status(result.status).json(result);
});
  module.exports = router;