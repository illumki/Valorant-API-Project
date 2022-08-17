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
        const agentRoles = {};
        const agents = [];
        for (const agent of API) {
            if (agent["isPlayableCharacter"] == true) {
                agents.push(agent["displayName"]);
                if (agentRoles.hasOwnProperty(agent["role"]["displayName"])) {
                    agentRoles[agent["role"]["displayName"]].push(agent["displayName"])
                } else {
                    agentRoles[agent["role"]["displayName"]] = [agent["displayName"]];
                }
            }
        }

        // alphabetize roles and agents
        const roles = Object.keys(agentRoles).sort((a, b) => a.localeCompare(b));
        agents.sort((a, b) => a.localeCompare(b));

        // iterate through roles in object to iterate through agents
        roles.forEach(role => {
            // alphabetize agents in role
            let agents = agentRoles[role].sort((a, b) => b.localeCompare(a));

            // create HTML for initial role list
            let roleListHTML =
                `<div id="role-${role}" class="role-container">
                    <div class="container-header">${role}</div>
                    <ul id="role-list-${role}" class="role-list">
                    </ul>
                </div>`;
            agentListContainer.insertAdjacentHTML("beforeend", roleListHTML);

            // create HTML for each agent in role
            let agentRole = document.getElementById(`role-list-${role}`);
            agents.forEach(agent => {
                let agentListHTML =
                    `<li id="${agent}" class="text-list">${agent}</li>`;
                agentRole.insertAdjacentHTML("afterbegin", agentListHTML);
            });
        });

        // load first agent
        const firstAgents = agentRoles[roles[0]];
        const firstAgent = firstAgents.sort((a, b) => a.localeCompare(b))[0];

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

                agentContainer.style.background = 'linear-gradient(to bottom right, rgb(236,232,225), #'+color+')';

                let agentHTML = 
                `<div id="agent-left">
                    <div id="agent-left-top">
                        <img id="agent-role-img" src="${roleImg}"/>
                        <div id="agent-name">${name}</div>
                    </div>
                    <div id="agent-left-mid">
                        <div id="agent-description">
                            ${bio}
                        </div>
                    </div>
                    <div id="agent-left-bottom">
                        <ul id="agent-abiltities">
                        </ul>
                        <div id="agent-abiltity">
                        </div>
                    </div>
                </div>
                <div id="agent-right">

                </div>`;
                agentContainer.insertAdjacentHTML("beforeend", agentHTML);
            }
        }

        // query agent selected
    });