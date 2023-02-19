const PORT = 8000
const express = require('express')
require('dotenv').config()
const app = express()
const cors = require('cors')
const Article = require('./models/article')
const mongoose = require('mongoose');


//Connecting to mongo
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;
mongoose.connect(MONGO_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once('open', () => {
    console.log(`Connected to MongoDB at HOST: ${db.host} and PORT: ${db.port}`);
});

db.on('error', (error) => {
    console.log(`Database Error: ${error}`);
})

//Middleware
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use("/fox", require('./controllers/fox'))

app.get('/', function (req, res) {

    res.json('This is my webscraper')
})



const server = app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))

module.exports = server;