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

const PORT = process.env.PORT || 8000;

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

app.get('/', (req, res) => {
    res.json({ name: 'MERN Auth API', greeting: 'Welcome to the our API', author: 'YOU', message: "Smile, you are being watched by the Backend Engineering Team" });
  });

app.get('/home', function (req, res) {
    Article.find({})
    .then(allArticles => {
       res.json({allArticles: allArticles })  
    })
   
})

//intervals
    setInterval( async () => {
    //  CNN calls
     await axios.post(`https://newsie.herokuapp.com/cnn/energynenvrironment`)
     await axios.post(`https://newsie.herokuapp.com/cnn/spacenscience`)
     await axios.post(`https://newsie.herokuapp.com/cnn/americas`)
     await axios.post(`https://newsie.herokuapp.com/cnn/tech`)
 }, 15000);

 setInterval( async () => {
    // NYT Calls 
     await axios.post(`https://newsie.herokuapp.com/nyt/us`)
     await axios.post(`https://newsie.herokuapp.com/nyt/science`)
     await axios.post(`https://newsie.herokuapp.com/nyt/politics`)
     await axios.post(`https://newsie.herokuapp.com/nyt/travel`)
     await axios.post(`https://newsie.herokuapp.com/nyt/books`)
    }, 30000);

    setInterval( async () => {
    // TG calls 
     await axios.post(`https://newsie.herokuapp.com/tg/us`)
     await axios.post(`https://newsie.herokuapp.com/tg/tech`)
     await axios.post(`https://newsie.herokuapp.com/tg/env`)
     await axios.post(`https://newsie.herokuapp.com/tg/politics`)
     await axios.post(`https://newsie.herokuapp.com/tg/health`)
    }, 45000);

    setInterval( async () => {
    // Times Calls 
     await axios.post(`https://newsie.herokuapp.com/times/us`)
     await axios.post(`https://newsie.herokuapp.com/times/politics`)
     await axios.post(`https://newsie.herokuapp.com/times/climate`)
     await axios.post(`https://newsie.herokuapp.com/times/tech`)
     await axios.post(`https://newsie.herokuapp.com/times/science`)
    }, 60000);

    setInterval( async () => {
    // Vox Calls    
     await axios.post(`https://newsie.herokuapp.com/vox/main`)
     await axios.post(`https://newsie.herokuapp.com/vox/tech`)
     await axios.post(`https://newsie.herokuapp.com/vox/climate`)
     await axios.post(`https://newsie.herokuapp.com/vox/health`)
     await axios.post(`https://newsie.herokuapp.com/vox/culture`)
     await axios.post(`https://newsie.herokuapp.com/vox/science`)
    }, 75000);

    setInterval( async () => {
     // Fox calls
     await axios.post(`https://newsie.herokuapp.com/fox/us`)
     await axios.post(`https://newsie.herokuapp.com/fox/politics`)
     await axios.post(`https://newsie.herokuapp.com/fox/media`)
     await axios.post(`https://newsie.herokuapp.com/fox/opinion`)
     await axios.post(`https://newsie.herokuapp.com/fox/business`)
     await axios.post(`https://newsie.herokuapp.com/fox/entertainment`)
     await axios.post(`https://newsie.herokuapp.com/fox/sports`)
     await axios.post(`https://newsie.herokuapp.com/fox/lifestyle`)
     await axios.post(`https://newsie.herokuapp.com/fox/tv`)
     await axios.post(`https://newsie.herokuapp.com/fox/foxnation`)
    }, 90000);




const server = app.listen(PORT, () => console.log(`server running on PORTx ${PORT}`))

module.exports = server;