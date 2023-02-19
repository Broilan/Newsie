const express = require('express');
const router = express.Router();
const axios = require('axios')
const Article = require('../models/article')
const cheerio = require('cheerio')

 const crimeNJusticeURL = "https://www.cnn.com/us/crime-and-justice"
 const energyNEnvrionmentURL = "https://www.cnn.com/specials/us/energy-and-environment"
 const spaceNScienceURL = "https://www.cnn.com/specials/space-science"

 const africaURL = "https://www.cnn.com/world/africa"
 const americasURL = "https://www.cnn.com/world/americas"
 const asiaURL = "https://www.cnn.com/world/asia"
 const aussieURL = "https://www.cnn.com/world/australia"
 const chinaURL = "https://www.cnn.com/world/china"
 const europeURL = "https://www.cnn.com/world/europe"
 const indiaURL = "https://www.cnn.com/world/india"
 const middleEastURL = "https://www.cnn.com/world/middle-east"
 const ukURL = "https://www.cnn.com/world/united-kingdom"

 const politicsURL = "https://www.cnn.com/politics"
 
 const techURL = "https://www.cnn.com/business/tech"
 const successURL = "https://www.cnn.com/business/success"

 module.exports = router;

