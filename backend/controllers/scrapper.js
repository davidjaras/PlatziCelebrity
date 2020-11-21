const express = require('express');
const scrapperModel = require('../models/scrapper');
const Router = express.Router();

setInterval(async () => {
  const url =`https://davidjaras.com/api/?search=all`;
  const insert = await scrapperModel.all(url);
  console.log("inserted notices done")
}, 1800000);

Router.get('/', async function (req, res){
  const celebrity = req.query.search;
  const url =`https://davidjaras.com/api/?search=${celebrity}`;
  const result = await scrapperModel.posts(celebrity);
  scrapperModel.data(url);
  res.status(result.status).json(result);
})
module.exports = Router;