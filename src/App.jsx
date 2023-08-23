import { Routes, Route } from "react-router-dom";

import NotFound from "./components/NotFound";
import Home from "./components/colegio-arq/Home";
import AboutUs from "./components/colegio-arq/AboutUs";
import Login from "./components/autentication/Login";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nosotros" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
