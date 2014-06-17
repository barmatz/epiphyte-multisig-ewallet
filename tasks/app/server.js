'use strict';

var express = require('express'),
morgan = require('morgan'),
logger = require('./serverLogger'),
port = process.env.PORT || 3000,
app = express();

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

app.use('/src', express.static(__dirname + '/../../src'));

app.use('/node_modules', express.static(__dirname + '/../../node_modules'));

app.use(express.static(__dirname + '/../../dist'));

app.get('/', function (req, res) {
    res.redirect('/wallet.html');
});

app.listen(port, function () {
    var str = 'Listening to http://localhost:' + port + '...';

    logger.toFile(str);
    logger.toConsole(str);
});