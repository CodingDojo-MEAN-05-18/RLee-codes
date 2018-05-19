// require express
var express = require('express');
// create the express app
var app = express();

const port = process.env.PORT || 8000;
const server = app.listen(port, () => console.log(`listening on port ${port}`));

// path module
var path = require('path');

//mongoose module
var mongoose = require('mongoose');
//connect mongoose to mongoDB
mongoose.connect('mongodb://localhost/Quotes');
mongoose.connection.on("connected", () => console.log("connected to MongoDB"));

//use native promises
mongoose.Promise = global.Promise;

const { Schema } = mongoose;
const quoteSchema = new Schema({
    name: {type: String, required: true, minlength: 3},
    quote: {type: String, required: true, minlength: 4},
    created_at: Date, 
});

//collection => quotes
mongoose.model("Quote", quoteSchema);
const Quote = mongoose.model("Quote");

//setup flash for error messages
const flash = require("express-flash");
app.use(flash());

//use moment module for time/date formatting
var moment = require("moment");

var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));

// static content
app.use(express.static(path.join(__dirname, './static')));

// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//setting up session
var session = require ('express-session');
app.use(session({
    secret: 'supersecretsecret',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}));


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
            // console.log(quotes);
            res.render("quotes", {quotes: quotes, moment: moment});
        })
        .catch (error => {
            console.log("Something went wrong!");
            res.redirect("/");
        });
    
});