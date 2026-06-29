const URL = "https://api.adviceslip.com/advice";

async function buscarConselho() {
  try {
    const response = await fetch(URL);
    if (!response.ok) return null;

    const data = await response.json();

    const conselho = data.slip.advice;

    return conselho;
  } catch (error) {
    console.log("Erro ao buscar conselho");
    console.error(error);
    return null;
  }
}

export { buscarConselho };
