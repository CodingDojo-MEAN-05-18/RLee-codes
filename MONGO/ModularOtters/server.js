// require express
var express = require('express');
// create the express app
var app = express();

const port = process.env.PORT || 8000;
const server = app.listen(port, () => console.log(`listening on port ${port}`));

// path module
var path = require('path');

app.use(express.static(path.join(__dirname, './client/static')));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

//mongoose module
var mongoose = require('mongoose');
require("./server/config/database");

//setup Otter & ID collections
const Otter = mongoose.model("Otter");
const OtterID = mongoose.model("OtterID");

// setup flash to handle error messages
const flash = require("express-flash");
app.use(flash());

//body-parser to hangle POST data
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

//setting up session
var session = require ('express-session');
app.use(session({
    secret: 'supersecretsecret',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}));

//require routes from route.js in server/config/ as a function and pass in app
require("./server/config/routes")(app);

