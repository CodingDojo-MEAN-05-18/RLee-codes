const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs");

const reg = new RegExp('\\.js$', 'i');

const modelsPath = path.resolve('server', 'models');

mongoose.Promise = global.Promise;

//connect mongoose to mongoDB
mongoose.connect('mongodb://localhost/Quotes');
mongoose.connection.on("connected", () => console.log("connected to MongoDB"));

fs.readdirSync(modelsPath).forEach(file => {
    if (reg.test(file)){
        require(path.join(modelsPath, file));
    }
});