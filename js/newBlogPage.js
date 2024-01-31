//express
const express = require('express')
// const app = express();
const newBlogPage = express.Router();
// body parser
const bodyParser = require('body-parser');
newBlogPage.use(bodyParser.urlencoded({ extended: true }));
//server mongoose/ mongodb & bodyparse
const mongoose = require('mongoose');
//date fns
const { format } = require('date-fns');
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/project-blog-api', {
}, console.log("connected to database"));
//Catches mongodb connection error
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));
// Import blog Model
const BlogModel = require("./blogModelSchema");


newBlogPage.get("/newBlogPage", (req, res) => {
    // res.render('newBlogPage');
    if (req.session.loggedin) { // will return true if user is logged in
        res.render('newBlogPage');
        // next();
    } else {
        res.redirect("loginPage");
    }
});

//Add blogs to database
newBlogPage.post("/newBlogPage", async (req, res, next) => {
    const blogs = new BlogModel({
        title: req.body.blogTitle,
        body: req.body.blogContent,
        date: format(new Date(), "yyyy-MM-dd HH:mm:ss")
    });
    const result = await blogs.save();
    res.status(202);
});


module.exports = newBlogPage;