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
  router.post('/:id/follow/celebrities', async function(req, res) {
      const id = req.params.id
      const celebrity = req.body;
      const result = await profileModel.postCelebrity(id, celebrity);
      res.status(200)
            .json(result);
    });

  router.post('/:id', async function(req, res) {
      const id = req.params.id
      const category = req.body;
      const result = await profileModel.postCategory(id, category);
      res.status(200)
            .json(result);
    });
    router.delete('/:id', async function(req, res) {
      const id = req.params.id
      const category = req.body;
      const result = await profileModel.deleteCategory(id, category);
      res.status(200)
            .json(result);
    });
  
  module.exports = router;