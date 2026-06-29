const botao = document.getElementById("btn-trocar-conselho");
const cardConselho = document.getElementById("card-conselho");
const urlConselho = "https://api.adviceslip.com/advice";

async function buscarConselho() {
  try {
    let conselho = await fetch(urlConselho);

    if (!conselho.ok) {
      throw new Error("Erro ao buscar o conselho");
    }

    return conselho.json();
  } catch (error) {
    console.log("Erro ao buscar o conselho: ");
    console.error(error);
  }
}

async function fazerTraducao(conselho) {
  try {
    const res = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(conselho)}&langpair=en|pt`,
    );

    if (!res.ok) {
      throw new Error("Erro ao traduzir o conselho.");
    }

    const traducao = await res.json();
    const conselhoTraduzido = traducao.responseData.translatedText;
    return conselhoTraduzido;
  } catch (error) {
    console.log("ERRO AO TRADUZIR: ");
    console.error(error);
  }
}

async function exibirConselho() {
  const conselhoTirado = await buscarConselho();
  if (!conselhoTirado) return;
  console.log("Conselho tirado: ", conselhoTirado);
  let conselhoAcessado = await fazerTraducao(conselhoTirado.slip.advice);
  cardConselho.innerText = `${conselhoAcessado}`;
}

botao.addEventListener("click", () => {
    cardConselho.textContent = "Buscando conselho..."
  exibirConselho();
});
