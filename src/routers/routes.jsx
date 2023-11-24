// Navegación de la aplicación
import { Routes, Route } from "react-router-dom";

import NotFound from "./../components/app/public/NotFound";
import Home from "./../components/app/public/Home";

// Colegio
import AboutUs from "./../components/app/public/SobreNosotros";

//Autenticacion
import Login from "./../components/auth/Login";
import ResetPassword from "./../components/auth/ResetPassword";

// Perfil
import Perfil from "./../components/app/private/client/Perfil";

// Modulos
import Documentos from "../components/app/private/client/Documentos";
import Agremiados from "../components/app/public/interfaces/Agremiados";
import Sesion from "../components/app/private/client/Sesion";

// Administrador
import Administrador from "./../components/app/private/admin/Administrador";
import CRUDPublicaciones from "../components/app/private/admin/interfaces/CRUDPublicaciones";
import Registro from "../components/app/private/admin/interfaces/RegistrarAgremiado";
import Agremiado from "../components/app/private/admin/interfaces/AgregarAgremiado";
import DatosColegio from "../components/app/private/admin/interfaces/DatosColegio";

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      {/* APP */}
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<AboutUs />} />
      <Route path="/perfil" element={<Perfil />} />
      {/* MODULOS */}
      <Route path="/sesion" element={<Sesion />} />
      <Route path="/documentos" element={<Documentos />} />
      <Route path="/agremiados" element={<Agremiados />} />
      {/* ADMINISTRADOR */}
      <Route path="/administrador" element={<Administrador />} />
      <Route path="/crear-publicacion" element={<CRUDPublicaciones />} />
      <Route path="/registrar-agremiado" element={<Registro />} />
      <Route path="/agregar-agremiado" element={<Agremiado />} />
      <Route path="/datos-colegio" element={<DatosColegio />} />
      {/* AUTH */}
      <Route path="/login" element={<Login />} />
      <Route path="/restablecer-contraseña" element={<ResetPassword />} />
    </Routes>
  );
}
