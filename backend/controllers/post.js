const express = require('express');
const router = express.Router();
const postModel = require('../models/post');

router.get('/:id', async function(req, res) {
    const id = req.params.id;
    const result = await postModel.query(id);
    res.status(200)
          .json(result);
  });
  module.exports = router;