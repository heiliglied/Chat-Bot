'use strict';

require('dotenv').config({ path: 'configuration.env' });
const path = require('path');
const http = require('http');
const fs = require('fs');
const url = require('url');

const port = process.env.PORT || 6974;

var server = http.createServer(function (request, response) {
    var querystring = url.parse(request.url, true);
    var queries = querystring.query;
    console.log(queries);
}).listen(port);