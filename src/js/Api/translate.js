import { state } from "../state/state.js";

async function traduzirConselho(conselho, lang) {
  try {
    if(conselho === null){
      return "erro ao buscar conselho"
    }

    const res = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(conselho)}&langpair=en|${lang}`,
    );

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    const traduzido = data.responseData.translatedText;
    return traduzido;
  } catch (error) {
    console.log("ERRO AO TRADUZIR");
    return null;
  }
}

export { traduzirConselho };
