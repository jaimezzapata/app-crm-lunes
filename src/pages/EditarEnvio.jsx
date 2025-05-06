import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { alertaRedireccion } from "../utils/funciones";
let urlEnvios = "http://localhost:3000/envios/";

function EditarEnvio() {
  const [fecha, setFecha] = useState("");
  const [direccion, setDireccion] = useState("");
  const [estado, setEstado] = useState("");
  let { id } = useParams();
  let redireccion = useNavigate();

  function getEnvioId() {
    fetch(urlEnvios + id)
      .then((response) => response.json())
      .then((data) => {
        setFecha(data.fecha);
        setDireccion(data.direccion);
        setEstado(data.estado);
      });
  }
  useEffect(() => {
    getEnvioId();
  }, []);

  function editarEnvio() {
    let envioActualizado = {
      direccion,
      fecha,
      estado,
    };
    fetch(urlEnvios + id, {
      method: "PATCH",
      body: JSON.stringify(envioActualizado),
    }).then(() => {
      alertaRedireccion(redireccion, "/home/envios", "Envio editado");
    });
  }

  return (
    <div className="container">
      <input id="signup_toggle" type="checkbox" />
      <form className="form">
        <div className="form_front">
          <div className="form_details">Editar Envío</div>
          <input
            onChange={(e) => setDireccion(e.target.value)}
            type="text"
            className="input"
            placeholder="Direccion"
            value={direccion}
          />
          <input
            onChange={(e) => setFecha(e.target.value)}
            type="date"
            className="input"
            placeholder="Fecha"
            value={fecha}
          />
          <select
            onChange={(e) => setEstado(e.target.value)}
            value={estado}
            className="input"
          >
            <option value="">Seleccionar...</option>
            <option value="Pendiente">Pendiente</option>
            <option value="En proceso">En proceso</option>
            <option value="Enviado">Enviado</option>
            <option value="Cancelado">Cancelado</option>
          </select>
          <button type="button" onClick={editarEnvio} className="btn">
            Editar Envío
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditarEnvio;
