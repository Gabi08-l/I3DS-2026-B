import "./App.css";
import logo from "./assets/devflix.png";
import lupa from "./assets/search.svg";
import Rodape from "./components/Rodape/Rodape";

const App = () => {
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

      <Rodape>Hbi17.7</Rodape>
    </div>
  );
};

export default App;
