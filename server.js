const http = require('http');

const server = http.createServer(function (req, res) {
	if (req.url === '/OK') {
		console.log("Inbound 'OK' request being processed...");
		res.writeHead(301, {
            Location: 'localhost:3000/CREATED'
        });
    }
    else if (req.url === '/BAD') {
        console.log("BAD REQUEST");
		res.writeHead(400);
    }
    else if (req.url === '/CREATED') {
        if(req.method === 'POST') {
        console.log("CREATED");
        res.writeHead(201);
        res.write('<h1>Hello</h1>')
        } else {
            res.writeHead(405)
        }

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
