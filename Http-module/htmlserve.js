const http = require('node:http');
const fs = require('node:fs');

const server = http.createServer((req, res)=>{
    // const html=fs.readFileSync('./index.html', 'utf8');
    // res.end(html);
    res.writeHead(200,{'Content-Type': 'text/html'});
    fs.createReadStream(__dirname+'./index.html').pipe(res);
});
server.listen(3000,()=>{
    console.log('listening on port 3000');
});