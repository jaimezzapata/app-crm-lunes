import Swal from "sweetalert2";

export function alertaRedireccion(redireccion, ruta, mensaje) {
  let timerInterval;
  Swal.fire({
    title: mensaje,
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
      redireccion(ruta);
    },
  });
}
export function alertaError(titulo, mensaje, icono) {
  Swal.fire({
    title: titulo,
    html: mensaje,
    icon: icono,
    draggable: true,
  });
}
export function alertaCorrecto(titulo, mensaje, icono, id) {
  let urlEnvios = "http://localhost:3000/envios/";
  Swal.fire({
    title: titulo,
    text: mensaje,
    icon: icono,
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, Eliminar",
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(urlEnvios + id, {
        method: "DELETE",
      });
      Swal.fire({
        title: "Eliminado",
        text: "El envío fué eliminado correctamente",
        icon: "success",
      });
    }
  });
}

export function generarToken() {
  let numeroAleatorio =
    "CB" + Math.random() * 1000 + "ZZ" + Math.random() * 100 + "AB";
  return numeroAleatorio;
}

export function generarId() {
  return Math.random().toString(36).substring(2);
}
