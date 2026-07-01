import { carregarState, salvarState } from "./utils/storage.js";
import { buscarConselho } from "./Api/advice.js";
import { traduzirConselho } from "./Api/translate.js";
import { carregandoConselho } from "./ui/loading.js";
import "./ui/theme.js"
import { state } from "./state/state.js";
import "./ui/render.js";
import "./ui/error.js";
import "./state/state.js";
import { chamarConselho, renderizarTema, trocarTema } from "./controller.js";
const btnBrasil = document.querySelector(".idiomaBrasil");
const btnEspanhol = document.querySelector(".idiomaEspanhol");
const btnConselho = document.querySelector(".btn-conselho");
const btnThemes = document.querySelector(".themeMode");

btnThemes.addEventListener("click", () => {
  trocarTema()
  renderizarTema()
  salvarState(state)
})

let saved = carregarState();

if (saved) {
  state.language = saved.language;
  state.theme = saved.theme;
  state.advice = saved.advice;
}

btnConselho.addEventListener("click", () => {
  if (state.status = "loading") return
  chamarConselho
});

btnBrasil.addEventListener("click", () => {
  state.language = "pt";
  salvarState(state)
});
btnEspanhol.addEventListener("click", () => {
  state.language = "es";
  salvarState(state)
});

renderizarTema()