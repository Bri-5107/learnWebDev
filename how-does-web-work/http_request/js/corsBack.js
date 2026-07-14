import http, { get } from 'node:http';


// 1. Setup Server 
const hostname = '127.0.0.1';
const port = '3000';


const server = http.createServer((request, response) => {
    //Check URL
    if (request.method === 'GET' && request.url === '/simple'){
        //Apply CORS Header
        response.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
        response.statusCode = 200;

        //Reply
        response.write('Hello, Frontend!')
    } else {
        response.statusCode = 404; 
    }

    // End connection
    response.end();
}); 

// Listen for incoming requests
server.listen(3000);






/**
 * PLAN:
 * 1. Setup the server/Establish Connection 
 * 2. Setup callback
 *    - Check URL 
 *    - Apply CORS header 
 *    - Reply 
 * 4. Establish Connection/Listen 
 * 
 * 
 * ACTIVE RECALL QUESTIONS:
 * - What are the different modules you can use in order for an HTTP backend server to receive a HTTP frontend request
 * 
 */