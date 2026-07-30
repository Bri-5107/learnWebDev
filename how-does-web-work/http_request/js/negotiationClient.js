const negotiateButton = document.getElementById("negotiateButton");

const dropdownLanguage = document.getElementById("language");
const dropdownContent = document.getElementById("content");
const dropdownCompression = document.getElementById("compression");

const negotiateResponse = document.getElementById("negotiateResponse");

const corsPageButton = document.getElementById("corsPage");
const cachePageButton = document.getElementById("cachePage");
const negotiatePage = document.getElementById("negotiatePage");


//listen for dropdown changes
dropdownLanguage.addEventListener('change', (event) => {
     const selectedLanguage = event.target.value;
});

dropdownContent.addEventListener('change', (event) => {
     const selectedContent = event.target.value;
});

dropdownCompression.addEventListener('change', (event) => {
     const selectedCompression = event.target.value;
});


//send a simple request 
async function sendNegotiateRequest(event){
     try {
          const fetchNegotiateRequest = await fetch('http://127.0.0.1:8080/flight', {
               method: 'GET',
               headers: {
                    'Accept' : 'selectedContent',
                    'Accept-Language' : 'selectedLanguage',
                    // 'Accept-Encoding' : 'selectedCompression' REMOVE BECAUSE IT IS A FORBIDDEN HEADER
               }
          });

          const requestMessage = await fetchNegotiateRequest.text();
          console.log(requestMessage);
          negotiateResponse.innerText = requestMessage;

     } catch (error) {
          console.error('Fetch Error: ' + error);
          requestMessage.innerText = "Error: Could not reach the server."; 

     }
     
}

negotiateButton.addEventListener('click', sendNegotiateRequest);



/**
 * Plan:
 * 1. EventListener to button
 * 2. Callback Function
 *      a. fetch @ URL, port 
 *      b. Get dropdown value then assign to header
 *      c. 
 */