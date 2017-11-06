'use strict';

var winston = require('winston');

module.exports = function (name) {
   return winston.loggers.add(
      name, {
      console: {
         level: ((process.env && process.env.LOG_LEVEL) || 'verbose'),
         colorize: true,
         handleExceptions: true,
         humanReadableUnhandledException: true,
         label: name
      }
   });
};

/*
   var logger = new (winston.Logger)({
      transports: [
         new (winston.transports.Console)({
            name: label,
            level: (process.env.LOG_LEVEL || 'verbose'),
            colorize: true,
            handleExceptions: true,
            humanReadableUnhandledException: true,
            label: label
         })
      ],
      exitOnError: false
   });

   return logger;
};
*/
