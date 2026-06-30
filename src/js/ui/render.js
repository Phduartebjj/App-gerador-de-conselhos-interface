import { traduzirConselho } from "../Api/translate.js";
import { buscarConselho } from "../Api/advice.js";
import { state, estadoPadrao } from "../state/state.js";
import { carregandoConselho } from "./loading.js";
import {erro} from "./error.js"
const btnConselho = document.querySelector(".btn-conselho");
const btnBrasil = document.getElementById("idiomaBrasil");
const btnEspanhol = document.querySelector(".idiomaEspanhol");
const cardConselho = document.querySelector(".texto-conselho");
let idiomaAtual = "pt";

btnBrasil.addEventListener("click", () => {
  state.language = btnBrasil.value;
  idiomaAtual = btnBrasil.value;
});
btnEspanhol.addEventListener("click", () => {
  state.language = btnEspanhol.value;
  idiomaAtual = btnEspanhol.value;
});

btnConselho.addEventListener("click", (e) => {
  chamarConselho();
  state.status = "idle";
});

async function chamarConselho() {
  estadoPadrao();
  
  carregandoConselho(true);
  cardConselho.textContent = await traduzirConselho(
    await buscarConselho(),
    idiomaAtual,
    carregandoConselho(false),
  );
  console.log(state)
  if (state.error !== null) {
    console.log("2")
    erro();
    return;
  }
}
