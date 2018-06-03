const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const { Schema } = mongoose;

const quoteSchema = new Schema({
    name: {type: String, required: true, minlength: 3},
    quote: {type: String, required: true, minlength: 4},
    created_at: {type: Date},
});

module.exports = mongoose.model("Quote", quoteSchema);