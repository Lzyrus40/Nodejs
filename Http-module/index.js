const http = require('node:http');

const server=http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("OK");
});
server.listen(3000,()=>{
    console.log("Server listening on port 3000");
});