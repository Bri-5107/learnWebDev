const cacheButton = document.getElementById("cacheButton");
const cacheResponse = document.getElementById("cacheResponse");

const updateButton = document.getElementById("updateButton")
const updateResponse = document.getElementById('updateResponse');

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

// Send PATCH Pre-flight Request

const updateCafeOrder = '{"name" : "Arlene Dionisio", "coffee" : "brown butter latte"}';

async function sendUpdateRequest(event) {
    try {
        const fetchUpdateReqeust = await fetch('http://127.0.0.1:8081/flight', {
            method: 'PATCH',
            headers: {
                "Content-type" : "application/json"
            },
            body: updateCafeOrder
        });
        const updateMessage = await fetchUpdateReqeust.text();
        console.log(updateMessage);
        updateResponse.innerText = updateMessage;

    } catch (error) {
        console.error('Fetch failed:', error);
        updateResponse.innerText = "Error: Could not reach the server."; 
    }
}
updateButton.addEventListener('click', sendUpdateRequest);

// Send Pre-flight GET Request
async function sendCacheRequest(event) {
    try {
        const fetchCacheRequest = await fetch('http://127.0.0.1:8081/flight', {
            method: 'GET',
            headers: {
                "Content-type" : "application/json"
            }
        
        })

        const cacheMessage = await fetchCacheRequest.text();
        console.log(cacheMessage);
        cacheResponse.innerText = cacheMessage;

    } catch (error) {
        console.error('Fetch failed:', error);
        cacheResponse.innerText = "Error: Could not reach the server."; 
    }
}

cacheButton.addEventListener('click', sendCacheRequest);