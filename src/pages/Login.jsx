import './Login.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { alertaRedireccion, alertaError, generarToken } from '../utils/funciones'
let urlUsuarios = "http://localhost:3000/usuarios"

function Login() {
  const [getUsuario, setUsuario] = useState('')
  const [getPassword, setPassword] = useState('')
  const [usuarios, setUsuarios] = useState([])

  let redireccion = useNavigate()

  function getUsuarios() {
    fetch(urlUsuarios)
      .then(response => response.json())
      .then(data => setUsuarios(data));
  }

  useEffect(() => {
    getUsuarios()
  }, [])

  function buscarUsuario() {
    let auth = usuarios.find((item) => item.usuario == getUsuario && item.contrasena == getPassword)
    return auth
  }

  function iniciarSesion(e) {
    e.preventDefault()
    if (buscarUsuario()) {
      let tokenAcceso = generarToken()
      localStorage.setItem("token", tokenAcceso)
      alertaRedireccion(redireccion, "/home", "Inicio de sesión...")
    } else {
      alertaError()
    }
  }

  return (
    <div className="container">
      <input id="signup_toggle" type="checkbox" />
      <form onSubmit={iniciarSesion} className="form">
        <div className="form_front">
          <div className="form_details">Login</div>
          <input onChange={(e) => setUsuario(e.target.value)} type="text" className="input" placeholder="Username" />
          <input onChange={(e) => setPassword(e.target.value)} type="text" className="input" placeholder="Password" />
          <button className="btn">Login</button>
          <span className="switch">Don't have an account?
            <label for="signup_toggle" className="signup_tog">
              Sign Up
            </label>
          </span>
        </div>
        <div className="form_back">
          <div className="form_details">SignUp</div>
          <input type="text" className="input" placeholder="Firstname" />
          <input type="text" className="input" placeholder="Username" />
          <input type="text" className="input" placeholder="Password" />
          <input type="text" className="input" placeholder="Confirm Password" />
          <button className="btn">Signup</button>
          <span className="switch">Already have an account?
            <label for="signup_toggle" className="signup_tog">
              Sign In
            </label>
          </span>
        </div>
      </form>
    </div>
  )
}

export default Login