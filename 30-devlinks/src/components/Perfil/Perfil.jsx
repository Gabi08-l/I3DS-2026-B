
import Reacr from "react"
import styles from "./Perfil.module.css"


const Perfil = ({children, fotoPerfil}) => {
  return (
    <div>
    <div id={styles.Perfil}>
        <img src= {fotoPerfil} alt="" />
        <p>@{children}</p>
      </div>
    </div>
  )
}

export default Perfil
