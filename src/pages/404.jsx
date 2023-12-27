import { Container, Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Custom404() {
  return (
    <Container className="mt-5 text-center">
      <Alert variant="outline-danger">
        <h2>Ups, ERROR 404! 😥</h2>
        No se encontró esta dirección
      </Alert>
      <Button variant="outline-danger" as={Link} to="/" size="sm">
        Regresar
      </Button>
    </Container>
  );
}
