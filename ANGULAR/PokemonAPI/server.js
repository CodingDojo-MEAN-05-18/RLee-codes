// require express
var express = require('express');
// create the express app
var app = express();

const port = process.env.PORT || 8000;
const server = app.listen(port, () => console.log(`listening on port ${port}`));

// path module
var path = require('path');

var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.json());

// static content
app.use(express.static(path.join(__dirname, './static')));

// require routes from config/routes
require("./server/config/routes")(app);