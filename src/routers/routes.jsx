import { Routes, Route } from "react-router-dom";

import NotFound from "./../components/colegio-arq/NotFound";
import Home from "./../components/colegio-arq/Home";
import AboutUs from "./../components/colegio-arq/AboutUs";
import Login from "./../components/autentication/Login";
import Dashboard from "./../components/app/Dashboard";
import Perfil from "./../components/app/Perfil";

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/sobre-nosotros" element={<AboutUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/perfil" element={<Perfil />} />
    </Routes>
  );
}
