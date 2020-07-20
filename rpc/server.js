const net = require('net');


const data = {
    1:'数据一',
    2:'数据二',
    3:'数据三',
    4:'数据四',
    5:'数据五',
    6:'数据六',
    7:'数据七',
    8:'数据八',
    9:'数据9',
    10:'数据10',
}
 
const server = net.createServer((socket) => {
    socket.on('data', (buffer) => {
        setTimeout(() => {
            const id = buffer.readInt8(0);
            socket.write(Buffer.from(data[id]));
        }, 500);
       
    })
})

server.listen(4000);