// initiator

// here is the toolkit to allow for asynchronous networking API
const net = require('node:net'); 

// make client initiate connection
const port = 3000;
const host = '127.0.0.1';
const client = net.createConnection(port, host, ()=> {
    console.log('Hi server');

});