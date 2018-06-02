const mongoose = require('mongoose');
const Quote = mongoose.model('Quote');
const moment = require("moment");
const quotes = require("../controllers/quotes.js");
//export routes to server   
module.exports = function(app){
    // root route to render the index.ejs view
    app.get('/', function(req, res) {
        quotes.index(req, res);
    });

    // post route for adding a user
    app.post('/quotes', function(req, res) {
        quotes.newQuote(req, res);
    });

    app.get("/quotes", function(req,res){
        quotes.showQuotes(req, res);
    });

    app.post("/clearQuote/:id", function(req,res){
        quotes.clearQuote(req, res);
    });
};