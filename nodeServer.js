const http = require('http');

const server = http.createServer(
	(request, response) => {
        if(request.url === '/text/plain') {
            response.writeHead(
                200,
                { 'Content-Type': 'text/plain' },
            );
            response.end(request.url)
        }
        else if(request.url === '/text/plains') {
            response.writeHead(
                200,
                { 'Content-Type': 'text/plains' },
            );
            response.end(request.url)
        } else response.end('Basic Apis')
});

const PORT = 3000;
server.listen(PORT,
	() => {
		console.log(
			`Server running at http://localhost:${PORT}/`
		);
	});
