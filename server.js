var http = require('http');

http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Nothing to see here.\n\nAlthough watch this space.');
    
}).listen(process.env.PORT || 8080);