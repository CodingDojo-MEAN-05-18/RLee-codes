const mongoose = require("mongoose"),
    People = mongoose.model("People");

people = {

    show : function(req, res){
        People.find({}).sort({name : 1})
            .then( data => {
                console.log("Name list served.");
                res.json(data);
            })
            .catch( error => {
                console.log("Problem serving name list.", error);
                res.json(error);
            });
    },

    pull : function(req, res){
        People.findOne({name: req.params.name})
            .then(data => {
                console.log("Single name served.", data.name);
                res.json(data);
            })
            .catch( error => {
                console.log("Error serving single name.", error);
                res.json(error);
            });
    },

    create : function(req, res){
         var person = new People({
            name : req.params.name,
            created_at : new Date(),
            updated_at : new Date(),
        });
        
        person.save()
            .then(data => {
                console.log("New person added to the database.", data.name);
                res.json(data);
            })
            .catch( error => {
                console.log("There was a problem saving the person.", error);
                res.json(error);
            });
    },

    destroy : (req, res) =>{
        People.remove({name: req.params.name})
            .then(data => {
                console.log("The person was successfully removed", data);
                res.json( data );
            })
            .catch( error => {
                console.log("There was a problem removing the person", req.params.name);
                res.json( error );
            });
    }
};

module.exports = people;
