// Bootstrap
import { Container, Button } from "react-bootstrap";

// react-router-dom
import { Link } from "react-router-dom";

export default function Administrador() {
  return (
    <>
      <Container className="text-center mt-3">
        <h1>Administrador | Colegio de arquitectos de Comitán</h1>
        <Button
          variant="outline-primary"
          as={Link}
          to="/crear-publicacion"
          className="w-100"
          style={{ fontSize: "16px" }}
        >
          Crear nueva publicación
        </Button>
        <br />
        <Button
          variant="outline-success"
          as={Link}
          to="/registrar-agremiado"
          className="mt-2 w-100"
          style={{ fontSize: "16px" }}
        >
          Registrar agremiado
        </Button>
        <hr />
        <Button
          variant="outline-danger"
          as={Link}
          to="/perfil"
          className="w-100"
        >
          Perfil
        </Button>
      </Container>
    </>
  );
}
