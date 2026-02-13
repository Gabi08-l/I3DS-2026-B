
import { useState } from 'react'
import './App.css'
import Link from './components/Link/Link'
import Perfil from './components/Perfil/Perfil'
import Rodape from './components/Rodape/Rodape'
import SocialLink from './components/SocialLink/SocialLink'
import Switch from './components/Switch/Switch'


function App() {
  const [isLight,setIsLight] = useState(true);
  
  const troca = () => {
    setIsLight(!isLight);
  };

  return (
    <div id="App" className={isLight ? "light" : ""}>
    <Perfil fotoPerfil={"https://placehold.co/100"}>GUS </Perfil> 


      
      <Switch troca={troca} isLight={isLight}/>


      <div id="Links">
        <ul>
          <Link url={""}>Inscreva-se</Link>
          <Link url={""}>Minha Playlist</Link>
          <Link url={""}>Me pague um Açai</Link>
          <Link url={""}>Conheça o curso Dev!</Link>
        </ul>
      </div>


      <div id="SocialLinks"> 
      <SocialLink url={"https://github.com"} icon={"logo-github"}/>
      <SocialLink url={"https://instagram.com"} icon={"logo-instagram"}/>
      <SocialLink url={"https://youtube.com"} icon={"logo-youtube"}/>
      <SocialLink url={"https://www.linkedin.com/"} icon={"logo-linkedin"}/>

</div> 

      <div>
        <Rodape>Hbi17.7</Rodape>
      </div>
    </div>
  )
}

export default App
