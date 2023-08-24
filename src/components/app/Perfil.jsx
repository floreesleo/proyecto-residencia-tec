import { Card, Button, Container } from "react-bootstrap";
import NavBar from "./Nav";

export default function Perfil() {
  return (
    <>
      <NavBar />
      <Container className="justify-content-center">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="./../../assets/brujula-de-dibujo-negrita.svg"
          />
          <Card.Body>
            <Card.Title>Usuario</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Button variant="primary" className="me-1">
              Actualizar perfil
            </Button>
            <Button variant="danger" className="mt-2">
              Cerrar sesión
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
