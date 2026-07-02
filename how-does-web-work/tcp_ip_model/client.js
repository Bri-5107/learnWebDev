// initiator

// PHASE 1: Establish Connection 

// here is the toolkit to allow for asynchronous networking API
const net = require('node:net'); 

// make client initiate connection
const port = 3000;
const host = '127.0.0.1';
const client = net.createConnection(port, host, ()=> {
    console.log('Client: Connection Established');

    //PHASE 2: Send Data to Server
    client.write('Send data');

    // PHASE 3: Listen for Server Reply 
    client.on('data', (data) => {
        console.log('Data Received: ' + data);

        client.end();
    });


  
});

 // PHASE 4: Close Connection
client.on('close', () => {
    console.log('Connection Closed');
});







