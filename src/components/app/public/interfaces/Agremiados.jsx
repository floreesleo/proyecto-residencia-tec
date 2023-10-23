import NavBar from "../../shared/Nav";

// Bootstrap
import { Container } from "react-bootstrap";

// Tarjeta de publicaciones
import CardAgremiados from "../../private/admin/templates/CardAgremiados";

export default function Agremiados() {
  return (
    <>
      <NavBar />
      <Container className="mt-2">
        <h1>Nuestros agremiados</h1>
        <hr />
        <CardAgremiados />
        <CardAgremiados />
        <CardAgremiados />
        <CardAgremiados />
        <CardAgremiados />
      </Container>
    </>
  );
}
