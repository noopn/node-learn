console.log('start')
var req = require('./a.js')
console.log(req)
console.log('复制')

req.addsomething = { b: 1 };
console.log(require('./a.js'))
console.log('end')