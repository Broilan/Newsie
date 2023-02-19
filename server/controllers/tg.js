const express = require('express');
const router = express.Router();
const axios = require('axios')
const Article = require('../models/article')
const cheerio = require('cheerio')

 const usURL = "https://www.theguardian.com/us"
 const techURL = "https://www.theguardian.com/us/technology"
 const envURL = "https://www.theguardian.com/us/environment"
 const politicsURL = "https://www.theguardian.com/us-news/us-politics"
 const healthURL = "https://www.theguardian.com/lifeandstyle/health-and-wellbeing"

 router.get('/', (req, res) => {
    Article.find({createdby: "The Guardian"})
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

            $('.fc-item__container', html).each(function () { //<-- cannot be a function expression
                const image = $(this).find('picture').find('source').attr("srcset")
                const url = $(this).find("a").attr('href')
                const title = $(this).find("a").text()
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
                    eyebrow: "US",
                    createdby: "The Guardian",
                })
                .then(response => {
                    console.log(response)
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

            $('.fc-item__container', html).each(function () { //<-- cannot be a function expression
                const image = $(this).find('picture').find('source').attr("srcset")
                const url = $(this).find("a").attr('href')
                const title = $(this).find("a").text()
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
                    createdby: "The Guardian",
                })
                .then(response => {
                    console.log(response)
                })
            })
        res.json(articles)
        }).catch(err => console.log(err))

})

router.post('/env', (req, res) => {
    axios(envURL)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []

            $('.fc-item__container', html).each(function () { //<-- cannot be a function expression
                const image = $(this).find('picture').find('source').attr("srcset")
                const url = $(this).find("a").attr('href')
                const title = $(this).find("a").text()
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
                    eyebrow: "Environment",
                    createdby: "The Guardian",
                })
                .then(response => {
                    console.log(response)
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

            $('.fc-item__container', html).each(function () { //<-- cannot be a function expression
                const image = $(this).find('picture').find('source').attr("srcset")
                const url = $(this).find("a").attr('href')
                const title = $(this).find("a").text()
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
                    eyebrow: "Politics",
                    createdby: "The Guardian",
                })
                .then(response => {
                    console.log(response)
                })
            })
        res.json(articles)
        }).catch(err => console.log(err))

})

router.post('/health', (req, res) => {
    axios(healthURL)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []

            $('.fc-item__container', html).each(function () { //<-- cannot be a function expression
                const image = $(this).find('picture').find('source').attr("srcset")
                const url = $(this).find("a").attr('href')
                const title = $(this).find("a").text()
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
                    eyebrow: "Health",
                    createdby: "The Guardian",
                })
                .then(response => {
                    console.log(response)
                })
            })
        res.json(articles)
        }).catch(err => console.log(err))

})

 module.exports = router;
