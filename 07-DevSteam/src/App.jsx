import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./Components/Header/Header";
import GameCard from "./Components/GameCard/GameCard";
import OutrosJogos from "./Components/OutrosJogos/OutrosJogos";
import Rodape from "./Components/Rodape/Rodape";

import Carrinho from "./Components/pages/Carrinho";
import Login from "./Components/pages/Login"
// Assets
import lol from "./assets/LOL.jpg";
import vava from "./assets/VALORANT.jpg";
import dota from "./assets/DOTA.jpg";

function App() {

  const [carrinho, setCarrinho] = useState([]);

 

  const handleAddCarrinho = (jogo) => {

    setCarrinho((prev) => [...prev, jogo]);

  };

  

  const handleRemoveCarrinho = (id) => {

    const novoCarrinho = carrinho.filter(
      (item) => item.id !== id
    );

    setCarrinho(novoCarrinho);

  };



  const Home = () => (

    <main>

      <div className="cards d-flex justify-content-center gap-3 my-5">

        <GameCard
          id={101}
          nome="League of Legends"
          imagem={lol}
          porcentagem="-50%"
          precoOriginal={199.90}
          desconto={50}
          onAdd={handleAddCarrinho}
        />

        <GameCard
          id={102}
          nome="Dota 2"
          imagem={dota}
          porcentagem="-50%"
          precoOriginal={199.90}
          desconto={50}
          onAdd={handleAddCarrinho}
        />

        <GameCard
          id={103}
          nome="Valorant"
          imagem={vava}
          porcentagem="-50%"
          precoOriginal={199.90}
          desconto={50}
          onAdd={handleAddCarrinho}
        />

      </div>

      <OutrosJogos onAdd={handleAddCarrinho} />

    </main>

  );


  return (

    <>

      <Header itensNoCarrinho={carrinho.length} />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/carrinho"
          element={
            <Carrinho
              carrinho={carrinho}
              onRemoveCarrinho={handleRemoveCarrinho}
            />
          }
        />

<Route
    path="/login"
    element={<Login />}
/>

      </Routes>

      <Rodape />

    </>

  );

}

export default App;