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
        let API = data.data;
        console.log("Array", API);

        // AGENTS
        // define agent roles
        const rolesAgent = {};
        for(const agent of API) {
            if(agent["isPlayableCharacter"] == true) {
                if(rolesAgent.hasOwnProperty(agent["role"]["displayName"])) {
                    rolesAgent[agent["role"]["displayName"]].push(agent["displayName"])
                } else {
                    rolesAgent[agent["role"]["displayName"]] = [agent["displayName"]];
                }
            }
        }

        // alphabetize roles
        const roles = Object.keys(rolesAgent).sort((a, b) => a.localeCompare(b));

        // iterate through roles in objects to iterate through agents
        roles.forEach(role => {
            // alphabetize agents in role
            let agents = rolesAgent[role].sort((a, b) => a.localeCompare(b));

            // create HTML for initial role list
            let roleListHTML = 
            `
            <div id="role-${role}" class="container-header">
                ${role}
            </div>
            <ul id="role-list-${role}" class="role-list">
            </ul>
            `;
            agentListContainer.insertAdjacentHTML("beforeend", roleListHTML);

            // create HTML for each agent in role
            let agentRole = document.getElementById(`role-list-${role}`);
            agents.forEach(agent => {
                let agentListHTML = 
                `
                <li class="text-list">${agent}</li>
                `;
                agentRole.insertAdjacentHTML("afterbegin", agentListHTML);
            });
        });
    });