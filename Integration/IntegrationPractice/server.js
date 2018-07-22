// require express
const express = require('express');
const app = express();  //no more 'var'

const port = process.env.PORT || 8000;
const server = app.listen(port, () => console.log(`listening on port ${port}`));


// set the path such that the dist folder is used for static content.
const path = require('path');
app.use(express.static(path.join(__dirname, './AngulApp/dist/AngularApp')));

// //mongoose module  //NOT NEEDED YET
// var mongoose = require('mongoose');
// //connect mongoose to mongoDB
// mongoose.connect('mongodb://localhost/DBNAME');
// //use native promises
// mongoose.Promise = global.Promise;

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
// include the json format for integrations
app.use(bodyParser.json());


// NO TEMPLATING ENGINE NEEDED 
// // setting up ejs and our views folder
// app.set('views', path.join(__dirname, './views'));
// app.set('view engine', 'ejs');


module.exports = function (app) {
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./AngularApp/dist/AngularApp/index.html"));
    });
};

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./AngularApp/dist/AngularApp/index.html"));
});