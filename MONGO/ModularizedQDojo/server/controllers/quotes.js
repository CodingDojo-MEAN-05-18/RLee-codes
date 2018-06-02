const mongoose = require("mongoose"),
    Quote = mongoose.model("Quote"),
    moment = require("moment");
    quotes = {

    index : function(req,res){
        res.render('index');
    },

    newQuote : function(req,res){
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
    },

    showQuotes : function(req, res){
        Quote.find({}).sort({created_at: -1})
            .then( quotes => {
                // console.log(quotes);
                res.render("quotes", {quotes: quotes, moment: moment});
            })
            .catch( error => {
                console.log("Something went wrong with the find()!");
                res.redirect("/");
            });
    },

    clearQuote : function(req,res){
        quoteID = req.params.id;
        Quote.remove({_id: quoteID})
            .then(result => {
                res.redirect("/quotes");
            })
            .catch( error => {
                console.log("Something went wrong with the delete.");
                res.redirect("/");
            });
    },
};

//export controllers to routes.
module.exports = quotes;