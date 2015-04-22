/*
 * server.js
 * Copyright (C) 2015 ronan <ronan.guilloux@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

var http = require('http'),
    util = require('util'),
    serveStatic = require('serve-static'),
    finalhandler = require('finalhandler'),
    open = require("open"),
    host = 'localhost',
    port = 8001,
    docroot = './',
    url = util.format("%s:%d", host, port)
    ;

var serve = serveStatic(docroot),
    server = http.createServer(function(req, res){
  var done = finalhandler(req, res)
  serve(req, res, done)
});

server.listen(port);

util.puts("Listening on " + url);
util.puts('Press Ctrl + C to stop.');
open('http://' + url);
