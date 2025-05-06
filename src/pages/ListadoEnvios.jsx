import { useEffect, useState } from "react";
import { alertaCorrecto } from "../utils/funciones";
import { Link } from "react-router-dom";
let urlEnvios = "http://localhost:3000/envios/";

const ListadoEnvios = () => {
  let usuarioLogueado = JSON.parse(localStorage.getItem("usuario"));
  const [envios, setEnvios] = useState([]);

  function getEnvios() {
    fetch(urlEnvios)
      .then((response) => response.json())
      .then((data) => setEnvios(data));
  }

  function filtrarEnvios() {
    let filtradoUsuarios = envios.filter(
      (item) => item.usuarioId == usuarioLogueado.id
    );
    return filtradoUsuarios;
  }
  let resultadoFiltrado = filtrarEnvios();

  useEffect(() => {
    getEnvios();
  }, []);

  function eliminarEnvio(id) {
    if (id) {
      alertaCorrecto(
        "¿Esta seguro de eliminar?",
        "Esta acción no se puede revertr",
        "warning",
        id,
        getEnvios
      );
    }
  }

  return (
    <section className="cards">
      {resultadoFiltrado.map((envio) => (
        <div key={envio.id} className="card">
          <p>Direccion: {envio.direccion}</p>
          <p>Fecha: {envio.fecha}</p>
          <p>Estado: {envio.estado}</p>
          <div className="card__buttons">
            <button onClick={() => eliminarEnvio(envio.id)} type="button">
              Eliminar
            </button>
            <Link to={"/home/editar-envio/" + envio.id} type="button">
              Editar
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ListadoEnvios;
