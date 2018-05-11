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
    cookie: {maxAge: 7200000}
}));

//instantiate "chat_log" and "users" list
    session.chat_log = [];
    session.users= {};


//helper function to generate user id#'s & prevent duplicate id#'s, return id# to be sent to client
const makeUserId = function(name){
    var num = Math.floor(Math.random()*200000);
    if( session.users.hasOwnProperty(num)){
        makeUserId(name);
    }else{
        session.users[num] = name;
        return num;
    }
};

//setting up socket.io and listeners
const io = require('socket.io')(server);
io.on('connection', socket => {
    console.log(`Socket is connected and listening on port: ${port}`);

    //receive "named_entry" event.  Check for duplicates & if not, Add name to session.  Send back Session_ID and current chat_log with "catching_up" event.
    socket.on("named_entry", function(name){
        if (Object.values(session.users).indexOf(name) > -1){
            socket.emit('duplicate', name);
        }else{
            var num = makeUserId(name);
            var info = { number : num };
            info.name = session.users[info.number];
            info.chats = session.chat_log;
            socket.emit("catching_up", info);
        }
    });

    // "message posted" event triggers chat_log to be updated & message data to be broadcast to all users
    socket.on("message_posted", function(message_data){
        if(session.chat_log.length > 15){
            session.chat_log.shift();
            session.chat_log.push(message_data);
        }else{
            session.chat_log.push(message_data);
        }
        io.emit("updated_chat_log", session.chat_log);
    });

});


// root route to render the index.ejs view
app.get('/', function(req, res) {
    res.render('index');
});

// post route for adding a user
app.post('/users', function(req, res) {
    console.log('POST DATA', req.body);
// This is where we would add the user to the database
// Then redirect to the root route
    res.redirect('/');
});