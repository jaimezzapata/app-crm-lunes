import Login from '../pages/Login';
import Home from '../Home'
export let enrutador = [
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/servicios',
        element: <h1>Servicios</h1>
    },
    {
        path: '/contacto',
        element: <h1>Contacto</h1>
    }
]