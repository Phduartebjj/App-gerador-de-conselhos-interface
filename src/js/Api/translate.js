async function traduzirConselho(conselho, lang) {
  try {
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
    console.error(error);
    return null;
  }
}

export { traduzirConselho };
