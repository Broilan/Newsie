const express = require('express');
const router = express.Router();
const axios = require('axios')
const Article = require('../models/article')
const cheerio = require('cheerio')

 const usURL = "https://time.com/section/us/"
 const politicsURL = "https://time.com/section/politics/"
 const climateURL = "https://time.com/section/climate/"
 const techURL = "https://time.com/section/tech/"
 const scienceURL = "https://time.com/section/science/"

 router.get('/:num', (req, res) => {
    Article.find({createdby: "Times"}).limit(req.params.num)
    .then(response => {
        res.json({response: response})
    })
})

 router.post('/us', (req, res) => {
    axios(usURL)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []

            $('.taxonomy-tout', html).each(function () { //<-- cannot be a function expression
                const image = $(this).find('.image-container  ').attr("data-src")
                const url = `https://www.time.com${$(this).find('a').attr('href')}`
                const title = $(this).find(".headline").text()
                articles.push({
                    image,
                    title,
                    url,
                })
                
            })
            articles.map((a) => {
                Article.create({
                    title: a.title,
                    url: a.url,
                    image: a.image,
                    eyebrow: "US",
                    createdby: "Times",
                })
            })
        res.json(articles)
        }).catch(err => console.log(err))

})

router.post('/politics', (req, res) => {
    axios(politicsURL)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []

            $('.taxonomy-tout', html).each(function () { //<-- cannot be a function expression
                const image = $(this).find('.image-container  ').attr("data-src")
                const url = `https://www.time.com${$(this).find('a').attr('href')}`
                const title = $(this).find(".headline").text()
                articles.push({
                    image,
                    title,
                    url,
                })
                
            })
            articles.map((a) => {
                Article.create({
                    title: a.title,
                    url: a.url,
                    image: a.image,
                    eyebrow: "Politics",
                    createdby: "Times",
                })
            })
        res.json(articles)
        }).catch(err => console.log(err))

})

router.post('/climate', (req, res) => {
    axios(climateURL)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []

            $('.taxonomy-tout', html).each(function () { //<-- cannot be a function expression
                const image = $(this).find('.image-container  ').attr("data-src")
                const url = `https://www.time.com${$(this).find('a').attr('href')}`
                const title = $(this).find(".headline").text()
                articles.push({
                    image,
                    title,
                    url,
                })
                
            })
            articles.map((a) => {
                Article.create({
                    title: a.title,
                    url: a.url,
                    image: a.image,
                    eyebrow: "Climate",
                    createdby: "Times",
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

            $('.taxonomy-tout', html).each(function () { //<-- cannot be a function expression
                const image = $(this).find('.image-container  ').attr("data-src")
                const url = `https://www.time.com${$(this).find('a').attr('href')}`
                const title = $(this).find(".headline").text()
                articles.push({
                    image,
                    title,
                    url,
                })
                
            })
            articles.map((a) => {
                Article.create({
                    title: a.title,
                    url: a.url,
                    image: a.image,
                    eyebrow: "Tech",
                    createdby: "Times",
                })
            })
        res.json(articles)
        }).catch(err => console.log(err))

})

router.post('/science', (req, res) => {
    axios(scienceURL)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []

            $('.taxonomy-tout', html).each(function () { //<-- cannot be a function expression
                const image = $(this).find('.image-container  ').attr("data-src")
                const url = `https://www.time.com${$(this).find('a').attr('href')}`
                const title = $(this).find(".headline").text()
                articles.push({
                    image,
                    title,
                    url,
                })
                
            })
            articles.map((a) => {
                Article.create({
                    title: a.title,
                    url: a.url,
                    image: a.image,
                    eyebrow: "Science",
                    createdby: "Times",
                })
            })
        res.json(articles)
        }).catch(err => console.log(err))

})

 module.exports = router;