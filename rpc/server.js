const net = require('net');


const data = {
    123456: '数据一',
    123457: '数据二',
    123458: '数据三',
    123459: '数据四',
    123460: '数据五',
    123461: '数据六',
    123462: '数据七',
    123463: '数据八',
    123464: '数据9',
    123465: '数据10',
}

const server = net.createServer((socket) => {
    socket.on('data', (buffer) => {
        setTimeout(() => {
            const seq = buffer.slice(0, 2);
            const id = buffer.readInt32BE(2);
            console.log(seq.readUInt16BE(),id.toString());
            socket.write(Buffer.concat([
                seq,
                Buffer.from(data[id])
            ]));
        }, 100 + Math.random() * 1000);

    })
})

server.listen(4000);