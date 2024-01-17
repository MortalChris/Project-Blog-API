const express = require('express');
const session = require('express-session');

const sessionMiddleware = session({
    secret: "temppassword",
    resave: true,
    saveUninitialized: true,
    maxAge: 3600000,
});

module.exports = sessionMiddleware;