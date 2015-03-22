/*
 * server.js
 * Copyright (C) 2014 ronan <ronan@MacBook-Pro-de-Ronan.local>
 *
 * Distributed under terms of the MIT license.
 */

// $ npm install connect
// $ npm install serve-static
// $ node server.js

var connect = require('connect'),
    util = require('util'),
    serveStatic = require('serve-static'),
    port = 8001;
var app = connect();
app.use(serveStatic('./'));
app.listen(port);
util.puts('Listening on ' + port + '...');
util.puts('Press Ctrl + C to stop.');
