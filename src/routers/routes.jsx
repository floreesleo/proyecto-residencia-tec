import { Routes, Route } from "react-router-dom";

import NotFound from "./../components/app/NotFound";
import Home from "./../components/app/Home";
import AboutUs from "./../components/app/colegio/SobreNosotros";
import Login from "./../components/auth/Login";
import Registro from "./../components/auth/Registro";
import Perfil from "./../components/app/perfil/Perfil";
import Files from "../components/app/modulos/Archivos";
import Eventos from "../components/app/modulos/Eventos";

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      {/* APP */}
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<AboutUs />} />
      <Route path="/perfil" element={<Perfil />} />
      {/* MODULOS */}
      <Route path="/archivos" element={<Files />} />
      <Route path="/eventos" element={<Eventos />} />
      {/* AUTH */}
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
    </Routes>
  );
}
