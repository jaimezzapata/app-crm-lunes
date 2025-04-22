import "./Login.css";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { alertaRedireccion, alertaError } from "../utils/funciones";
let urlUsuarios = "http://localhost:3000/usuarios";

function Registro() {
  const [getUsuario, setUsuario] = useState("");
  const [getPassword, setPassword] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  let redireccion = useNavigate();

  function getUsuarios() {
    fetch(urlUsuarios)
      .then((response) => response.json())
      .then((data) => setUsuarios(data));
  }

  useEffect(() => {
    getUsuarios();
  }, []);

  function buscarUsuario() {
    let auth = usuarios.find(
      (item) => item.usuario == getUsuario && item.contrasena == getPassword
    );
    return auth;
  }

  function registrarUsuario(e) {
    e.preventDefault();
    if (buscarUsuario()) {
      alertaRedireccion(redireccion, "/home", "Inicio de sesión...");
    } else {
      alertaError();
    }
  }
  return (
    <div className="container">
      <input id="signup_toggle" type="checkbox" />
      <form onSubmit={registrarUsuario} className="form">
        <div className="form_front">
          <div className="form_details">Registro</div>
          <input type="text" className="input" placeholder="Firstname" />
          <input type="text" className="input" placeholder="Username" />
          <input type="text" className="input" placeholder="Password" />
          <input type="text" className="input" placeholder="Confirm Password" />
          <button className="btn">Signup</button>
          <span className="switch">
            ¿Ya tiene una cuenta?
            <Link to="/" className="signup_tog">
              Iniciar Sesión
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Registro;
