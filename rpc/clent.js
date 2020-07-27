const net = require('net');

const socket = new net.Socket({});
socket.connect({
    host: '127.0.0.1',
    port: 4000
})


const data = ["123456", "123457", "123458", "123459", "123460", "123461", "123462", "123463", "123464", "123465"]

socket.on('data', (buffer) => {
    const seqindex = buffer.slice(0, 2);
    const titbuffer = buffer.slice(2);
    console.log(seqindex.readUInt16BE(), titbuffer.toString());

})
let seq = 0;
setInterval(() => {
    const buffer = Buffer.alloc(6);
    const index = ~~(Math.random() * data.length);
    console.log(seq,data[index])
    buffer.writeInt16BE(seq++);
    buffer.writeInt32BE(data[index], 2);
    socket.write(buffer)
}, 100)