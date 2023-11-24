// Navegación de la aplicación
import { Routes, Route } from "react-router-dom";

import NotFound from "./../components/app/home/NotFound";
import Home from "./../components/app/home/Home";

// Colegio
import AboutUs from "./../components/app/home/SobreNosotros";

//Autenticacion
import Login from "./../components/auth/Login";
import ResetPassword from "./../components/auth/ResetPassword";

// Perfil
import Perfil from "./../components/app/client/Perfil";

// Modulos
import Documentos from "../components/app/client/Documentos";
import Agremiados from "../components/app/home/Agremiados";
import Sesion from "../components/app/client/Sesion";

// Administrador
import Administrador from "./../components/app/admin/Administrador";
import CRUDPublicaciones from "../components/app/admin/publicaciones/CRUDPublicaciones";
import Registro from "../components/app/admin/agremiados/RegistrarAgremiado";
import Agremiado from "../components/app/admin/agremiados/AgregarAgremiado";
import DatosColegio from "../components/app/admin/datos-colegio/DatosColegio";

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
