const PORT = 8000
const express = require('express')
require('dotenv').config()
const app = express()
const axios = require('axios')
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
app.use("/cnn", require('./controllers/cnn'))
app.use("/nyt", require('./controllers/nyt'))
app.use("/tg", require('./controllers/tg'))
app.use("/times", require('./controllers/times'))
app.use("/vox", require('./controllers/vox'))
app.use("/abc", require('./controllers/abc'))


app.get('/', function (req, res) {
    Article.find({})
    .then(allArticles => {
       res.json({allArticles: allArticles })  
    })
   
})

//Fox intervals
    setInterval( async () => {
     await axios.post(`http://localhost:8000/fox/us`)
     await axios.post(`http://localhost:8000/fox/politics`)
     await axios.post(`http://localhost:8000/fox/media`)
     await axios.post(`http://localhost:8000/fox/opinion`)
     await axios.post(`http://localhost:8000/fox/business`)
     await axios.post(`http://localhost:8000/fox/entertainment`)
     await axios.post(`http://localhost:8000/fox/sports`)
     await axios.post(`http://localhost:8000/fox/lifestyle`)
     await axios.post(`http://localhost:8000/fox/tv`)
     await axios.post(`http://localhost:8000/fox/foxnation`)
  }, 1800000);



const server = app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))

module.exports = server;