const mongoose = require('mongoose');
//express
const express = require('express')

const BlogModel = mongoose.model('Blogs', new mongoose.Schema({
    // Define your data schema here
    title: { type: String, required: true},
    body: { type: String, required: true },
    date: { type: String, required: true}
    // Add more fields as needed
}));

module.exports = BlogModel;