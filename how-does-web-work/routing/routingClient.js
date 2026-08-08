//get DOM elements
const staticButton = document.getElementById("staticButton");
const parameterButton = document.getElementById("parameterButton");
const queryField = document.getElementById("queryField");
const queryButton = document.getElementById("queryButton");
const v1Button = document.getElementById("btn-v1");
const v2Button = document.getElementById("btn-v2");
const nestedButton = document.getElementById("nestedButton");
const catchAllButton = document.getElementById("catchAllButton");
//get response section
const routeResponse = document.getElementById("routeResponse");
 


const base = 'http://127.0.0.1:8082';

//static listener - fetch all users 
async function routeStatic(event) {
    try {
        const path = '/users';
        const url = `${base}${path}`;
        const fetchStaticRoute = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept' : 'application/json'
            }
        });

        const requestMessage = await fetchStaticRoute.json();
        routeResponse.innerText = JSON.stringify(requestMessage,null,2);

    } catch (error) {
        console.log(error);
        routeResponse.innerText = "Error: Could not reach the server."; 
    }
}
staticButton.addEventListener('click', routeStatic);

//dynamic listener
async function routeDynamic(event) {
    try {
        const id =  '123';
        const path = `/users/${id}`;
        const url = `${base}${path}`;
        const fetchRoute = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept' : 'application/json',
            }
        });

        const requestMessage = await fetchRoute.json();
        routeResponse.innerText = JSON.stringify(requestMessage,null,2);

    } catch (error) {
        console.log(error);
        routeResponse.innerText = "Error: Could not reach the server."; 
    }
}
parameterButton.addEventListener('click', routeDynamic);

//query listener
async function routeQuery(event) {
    try {
        const userID = queryField.value;
        const path = `/users?id=${userID}`;
        const url = `${base}${path}`;
        const fetchQueryRoute = await fetch(url);

        const requestMessage = await fetchQueryRoute.json();
        routeResponse.innerText = JSON.stringify(requestMessage, null, 2);

    } catch (error) {
        console.log(error);
        routeResponse.innerText = "Error: Could not reach the server."; 
    }
}
queryButton.addEventListener('click', routeQuery);

//versioning listener
v1Button.addEventListener('click', routeV1);
v2Button.addEventListener('click', routeV2);

//nested listener
nestedButton.addEventListener('click', routeNested);

//catch all listener
catchAllButton.addEventListener('click', routeCatchAll);




/**
 * Active Recall Questions: 
 * 
 * 
 * 
 * 
 * 1. Add event listener 
 * 2. On its callback function, How do I shape the request line route based on the type of routing? 
 *
 * 
 */