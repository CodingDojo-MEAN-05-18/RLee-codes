// require express
var express = require('express');
// create the express app
var app = express();

const port = process.env.PORT || 8000;
const server = app.listen(port, () => console.log(`listening on port ${port}`));

// path module
var path = require('path');

// static content
app.use(express.static(path.join(__dirname, './static')));

// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// use body parser to hangle form data
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

//set regex for email & password validations
const emailRegex = (/^\w+@\w+\.(net|com|org)$/);
const passRegex = /(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}/;

//use flash to display errors to user
const flash = require("express-flash");
app.use(flash());

//setting up session
var session = require ('express-session');
app.set('trust proxy', 1);
app.use(session({
    secret: 'supersecretsecret',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 6000000}
}));

//use moment for time/date formatting
const moment = require("moment");

//setup bcrypt for password hashing & hash comparison
const bcrypt = require("bcrypt");

//mongoose module //connect mongoose to mongoDB //use native promises
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/UsersX');
mongoose.Promise = global.Promise;

const { Schema } = mongoose;
const userSchema = new Schema({
    fname : {type: String, required: true, minlength: 2},
    lname : {type: String, required: true, minlength: 2},
    email : {type: String, required: true},
    pword : {type: String, required: true},
    secrets : [
        {
            type: Schema.Types.ObjectId,
            ref: "Secret",
        }
    ],
    bday : {type: Date, required: true},
    created_at: {type: Date, required: true}
});

const secretSchema = new Schema({
    content : {type: String, required: true},
    comments : [
        {
            type: Schema.Types.ObjectId,
            ref: "Comment",
        }
    ],
    user : { 
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    created_at: {type: Date, required: true}
});

const commentSchema = new Schema({
    content : {type : String, required: true},
    secret : {
        type: Schema.Types.ObjectId,
        ref: "Secret",
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    created_at: {type: Date, required: true },
});


mongoose.model("User", userSchema);
mongoose.model("Secret", secretSchema);
mongoose.model("Comment", commentSchema);
const User = mongoose.model("User");
const Secret = mongoose.model("Secret");
const Comment = mongoose.model("Comment");

//server Setup Above here
//------------------------------------------------------------------------------------------

///routes
// root route to render the index.ejs view with form for registration
app.get('/', function(req, res) {
    res.render('index');
});

// post route for adding a user
app.post('/users', function(req, res) {
    console.log("post data received");

    req.session.valid = true;
    req.session.errors = [];

    if ( req.body.email == ""){
        console.log("empty email address");
        req.session.errors.push("Email address must be present.");
        req.session.valid = false;
        if (req.session.valid == false){
            for (var key in req.session.errors){
                req.flash('createUser', req.session.errors[key]);
            }
            console.log("Preliminary Manual validations tripped.");
            res.redirect("/");
        }
    }else{
        console.log(req.body.email);
        User.findOne({email : req.body.email})
            .then ( user => {
                req.session.errors.push(`Email address ${user.email} is already registered. Either proceed to login page, or use a different email address.`);
                req.session.valid = false;
                if (req.session.valid == false){
                    for (var keyd in req.session.errors){
                        req.flash("createUser", req.session.errors[keyd]);
                    }
                }
                res.redirect("/");
            })
            .catch( error => {
                console.log("Email address is available.");
                //manual validations & user creation if data = valid
                //set manual validations against req.session.valid
                //email validations
                if (req.body.email == ''){
                    req.session.errors.push("Email address must be present.");
                    req.session.valid = false;
                }
                if (emailRegex.test(req.body.email) == false){
                    req.session.errors.push("Email address must be properly formated.");
                    req.session.valid = false;
                }
            
                //name validations
                if (req.body.fname == ""){
                    req.session.errors.push("First Name is required");
                    req.session.valid = false;
                }
                if (req.body.fname.length < 2) {
                    req.session.errors.push("First Name must be 2 characters or longer.")
                    req.session.valid = false;
                }
                if (req.body.lname == ""){
                    req.session.errors.push("Last Name is required");
                    req.session.valid = false;
                }
                if (req.body.lname.length < 2) {
                    req.session.errors.push("Last Name must be 2 characters or longer.");
                    req.session.valid = false;
                }
                
                //birthday validation
                if (req.body.bday == false){
                    req.session.errors.push("You were definitely born.  Select your birthday.");
                    req.session.valid = false;
                }
                
                //password validations
                if (req.body.pword == ""){
                    req.session.errors.push("Password field is required.");
                    req.session.valid = false;
                }
                if (req.body.cword == ""){
                    req.session.errors.push("Password confirmation is required.");
                    req.session.valid = false;
                }
                if (req.body.pword != req.body.cword){
                    req.session.errors.push("Password and Password Confirmation must match.");
                    req.session.valid = false;
                }
                if (passRegex.test(req.body.cword) == false){
                    req.session.errors.push("Password must be at least 8 characters, containing at least 1 uppercase letter, 1 lower case letter, and 1 number.");
                    req.session.valid = false;
                }
                
                // if validation fails, return to registration page and flash errors, else create the user from validated data
                // db validations exist but shout never be triggered due to manual validations.
                if (req.session.valid == false){
                    for (var keys in req.session.errors){
                        req.flash('createUser', req.session.errors[keys]);
                    }
                    console.log("Manual validations tripped.");
                    res.redirect("/");
                }else {
                    //helper function to create new user
                    const makeUser = function(data){

                        bcrypt.hash(data.cword, 10)
                            .then ( hash => {

                                const user = new User({
                                    fname : data.fname,
                                    lname : data.lname,
                                    email : data.email,
                                    pword : hash,
                                    bday :  data.bday,
                                    created_at: new Date()
                                });
                                user.save()
                                .then( user => {
                                    console.log(user._id);
                                    req.session.userID = user._id;
                                    console.log(req.session.userID);
                                    console.log("New User", user);
                                    res.redirect('/dashboard');
                                })
                                .catch ( error => {
                                    for (var key in error.errors){
                                        req.flash('createUser', error.errors[key].message);
                                    }
                                    console.log("User failed to save properly", error.message);
                                    res.redirect("/");
                                });
                            })
                            .catch( error => {
                                console.log("There was a problem generating the hash.");
                                res.redirect("/");
                            });

                    };
                // call makeUser to add the user to the database
                makeUser(req.body);
                }
            });  
    }      
});


// get route to render login page
app.get('/loginPage', function(req,res){
    console.log("routed to login page");
    res.render("LoginForm");
});

app.post("/login", function(req, res){

    User.findOne({email : req.body.email})
        .then ( user => {
            bcrypt.compare(req.body.pword,  user.pword)
                .then( result => {
                    req.session.userID = user._id;
                    console.log("logged in", req.session.userID);
                    res.redirect('/dashboard');
                })
                .catch( error =>  {
                    console.log(error);
                    var message = "There was a problem with the email or password";
                    req.flash('logIn', message);
                    res.redirect('/loginPage');
                });
        })
        .catch (error => {
            console.log("login error");
            var messages = "That email address is not registered.";
            req.flash('logIn', messages);
            res.redirect('/loginPage');
        });
});

//get route to render the dashboard
app.get("/dashboard", function(req, res){
    if (!req.session.userID){
        req.session.errors= [];
        console.log("Valid Login Required");
        req.session.errors.push("Valid Login Required");
        for (var key in req.session.errors){
            req.flash('logIn', req.session.errors[key]);
        }
        res.redirect('/loginPage');
    }else{
        User.findOne({_id: req.session.userID})
        .then( user => {
            console.log("Routed to user dashboard");
            console.log("session/user id", req.session.userID);
            Secret.find({}).sort({created_at: -1})
                .populate("user")
                .then( secrets => {
                    // console.log(secrets);
                    res.render("Dashboard", {user : user, moment : moment, secrets});
                })
                .catch( error => {
                    for (var key in error.errors){
                        req.flash("logIn", error.errors[key].message);
                    }
                    console.log("Failed to properly retrieve Secrets");
                    res.redirect("/loginPage");
                });
            })
        .catch( error => {
            console.log("There was a problem with your login.  Please try again.");
            for (var key in error.errors){
                req.flash('createUser', error.errors[key].message);
            }
            res.redirect('/loginPage');
        });
    }
});


app.get("/logout", function(req, res){
    req.session.userID = null;
    console.log("User has logged out");
    res.redirect('/loginPage');
});

// registration & login routes above here. 
//-----------------------------------------------------------------------------------------


//post route to save a new secret to the db
app.post("/secrets/new", function(req, res){
    var secret = new Secret({
        content: req.body.content,
        user: req.session.userID,
        created_at: new Date(),
    });
    secret.save()
        .then(secret =>{
            console.log("Secret Saved.");
            res.redirect("/dashboard");
        })
        .catch(error =>{
            for (var key in error.errors){
                req.flash('makeSecret', error.errors[key].message);
            }
            console.log("Secret failed to save properly", error.message);
            res.redirect("/dashboard");
        });
});

app.get("/secret/delete/:id", function(req, res){
    var secretID = req.params.id;
    console.log("secretID", secretID);
    Secret.remove({ _id : secretID})
        .then( result => {
            console.log("Secret Successfully deleted.");
            return Comment.remove({secret: secretID})
                .then( () => {
                    res.redirect("/dashboard");

                });
        })
        .catch(error => {
            for (var key in error.errors){
                req.flash("makeSecret", error.errors[key].messsage);
            }
            console.log("Secret failed to delete properly.");
            res.redirect("/dashboard");
        });
});

app.get("/comment/detail/:id", function(req, res){
    req.session.secretID = req.params.id;
    Secret.findOne({_id : req.params.id},function( err, secret ){
        Comment.find({ secret : secret.id}).sort({created_at : -1})
            .populate("user")
            .then( comments =>{
                console.log("Comments page reached");
                // console.log(comments);
                var userID = req.session.userID;
                // console.log(userID);
                res.render("Comments", { secret, comments, userID });
            })
            .catch( error =>{
                console.log("There was a problem retrieving comments");
                for (var key in error.errors){
                    req.flash('comment', error.errors[key].message);
                }
                res.redirect(`/comment/detail${req.params.id}`);
            });

    });
    //code to retrieve the selected secret, all its comments, and a form to add a comment.


});


app.post("/comment/new", function(req, res){
    
    if (req.body.content == undefined){
        var message = "Comments cannot be blank.";
        req.flash("comment", message);
        res.redirect(`/comment/detail/${req.body.secret}`);
    }else{
        var comment = new Comment({
            content: req.body.content,
            secret: req.body.secret,
            user: req.session.userID,
            created_at: new Date(),
        });
            comment.save()
            .then(comment =>{
                console.log("Comment saved.");
                res.redirect(`/comment/detail/${req.body.secret}`);
                return Secret.findById(comment.secret)
                    .then(secret => {
                        console.log("secret", secret);
                        secret.comments.push(comment);
                        return secret.save()
                            .then( () => response.redirect(`/comment/detail/${req.body.secret}`))
                            .catch( () => console.log() );
                    })
                    .catch( () => console.log() );
            })
            .catch(error =>{
                console.log("There was a problem saving the comment");
                for (var key in error.errors){
                    req.flash('comment', error.errors[key].message);
                }
                res.redirect(`/comment/detail/${req.body.secret}`);
            });
    }

});

app.get("/comment/delete/:id", function(req, res){
    var commentId = req.params.id;
    var secretId = req.session.secretID;
    Comment.remove({_id : commentId})
        .then( result => {
            return Secret.update({_id: secretId}, {$pull: {comments: commentId}})
                .then( result => {

                    console.log("Comment deleted.");
                    res.redirect(`/comment/detail/${req.session.secretID}`);
                });
        
        })
        .catch(error => {
            console.log(error);
            res.redirect("/dashboard");
        });
});