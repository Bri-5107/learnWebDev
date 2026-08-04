import http, { get } from 'node:http';

//set up ports and host name 
const hostname = '127.0.0.1';
const port = 8081;

//receive request
const server = http.createServer((req,res) => {
     res.setHeader('Access-Control-Allow-Origin', '*');
     
    //create language map for content-language header
    const languageMap = {
        "english" : "en",
        "spanish" : "es",
        "japanese" : "ja"
    };

    //read language
    const extractedLanguage = (req.headers['accept-language'] || "").toLocaleLowerCase();
    let twoLetterCode = "";
    let translatedLanguage = "";

    if(extractedLanguage.includes('english')){
        translatedLanguage = "Hello, world!";
        twoLetterCode = languageMap.english;
    }else if(extractedLanguage.includes('spanish')) {
        translatedLanguage = "¡Hola Mundo!";
        twoLetterCode = languageMap.spanish;
    }else {
        translatedLanguage = "Kon'nichiwa sekai";
        twoLetterCode = languageMap.japanese;
    }


    //place content
    const extractedFormat = (req.headers['accept'] || "").toLowerCase();

    if(extractedFormat.includes('html')) {
        res.setHeader('Content-language', twoLetterCode);
        res.setHeader('Content-type', 'text/html; charset=utf-8');

        const htmlMsg = `
        <!DOCTYPE html>
        <html> 
        <body>
            <h1> ${translatedLanguage} </h1> 
        <body>
        </html>`;

        return res.end(htmlMsg);

    } else if (extractedFormat.includes('xml')) {
        res.setHeader('Content-language', twoLetterCode);
        res.setHeader('Content-type', 'text/xml');

        const xmlMsg =  `<?xml version="1.0" encoding="UTF-8"?>
        <message>
            ${translatedLanguage}
        </message>`;

        return res.end(xmlMsg);

    } else {
        res.setHeader('Content-language', twoLetterCode);
        res.setHeader('Content-type', 'application/json');

        const jsonMsg = JSON.stringify(translatedLanguage);

        res.end(jsonMsg);
    }


});


//listen for the port 

server.listen(port,hostname, ()=> {
    console.log(`Server running at http://${hostname}:${port}/`);
});


/**
 * Active Recall:
 * - res.send vs res.write
 * - why do we need to use 'return' for res.send()?
 * - explain to me varialbe scope
 * - var vs let vs const 
 */