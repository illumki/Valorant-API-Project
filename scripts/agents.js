// constants
const agentListContainer = document.getElementById("agent-list");
const agentContainer = document.getElementById("agent");

// url to be fetched
const url = "https://valorant-api.com/v1/agents";

fetch(url)
    .then((response) => {
        // handle response
        return response.json();
    })
    .then((data) => {
        // import data in API
        const API = data.data;
        console.log("Array", API);

        // AGENTS
        // define agent roles
        const agents = [];
        for (const agent of API) {
            if (agent["isPlayableCharacter"] == true) {
                agents.push(agent["displayName"]);
            }
        }

        // iterate through roles in object to iterate through agents
        agents.sort((a, b) => b.localeCompare(a)).forEach(agent => {
            // create HTML for each agent in role
            let agentListHTML =`<li id="${agent}" class="text-list">${agent}</li>`;
            agentListContainer.insertAdjacentHTML("afterbegin", agentListHTML);
        });

        // load first agent
        const firstAgent = agents.sort((a, b) => a.localeCompare(b))[0];

        for (const agent of API) {
            if (agent["displayName"] == firstAgent) {
                // initialize variables for agent
                let agentImg = agent["fullPortraitV2"];
                let name = agent["displayName"];
                let nickname = agent["developerName"];
                let role = agent["role"]["displayName"];
                let roleImg = agent["role"]["displayIcon"];
                let bio = agent["description"];
                let abilities = agent["abilities"];
                let color = agent["backgroundGradientColors"][agent["backgroundGradientColors"].length - 1];

                // agentContainer.style.background = 'linear-gradient(to bottom right, #161a26, #'+color+')';
            }
        }

        // query agent selected
    });