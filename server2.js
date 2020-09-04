const Koa = require('koa');
const fs = require('fs');
const mount = require('koa-mount');
const static = require('koa-static');

const app = new Koa();
app.use(mount('/static'), static(__dirname + '/source/static/'));
app.use(mount('/', async (ctx, next) => {
}));

const rpcClient = require('./client');
rpcClient.write({
    columnId: 24
}, function (err, data) {
    console.log(err,data)
})

// app.listen(9090);