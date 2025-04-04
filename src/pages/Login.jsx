import './Login.css'
import Swal from 'sweetalert2'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Login() {
  const [getUsuario, setUsuario] = useState('')
  const [getPassword, setPassword] = useState('')
  let redireccion = useNavigate()

  function iniciarSesion(e) {
    e.preventDefault()
    if (getUsuario === "admin" && getPassword === "admin") {
      let timerInterval;
      Swal.fire({
        title: "Bivenido al sistema",
        html: "Será redireccionado en <b></b> milisegundos.",
        timer: 1500,
        timerProgressBar: true,
        icon: "success",
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getPopup().querySelector("b");
          timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
          redireccion('/home')
        }
      })
    } else {
      Swal.fire({
        title: "Error de credenciales",
        icon: "error",
        draggable: true
      });
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