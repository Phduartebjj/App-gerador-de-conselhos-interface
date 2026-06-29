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
    let res = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(conselho)}&langpair=en|pt`,
    );

    let traducao = await res.json();
    let conselhoTraduzido = traducao.responseData.translatedText;
    return conselhoTraduzido;

  } catch (error) {
    console.log("ERRO AO TRADUZIR: ");
    console.error(error);
  }
}
fazerTraducao("hello");

async function ExibirConselho() {
  const conselhoTirado = await buscarConselho();
  console.log("Conselho tirado: ", conselhoTirado);
  let conselhoAcessado = await fazerTraducao(conselhoTirado.slip.advice);
  cardConselho.innerText = `${conselhoAcessado}`;
}

botao.addEventListener("click", () => {
  ExibirConselho();
});
