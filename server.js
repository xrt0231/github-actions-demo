var http = require('http');
var server = http.createServer(function (req, res) {
    //handle icomming request here...
    if (req.url == '/') {

        console.log('root url been called...');

        res.writeHead(200, {'Content-Type': 'application/json'});

        res.write('<html><body><p>This is home page.</p></body></html>');
    }
});

server.listen(3000);
console.log('Node.js web server at 3000 is running...');

