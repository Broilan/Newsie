const mongoose = require('mongoose');

const { Schema } = mongoose;

const articleSchema = new Schema({
    title: String,
    article: String,
    url: String,
    eyebrow: String,
    timePosted: String,
    image: String,
    createdby: String
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;