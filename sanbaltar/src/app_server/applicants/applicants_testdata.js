'use strict';

// import async to make control flow simplier
var db_connection_str  = require('../utils/connection_str')();
var logger   = require('../utils/logger')('applicants_testdata');
var async    = require('async');
var mongoose = require('mongoose');
var applicantModel     = require('./applicants_model.js');

var data = [

];

logger.info(db_connection_str);
mongoose.connect(db_connection_str, function(err) {
    if (err) throw err;
    else logger.info("Connected Successfully For xc_docs Test Data...");
        applicantModel.remove({}, function(){
        logger.info("Removing existing docs and going to insert test data....");
    });
    // create all of the dummy data.
    async.each(data, function(item, cb) {
        applicantModel.create(item, cb);
    }, function(err) {
        if (err) throw err;
        mongoose.disconnect();
        logger.info('Test Data Connection Closed..');
    });
});


// curl -i -X GET http://localhost:8080/api/applicants
