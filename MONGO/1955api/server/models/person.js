const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const { Schema } = mongoose;

const personSchema = new Schema({
    name : {type: String, required: true, minlength: 3},
    created_at : {type: Date, required: true},
    updated_at : {type: Date, required: true},
});

module.exports = mongoose.model("People", personSchema);
