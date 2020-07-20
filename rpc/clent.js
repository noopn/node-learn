const net = require('net');

const socket = new net.Socket({});
socket.connect({
    host: '127.0.0.1',
    port: 4000
})


const data = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
]
const buffer = Buffer.alloc(1);

buffer.writeInt8(~~(Math.random() * data.length), 0);

socket.write(buffer)
socket.on('data',(buffer)=>{
    console.log(buffer,buffer.toString());
})