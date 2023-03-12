const express = require('express');
const router = express.Router();
const axios = require('axios')
const Article = require('../models/article')
const cheerio = require('cheerio')

 const energyNEnvrionmentURL = "https://www.cnn.com/specials/us/energy-and-environment"
 const spaceNScienceURL = "https://www.cnn.com/specials/space-science"
 const americasURL = "https://www.cnn.com/world/americas"
 const techURL = "https://www.cnn.com/business/tech"

 router.get('/:num', (req, res) => {
    Article.find({createdby: "CNN"}).limit(req.params.num)
    .then(response => {
        res.json({response: response})
    })
})

router.post('/energynenvrironment', (req, res) => {
    axios(energyNEnvrionmentURL)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []

            $('article', html).each(function () { //<-- cannot be a function expression
                const url = `{https://www.cnn.com${$(this).find('.media').find('a').attr('href')}}`
                const image = $(this).find('img').attr('data-src-large')
                const title = $(this).find('.cd__headline-text').text()
                articles.push({
                    title,
                    url,
                    image
                })
                
            })
            articles.map((a) => {
                Article.create({
                    title: a.title,
                    url: a.url,
                    image: a.image,
                    eyebrow: "Energy",
                    createdby: "CNN",
                })
            })
        res.json(articles)
        }).catch(err => console.log(err))

})

router.post('/spacenscience', (req, res) => {
    axios(spaceNScienceURL)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []

            $('article', html).each(function () { //<-- cannot be a function expression
                const url = `{https://www.cnn.com${$(this).find('.media').find('a').attr('href')}}`
                const image = $(this).find('img').attr('data-src-large')
                const title = $(this).find('.cd__headline-text').text()
                articles.push({
                    title,
                    url,
                    image
                })
                
            })
            articles.map((a) => {
                Article.create({
                    title: a.title,
                    url: a.url,
                    image: a.image,
                    eyebrow: "Science",
                    createdby: "CNN",
                })
            })
        res.json(articles)
        }).catch(err => console.log(err))

})

router.post('/americas', (req, res) => {
    axios(americasURL)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []

            $('.container__link', html).each(function () { //<-- cannot be a function expression
                const image = $(this).find('picture').find('source').attr("srcset")
                const url = `https://www.cnn.com${$(this).attr('href')}`
                const title = $(this).find('.container__headline').text()
                articles.push({
                    title,
                    url,
                    image
                })
                
            })
            articles.map((a) => {
                Article.create({
                    title: a.title,
                    url: a.url,
                    image: a.image,
                    eyebrow: "Americas",
                    createdby: "CNN",
                })
            })
        res.json(articles)
        }).catch(err => console.log(err))

})

router.post('/tech', (req, res) => {
    axios(techURL)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []

            $('.container__link', html).each(function () { //<-- cannot be a function expression
                const image = $(this).find('source').attr("srcset")
                const url = `https://www.cnn.com${$(this).attr('href')}`
                const title = $(this).find('.container__headline').text()
                articles.push({
                    title,
                    url,
                    image
                })
                
            })
            articles.map((a) => {
                Article.create({
                    title: a.title,
                    url: a.url,
                    image: a.image,
                    eyebrow: "Tech",
                    createdby: "CNN",
                })
            })
        res.json(articles)
        }).catch(err => console.log(err))

})





 module.exports = router;

