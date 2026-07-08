const btnConselho = document.getElementById("btn-conselho");
const cardConselho = document.querySelector(".texto-conselho");

function carregandoConselho(status) {
  btnConselho.disabled = status;
  if (status) {
    btnConselho.classList.add("carregando");
    cardConselho.classList.add("buscando")
    cardConselho.textContent = "Buscando...";
} else {
    btnConselho.classList.remove("carregando");
    cardConselho.classList.remove("buscando")
  }
}

export { carregandoConselho };
