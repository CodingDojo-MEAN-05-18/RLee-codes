// require express & create app
var express = require('express');
var app = express();

const port = process.env.PORT || 8000;
const server = app.listen(port, () => console.log(`listening on port ${port}`));

// path module
var path = require('path');

//mongoose module
var mongoose = require('mongoose');
require("./server/config/mongoose");

//require body-parser & set it to handle .json data
var bodyParser = require('body-parser');
app.use(bodyParser.json());


require("./server/config/routes")(app);