// require express
var express = require('express');
// create the express app
var app = express();

const port = process.env.PORT || 8000;
const server = app.listen(port, () => console.log(`listening on port ${port}`));

// path module
var path = require('path');

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//mongoose module
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Otters');
mongoose.Promise = global.Promise;

// setup Otter schema
const { Schema } = mongoose;
const otterSchema = new Schema({
    name: {type: String, required: true, minlength: 2},
    food: {type: String, required: true, minlength: 3},
    game: {type: String, required: true, minlenth: 2},
    member: {type: String, required: false},
    interests: {type: String, required: true, minlenth: 2},
    id: {type: Number, required: true},
    added_at: {type : Date}
});
//setup Otter collection
mongoose.model("Otter", otterSchema);
const Otter = mongoose.model("Otter");

// setup id schema for setting & using custom Otter ids
const idSchema = new Schema({
    idNum: {type: Number},
    name: {type : String, require: true}
});
mongoose.model("OtterID", idSchema);
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


// root route to render the index.ejs view: shows Otter Family
app.get("/", function(req, res) {
    Otter.find({})
        .then (otters => {
            res.render("index", {otters: otters});
        })
        .catch (error =>{
            console.log("There was a problem locating the otter family!");
            res.redirect("/otters/new");
        });
    
});

// route to form for adding an otter to the family
app.get('/otters/new', function(req, res){
    res.render('newbie.ejs');
});

//route to process POST data for newly added Otter
app.post('/otters', function(req, res){
    // helper function to increment & return idNum record
    var idNum = function(callback){
        OtterID.findOneAndUpdate({name: "counter"}, {$inc: { idNum: 1 }}, function(err){
            OtterID.find({name: "counter"}).then(function(count){
                num = count[0].idNum;
                console.log(num);
                return(num, callback());
            });
        });
    };

    // helper function to create new otter instance and save to db
    var otterMake = function(){
        const otter = new Otter({
            name : req.body.name,
            food : req.body.food,
            game : req.body.game,
            member : req.body.member,
            interests : req.body.interests,
            id : num,
            added_at : new Date()
        });
        
        otter.save()
        .then( otter => {
            console.log("saved Otter", otter);
            res.redirect("/");
        })
        .catch(error => {
            for (var key in error.errors){
                req.flash('addOtter', error.errors[key].message);
            }
            console.log("failed to save", error.message);
            res.redirect("/otters/new");
        });
    };

    var num = idNum(otterMake);

    
});

// route to page with details about an otter
app.get('/otters/:id', function(req, res){
    var otterID = req.params.id;
    Otter.findOne({id: otterID})
        .then ( otter => {
            num = Math.floor(Math.random()*10);
            res.render("detail", {otter : otter, num: num});
        })
        .catch (error =>{
            // some code to handle an error scenario
            console.log("There was a problem retrieving the details!")
            res.redirect("/");
        });
    // console.log(otterID);
    
});

// route to form for editing an otter in the family
app.get('/otters/edit/:id', function(req, res){
    var otterID = req.params.id;
    var family;
    Otter.find({})
        .then ( data => {
            family = data;
        })
        .catch ( error => {
            console.log('There was a problem retrieving the Otter family data.')
            res.redirect(`/otters/${otterID}`);
        });
    
    Otter.findOne({id: otterID})
        .then ( otter => {
            res.render('update', {family:family , otter:otter});
        })
        .catch (error => {
            console.log("There was a problem retrieving the otter's data.");
            res.redirect(`/otters/${otterID}`);
        });
    
});

// route to process form data for editing an otter
app.post('/otters/:id', function(req, res){
    var otterID = req.params.id;
    Otter.findOneAndUpdate({id: otterID}, {$set: {
        
        name : req.body.name,
        food : req.body.food,
        game : req.body.game,
        member : req.body.member,
        interests : req.body.interests,

     }})
        .then ( function(){ Otter.findOne({id : otterID})
            .then ( otter => {
                res.redirect(`/otters/${otter.id}`);
            })
            .catch ( error => {
                console.log("Could not locate recently updated otter.");
                res.redirect('/');
            });
        })
        .catch ( error => {
            console.log('There seems to have been a problem with the update process.');
            req.redirect('/otters/edit'+otterID);
        });
});

app.post("/otters/destroy/:id", function(req,res){
    var otterID = req.params.id;
 
    Otter.remove({id : otterID})
        .then ( otter => {
            res.redirect('/');
        })
        .catch (error => {
            console.log("There was a problem with the ousting process.");
            res.redirect('/');

        });
});