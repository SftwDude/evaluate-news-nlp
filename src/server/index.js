var path = require('path')
const express = require('express')
const cors = require('cors')
const mockAPIResponse = require('./mockAPI.js')

var aylien = require("aylien_textapi");
const dotenv = require('dotenv');
dotenv.config();
console.log(`Your API key is ${process.env.API_KEY}`);

var aylienAPI = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

const app = express()

app.use(express.static('dist'))
app.use(cors())

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.get('/sentiment', function (req, res) {
    console.log(`sentiment called req.query.url =  ${req.query.url}`)
    aylienAPI.sentiment({
        'url': req.query.url
    }, function (error, response) {
        if (error === null) {
            console.log(response);
            res.send(response);
        }
    });
})

