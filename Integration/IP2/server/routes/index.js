const itemRoute = require('./item.routes');
const router = require('express').Router();

module.exports = router
    .use('/item', itemRoute);