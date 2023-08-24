import { Alert, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <Container className="mt-5">
        <Alert variant="danger">Ups, ERROR 404!</Alert>
        <Button variant="danger" as={Link} to="/" size="sm">
          Regresar
        </Button>
      </Container>
    </>
  );
}
