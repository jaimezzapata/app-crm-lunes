import Login from "../pages/Login";
import Home from "../Home";
import RutaProtegida from "../components/RutaProtegida";
import Registro from "../pages/Registro";
import ListadoEnvios from "../pages/ListadoEnvios";
import EditarEnvio from "../pages/EditarEnvio";

export let enrutador = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/registro",
    element: <Registro />,
  },
  {
    path: "/home",
    element: <RutaProtegida proteger={<Home />} />,
    children: [
      {
        path: "envios",
        element: <ListadoEnvios />,
      },
      {
        path: "editar-envio/:id",
        element: <EditarEnvio />,
      },
    ],
  },
];
