'use strict';

var mongoose = require('mongoose');
var logger = require("./logger")('db_connection');

logger.debug('in db_connection.js...');

module.exports = function (connStr) {
    var db,
    exitHandler = function (options, err) {
        mongoose.disconnect();
        if (err) {
            logger.info(err);
        }
        if (options.exit) {
            logger.info('exit');
            process.exit();
        }
    };

    process.stdin.resume();
    process.on('exit', exitHandler.bind(null, {cleanup: true}));
    process.on('SIGINT', exitHandler.bind(null, {exit: true}));
    process.on('uncaughtException', exitHandler.bind(null, {exit: true}));

    db = mongoose.connect(connStr);

    mongoose.connection.on('connected', function () {
        logger.info('db:connected', connStr);
    });

    mongoose.connection.on('error', function (err) {
        logger.info('db:error', err);
    });

    mongoose.connection.on('disconnected', function () {
        logger.info('db:disconnected');
    });

    return db;
};
