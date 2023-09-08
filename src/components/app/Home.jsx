import NavBar from "./Nav";
import { Container } from "react-bootstrap";
import Noticias from "./modulos/Publicaciones";
import Carrusel from "./Carrusel";

import "./../../assets/css/home.css";

export default function Home() {
  return (
    <>
      <NavBar />
      <Container className="home mt-2">
        <h2>Inicio</h2>
        <hr />
        <Carrusel />
        <h4>Publicaciones</h4>
        <Noticias />
      </Container>
    </>
  );
}
