const express = require('express');
const router = express.Router();
const axios = require('axios')
const Article = require('../models/article')
const cheerio = require('cheerio')

 const usURL = "https://www.nytimes.com/section/us"
 const opinionURL = "https://www.nytimes.com/section/opinion"
 const businessURL = "https://www.nytimes.com/section/business"

 const sportsURL = "https://www.nytimes.com/section/sports"
 const scienceURL = "https://www.nytimes.com/section/science"
 const politicsURL = "https://www.nytimes.com/section/politics"
 const travelURL = "https://www.nytimes.com/section/travel"
 const booksURL = "https://www.nytimes.com/section/books"
 const healthURL = "https://www.nytimes.com/section/health"


 module.exports = router;
