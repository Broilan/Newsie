const mongoose = require('mongoose');

const { Schema } = mongoose;

const articleSchema = new Schema({
    title: String,
    article: String,
    url: String,
    eyebrow: String,
    timePosted: String,
    image: String,
    createdby: String,
    date: {type: String, 
        default: 
            new Date().toLocaleString('en-us', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            weekday: 'long'
            })
    },
    dateNow: {
        type: Date,
        default: Date.now()
    }
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;