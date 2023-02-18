const express = require('express');
const router = express.Router();
const axios = require('axios')
const mongoose = require('mongoose')
const Article = require('../models/article')
const cheerio = require('cheerio')


const usURL = 'https://www.foxnews.com/us'
const politicsURL = "https://www.foxnews.com/politics"
const mediaURL = "https://www.foxnews.com/media"
const opinionURL = "https://www.foxnews.com/opinion"
const businessURL = "https://www.foxbusiness.com/"
const entertainmentURL = "https://www.foxnews.com/entertainment"
const sportsURL = "https://www.foxnews.com/sports"
const lifestyleURL = "https://www.foxnews.com/lifestyle"
const tvURL = "https://www.foxnews.com/shows"
const foxnationURL = "https://www.foxnews.com/shows/fox-nation"




router.post('/us', (req, res) => {
    axios(usURL)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []

            $('.article', html).each(function () { //<-- cannot be a function expression
                const title = $(this).find('.title').text()
                const article = $(this).find('.content').text()
                const eyebrow = $(this).find('.eyebrow').text()
                const timePosted = $(this).find('.time').text()
                const url = `https://www.foxnews.com${$(this).find('a').attr('href')}`
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
            articles.map((a) => {
                Article.create({
                    title: a.title,
                    article: a.article,
                    url: a.url,
                    eyebrow: a.eyebrow,
                    timePosted: a.timePosted,
                    image: a.image
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

            $('.article', html).each(function () { //<-- cannot be a function expression
                const title = $(this).find('.title').text()
                const article = $(this).find('.content').text()
                const eyebrow = $(this).find('.eyebrow').text()
                const timePosted = $(this).find('.time').text()
                const url = `https://www.foxnews.com${$(this).find('a').attr('href')}`
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
            articles.map((a) => {
                Article.create({
                    title: a.title,
                    article: a.article,
                    url: a.url,
                    eyebrow: a.eyebrow,
                    timePosted: a.timePosted,
                    image: a.image
                })
            })
        res.json(articles)
        }).catch(err => console.log(err))

})

router.post('/media', (req, res) => {
    axios(mediaURL)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []

            $('.article', html).each(function () { //<-- cannot be a function expression
                const title = $(this).find('.title').text()
                const article = $(this).find('.content').text()
                const eyebrow = $(this).find('.eyebrow').text()
                const timePosted = $(this).find('.time').text()
                const url = `https://www.foxnews.com${$(this).find('a').attr('href')}`
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
            articles.map((a) => {
                Article.create({
                    title: a.title,
                    article: a.article,
                    url: a.url,
                    eyebrow: a.eyebrow,
                    timePosted: a.timePosted,
                    image: a.image
                })
            })
        res.json(articles)
        }).catch(err => console.log(err))

})

router.post('/opinion', (req, res) => {
    axios(opinionURL)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []

            $('.article', html).each(function () { //<-- cannot be a function expression
                const title = $(this).find('.title').text()
                const article = $(this).find('.content').text()
                const eyebrow = $(this).find('.eyebrow').text()
                const timePosted = $(this).find('.time').text()
                const url = `https://www.foxnews.com${$(this).find('a').attr('href')}`
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
            articles.map((a) => {
                Article.create({
                    title: a.title,
                    article: a.article,
                    url: a.url,
                    eyebrow: a.eyebrow,
                    timePosted: a.timePosted,
                    image: a.image
                })
            })
        res.json(articles)
        }).catch(err => console.log(err))

})

router.post('/business', (req, res) => {
    axios(businessURL)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []

            $('.article', html).each(function () { //<-- cannot be a function expression
                const title = $(this).find('.title').text()
                const article = $(this).find('.content').text()
                const eyebrow = $(this).find('.eyebrow').text()
                const timePosted = $(this).find('.time').text()
                const url = `https://www.foxnews.com${$(this).find('a').attr('href')}`
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
            articles.map((a) => {
                Article.create({
                    title: a.title,
                    article: a.article,
                    url: a.url,
                    eyebrow: a.eyebrow,
                    timePosted: a.timePosted,
                    image: a.image
                })
            })
        res.json(articles)
        }).catch(err => console.log(err))

})

router.post('/entertainment', (req, res) => {
    axios(entertainmentURL)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []

            $('.article', html).each(function () { //<-- cannot be a function expression
                const title = $(this).find('.title').text()
                const article = $(this).find('.content').text()
                const eyebrow = $(this).find('.eyebrow').text()
                const timePosted = $(this).find('.time').text()
                const url = `https://www.foxnews.com${$(this).find('a').attr('href')}`
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
            articles.map((a) => {
                Article.create({
                    title: a.title,
                    article: a.article,
                    url: a.url,
                    eyebrow: a.eyebrow,
                    timePosted: a.timePosted,
                    image: a.image
                })
            })
        res.json(articles)
        }).catch(err => console.log(err))

})

router.post('/sports', (req, res) => {
    axios(sportsURL)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []

            $('.article', html).each(function () { //<-- cannot be a function expression
                const title = $(this).find('.title').text()
                const article = $(this).find('.content').text()
                const eyebrow = $(this).find('.eyebrow').text()
                const timePosted = $(this).find('.time').text()
                const url = `https://www.foxnews.com${$(this).find('a').attr('href')}`
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
            articles.map((a) => {
                Article.create({
                    title: a.title,
                    article: a.article,
                    url: a.url,
                    eyebrow: a.eyebrow,
                    timePosted: a.timePosted,
                    image: a.image
                })
            })
        res.json(articles)
        }).catch(err => console.log(err))

})

router.post('/lifestyle', (req, res) => {
    axios(lifestyleURL)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []

            $('.article', html).each(function () { //<-- cannot be a function expression
                const title = $(this).find('.title').text()
                const article = $(this).find('.content').text()
                const eyebrow = $(this).find('.eyebrow').text()
                const timePosted = $(this).find('.time').text()
                const url = `https://www.foxnews.com${$(this).find('a').attr('href')}`
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
            articles.map((a) => {
                Article.create({
                    title: a.title,
                    article: a.article,
                    url: a.url,
                    eyebrow: a.eyebrow,
                    timePosted: a.timePosted,
                    image: a.image
                })
            })
        res.json(articles)
        }).catch(err => console.log(err))

})

router.post('/tv', (req, res) => {
    axios(tvURL)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []

            $('.article', html).each(function () { //<-- cannot be a function expression
                const title = $(this).find('.title').text()
                const article = $(this).find('.content').text()
                const eyebrow = $(this).find('.eyebrow').text()
                const timePosted = $(this).find('.time').text()
                const url = `https://www.foxnews.com${$(this).find('a').attr('href')}`
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
            articles.map((a) => {
                Article.create({
                    title: a.title,
                    article: a.article,
                    url: a.url,
                    eyebrow: a.eyebrow,
                    timePosted: a.timePosted,
                    image: a.image
                })
            })
        res.json(articles)
        }).catch(err => console.log(err))

})

router.post('/foxnation', (req, res) => {
    axios(foxnationURL)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []

            $('.article', html).each(function () { //<-- cannot be a function expression
                const title = $(this).find('.title').text()
                const article = $(this).find('.content').text()
                const eyebrow = $(this).find('.eyebrow').text()
                const timePosted = $(this).find('.time').text()
                const url = `https://www.foxnews.com${$(this).find('a').attr('href')}`
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
            articles.map((a) => {
                Article.create({
                    title: a.title,
                    article: a.article,
                    url: a.url,
                    eyebrow: a.eyebrow,
                    timePosted: a.timePosted,
                    image: a.image
                })
            })
        res.json(articles)
        }).catch(err => console.log(err))

})


module.exports = router;
