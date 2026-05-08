import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import GameCard from "./Components/GameCard/GameCard";
import Rodape from './Components/Rodape/Rodape'
import Carrinho from "./pages/Carrinho";
import { formatarMoeda, calcularPrecoComDesconto } from "./utils/formatters";
import OutrosJogos from "./Components/OutrosJogos/OutrosJogos";

// Assets
import lol from "./assets/LOL.jpg";
import vava from "./assets/VALORANT.jpg";
import dota from "./assets/DOTA.jpg";

function App() {
  // 1. ESTADO DO CARRINHO (O coração do projeto)
  const [carrinho, setCarrinho] = useState([]);

  // 2. FUNÇÕES DE MANIPULAÇÃO
  const handleAddCarrinho = (jogo) => {
    setCarrinho((itensAtuais) => {
      const itemExiste = itensAtuais.find((item) => item.id === jogo.id);
      if (itemExiste) {
        return itensAtuais.map((item) =>
          item.id === jogo.id ? { ...item, quantidade: item.quantidade + 1 } : item
        );
      }
      return [...itensAtuais, { ...jogo, quantidade: 1 }];
    });
  };

  const handleRemoveCarrinho = (jogo) => {
    setCarrinho(carrinho.filter((item) => item.id !== jogo.id));
  };

  const handleUpdateQuantidade = (jogo, novaQuantidade) => {
    if (novaQuantidade <= 0) return;
    setCarrinho(carrinho.map((item) =>
      item.id === jogo.id ? { ...item, quantidade: novaQuantidade } : item
    ));
  };

  // 3. COMPONENTE DA PÁGINA INICIAL (VITRINE)
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
      {/* O Header recebe o tamanho do carrinho para mostrar o "badge" (opcional) */}
      <Header itensNoCarrinho={carrinho.length} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/Carrinho" 
          element={
            <Carrinho 
              carrinhoItem={carrinho} 
              onRemoveCarrinho={handleRemoveCarrinho}
              onUpdateCarrinho={handleUpdateQuantidade}
            />
          } 
        />
      </Routes>

      <Rodape />
    </>
  );
}

export default App;