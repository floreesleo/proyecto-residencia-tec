import NavBar from "../navegacion/Nav";

// Bootstrap
import { Container } from "react-bootstrap";

// Tarjeta de publicaciones
import CardAgremiados from "../admin/agremiados/CardAgremiados";

export default function Agremiados() {
  return (
    <>
      <NavBar />
      <Container className="mt-2">
        <h1>Nuestros agremiados</h1>
        <hr />
        <CardAgremiados />
      </Container>
    </>
  );
}
