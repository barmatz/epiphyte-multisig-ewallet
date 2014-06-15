'use strict';

var express = require('express'),
app = express(),
port = process.env.PORT || 3002;

app.use(function (req, res, next) {
    console.log('%s %s', req.method, req.url);
    next();
});

app.use('/vendor', express.static(__dirname + '/vendor'));

app.use('/images', express.static(__dirname + '/images'));

app.use('/lib', express.static(__dirname + '/lib'));

app.use('/src', express.static(__dirname + '/src'));

app.use(express.static(__dirname + '/dist'));

app.listen(port, function () {
    console.log('Listening to http://localhost:%s...', port);
});