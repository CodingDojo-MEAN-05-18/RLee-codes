const express = require('express');
const app = express();

const port = process.env.PORT || 8000;
const server = app.listen(port, () => console.log(`listening on port ${port}`));

// path module
var path = require('path');

//mongoose module
var mongoose = require('mongoose');
require("./server/config/mongoose");

var bodyParser = require('body-parser');
// use it as .json for sending api responses.
app.use(bodyParser.json());

//require routes from routes.js in server/config/ as a function and pass in app
require("./server/config/routes")(app);