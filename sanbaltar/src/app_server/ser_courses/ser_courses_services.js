'use strict';
var mongoose = require('mongoose');
var q = require('q');
var _ = require('lodash');
var logger   = require('../utils/logger')('ser_courses_services');
var crsModel = require('./ser_courses_model');

var crsObj = {};
logger.info('##### In courses_services.js File #####');

crsObj.getAllCourses = function(req,res){
	var query = {};
	var skip = +req.query.offset || 0;
	var  limit =+req.query.limit  || 20;
	crsModel.find({})
	.skip(skip)
	.sort({crsCourse: 'desc'})
	.limit(limit)
	.exec(
    	function(err, docs){
			if(err) console.log(err);
    		res.json(docs);
    	}
    );
};
module.exports = crsObj;
