const http = require('node:http');
const fs = require('node:fs');

//server the template.html file from the http server
const server = http.createServer((req, res)=>{
    const name = "Love khandelwal";
    res.writeHead(200,{'Content-Type': 'text/html'});
    const html=fs.readFileSync('./template.html', 'utf8');
    res.end(html.replace("{{name}}",name));
});
server.listen(3000,()=>{
    console.log('listening on port 3000');
});