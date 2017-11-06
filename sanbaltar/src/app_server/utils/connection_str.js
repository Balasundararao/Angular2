'use strict';

var logger = require("./logger")('db_connection');

module.exports = function() {
    var dbhost, dbname, connstr;
    if ( process.env.OPENSHIFT_APP_NAME === undefined ){  //OPENSHIFT_APP_NAME
        dbname = 'sanbaltar';
        // figure out if it's a DOCKER env - default to localhost
        dbhost = process.env.DB_NAME ? 'db' : 'localhost';
        return 'mongodb://'+dbhost+'/'+dbname;
    } else {
        dbname  = process.env.OPENSHIFT_APP_NAME;
        connstr = 'mongodb://' + process.env.OPENSHIFT_MONGODB_DB_USERNAME +
                  ':' + process.env.OPENSHIFT_MONGODB_DB_PASSWORD +
                  '@' + process.env.OPENSHIFT_MONGODB_DB_HOST +
                  ':' + parseInt(process.env.OPENSHIFT_MONGODB_DB_PORT) + '/'+dbname;
        logger.info(connstr);
        return connstr;
    }
};
