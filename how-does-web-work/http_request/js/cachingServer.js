import http from 'node:http';
import crypto from 'node:crypto'

//Port & IP
const hostname = '127.0.0.1';
const port = 8081;

//create the body (source of truth) 
let cafeOrder = '{"name" : "Brian", "coffee" : "mocha", "pastry" : "four-cheese sandwich"}';
let lastModifiedDate = new Date().toUTCString();

//Create server


const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.method === 'OPTIONS' && req.url === '/flight') {
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, If-None-Match, If-Modified-Since');
        res.statusCode = 200;
        res.end();
        

    } else if (req.method === 'GET' && req.url === '/flight') {

         let serverEtag = crypto.createHash('md5').update(cafeOrder).digest('hex');
         let browserEtag = req.headers['if-none-match'];
         let browserDate = req.headers['if-modified-since'];

        //check if resource if updated or not 
        if (browserEtag === serverEtag && browserDate === lastModifiedDate) {
            res.statusCode = 304; 
            res.statusMessage = 'Not Modified';
            res.end();
        
        } else {
            res.statusCode = 200;
            res.setHeader('Cache-control', 'max-age=10');
            res.setHeader('ETag', serverEtag);
            res.setHeader('Last-modified', lastModifiedDate);
            res.write(cafeOrder);
            res.end();
        } 
        
    } else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


/**
 * ACTIVE RECALL QUESTIONS
 * - const vs let 
 * - how to create a JSON and 3 ways we can do it
 * - does the firing f two requests in a single click happens under the hood or no
 */