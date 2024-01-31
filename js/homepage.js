//express
const express = require('express')
// const app = express();
const homepage = express.Router();
// body parser
const bodyParser = require('body-parser');
homepage.use(bodyParser.urlencoded({ extended: true }));
// Import blog Model
const BlogModel = require("./blogModelSchema");

homepage.get("/homepage", async (req, res) => {
    try {
        //Using model it finds the data in mongodb
        const data = await BlogModel.find({}).exec();
        // data is an array of objects, not a single object!
        res.render('homepage', {
            title: req.title,
            data: data
        });
    } catch (err) {
        console.error('Error fetching data from MongoDB:', err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = homepage;  