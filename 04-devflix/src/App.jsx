import { useState } from "react";
import "./App.css";
import logo from "./assets/devflix.png";
import lupa from "./assets/search.svg";
import Rodape from "./components/Rodape/Rodape";
import { useEffect } from "react";
import MovieCard from "./components/MovieCard/MovieCard";

const App = () => {

  const [movies, setMovies] = useState([]);

  //UTILIZANDO CHAVE DE API DO ARQUIVO .ENV
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const apiUrl = `httpa://omdbapi.com/?apikey=${apiKey}`;

  //CRIANDO A CONEXÃO COM A API E TRAZENDO INFORMAÇÕES
  const searchMovies = async (title) => {
    const response = await fetch (`$(apiUrl)&s=$(title)`);
    const data = await response.json;

    //ALIMENTANDO A VAR MOVIES 
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Batman");
  }, [])

  return (
    <div id="App">
      <img
        id="Logo"
        src={logo}
        alt="Logo do serviço de streaming DEVFLIX exibido em cores vibrantes, ideal para fãs de filmes e séries de TV"
      />

      <div className="search">
        <input type="text" placeholder="Pesquise por filmes e séries..." />
        <img src={lupa} alt="Botão para a pesquisa" />
      </div>

    <div className="container">
      {movies.map((mpvie, index) =>
       <MovieCard />
      )}
    </div>


       <Rodape link={"https://github.com/Gabi08-l"}>Hbi17.7</Rodape>
    </div>
  );
};

export default App;
