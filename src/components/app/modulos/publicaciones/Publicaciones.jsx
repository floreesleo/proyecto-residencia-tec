// Bootstrap
import { Container, Row } from "react-bootstrap";

// Tarjeta de publicaciones
import CardPublicaciones from "./CardPublicaciones";

export default function Publicaciones() {
  return (
    <>
      <Container>
        <h1>Publicaciones</h1>
        <Row xs={1} md={2} className="g-4 mt-2">
          <CardPublicaciones />
          <CardPublicaciones />
          <CardPublicaciones />
          <CardPublicaciones />
          <CardPublicaciones />
          <CardPublicaciones />
        </Row>
      </Container>
    </>
  );
}
