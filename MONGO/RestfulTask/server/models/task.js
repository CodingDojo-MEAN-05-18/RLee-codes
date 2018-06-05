const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const { Schema } = mongoose;

const taskSchema = new Schema({

    title : {type: String, required: true},
    description: {type: String, default: ""},
    completed: {type: Boolean, default: false},
    created_at: {type: Date, default: new Date()},
    updated_at: {type: Date, default: new Date()},

});

module.exports = mongoose.model("Tasks", taskSchema);