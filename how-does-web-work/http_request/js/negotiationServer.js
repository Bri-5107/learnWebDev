import http, { get } from 'node:http';

//import express for reading requests headers
const express = require('express');
const app = express();

//set up ports and host name 
const hostname = 'http://127.0.0.1';
const port = 8081;

//receive request
const server = http.createServer((req,res), ()=> {
    
    //read language

    const extractedLanguage = req.header('Accept-Language');
    if(extractedLanguage === 'english'){
        let translatedLanguage = "Hello, world!";
    }else if(extractedLanguage === 'spanish') {
        let translatedLanguage = "¡Hola Mundo!";
    }else {

    }

    //place content

});


//listen for the port 


