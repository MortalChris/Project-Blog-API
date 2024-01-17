//express
const express = require('express')
// const app = express();
const newBlogPage = express.Router();
// body parser
const bodyParser = require('body-parser');
newBlogPage.use(bodyParser.urlencoded({ extended: true }));

newBlogPage.get("/newBlogPage", (req, res) => {
    // res.render('newBlogPage');
    if (req.session.loggedin) { // will return true if user is logged in
        res.render('newBlogPage');
        // next();
    } else {
        res.redirect("loginPage");
    }
});

module.exports = newBlogPage;