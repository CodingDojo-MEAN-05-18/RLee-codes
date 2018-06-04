const mongoose = require("mongoose"),
    People = mongoose.model("People"),
    people = require("../controllers/people");

    module.exports = (app)=>{

        app.get('/', function(req, res){ 
            //root route to serve up the full collection of people born in 1955
            people.show(req, res);
        });

        app.get('/new/:name/', function(req, res){
            //will add a name into the database which can be used for blank spaces. 
            //So adding Steve Jobs to our database you'd type in the url 'localhose:8000/new/Steve Jobs'
            people.create(req, res);
        });

        app.get('/remove/:name', function(req, res){
            //will delete a name from the database
            people.destroy(req, res);
        });

        app.get("/:name", function(req, res){
            //will bring up the document of that particular person.
            people.pull(req, res);
        });

    };