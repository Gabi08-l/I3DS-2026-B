import { Route, Routes } from "react-router";
import "./App.css";
import Sobre from "./pages/Sobre";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import Rodape from "./components/rodape/Rodape";
import Contato from "./pages/Contato";
import Gato from "./assets/OIP.webp"
function App() {
  return (
    <>
    <Header />
      <Routes>
        {" "}
        {/*identifica todas as rotas do sistema*/}
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} /> {/*Uma rota do sistema*/}
        <Route path="/contato" element={<Contato />} />
      </Routes>


<img src={Gato} alt="" />


        <Rodape link={"https://github.com/Gabi08-l"}>Hbi17.7</Rodape>
    </>
  );
}

export default App;
