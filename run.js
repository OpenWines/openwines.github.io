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
    serveStatic = require('serve-static'),
    open = require("open"),
    host = 'localhost',
    port = 8001,
    url = util.format("%s:%d", host, port)
    ;

var serve = serveStatic("./dest"),
    server = http.createServer(function(req, res){
  var done = finalhandler(req, res)
  serve(req, res, done)
});

server.listen(port);

util.puts("Listening on " + url);
util.puts('Press Ctrl + C to stop.');
open('http://' + url);
