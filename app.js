var express = require('express')
    bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use('/', require('./routes/index'));
app.use('/cats', require('./routes/cats'));

module.exports = app;
