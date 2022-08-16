// url to be fetched
const url = "https://valorant-api.com/v1/agents";

fetch(url)
    .then((response) => {
        // handle response
        return response.json();
    })
    .then((data) => {
        // import data in API
        console.log("Data", data);
        let API = data.data;
        console.log("Array", API);
    });