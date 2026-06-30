import { state } from "../state/state.js";

const btnConselho = document.getElementById("btn-conselho");
const cardConselho = document.querySelector(".texto-conselho");

function carregandoConselho(status) {
  if (status) {
    btnConselho.classList.add("carregando");
    btnConselho.disabled = true;
    cardConselho.textContent = "Buscando...";
    cardConselho.classList.add("buscando")
    state.status = "loading";
} else {
    btnConselho.classList.remove("carregando");
    btnConselho.disabled = false;
    state.status = "Sucessful";
    cardConselho.classList.remove("buscando")
  }
}

export { carregandoConselho };
