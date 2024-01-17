const express = require('express');
const session = require('express-session');
require('dotenv').config()

const sessionMiddleware = session({
    secret: process.env.SECRET_KEY,
    resave: true,
    saveUninitialized: true,
    maxAge: 3600000,
});

module.exports = sessionMiddleware;