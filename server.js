const http = require('http');

const server = http.createServer(function (req, res) {
	if (req.url === '/OK') {
		console.log("Inbound 'OK' request being processed...");
		res.writeHead(200);
    }
    else if (req.url === '/BAD') {
        console.log("BAD REQUEST");
		res.writeHead(400);
    }
    else if (req.url === '/CREATED') {
        console.log("CREATED");
		res.writeHead(201);
    }
    else {
        console.log('Page not found!');
        res.writeHead(404);
    }
	res.end();
});

const port = 3000;

server.listen(port, function () {
	console.log(`The server is listening on port ${port}`);
});
