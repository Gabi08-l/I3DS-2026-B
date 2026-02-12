
import './App.css'
import Perfil from './components/Perfil/Perfil'


function App() {
  

  return (
    <div id='App'>


    <Perfil />


      <div className='perfil'>
        <img src="https://placehold.co/200x200" alt="" />
        <p>@Bobbinho</p>
      </div>
      <div className='switch'>
          botão switch
      </div>
      <div className='links'></div>
      <div className='socialLinks'></div>
      <div className='rodape'></div>
    </div>
  )
}

export default App
