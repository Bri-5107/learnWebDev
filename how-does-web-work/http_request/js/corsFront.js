// get the button from HTML using document object 
const simpleButton = document.getElementById("simpleButton");

// function parameter for the addEventListener function(event, function)
async function sendSimpleRequest(event){
    try {
       const fetchRequest = await fetch('http://127.0.0.1:8080/simple');
       const message = await fetchRequest.text();
       console.log(message);

        
    } catch (error) {
        console.error('Fetch failed:', error);

    }
    
};
// attach Event Listener to the button
simpleButton.addEventListener("click", sendSimpleRequest);









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
 *      - 
 */