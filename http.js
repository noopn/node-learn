const fs = require('fs');
const express = require('express');

// http.createServer(((req, res) => {
//     res.writeHead(200);
//     fs.createReadStream(__dirname + '/index.html').pipe(res)

// }))
//     .listen(3000);


const app = express();


app.get('/favicon.ico', (req, res) => {
    res.writeHead(200);
    res.end();
    return;
})


app.get('/', (req, res, next) => {
    res.writeHead(200);
    fs.createReadStream(__dirname + '/index.html').pipe(res)
    console.log(1);
    next();
    console.log(2);
},
    (req, res, next) => {
        console.log(3);
        next();
        console.log(4);
    },
    (req, res, next) => {
        console.log(5);
        next();
        console.log(6);
    }
)

app.listen(3000)