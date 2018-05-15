// require express
var express = require('express');
// create the express app
var app = express();

const port = process.env.PORT || 8000;
const server = app.listen(port, () => console.log(`listening on port ${port}`));

// path module
var path = require('path');

//mongood module
var mongoose = require('mongoose');
//connect mongoose to mongodb
mongoose.connect('mongodb://localhost/basic_mongoose');
//use native promises
mongoose.Promise = global.Promise;
//create schemas
var UserSchema = new mongoose.Schema({
    name: String,
    age: Number
});
mongoose.model('User', UserSchema);  //this sets the Schema in our models as "User"
var User = mongoose.model('User'); //this retrieves the Schema from our Models, named "User"

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

//setting up socket.io and listeners
const io = require('socket.io')(server);
io.on('connection', socket => {
    console.log(`Socket is connected and listening on port: ${port}`);
});

// root route to render the index.ejs view
app.get('/', function(req, res) {
    User.find({}, function(err,users){
        if (err){
            console.log("Something went wrong!");
            res.render('index');
        }else{
            console.log(users);
            res.render('index',{users: users});
        }
    });
});

// post route for adding a user
app.post('/users', function(req, res) {
    console.log('POST DATA', req.body);
// create a new User with the name and age corresponding to those form req.body
    var user = new User({name: req.body.name, age: req.body.age});
//attempt to save the user to the DB. (callback to handle errors)
    user.save(function(err){
    //if there's an error console log that something went wrong!
        if(err){
            console.log("Something went wrong!");
        }else{  //else console.log that we did well and then redirect to the root route
            console.log("Successfully added a user!");
        //then redirect to the root route
            res.redirect('/');
        }
    });

});