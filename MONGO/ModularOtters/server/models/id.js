const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const { Schema } = mongoose;

// setup id schema for setting & using custom Otter ids
const idSchema = new Schema({
    idNum: {type: Number},
    name: {type : String, require: true}
});

module.exports = mongoose.model("OtterID", idSchema);