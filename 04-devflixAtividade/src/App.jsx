import { useEffect, useState } from "react";
import "./App.css";

import logo from "./assets/codewave.png";
import lupa from "./assets/search.svg";

import Rodape from "./components/Rodape/Rodape";
import MovieCard from "./components/MovieCard/MovieCard";
import Switch from "./components/Switch/Switch";

// 1. Importar o hook de tradução
import { useTranslation } from "react-i18next";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [isLight, setIsLight] = useState(false);

  // 2. Inicializar o hook t (para traduzir) e i18n (para trocar idioma)
  const { t, i18n } = useTranslation();

  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

  const troca = () => {
    setIsLight(!isLight);
  };

  // Função para trocar o idioma manualmente se desejar
  const mudarIdioma = (lng) => {
    i18n.changeLanguage(lng);
  };

  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    (async () => {
      await searchMovies("Spider-Man");
    })();
  }, []);

  return (
    <div id="App" className={isLight ? "light" : ""}>
      
      {/* Opcional: Botões para testar a troca de idioma */}
      <div className="language-switcher">
        <button onClick={() => mudarIdioma('pt')}>PT</button>
        <button onClick={() => mudarIdioma('en')}>EN</button>
      </div>

      <img
        id="Logo"
        src={logo}
        alt={t('alt_logo')} // Tradução do Alt da logo
      />

      <Switch troca={troca} isLight={isLight} />

      <div className="search">
        <input
          onKeyDown={(e) => e.key === "Enter" && searchMovies(search)}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder={t('placeholder_search')} // 3. Placeholder traduzido
        />
        <img
          onClick={() => searchMovies(search)}
          src={lupa}
          alt={t('alt_lupa')} // Tradução do Alt da lupa
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, index) => (
            <MovieCard key={index} {...movie} apiUrl={apiUrl} />
          ))}
        </div>
      ) : (
        <h2 className="empty">{t('no_movies')}</h2> // 4. Mensagem de erro traduzida
      )}

      <Rodape link={"https://github.com/Gabi08-l"}>Hbi</Rodape>
    </div>
  );
};

export default App;