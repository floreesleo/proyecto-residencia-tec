import NavBar from "../navegacion/Nav";
import FooterBar from "../navegacion/Footer";

// Bootstrap
import { Container } from "react-bootstrap";

// Componente para ver publicaciones
import CardPublicaciones from "./../admin/publicaciones/CardPublicaciones";

// Carrusel
import Carrusel from "./Carrusel";

// Estilos CSS de Home
import "./../../../assets/css/home.css";

export default function Home() {
  return (
    <>
      <NavBar />
      <Container
        className="home"
        style={{ marginTop: "4rem", marginBottom: "6rem" }}
      >
        <h1>Inicio</h1>
        <hr />
        <Carrusel />
        <CardPublicaciones />
      </Container>
      <FooterBar />
    </>
  );
}
