const express = require('express');
const router = express.Router();
const axios = require('axios')
const Article = require('../models/article')
const cheerio = require('cheerio')

 const usURL = "https://www.nytimes.com/section/us"
 const scienceURL = "https://www.nytimes.com/section/science"
 const politicsURL = "https://www.nytimes.com/section/politics"
 const travelURL = "https://www.nytimes.com/section/travel"
 const booksURL = "https://www.nytimes.com/section/books"

 router.get('/:num', (req, res) => {
    Article.find({createdby: "NY Times"}).limit(req.params.num)
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

            $('li', html).each(function () { //<-- cannot be a function expression
                const image = $(this).find('a').find('img').attr("src")
                const url = `https://www.nytimes.com${$(this).find("a").attr('href')}`
                const title = $(this).find("a").find('h2').text()
                const article = $(this).find("a").find('p').text()
                articles.push({
                    title,
                    url,
                    image,
                    article
                })
                
            })
            articles.map((a) => {
                Article.create({
                    title: a.title,
                    article: a.article,
                    url: a.url,
                    image: a.image,
                    eyebrow: "US",
                    createdby: "NY Times",
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

            $('li', html).each(function () { //<-- cannot be a function expression
                const image = $(this).find('a').find('img').attr("src")
                const url = `https://www.nytimes.com${$(this).find("a").attr('href')}`
                const title = $(this).find("a").find('h2').text()
                const article = $(this).find("a").find('p').text()
                articles.push({
                    title,
                    url,
                    image,
                    article
                })
                
            })
            articles.map((a) => {
                Article.create({
                    title: a.title,
                    article: a.article,
                    url: a.url,
                    image: a.image,
                    eyebrow: "science",
                    createdby: "NY Times",
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

            $('li', html).each(function () { //<-- cannot be a function expression
                const image = $(this).find('a').find('img').attr("src")
                const url = `https://www.nytimes.com${$(this).find("a").attr('href')}`
                const title = $(this).find("a").find('h2').text()
                const article = $(this).find("a").find('p').text()
                articles.push({
                    title,
                    url,
                    image,
                    article
                })
                
            })
            articles.map((a) => {
                Article.create({
                    title: a.title,
                    article: a.article,
                    url: a.url,
                    image: a.image,
                    eyebrow: "Politics",
                    createdby: "NY Times",
                })
            })
        res.json(articles)
        }).catch(err => console.log(err))

})

router.post('/travel', (req, res) => {
    axios(travelURL)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []

            $('li', html).each(function () { //<-- cannot be a function expression
                const image = $(this).find('a').find('img').attr("src")
                const url = `https://www.nytimes.com${$(this).find("a").attr('href')}`
                const title = $(this).find("a").find('h2').text()
                const article = $(this).find("a").find('p').text()
                articles.push({
                    title,
                    url,
                    image,
                    article
                })
                
            })
            articles.map((a) => {
                Article.create({
                    title: a.title,
                    article: a.article,
                    url: a.url,
                    image: a.image,
                    eyebrow: "Travel",
                    createdby: "NY Times",
                })
            })
        res.json(articles)
        }).catch(err => console.log(err))

})

router.post('/books', (req, res) => {
    axios(booksURL)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []

            $('li', html).each(function () { //<-- cannot be a function expression
                const image = $(this).find('a').find('img').attr("src")
                const url = `https://www.nytimes.com${$(this).find("a").attr('href')}`
                const title = $(this).find("a").find('h2').text()
                const article = $(this).find("a").find('p').text()
                articles.push({
                    title,
                    url,
                    image,
                    article
                })
                
            })
            articles.map((a) => {
                Article.create({
                    title: a.title,
                    article: a.article,
                    url: a.url,
                    image: a.image,
                    eyebrow: "Books",
                    createdby: "NY Times",
                })
            })
        res.json(articles)
        }).catch(err => console.log(err))

})


 module.exports = router;
