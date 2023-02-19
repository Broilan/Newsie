const express = require('express');
const router = express.Router();
const axios = require('axios')
const Article = require('../models/article')
const cheerio = require('cheerio')

 const techURL = "https://www.vox.com/technology"
 const climateURL = "https://www.vox.com/climate"
 const healthURL = "https://www.vox.com/health"

 const moneyURL = "https://www.vox.com/money"
 const scienceURL = "https://www.vox.com/science"
 const cultureURL = "https://www.vox.com/culture"
 const policyURL = "https://www.vox.com/policy"

 module.exports = router;
