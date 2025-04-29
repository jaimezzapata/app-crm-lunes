import { useEffect, useState } from "react";
let urlEnvios = "http://localhost:3000/envios";

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

  return (
    <section className="cards">
      {resultadoFiltrado.map((envio) => (
        <div className="card">
          <p>Direccion: {envio.direccion}</p>
          <p>Fecha: {envio.fecha}</p>
          <p>Estado: {envio.estado}</p>
          <div className="card__buttons">
            <button type="button">Eliminar</button>
            <button type="button">Editar</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ListadoEnvios;
