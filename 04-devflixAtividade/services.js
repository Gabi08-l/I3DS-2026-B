import { translate } from 'google-translate-api-browser';

export const translateToPT = async (text) => {
  try {
    const res = await translate(text, { to: "pt" });
    return res.text;
  } catch (error) {
    console.error("Erro na tradução:", error);
    return text; // Se falhar, pelo menos mostra em inglês e não quebra o app
  }
};