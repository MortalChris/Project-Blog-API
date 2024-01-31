//express
const express = require('express')
const blogPage = express.Router();
// body parser
const bodyParser = require('body-parser');
blogPage.use(bodyParser.urlencoded({ extended: true }));
//server mongoose/ mongodb & bodyparse
const mongoose = require('mongoose');

blogPage.get("/blogPage", async (req, res) => {
    try {
        res.render('blogPage');
    } catch (err) {
        console.error('Error fetching data from MongoDB:', err);
        res.status(500).send('Internal Server Error');
    }
});

// const Blog = mongoose.model("Blog", BlogModel);
module.exports = blogPage;