const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

const url = 'https://www.foxnews.com/us'

app.get('/', function (req, res) {
    res.json('This is my webscraper')
})

app.get('/results', (req, res) => {
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


app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))