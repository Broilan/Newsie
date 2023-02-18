const express = require('express');
const router = express.Router();
const axios = require('axios')
const mongoose = require('mongoose')
const Article = require('../models/article')
const cheerio = require('cheerio')


const url = 'https://www.foxnews.com/us'

router.get('/us', (req, res) => {
    axios(url)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []

            $('.article', html).each(function () { //<-- cannot be a function expression
                const title = $(this).find('.title').text()
                const article = $(this).find('.content').text()
                const eyebrow = $(this).find('.eyebrow').text()
                const timePosted = $(this).find('.time').text()
                const url = `foxnews.com${$(this).find('a').attr('href')}`
                const image = $(this).find('img').attr('src')
                articles.push({
                    title,
                    article,
                    url,
                    eyebrow,
                    timePosted,
                    image
                })
            })
            res.json(articles)
        }).catch(err => console.log(err))

})

module.exports = router;
