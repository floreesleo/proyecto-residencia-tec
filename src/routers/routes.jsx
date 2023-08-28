import { Routes, Route } from "react-router-dom";

import NotFound from "./../components/app/NotFound";
import Home from "./../components/app/Home";
import AboutUs from "./../components/app/colegio/SobreNosotros";
import Login from "./../components/auth/Login";
import Registro from "./../components/auth/Registro";
import Perfil from "./../components/app/Perfil/Perfil";
import Files from "../components/app/docs/Archivos";

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      {/* APP */}
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<AboutUs />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/archivos" element={<Files />} />
      {/* AUTH */}
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
    </Routes>
  );
}
