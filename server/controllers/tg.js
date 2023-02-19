const express = require('express');
const router = express.Router();
const axios = require('axios')
const Article = require('../models/article')
const cheerio = require('cheerio')

 const usURL = "https://www.theguardian.com/us"
 const techURL = "https://www.theguardian.com/us/technology"
 const envURL = "https://www.theguardian.com/us/environment"

 const politicsURL = "https://www.theguardian.com/us-news/us-politics"
 const artURL = "https://www.theguardian.com/artanddesign"
 const healthURL = "https://www.theguardian.com/lifeandstyle/health-and-wellbeing"
 const foodURL = "https://www.theguardian.com/food"

 module.exports = router;
