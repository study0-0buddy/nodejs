const http = require("http");
const HOSTNAME = "localhost";
const PORT = 8080;

// create HTTP server
const server = http.createServer(function (req, res) {
    // set the response HTTP header with HTTP status and Content type
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // send the response body "Hello World"
    res.end('Hello World!\n');
});

// prints a log once the server starts listening
server.listen(PORT, HOSTNAME, function () {
    console.log(`server running at: http://${HOSTNAME}:${PORT}/`);
})
