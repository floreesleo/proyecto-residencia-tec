import NavBar from "./Nav";

// Bootstrap
import { Container } from "react-bootstrap";

// Componente para ver publicaciones
import Publicaciones from "./modulos/publicaciones/Publicaciones";

// Carrusel
import Carrusel from "./Carrusel";

// Estilos CSS de Home
import "./../../assets/css/home.css";

export default function Home() {
  return (
    <>
      <NavBar />
      <Container className="home mt-2">
        <h1>Inicio</h1>
        <hr />
        <Carrusel />
        <Publicaciones />
      </Container>
    </>
  );
}
