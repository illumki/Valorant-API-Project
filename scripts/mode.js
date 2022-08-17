const stylesheet = document.getElementById("dark-stylesheet");
const stylesheetIndex = document.getElementById("dark-stylesheet-index");
const mainValorantLogo = document.getElementById("main-img");

function changeMode() {
    if(stylesheet.href == "") {
        localStorage.setItem("Mode", "Dark");
        stylesheet.href = "styles/styles-dark.css";
        stylesheetIndex.href = "styles/index-dark.css";
        mainValorantLogo.src = "official-assets/game-logos/Full Color/Logotype & Mark/V_Logotype_Off-White.png"
    } else {
        localStorage.setItem("Mode", "Light");
        stylesheet.removeAttribute("href");
        stylesheetIndex.removeAttribute("href");
        mainValorantLogo.src = "official-assets/game-logos/Full Color/Logotype & Mark/V_Logotype_Navy.png"
    }
}

window.addEventListener('load', (event) => {
    // set persistent light/dark mode
    console.log(localStorage.getItem("Mode"));
    if(localStorage.getItem("Mode") == null || localStorage.getItem("Mode") == "Light") {
        stylesheet.removeAttribute("href");
        stylesheetIndex.removeAttribute("href");
        mainValorantLogo.src = "official-assets/game-logos/Full Color/Logotype & Mark/V_Logotype_Navy.png"
    } else if(localStorage.getItem('Mode') == "Dark") {
        stylesheet.href = "styles/styles-dark.css";
        stylesheetIndex.href = "styles/index-dark.css";
        mainValorantLogo.src = "official-assets/game-logos/Full Color/Logotype & Mark/V_Logotype_Off-White.png"
    }
});