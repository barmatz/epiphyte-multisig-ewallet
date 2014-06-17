'use strict';

var fs = require('fs'),
path = 'logs',
filename = path + '/server.log',
cache = '';

function createFile() {
    fs.exists(path, function (exists) {
        if (exists) {
            fs.stat(path, function (err, stats) {
                if (err) {
                    throw err;
                }

                if (stats.isDirectory()) {
                    fs.writeFile(filename, cache);
                    cache = '';
                } else {
                    createDirectory();
                }
            });
        } else {
            createDirectory();
        }
    });
}

function createDirectory() {
    fs.mkdir(path, function (err) {
        if (err) {
            throw err;
        }

        createFile();
    });
}

module.exports = {
    toConsole: function (str) {
        console.log(str);
    },
    toFile: function (str, nl) {
        nl = typeof nl === 'undefined' ? true : nl;

        if (nl) {
            str += '\n';
        }

        fs.exists(filename, function (exists) {
            if (exists) {
                fs.appendFile(filename, str, function (err) {
                    if (err) {
                        throw err;
                    }
                });
            } else {
                cache += str;
                createFile();
            }
        });
    },
};