const URL = "https://api.adviceslip.com/advice";

async function buscarConselho() {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error("Servidor indisponível.");
    }

    const data = await response.json();

    const conselho = data.slip.advice;
    return conselho;
  } catch (error) {
    
    console.error("Erro no buscaRCOnslho:",error);
    throw error;
  }
}

export { buscarConselho };
