var fs = require('fs');
var https = require('https');
var options = {
    hostname: 'localhost',
    port: 4433,
    path: '/api/',
    method: 'GET',
    key: fs.readFileSync('cert/client1-key.pem'),
    cert: fs.readFileSync('cert/client1-crt.pem'),
    ca: fs.readFileSync('cert/ca-crt.pem') };
var req = https.request(options, function(res) {
    res.on('data', function(data) {
        process.stdout.write(data + '\n');
    });
});
req.end();
req.on('error', function(e) {
    console.error(e);
});
