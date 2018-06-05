const mongoose = require("mongoose"),
    Tasks = mongoose.model("Tasks"),
    tasks = require("../controllers/tasks");

module.exports = (app) => {

    app.get("/", function(req, res){
        //retrieve all tasks
        tasks.index(req, res);
    });

    app.get("/show/:id", (req, res)=>{
        //retrieve a task by id
        tasks.show(req, res);
    });

    app.get("/new/:name/:description", (req, res) =>{
        //create new task 
        tasks.create(req, res);
    });

    app.get("/:id/update", (req, res) =>{
        //update task (here interpreted as updating "completed" and "updated_at" fields)
        tasks.update(req, res);
    });

    app.get("/:id/delete", (req, res) =>{
        //delete a task by id
        tasks.delete(req, res);
    });

};