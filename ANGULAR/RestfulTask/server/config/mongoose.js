const mongoose = require("mongoose"),
    path = require("path"),
    fs = require("fs"),
    reg = new RegExp('\\.js$', 'i'),
    modelsPath = path.resolve("server", 'models');

mongoose.Promise = global.Promise;

//connect mongoose to mongoDB
mongoose.connect('mongodb://localhost/Tasks');
mongoose.connection.on("connected", () => console.log("Connected to Tasks DB"));

fs.readdirSync(modelsPath).forEach(file =>{
    if (reg.test(file)){
        require(path.join(modelsPath, file));
    }
});