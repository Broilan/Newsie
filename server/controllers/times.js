const express = require('express');
const router = express.Router();
const axios = require('axios')
const Article = require('../models/article')
const cheerio = require('cheerio')

 const usURL = "https://time.com/section/us/"
 const politicsURL = "https://time.com/section/politics/"
 const worldURL = "https://time.com/section/world/"

 const climateURL = "https://time.com/section/climate/"
 const techURL = "https://time.com/section/tech/"
 const scienceURL = "https://time.com/section/science/"
 const ideasURL = "https://time.com/section/ideas/"

 module.exports = router;