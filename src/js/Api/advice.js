const URL = "https://api.adviceslip.com/advice";

async function buscarConselho() {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error("Você está offline.");
    }

    const data = await response.json();

    const conselho = data.slip.advice;
    return conselho;
  } catch (error) {
    console.error(error);
    throw Error;
  }
}

export { buscarConselho };
