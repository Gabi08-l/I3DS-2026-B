import { useState } from "react";
import Header from "./Components/Header/Header";
import GameCard from "./Components/GameCard/GameCard";
import lol from "./assets/LOL.jpg";
import vava from "./assets/VALORANT.jpg";
import dota from "./assets/DOTA.jpg"

function App() {
  return (
    <>
      <Header />


    <div className="cards">

      <GameCard
        nome="League of Legends"
        imagem={lol}
        porcentagem="-50%"
        precoOriginal="199,90"
        precoDesconto="99,90"
      />

      <GameCard
        nome="Dota 2"
        imagem={dota}
        porcentagem="-50%"
        precoOriginal="199,90"
        precoDesconto="99,90"
      />

      <GameCard
        nome="Valorant"
        imagem={vava}
        porcentagem="-50%"
        precoOriginal="199,90"
        precoDesconto="99,90"
      />

    </div>
    
    </>
  );
}

export default App;
