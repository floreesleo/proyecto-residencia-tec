import NavBar from "../navegacion/Nav";
import FooterBar from "../navegacion/Footer";

// Bootstrap
import { Container, Toast } from "react-bootstrap";

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

        <hr />

        <Toast>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
        </Toast>
      </Container>
      <FooterBar />
    </>
  );
}
