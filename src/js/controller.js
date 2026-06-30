import { state } from "./state/state.js";
import { buscarConselho } from "./Api/advice.js";
import { traduzirConselho } from "./Api/translate.js";
import { carregandoConselho } from "./ui/loading.js";
import { salvarState } from "./utils/storage.js";
import { renderConselho } from "./ui/render.js";
import { mostrarErro } from "./ui/error.js";



export async function chamarConselho() {
  try {
    carregandoConselho(true);
    state.status = "loading";

    const conselho = await buscarConselho();
    if (!conselho) throw new Error();
    console.log(state.language)
    const traduzido = await traduzirConselho(conselho, state.language);

    state.advice = traduzido;
    state.status = "sucess";
    renderConselho(traduzido);
    salvarState(state)
  } catch (error) {
    state.status = "error";
    showError("Erro ao buscar conselho");
  } finally {
    carregandoConselho(false);
  }
}
