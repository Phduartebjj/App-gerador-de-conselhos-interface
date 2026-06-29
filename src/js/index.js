const botao = document.getElementById("btn-trocar-conselho")
const cardConselho = document.getElementById("card-conselho");
const urlConselho = "https://api.adviceslip.com/advice";
const idiomaBrasil = document.getElementById("btn-pt-br")
const idiomaEspanhol = document.getElementById("btn-es")

let idiomaAtual = "pt"

idiomaBrasil.addEventListener("click",i =>{
    idiomaAtual = "pt"
})
idiomaEspanhol.addEventListener("click",i =>{
    idiomaAtual = "es"
})


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
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(conselho)}&langpair=en|${idiomaAtual}`,
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
  botao.disabled = true;
  console.log("oi");
  try {
    const conselhoTirado = await buscarConselho();
    if (!conselhoTirado) return;
    console.log("Conselho tirado: ", conselhoTirado);
    const conselhoAcessado = await fazerTraducao(conselhoTirado.slip.advice);
    cardConselho.innerText = `${conselhoAcessado}`;
  } catch (error) {
    console.error(error);
  } finally {
    botao.disabled = false;
  }
}

botao.addEventListener("click", () => {
  cardConselho.textContent = "Buscando conselho...";
  exibirConselho();
});
