// Variables
const inputPlayer = document.getElementById("main-searchbar-player");
const inputTag = document.getElementById("main-searchbar-tag");
let player = ""; let tag = "";

inputPlayer.addEventListener("change", (e) => {
    player = inputPlayer.value;
})

inputTag.addEventListener("change", (e) => {
    tag = inputTag.value;
})

function searchPlayer() {
    if (player !== "" && tag !== "") {
        let url = `https://api.henrikdev.xyz/valorant/v1/account/${player}/${tag}`;
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                console.log(data.data["name"]);
                console.log(data.data["tag"]);
                console.log(data.data["card"]["large"]);
            });
    }
}