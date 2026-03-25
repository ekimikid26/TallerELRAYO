import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Autos } from "./pages/Autos";
import { AutoDetalle } from "./pages/AutoDetalle";
import { Motos } from "./pages/Motos";
import { MotoDetalle } from "./pages/MotoDetalle";
import { Servicios } from "./pages/Servicios";
import { AgendarCita } from "./pages/AgendarCita";
import { Contacto } from "./pages/Contacto";
import { JustificacionUX } from "./pages/JustificacionUX";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/autos",
    Component: Autos,
  },
  {
    path: "/autos/:id",
    Component: AutoDetalle,
  },
  {
    path: "/motos",
    Component: Motos,
  },
  {
    path: "/motos/:id",
    Component: MotoDetalle,
  },
  {
    path: "/servicios",
    Component: Servicios,
  },
  {
    path: "/agendar-cita",
    Component: AgendarCita,
  },
  {
    path: "/contacto",
    Component: Contacto,
  },
  {
    path: "/justificacion-ux",
    Component: JustificacionUX,
  },
]);