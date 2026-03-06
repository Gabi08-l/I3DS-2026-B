import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector) // Detecta o idioma do navegador automaticamente
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'pt', // Idioma padrão
    resources: {
      pt: {
        translation: {
          placeholder: "Pesquise por filmes",
          not_found: "Filme não encontrado :,(",
          footer_text: "Desenvolvido por"
        }
      },
      en: {
        translation: {
          placeholder: "Search for movies",
          not_found: "Movie not found :,(",
          footer_text: "Developed by"
        }
      }
    }
  });

export default i18n;