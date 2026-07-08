const overlay = document.querySelector(".main");

function mostrarErro(mensagem) {
  const cardErro = document.createElement("div");
  cardErro.classList.add("card-erro");
  const cardMensagem = document.createElement("h3");
  
  cardMensagem.textContent = mensagem;
  
  cardMensagem.style.color = "red";
  overlay.appendChild(cardErro);
  cardErro.appendChild(cardMensagem);
}

export { mostrarErro };
