import {state} from "../state/state.js"

const URL = "https://api.adviceslip.com/advice";


async function buscarConselho() {
  try {
    const response = await fetch(URL);
    if (!response.ok) return null;

    const data = await response.json();

    const conselho = data.slip.advice;

    state.advice = conselho
    return conselho;
  } catch (error) {
    state.status = "Failed"
    state.error = "error"
    console.log("Erro ao buscar conselho");
    console.error(error);
    return null;
  }
}

export { buscarConselho };
