import NavBar from "./../shared/Nav";

// Bootstrap
import { Container } from "react-bootstrap";

// Componente para ver publicaciones
import CardPublicaciones from "./../private/admin/templates/CardPublicaciones";

// Carrusel
import Carrusel from "./Carrusel";

// Estilos CSS de Home
import "./../../../assets/css/home.css";

export default function Home() {
  return (
    <>
      <NavBar />
      <Container className="home mt-2">
        <h1>Inicio</h1>
        <hr />
        <Carrusel />
        <CardPublicaciones />
      </Container>
    </>
  );
}
