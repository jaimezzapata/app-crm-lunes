import Swal from 'sweetalert2'

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
            redireccion(ruta)
        }
    })
}
export function alertaError() {
    Swal.fire({
        title: "Error de credenciales",
        icon: "error",
        draggable: true
    });
}
export function alertaCorrecto() {

}

export function generarToken() {
    let numeroAleatorio = "CB" + Math.random() * 1000 + "AB"
    return numeroAleatorio
}