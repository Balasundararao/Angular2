'use strict';
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

  var schcourse = new Schema({
    crsName : {type: String,  required: true},
    crsDescription : {type: String},
    crsLevel       : {type: String, default: 'L1'},
    crsClass       : {type: String, default: 'BRL'},
    crsCourse      : {type: String},
    crsCredits     : {type: String, default: '3'},
    crsStatus      : {type: String, default: 'active'},
    created        : {type: Date, default: Date.now},
    createdBy      : {type: String, default: 'admin'},
    lastModified   : {type: Date, default: Date.now}
  });
module.exports = mongoose.model('tbl_course', schcourse);
