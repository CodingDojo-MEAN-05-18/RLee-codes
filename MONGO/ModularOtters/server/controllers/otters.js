const mongoose = require("mongoose"),
    Otter = mongoose.model("Otter"),
    OtterID = mongoose.model("OtterID");

otters = {

    index : function(req, res){
        Otter.find({})
        .then (otters => {
            res.render("index", {otters: otters});
        })
        .catch (error =>{
            console.log("There was a problem locating the otter family!");
            res.redirect("/otters/new");
        });
    },

    new : function(req, res){
        res.render('newbie');
    },

    process : function(req, res){
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
    },

    show : function(req, res){
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
        
    },

    editForm : function(req, res){
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
    },

    edit : function(req, res){
        var idOtter = req.params.id;
        Otter.findOneAndUpdate({id: idOtter}, {$set: {
            
            name : req.body.name,
            food : req.body.food,
            game : req.body.game,
            member : req.body.member,
            interests : req.body.interests,
    
         }})
            .then ( function(){ Otter.findOne({id : idOtter})
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
                req.redirect('/otters/edit'+idOtter);
            });
    },

    destroy : function(req,res){
        var otterID = req.params.id;
 
        Otter.remove({id : otterID})
            .then ( otter => {
                res.redirect('/');
            })
            .catch (error => {
                console.log("There was a problem with the ousting process.");
                res.redirect('/');

            });
    },

};

module.exports = otters;