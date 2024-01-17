//express
const express = require('express')
// const app = express();
const logOutPage = express.Router();

// logOutPage.use(loginPage.sessionMiddleware);

logOutPage.post("/logOutPage", async function (req, res) { 
    req.session.loggedin = false;
    req.session.username = "";
    res.redirect("loginPage");
    console.log(req.session.loggedin);
})


module.exports = logOutPage;
