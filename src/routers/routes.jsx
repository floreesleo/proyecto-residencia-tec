// Navegación de la aplicación
import { Routes, Route } from "react-router-dom";

import NotFound from "./../components/app/NotFound";
import Home from "./../components/app/Home";

// Colegio
import AboutUs from "./../components/app/colegio/SobreNosotros";

//Autenticacion
import Login from "./../components/auth/Login";
import ResetPassword from "./../components/auth/ResetPassword";

// Perfil
import Perfil from "./../components/app/perfil/Perfil";

// Modulos
import Documentos from "../components/app/modulos/documentos/Documentos";
import Sesion from "../components/app/modulos/Sesion";

// Administrador
import CrearPublicacion from "../components/app/modulos/admin/addPublicacion";
import Registro from "../components/app/modulos/admin/SignUp";

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
      {/* ADMINISTRADOR */}
      <Route path="/add-publicacion" element={<CrearPublicacion />} />
      <Route path="/registrar-agremiado" element={<Registro />} />
      {/* AUTH */}
      <Route path="/login" element={<Login />} />
      <Route path="/restablecer-contraseña" element={<ResetPassword />} />
    </Routes>
  );
}
