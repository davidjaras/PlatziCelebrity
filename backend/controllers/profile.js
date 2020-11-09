const express = require('express');
const router = express.Router();
const profileModel = require('../models/profile')

router.post('/:id', function (req, res){
      const id = req.query.id;


            router.get('/:id', async function(req, res) {
            const id = req.params.id
            const result = await profileModel.query(id);
            res.status(code)
                        .json(result);
            
            });
            
            router.get('/:id/follow/celebrities', async function(req, res) {
                  const id = req.params.id
                  const result = await profileModel.getfollowCelebrities(id);
                  res.status(code)
                        .json(result);
            
            });
            router.post('/:id/follow/celebrities', async function(req, res) {
                        const body = req.body;
                        const id = req.params.id
                        const result = await profileModel.postfollowCelebrities(id, body);
                        res.status(code)
                        .json(result);
                  
                  });
            router.get('/:id/follow/bookmarks', async function(req, res) {
            const id = req.params.id
            const result = await profileModel.bookMarkets(id);
            res.status(code)
                  .json(result);
            
            });
            router.post('/:id', async function(req, res) {
                  const id = req.params.id
                  const category = req.body;
                  const result = await profileModel.postCategory(id, category);
                  res.status(code)
                        .json(result);
            });
            router.delete('/:id', async function(req, res) {
                  const id = req.params.id
                  const category = req.body;
                  const result = await profileModel.deleteCategory(id, category);
                  res.status(code)
                        .json(result);
            });
  
})
  module.exports = router;