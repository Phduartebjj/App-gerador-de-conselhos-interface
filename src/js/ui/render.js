const cardConselho = document.querySelector(".texto-conselho");

export async function renderConselho(text){
  cardConselho.textContent = text
}
