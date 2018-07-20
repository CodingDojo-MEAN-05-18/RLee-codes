const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const reg = new RegExp('\\.js$', 'i');
const modelsPath = path.resolve('server', 'models');
// line below is a non-Resolver way of accessing the models folder
// const modelsPath = path.join(__dirname, '../models');

mongoose.connect('mongodb://localhost:27017/items');
mongoose.connection.on('connected', () => console.log('Connected to MongoDB items'));

//older version of mongoose. <4.x
// mongoose.Promise = global.Promise;

fs.readdirSync(modelsPath).forEach(file => {
    // if (file.indexOf('js') > 0) {  //do not use this if check if backup copies will be present.
    if (reg.test(file)) {
        require(path.join(modelsPath, file));
    }
});