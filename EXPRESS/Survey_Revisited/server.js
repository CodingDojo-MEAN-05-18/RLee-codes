// 1. server displays index.ejs containing the form
// 2. user form submission triggers form data to be emitted to servers
// 3. server listens for "submission" event & responds with emission of form data to client
// 4. "submission" event also triggers the server to generate and emit to client a random number (1-1000)
// 5. data emitted from server to user is displayed in the document 


// require express
var express = require('express');
// create the express app
var app = express();

const server = app.listen(8000);

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

//setting up socket.io
const io = require('socket.io')(server);

io.sockets.on('connection', function (socket){
    socket.emit('connected', {msg: 'socket is connected and listening'});

    // 3. server listens for "submission" event & responds with emission of form data to client
    socket.on("submission", function(data){
        // 4. "submission" event also triggers the server to generate and emit to client a random number (1-1000)
        var num = Math.floor(Math.random() * 1000 ) + 1;
        socket.emit('number', {number: num});
        
        // emit data received back to client
        socket.emit('dataSent', {data: data});
        
    });
});







// 1. server displays index.ejs containing the form

// code from before revisiting---
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
   so }else{
    // save session data to a function-scoped variable, null session variable, render result view
    var data = req.session.data;
    req.session.destroy();
    res.render('result', {data});
    }
});

// // tell the express app to listen on port 8000
// app.listen(8000, function() {
// console.log('listening on port 8000');
// });