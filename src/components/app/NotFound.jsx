import { Alert, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <Container className="mt-5 text-center">
        <Alert variant="danger">
          <h2>Ups, ERROR 404! 😥</h2>
          No se encontró esta dirección
        </Alert>
        <Button variant="danger" as={Link} to="/" size="sm">
          Regresar
        </Button>
      </Container>
    </>
  );
}
