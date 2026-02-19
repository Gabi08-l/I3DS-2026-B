import { useState } from "react";
import "./App.css";
import Link from "./components/Link/Link";
import Perfil from "./components/Perfil/Perfil";
import Rodape from "./components/Rodape/Rodape";
import SocialLink from "./components/SocialLink/SocialLink";
import Switch from "./components/Switch/Switch";
import foto from "./assets/Perfill.jpg"


function App() {
  const [isLight, setIsLight] = useState(true);

  const troca = () => {
    setIsLight(!isLight);
  };

  return (
    <div id="App" className={isLight ? "light" : ""}>
      <Perfil fotoPerfil={foto}>Hbi</Perfil>

      <Switch troca={troca} isLight={isLight} />

      <div id="Link">
        <ul>
          <Link url={"https://www.youtube.com/@republicacoisadenerd"} rel="noopener noreferrer" >Inscreva-se</Link>
          <Link url={"https://open.spotify.com/intl-pt/"} rel="noopener noreferrer" >Minha playlist</Link>
          <Link url={""}>Me pague um açaí!</Link>
          <Link url={""}>Conheça o Curso DEV</Link>
        </ul>
      </div>

      <div id="SocialLinks">
        <SocialLink url={"https://github.com/Gabi08-l"}  icon={"logo-github"}  />
        <SocialLink url={"https://instagram.com"} icon={"logo-instagram"} />
        <SocialLink url={"https://www.youtube.com/@republicacoisadenerd"} icon={"logo-youtube"} />
        <SocialLink url={"https://br.linkedin.com/"} icon={"logo-linkedin"} />
      </div>
      <Rodape>Hbi17.7</Rodape>
    </div>
  );
}

export default App;
