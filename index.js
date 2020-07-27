const fs = require('fs');
console.log(process.argv)


let buf = Buffer.alloc(3);
buf.writeInt8(101, 0);
// buf.writeInt16BE(200, 1);
console.log(buf.readInt8(0));
// <Buffer 65 00 c8> 其中展示的数据均为16进制

const cwd = process.cwd();
console.log(cwd+'/../../')