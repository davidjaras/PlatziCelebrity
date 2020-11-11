const express = require('express');
const router = express.Router();
const profileModel = require('../models/profile')
//all data about user
router.get('/', async function(req, res) {
      const id = req.body.id
      const result = await profileModel.query(id);
      res.status(result.status).json(result);  
});
//active a category
router.post('/', async function(req, res) {
      const id = req.body.id
      const category = req.body.category;
      const result = await profileModel.postCategory(id, category);
      res.status(result.status).json(result);
});
//desactive a category
router.delete('/', async function(req, res) {
      const id = req.body.id
      const category = req.body.category;
      const result = await profileModel.removeCategory(id, category);
      res.status(result.status).json(result);
});
//all data about celebrities
router.get('/follow/celebrities', async function(req, res) {
      const id = req.body.id
      const result = await profileModel.followCelebrities(id);
      res.status(result.status).json(result);
});
  
  module.exports = router;