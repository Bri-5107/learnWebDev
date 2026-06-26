// listener

// here is the toolkit to allow for asynchronous networking API
const net = require('node:net'); 


// build the TCP server, establish connection => fire connection event = socket object created 
const server = net.createServer((socket) => {
    console.log('Client connected');
    

});

// bind a server to an entrypoint 
const port = 3000;
const host = '127.0.0.1';
server.listen(port, host);

