var express = require('express');

var app = express();

app.use('/', require('./routes/index'));
app.use('/cats', require('./routes/cats'));

module.exports = app;
