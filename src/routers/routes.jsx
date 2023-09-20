import { Routes, Route } from "react-router-dom";

import NotFound from "./../components/app/NotFound";
import Home from "./../components/app/Home";
import AboutUs from "./../components/app/colegio/SobreNosotros";
import Login from "./../components/auth/Login";
import Registro from "./../components/auth/Registro";
import ResetPassword from "./../components/auth/ResetPassword";
import Perfil from "./../components/app/perfil/Perfil";
import Documentos from "../components/app/modulos/documentos/Documentos";
import Sesion from "../components/app/modulos/documentos/Sesion";
import Admin from "../components/app/modulos/publicaciones/Admin";

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
      <Route path="/administrador" element={<Admin />} />
      {/* AUTH */}
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/restablecer-contraseña" element={<ResetPassword />} />
    </Routes>
  );
}
