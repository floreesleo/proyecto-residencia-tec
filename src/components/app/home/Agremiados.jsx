import NavBar from "../navegacion/Nav";

// Bootstrap
import { Container, Card } from "react-bootstrap";

// Tarjeta de publicaciones
import CardAgremiados from "../admin/agremiados/CardAgremiados";

export default function Agremiados() {
  return (
    <>
      <NavBar />
      <Container style={{ marginTop: "4rem", marginBottom: "6rem" }}>
        <Card>
          <Card.Body>
            <Card.Title>Mesa directiva</Card.Title>
            <CardAgremiados />
            <CardAgremiados />
          </Card.Body>
        </Card>
        <hr />
        <Card>
          <Card.Body>
            <Card.Title>Agremiados</Card.Title>
            <CardAgremiados />
            <CardAgremiados />
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
