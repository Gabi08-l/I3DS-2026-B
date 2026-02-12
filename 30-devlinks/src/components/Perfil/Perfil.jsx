

const Perfil = ({children, fotoPerfil}) => {
  return (
    <div>
    <div className="perfil">
        <img src= {fotoPerfil} alt="" />
        <p>@{children}</p>
      </div>
    </div>
  )
}

export default Perfil
