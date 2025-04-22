import { alertaRedireccion } from "../utils/funciones";
import { useNavigate, Link } from "react-router-dom";

const MenuLateral = () => {
  let redireccion = useNavigate();
  let usuarioLogueado = JSON.parse(localStorage.getItem("usuario"));
  function cerrarSesion() {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    alertaRedireccion(redireccion, "/", "Cerrando sesión...");
  }

  return (
    <aside className="aplicacion__menu-lateral">
      <h1 className="aplicacion__menu-lateral-logo">
        Track{" "}
        <span className="aplicacion__menu-lateral-logo--resaltado">X</span>
      </h1>
      <h2>Usuario: {usuarioLogueado.nombre}</h2>
      <img
        className="aplicacion__menu-lateral-logo-imagen"
        src="/logo.jpg"
        alt="Logo"
      />
      <nav className="aplicacion__menu-lateral-navegacion">
        <a className="aplicacion__menu-lateral-navegacion-item" href="">
          Inicio
        </a>
        <Link className="aplicacion__menu-lateral-navegacion-item" to="envios">
          Gestión de envíos
        </Link>
        <a className="aplicacion__menu-lateral-navegacion-item" href="">
          Gestión de clientes
        </a>
        <button
          onClick={cerrarSesion}
          type="button"
          className="aplicacion__menu-lateral-navegacion-item"
        >
          Cerrar sesión
        </button>
      </nav>
    </aside>
  );
};

export default MenuLateral;
