import { buscarConselho } from "./Api/advice.js";
import { traduzirConselho } from "./Api/translate.js";
import { carregandoConselho } from "./ui/loading.js";
import "./ui/render.js";
import "./ui/error.js";
import "./state/state.js";
import { chamarConselho } from "./controller.js";
const btnBrasil = document.querySelector(".idiomaBrasil");
const btnEspanhol = document.querySelector(".idiomaEspanhol");
const btnConselho = document.querySelector(".btn-conselho");

btnConselho.addEventListener("click", chamarConselho);

btnBrasil.addEventListener("click", () => {
  state.language = btnBrasil.value;
});
btnEspanhol.addEventListener("click", () => {
  state.language = btnEspanhol.value;
});
