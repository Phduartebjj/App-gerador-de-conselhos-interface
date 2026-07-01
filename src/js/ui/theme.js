const icoDarkMode = document.querySelector(".darkMode")
const icoLightMode = document.querySelector(".lightMode")

export function lightMode() {
  icoLightMode.classList.remove("showTheme")
  icoDarkMode.classList.add("showTheme")
  document.body.classList.add("lightModeTheme");
}

export function darkMode() {
  icoDarkMode.classList.remove("showTheme")
  icoLightMode.classList.add("showTheme")
  document.body.classList.remove("lightModeTheme");
}