//express
const express = require('express')
const blogPage = express.Router();
// body parser
const bodyParser = require('body-parser');
blogPage.use(bodyParser.urlencoded({ extended: true }));
// Import blog Model
const BlogModel = require("./blogModelSchema");

blogPage.get("/blogPage/:id", async (req, res) => {
    const blogId = req.params.id;
    try {
        //Using model it finds the data in mongodb
        const data = await BlogModel.find({}).exec();
        // data is an array of objects, not a single object!
        res.render('blogPage', {
            title: req.title,   
            data: data
        });
    } catch (err) {
        console.error('Error fetching data from MongoDB:', err);
        res.status(500).send('Internal Server Error');
    }
});

// const Blog = mongoose.model("Blog", BlogModel);
module.exports = blogPage;