const http = require('http');
const querystring = require('querystring');

const app = http.createServer((req, res) => {
    console.log(req);
    req.query = querystring.parse(req.url.split('?')[1])
    res.end('hellow word')
}).listen(8000)