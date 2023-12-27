import NavBar from "../navegacion/Nav";

// Bootstrap
import { Container, Card, Row } from "react-bootstrap";

// Tarjeta de publicaciones
import CardAgremiados from "../admin/agremiados/agregar/CardAgremiados";
import CardDirectivos from "../admin/agremiados/mesa directiva/CardMesaDirectiva";

export default function Agremiados() {
  return (
    <>
      <NavBar />
      <Container style={{ marginTop: "4rem", marginBottom: "6rem" }}>
        <Card>
          <Card.Body>
            <Card.Title>Mesa directiva</Card.Title>
            <Row xs={1} lg={3} className="g-4">
              <CardDirectivos />
            </Row>
          </Card.Body>
        </Card>
        <hr />
        <Card>
          <Card.Body>
            <Card.Title>Agremiados</Card.Title>
            <CardAgremiados />
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
