var express = require('express');
var app = express();

const port = process.env.PORT || 8000;
const server = app.listen(port, () => console.log(`listening on port ${port}`));

// path module
var path = require('path');

//mongoose module
var mongoose = require('mongoose');
require("./server/config/mongoose");

//connect mongoose to mongoDB
mongoose.connect('mongodb://localhost/DBNAME');
//use native promises
mongoose.Promise = global.Promise;

var bodyParser = require('body-parser');
// use it as .json for sending api responses.
app.use(bodyParser.json());

//require routes from routes.js in server/config/ as a function and pass in app
require("./server/config/routes")(app);