// Bootstrap
import { Container } from "react-bootstrap";

// Tarjeta de publicaciones
import CardPublicaciones from "./CardPublicaciones";

export default function Publicaciones() {
  return (
    <>
      <Container>
        <h1>Publicaciones</h1>
        <CardPublicaciones />
      </Container>
    </>
  );
}
