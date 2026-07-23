// get the button from HTML using document object 
const simpleButton = document.getElementById("simpleButton");
const simpleResponse =  document.getElementById('simpleResponse');
const flightButton = document.getElementById("flightButton");
const flightResponse = document.getElementById("flightResponse");

const corsPageButton = document.getElementById("corsPage");
const cachePageButton = document.getElementById("cachePage");
const negotiatePage = document.getElementById("negotiatePage");


// Navigation Button 
corsPageButton.addEventListener('click', () => {
    window.location.assign('cors.html');
});

cachePageButton.addEventListener('click', () => {
    window.location.assign('caching.html');
});

negotiatePage.addEventListener('click', () => {
    window.location.assign('negotiate.html');
});

// SIMPLE REQUSET
// function parameter for the addEventListener function(event, function)
async function sendSimpleRequest(event){
    try {
       const fetchSimpleRequest = await fetch('http://127.0.0.1.nip.io:3000/simple');
       const simpleMessage = await fetchSimpleRequest.text();
       //Display server response in the console 
       console.log(simpleMessage);
        
       // Display server response to the webpage
       simpleResponse.innerText = simpleMessage;
        
    } catch (error) {
        console.error('Fetch failed:', error);
        simpleResponse.innerText = "Error: Could not reach the server."; 
    }
    
};
// attach Event Listener to the button
simpleButton.addEventListener("click", sendSimpleRequest);


// PRE-FLIGHT REQUEST
async function sendPreFlightRequest(event) {
    try {
        const fetchFlightRequest = await fetch("http://127.0.0.1.nip.io:3000/flight", {
            method: "GET",
            headers: {
                "Content-type" : "application/json"
            }
        });

        const flightMessage = await fetchFlightRequest.text();
        console.log(flightMessage);
        flightResponse.innerText = flightMessage;

    } catch (error) {
        console.error('Fetch failed:', error);
        flightResponse.innerText = "Error: Could not reach the server."; 
    }
    
}

flightButton.addEventListener("click", sendPreFlightRequest);







/**
 * PLAN
 * 1. get button
 * 2. attach event listener
 * 3. create a function that will send an HTTP simple request to a backend server (node.js)
 * 
 * 
 * ACTIVE RECALL QUESTIONS:
 * - What is the DOM 
 * - What is the difference of a function with and without parenthesis? 
 * - How to build a fetch request 
        - What are the parameters, return object? 
        - How to build try and catch-response 
 * - Dfferentiate window.location.assign, .replace, .href = 'url' ? 
 */