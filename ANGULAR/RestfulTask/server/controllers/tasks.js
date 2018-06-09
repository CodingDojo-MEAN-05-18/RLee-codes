const mongoose = require("mongoose"),
    Tasks = mongoose.model("Tasks");

tasks = {

    //retrieve all tasks
    index : function(req, res){
        Tasks.find({}).sort({created_by: 1})
            .then(data => {
                console.log("Task list served.");
                res.json(data);
            })
            .catch(error => {
                console.log("Problem serving Task List.", error);
                res.json(error);
            });
    },

    //retrieve a task by id.
    show : (req, res) =>{
        Tasks.find({_id: req.params.id})
            .then(data => {
                console.log("Single Task Served.");
                res.json(data);
            })
            .catch( error => {
                console.log("There was a problem retrieving Single Task.", error);
                res.json(error);
            });
    },

    //create a task
    create : (req, res) => {
        var task = new Tasks({
            title : req.params.name,
            description : req.params.description,
        });

        task.save()
            .then( data => {
                console.log("New task saved.", data.title);
                res.json(data);
            })
            .catch(error =>{
                console.log("There was a problem creating the new task.", error);
                res.json( error );
            });
    },

    //update task (completed and updated_at fields)
    update : (req, res) => {
        Tasks.findById(req.params.id)
            .then( data => {
                console.log("Task found");
                task = data;
                if (task.completed == false){
                    task.set({completed : true, updated_at : new Date() });
                }else{
                    task.set({completed: false, updated_at: new Date() });
                }
                task.save()
                    .then( data => {
                        console.log("Successfully updated task.", data.title);
                        res.json( data );
                    })
                    .catch( error => {
                        console.log("There was a problem saving the update.", error);
                        res.json( error );
                    });
            })
            .catch(error => {
                console.log("There was a problem finding the Task to update.");
                res.json(error);
            });
        
    },

    //delete a task, by id
    delete : (req, res) => {
        Tasks.remove({_id : req.params.id})
            .then( data => {
                console.log("Task was successfully deleted.");
                let response = { 
                    Task : req.params.id,
                    status : "Deleted",
                };
                res.json( {response : response} );
            })
            .catch( error => {
                console.log("There was a problem deleting the task.", error);
                res.json( error );
            });
    },
};

module.exports = tasks;