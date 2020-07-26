const Koa = require('koa');
const fs = require('fs');
const mount = require('koa-mount');
const static = require('koa-static');

const app = new Koa();
app.use(mount('/static'), static(__dirname + '/source/static/'));
app.use(mount('/', async (ctx, next) => {
    await next();
    ctx.body = fs.readFileSync(__dirname + '/source/index.htm', 'utf8')
}));


app.listen(9090);