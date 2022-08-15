const stylesheet = document.getElementById("dark-stylesheet");
const stylesheetIndex = document.getElementById("dark-stylesheet-index");
const mainValorantLogo = document.getElementById("main-img");

function changeMode() {
    if(stylesheet.href == "") {
        stylesheet.href = "styles/styles-dark.css";
        stylesheetIndex.href = "styles/index-dark.css";
        mainValorantLogo.src = "official-assets/game-logos/Full Color/Logotype & Mark/V_Logotype_Off-White.png"
    } else {
        stylesheet.removeAttribute("href");
        stylesheetIndex.removeAttribute("href");
        mainValorantLogo.src = "official-assets/game-logos/Full Color/Logotype & Mark/V_Logotype_Navy.png"
    }
}