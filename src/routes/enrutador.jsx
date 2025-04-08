import Login from '../pages/Login';
import Home from '../Home'
import RutaProtegida from '../components/RutaProtegida';

export let enrutador = [
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/home',
        element: <RutaProtegida proteger={<Home />} />
    },
    {
        path: '/servicios',
        element: <RutaProtegida proteger={<h1>Servicios</h1>} />
    },
    {
        path: '/contacto',
        element: <h1>Contacto</h1>
    }
]