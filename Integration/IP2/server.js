const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const app = express();
const logger = require('morgan');

require('./server/config/database');

app.use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .use(logger('dev'))
    .use(express.static(path.join(__dirname, 'dist')))
    .use(require('./server/routes'));

app.listen(port, () => console.log(`Express is listening on port ${port}`));