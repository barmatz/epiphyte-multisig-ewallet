'use strict';

var express = require('express'),
morgan = require('morgan'),
logger = require('./serverlogger'),
app = express(),
port = process.env.PORT || 3002;

app.use(morgan({
    stream: {
        write: function (str) {
            logger.toFile(str, false);
            logger.toConsole(str);
        }
    }
}));

app.use('/vendor', express.static(__dirname + '/../../vendor'));

app.use('/images', express.static(__dirname + '/../../images'));

app.use('/lib', express.static(__dirname + '/../../lib'));

app.use('/src', express.static(__dirname + '/../../src'));

app.use('/node_modules', express.static(__dirname + '/../../node_modules'));

app.use(express.static(__dirname + '/../../dist'));

app.listen(port, function () {
    var str = 'Listening to http://localhost:' + port + '...';

    logger.toFile(str);
    logger.toConsole(str);
});