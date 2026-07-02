// listener

// PHASE 1: Establish Connection 

// here is the toolkit to allow for asynchronous networking API
const net = require('node:net'); 


// build the TCP server, establish connection => fire connection event = socket object created 
const server = net.createServer((socket) => {
    console.log('Server: Connection Established');
    
    // PHASE 2: Receive Data from Client 
    socket.on('data', (data) => {
        console.log('Data Received: ' + data);

     // PHASE 3: Reply to Client 
    socket.write('Hello din sa\'yo, Client');

    })

    // PHASE 4: Close Connection
    socket.on('close', () => {
        console.log('Clinet Disconnected');
    })
});


// bind a server to an entrypoint 
const port = 3000;
const host = '127.0.0.1';
server.listen(port, host);

