import { carregarState } from "./utils/storage.js";
import { buscarConselho } from "./Api/advice.js";
import { traduzirConselho } from "./Api/translate.js";
import { carregandoConselho } from "./ui/loading.js";
import "./ui/theme.js"
import { state } from "./state/state.js";
import "./ui/render.js";
import "./ui/error.js";
import "./state/state.js";
import { chamarConselho } from "./controller.js";
const btnBrasil = document.querySelector(".idiomaBrasil");
const btnEspanhol = document.querySelector(".idiomaEspanhol");
const btnConselho = document.querySelector(".btn-conselho");

let saved = carregarState();
if (saved) {
  state.language = saved.language;
  state.theme = saved.theme;
  state.advice = saved.advice;
}

btnConselho.addEventListener("click", chamarConselho);

btnBrasil.addEventListener("click", () => {
  state.language = "pt";
});
btnEspanhol.addEventListener("click", () => {
  state.language = "es";
});
