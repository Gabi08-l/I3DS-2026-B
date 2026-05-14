import React from 'react'
import styles from "./Login.module.css"

import { useNavigate } from 'react-router-dom'


const Login = () => { //pra facilitar no back

const navigate = useNavigate()
const handleLogin = (e) => {
    e.preventDefault();

    navigate("/")
}

  return (
      <div className={styles.container}>

            <form className={styles.formulario}
            onSubmit={handleLogin}
            >

                <h1>Login</h1>

                <input
                    type="email"
                    placeholder="Email"
                />

                <input
                    type="password"
                    placeholder="Senha"
                />

                <button type="submit">
                    Entrar
                </button>

            </form>

        </div>
  )
}

export default Login
