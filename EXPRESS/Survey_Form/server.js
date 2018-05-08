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
    cookie: {maxAge: 60000}
}));

// root route to render the index.ejs view
app.get('/', function(req, res) {
    res.render('index');
});

//route to process form data
app.post('/process', function(req, res){
    req.session.data = req.body;
    res.redirect('/result');
});

//route for displaying form data
app.get('/result', function(req, res) {
    // return to root route if session data isn't available for the render
    if(!req.session.data){
        res.redirect('/');
    }else{
    // save session data to a function-scoped variable, null session variable, render result view
    var data = req.session.data;
    req.session.destroy();
    res.render('result', {data});
    }
});

// tell the express app to listen on port 8000
app.listen(8000, function() {
console.log('listening on port 8000');
});