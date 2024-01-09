//express
const express = require('express')
// const app = express();
const loginPage = express.Router();
// Express session
require('dotenv').config();
const session = require('express-session');
// body parser
const bodyParser = require('body-parser');
loginPage.use(bodyParser.urlencoded({ extended: true }));
//server mongoose
const mongoose = require('mongoose');
//password hatcher
const bcryptjs = require('bcryptjs');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/project-blog-api', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
}, console.log("connected to database"));

//Catches mongodb connection error
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));

const UsersModel = mongoose.model('Users', new mongoose.Schema({
    // Define your data schema here
    email: { type: String, required: true},
    password: { type: String, required: true }
    // Add more fields as needed
}));

//session
loginPage.use(session({
    secret: "temppassword",
    resave: true,
    saveUninitialized: true,
    maxAge: 3600000,
}));

//Route
loginPage.get("/loginPage", (req, res) => {
    res.render('loginPage');
});

// Log-in
loginPage.post("/loginPage", async function(req, res){ 
    try {// check if the user exists 
        const usersEmail = await UsersModel.findOne({ email: req.body.email });
        console.log(usersEmail);
        if (usersEmail) { //check if password matches 
            const comparePass = await bcryptjs.compare(req.body.password, usersEmail.password);
            if (comparePass) {
                console.log(req.session)
                req.session.loggedin = true;
				req.session.username = usersEmail;
                res.redirect("homepage");
            } else {
                res.redirect("loginPage");
                console.log("password doesn't match");
            }
        } else {
            res.redirect("loginPage");
            console.log("User doesn't exist");
        }
    } catch (error) { 
        console.log(error)
        res.redirect("error");
    } 
}); 


module.exports = loginPage;