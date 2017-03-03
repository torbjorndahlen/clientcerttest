var fs = require('fs');
var https = require('https');
var http = require('http');
var express = require('express');

var http_app = express();

http_app.use(express.static(__dirname + '/public'));

http.createServer(http_app).listen(8866, '0.0.0.0', function() {
  console.log("http server starting on port 8866");
});

http_app.get('/api/', function (req, res) {

		console.log('\n\n===========HTTP REQUEST===============');
		console.log('\n\nGET /api/');

    res.statusCode = 200;
    res.json('hello world');

    console.log('\n\n=========REQUEST END===============');
});


var https_app = express();

var https_options = {
    key: fs.readFileSync('cert/server-key.pem'),
    cert: fs.readFileSync('cert/server-crt.pem'),
    ca: fs.readFileSync('cert/ca-crt.pem'),
    requestCert: true,
    rejectUnauthorized: true
};

var server = https.createServer(https_options, https_app).listen(4433, '0.0.0.0', function () {
    console.log("https server starting on port 4433");
});

https_app.get('/api/', function (req, res) {

		console.log('\n\n===========HTTPS REQUEST===============');
		console.log('\n\nGET /api/');

    console.log(
        'Remote IP: ' + req.connection.remoteAddress + '\n' +
        'User CN: ' + req.socket.getPeerCertificate().subject.CN + '\n' +
        'Method: ' + req.method + ' ' + req.url
      );

    res.statusCode = 200;
    res.json('hello world');

    console.log('\n\n=========REQUEST END===============');
});
