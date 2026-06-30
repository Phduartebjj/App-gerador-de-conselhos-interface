import { state } from "../state/state.js";
const btnThemes = document.querySelector(".themeMode");
const icoDarkMode = document.querySelector(".darkMode")
const icoLightMode = document.querySelector(".lightMode")

if (state.theme === "light") {
    icoLightMode.classList.remove("showTheme")
    icoDarkMode.classList.add("showTheme")
    document.body.classList.add("lightModeTheme");
} else {
    state.theme = "dark"
    icoDarkMode.classList.remove("showTheme")
    icoLightMode.classList.add("showTheme")
    document.body.classList.remove("lightModeTheme");
}

btnThemes.addEventListener("click", () => {
  if (state.theme === "dark") {
    state.theme = "light";
    icoLightMode.classList.remove("showTheme")
    icoDarkMode.classList.add("showTheme")
    document.body.classList.add("lightModeTheme");
} else {
    state.theme = "dark"
    icoDarkMode.classList.remove("showTheme")
    icoLightMode.classList.add("showTheme")
    document.body.classList.remove("lightModeTheme");
  }
});
