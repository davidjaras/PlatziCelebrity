const express = require('express');
const scrapperModel = require('../models/scrapper');
const Router = express.Router();


Router.get('/', async function (req, res){
  const celebrity = req.query.search;
  const url =`https://davidjaras.com/api/?search=${celebrity}`;
  await scrapperModel.data(url);
  const result = await scrapperModel.posts(celebrity);
  res.status(result.status).json(result);
})
module.exports = Router;