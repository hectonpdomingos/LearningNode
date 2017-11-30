//constant to get the http module
const http = require('http');
//interface loopback
const hostname = '127.0.0.1';
//runnning at 5000 port
const port = 5000;
//creating the instances 
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    //header to show the content
    res.setHeader('Content-Type', 'text/plain');
    //output
    res.end('Learning Node - Server Example\n');
});

server.listen(port, hostname, () => {
    //background console log
    console.log(`This service is running at http://${hostname}:${port}/`);
});