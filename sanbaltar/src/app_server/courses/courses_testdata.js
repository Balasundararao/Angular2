'use strict';

// import async to make control flow simplier
var db_connection_str  = require('../utils/connection_str')();
var logger   = require('../utils/logger')('courses_testdata');
var async    = require('async');
var mongoose = require('mongoose');
var crsModel     = require('./courses_model.js');

var data = [
  {
    crsName        : "Old Testament Survey (Beginnings)",
    crsDescription : "Old Testament Survey (Beginnings)",
    crsLevel       : "L1",
    crsClass       : "BRL",
    crsCourse      : "BS101",
    crsCredits     : "3"
  },
  {
    crsName        : "New Testament Survey (Beginnings)",
    crsDescription : "New Testament Survey (Beginnings)",
    crsLevel       : "L1",
    crsCourse      : "BS102",
    crsCredits     : "3"
  },
];

logger.info(db_connection_str);
mongoose.connect(db_connection_str, function(err) {
    if (err) throw err;
    else logger.info("Connected Successfully For xc_docs Test Data...");
        crsModel.remove({}, function(){
        logger.info("Removing existing docs and going to insert test data....");
    });
    // create all of the dummy data.
    async.each(data, function(item, cb) {
        crsModel.create(item, cb);
    }, function(err) {
        if (err) throw err;
        mongoose.disconnect();
        logger.info('Test Data Connection Closed..');
    });
});


// curl -i -X GET http://localhost:8080/api/courses
