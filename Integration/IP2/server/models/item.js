const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema({
    title: {
        type: String,
        required: [true, `provide and items's title`],
        trim: true
    },
    sides: {
        type: Number,
        min: 1,
        required: true,
    },
    owner: String,
    year: Number,
    creator: {
        type: String,
        required: true,
        trim: true
    },
    
    timestamps: {
        type: Date,
        required: true
    },

});

module.exports = mongoose.model('Item', itemSchema);