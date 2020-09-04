const querystring = require('querystring');
const {
    blog,
    user
} = require('./router');

function get(req) {
    return new Promise((resolve) => {
        if (req.method !== 'POST') {
            return resolve({});
        }
        if (req.headers['content-type'] !== 'application/json') {
            return resolve({})
        }
        let body = [];
        req
            .on('data', (chunk) => {
                body.push(chunk);
            })
            .on('end', () => {
                body = Buffer.concat(body).toString();
                resolve(JSON.parse(body))
            })
    })
}

module.exports = function app(req, res) {
    req.query = querystring.parse(req.url.split('?')[1]);
    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    get(req).then(data => {
        req.data = data;
        let result = blog(req, res);
        if (!result) {
            result = user(req, res);
        }

        if (result) {
            res.end(JSON.stringify(result))
        } else {
            res.writeHead(404, {
                'Content-Type': 'text/plain'
            })
            res.end('404')
        }
    })
}