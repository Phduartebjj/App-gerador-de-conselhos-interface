const overlay = document.querySelector(".main");

function erro() {
  const cardErro = document.createElement("div");
  cardErro.classList.add("card-erro");
  const cardMensagem = document.createElement("h3");

  cardMensagem.textContent =
    "Não foi possível buscar o conselho, tente novamente";
  cardMensagem.style.color = "red";
  overlay.appendChild(cardErro);
  cardErro.appendChild(cardMensagem);
}

export { erro };
