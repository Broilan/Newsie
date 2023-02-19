const express = require('express');
const router = express.Router();
const axios = require('axios')
const Article = require('../models/article')
const cheerio = require('cheerio')

 const usURL = "https://abcnews.go.com/US"
 const internationalURL = "https://abcnews.go.com/International"
 const businessURL = "https://abcnews.go.com/Business"

 const lifestyleURL = "https://abcnews.go.com/Lifestyle"
 const virtualRealityURL = "https://abcnews.go.com/VR"
 const politicsURL = "https://abcnews.go.com/Politics"
 const entertainmentURL = "https://abcnews.go.com/Entertainment"
 const techURL = "https://abcnews.go.com/Technology"
 const healthURL = "https://abcnews.go.com/Health"
 const weatherURL = "https://abcnews.go.com/Alerts/Weather"

 module.exports = router;


 