// require express
var express = require('express');
// create the express app
var app = express();

// path module
var path = require('path');

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
    cookie: {maxAge: 600000}  //ten minute expiration
}));


// Build an Express application that counts the number of times the root route ('/') has been viewed. 
// root route to render the index.ejs view & increment counter
app.get('/', function(req, res) {
    if(!req.session.counter){
        req.session.counter = 1;
    }else{
        req.session.counter += 1;
    }
    res.render('index', {req});
});


// Ninja Level 1
// Add a +2 button underneath the counter that reloads the page and increments counter by 2. 
// Add another route to handle this functionality.
// route to handle double increment button and redirect to root
app.get('/plus2', function(req, res){
    if(!req.session.counter){
        req.session.counter = 1;
        res.redirect('/');
    }else{
        req.session.counter += 1;
        res.redirect('/');
    }
});


// Ninja Level 2
// Add a reset button that resets the counter back to 1. 
// Add another route to handle this functionality.
// route to handle counter reset and redirect to root
app.get("/reset", function(req, res){
    if(!req.session.counter){
        req.session.counter = -1;
        res.redirect('/');
    }else{
        req.session.counter = -1;
        res.redirect('/');
    }
});

// tell the express app to listen on port 8000
app.listen(8000, function() {
console.log('listening on port 8000');
});