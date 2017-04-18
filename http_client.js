var fs = require('fs');
var http = require('http');
var options = {
    hostname: 'localhost',
    port: 8866,
    path: '/api/',
    method: 'GET'
  };

var req = http.request(options, function(res) {
    res.on('data', function(data) {
        process.stdout.write(data + '\n');
    });
});
req.end();
req.on('error', function(e) {
    console.error(e);
});
