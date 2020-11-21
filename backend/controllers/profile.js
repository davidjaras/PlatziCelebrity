const express = require('express');
const router = express.Router();
const profileModel = require('../models/profile')
//all data about user
router.post('/', async function(req, res) {
      const id = req.body.id
      const result = await profileModel.infoProfile(id);
      res.status(result.status).json(result);  
});
//active a category
router.post('/categoryPost', async function(req, res) {
      const id = req.body.id
      const category = req.body.category;
      const result = await profileModel.postCategory(id, category);
      res.status(result.status).json(result);
});
//desactive a category
router.delete('/categoryDelete', async function(req, res) {
      const id = req.body.id
      const category = req.body.category;
      const result = await profileModel.removeCategory(id, category);
      res.status(result.status).json(result);
});
//all data about celebrities
router.post('/celebrities', async function(req, res) {
      const id = req.body.id
      const result = await profileModel.followCelebrities(id);
      res.status(result.status).json(result);
});
//follow a celebrity
router.post('/follow/celebritiesPost', async function(req, res) {
      const id = req.body.id;
      const idCelebrity = req.body.celebrity;
      const result = await profileModel.postCelebrity(id, idCelebrity);
      res.status(result.status).json(result);
});
//unfollow a celebrity
router.delete('/follow/celebritiesDelete', async function(req, res) {
      const id = req.body.id;
      const idCelebrity = req.body.celebrity;
      const result = await profileModel.removeCelebrity(id, idCelebrity);
      res.status(result.status).json(result);
});
//all data about bookmarks
router.post('/bookmarks', async function(req, res) {
      const id = req.body.id
      const result = await profileModel.bookMarks(id);
      res.status(result.status).json(result);
});
//remove a bookmarks
router.delete('/follow/bookmarks', async function(req, res) {
      const id = req.body.id;
      const idPost = req.body.post_id;
      const result = await profileModel.removeBookMarks(id, idPost);
      res.status(result.status).json(result);
});
  module.exports = router;