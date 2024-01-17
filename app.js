//express
const express = require('express')
const app = express();
const port = 3000;
const path = require("path");
app.use(express.urlencoded({ extended: false }));
// ejs
const ejs = require('ejs');
app.engine('.html', require('ejs').__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
//Public Routes (css)
app.use(express.static(path.join(__dirname, 'public')));

//Routes
const homepageRouter = require("./js/homepage");
const loginPageRouter = require("./js/loginPage");
const logOutPageRouter = require("./js/logOutPage");
const newBlogPageRouter = require("./js/newBlogPage");

app.use("/", homepageRouter);
app.use("/", loginPageRouter);
app.use("/", logOutPageRouter);
app.use("/", newBlogPageRouter);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}/homepage`);
});