const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const { Schema } = mongoose;

const otterSchema = new Schema({
    name: {type: String, required: true, minlength: 2},
    food: {type: String, required: true, minlength: 3},
    game: {type: String, required: true, minlenth: 2},
    member: {type: String, required: false},
    interests: {type: String, required: true, minlenth: 2},
    id: {type: Number, required: true},
    added_at: {type : Date}
});

module.exports = mongoose.model("Otter", otterSchema);