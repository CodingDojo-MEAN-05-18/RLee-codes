const mongoose = require("mongoose"),
    Otter = mongoose.model("Otter"),
    OtterID = mongoose.model("OtterID"),
    otters = require("../controllers/otters");


module.exports = function(app){

// root route to render the index.ejs view: shows Otter Family
app.get("/", function(req, res){
    otters.index(req,res);
});

// route to form for adding an otter to the family
app.get('/otters/new', function(req, res){
    otters.new(req, res);
});

//route to process POST data for newly added Otter
app.post('/otters', function(req, res){
    otters.process(req, res);
});

// route to page with details about an otter
app.get('/otters/:id', function(req, res){
    otters.show(req,res);
});

// route to form for editing an otter in the family
app.get('/otters/edit/:id', function(req, res){
    otters.editForm(req, res);
});

// route to process form data for editing an otter
app.post('/otters/:id', function(req, res){
    otters.edit(req, res);
});

app.post("/otters/destroy/:id", function(req, res){
    otters.destroy(req, res);
});

};