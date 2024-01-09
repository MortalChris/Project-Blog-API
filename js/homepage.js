//express
const express = require('express')
// const app = express();
const homepage = express.Router();
// body parser
const bodyParser = require('body-parser');
homepage.use(bodyParser.urlencoded({ extended: true }));

homepage.get("/homepage", (req, res) => {
    res.render('homepage');
});

module.exports = homepage;  