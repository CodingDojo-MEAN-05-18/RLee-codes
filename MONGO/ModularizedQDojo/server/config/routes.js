const mongoose = require('mongoose');
const Quote = mongoose.model('Quote');
const moment = require("moment");
module.exports = function(app){
    // root route to render the index.ejs view
    app.get('/', function(req, res) {
        res.render('index');
    });

    // post route for adding a user
    app.post('/quotes', function(req, res) {
        const quote = new Quote({
            name: req.body.name,
            quote: req.body.quote,
            created_at: new Date()
        });
        
        // This is where we add the quote to the database
        quote.save()
            .then(quote => {
                console.log('saved quote', quote);
                // Then redirect to the quote page
                res.redirect('/quotes');
            })
            .catch(error => {
                console.log("failed to save", error.message);    
                for (var key in error.errors){
                    req.flash('makeQuote', error.errors[key].message);
                }
                res.redirect("/");
            });
        
    });

    app.get("/quotes", function(req,res){
        Quote.find({}).sort({created_at: -1})
            .then (quotes => {
                console.log(quotes);
                res.render("quotes", {quotes: quotes, moment: moment});
            })
            .catch (error => {
                console.log("Something went wrong with the find()!");
                res.redirect("/");
            });
        
    });
};