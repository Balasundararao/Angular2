#!/bin/env node
/* jshint quotmark: false */
'use strict';
//  OpenShift sample Node application
var logger  = require('./src/app_server/utils/logger')('server_js');
var express = require('express');
//var cors    = require('cors');
var fs      = require('fs');
//var cookieParser = require('cookie-parser');
var app     = express();
var bodyParser    = require('body-parser');
//app.use(cors());
//app.use(cookieParser());

if (process.env === undefined ){
    process.env = 'local';  // TODO - Discuss removing this, when this is exercized in testing the app won't run.
}
var constr = require('./src/app_server/utils/connection_str')();
var db  = require('./src/app_server/utils/db_connection')(constr);

logger.info('Begin server.js...');
/**
 *  Define the sample application.
 */
var SampleApp = function() {
    //  Scope.
    var self = this;
    /*  ================================================================  */
    /*  Helper functions.                                                 */
    /*  ================================================================  */

    /**
     *  Set up server IP address and port # using env variables/defaults.
     */
    self.setApplicationProperties = function() {
        self.app = app;
    };
    self.setupVariables = function() {
        //  Set the environment variables we need.
        self.ipaddress = (process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0');
        self.port      = (process.env.OPENSHIFT_NODEJS_PORT || 8080);

        if (!process.env.OPENSHIFT_NODEJS_IP) {  // initially, I made this "typeof", but changed to match logic of above lines
            logger.warn('No OPENSHIFT_NODEJS_IP var, using '+self.ipaddress);
        }
    };

    /**
     *  Populate the cache.
     */
    self.populateCache = function() {
        if (typeof self.zcache === 'undefined') {
            self.zcache = { 'index.html': '', 'user.html':''};
        }
        //  Local cache for static content.
        self.zcache['index.html'] = fs.readFileSync('./dist/index.html');
        // self.zcache['admin.html'] = fs.readFileSync('./admin.html');
        self.zcache['user.html'] = fs.readFileSync('./dist/index.html');
    };

    /**
     *  Retrieve entry (content) from cache.
     *  @param {string} key  Key identifying content to retrieve from cache.
     */
    self.cacheGet = function(key) { return self.zcache[key]; };

    /**
     *  terminator === the termination handler
     *  Terminate server on receipt of the specified signal.
     *  @param {string} sig  Signal to terminate on.
     */
    self.terminator = function(sig){
        if (typeof sig === 'string') {
           logger.info('%s: Received %s - terminating sample app ...', Date(Date.now()), sig);
           process.exit(1);
        }
        logger.info('%s: Node server stopped.', Date(Date.now()) );
    };

    /**
     *  Setup termination handlers (for exit and a list of signals).
     */
    self.setupTerminationHandlers = function(){
        //  Process on exit and signals.
        process.on('exit', function() { self.terminator(); });
        // Removed 'SIGPIPE' from the list - bugz 852598.
        ['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT',
         'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'
        ].forEach(function(element) {
            process.on(element, function() { self.terminator(element); });
        });
    };

    /*  ================================================================  */
    /*  App server functions (main app logic here).                       */
    /*  ================================================================  */
    /**
     *  Create the routing table entries + handlers for the application.
     */
    self.createRoutes = function() {
        self.routes = { };
        self.routes['/'] = function(req, res) {
            res.setHeader('Content-Type', 'text/html');
            res.send(self.cacheGet('index.html') );
        };
        app.routes = self.routes;
    };

    /**
     *  Initialize the server (express) and create the routes and register
     *  the handlers.
     */
    self.initializeServer = function() {
        self.createRoutes();
        // begin Content Security Policy middlewares
        self.app.use(bodyParser.json({ type: ['json', 'application/csp-report'] }));
        self.app.post('/report-csp-violation', function (req, res) {
           if (req.body) {
             logger.error('CSP Violation: ', req.body);
           }
           else {
             logger.error('CSP Violation: No data received!');  // Can you have a post wihout a body? I can't seem to reach this code -Bill
           }
           res.status(204).end();
        });

        self.app.use('/', express.static('dist'));
        self.app.use('/src/assets',express.static('src/assets',{maxage: '31d'}));
        self.app.use(bodyParser.json({ 'type': '*/*',limit: '50mb' }));
        self.app.use(bodyParser.json());
        self.app.use(bodyParser.urlencoded({ extended: true }));
        self.app.use(bodyParser.text());
        self.app.use(bodyParser.json({ type: 'application/json'}));
        self.app.use(require('./src/app_server/courses/courses_api'));

        //self.app.use(require('./src/app_server/utils/common_utils'));
        //self.app.use(require('./src/app_server/mds_services/mds_servies_api'));
        //self.app.use(require('./src/app_server/ldap_service/ldap_api'));
        for (var r in self.routes) {
            self.app.get(r, self.routes[r]);
        }
    };
    /**
     *  Initializes the sample application.
     */
    self.initialize = function() {
        self.setupVariables();
        self.populateCache();
        self.setupTerminationHandlers();

        // <--- My customization starts here --->
        self.setApplicationProperties();
        // <--- My customization ends here --->
        // Create the express server and routes.
        self.initializeServer();
    };
    /**
     *  Start the server (starts up the sample application).
     */
    self.start = function() {
        //  Start the app on the specific interface (and port).
        app.httpServer = app.listen(self.port, self.ipaddress, function() {
           logger.info('%s: Node server started on %s:%d ...',  Date(Date.now() ), self.ipaddress, self.port);
        });
    };
};   /*  Sample Application.  */

/**
 *  main():  Main code.
 */
var zapp = new SampleApp();
zapp.initialize();
zapp.start();
module.exports = app;
