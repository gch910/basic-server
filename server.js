const http = require('http');

const server = http.createServer(function(req, res) {
    res.end();
})

const port = 3000;

server.listen(port, function() {
    console.log(`The server is listening on port ${port}`);
} )
