import NavBar from "./../../shared/Nav";

// Bootstrap
import { Container, Button } from "react-bootstrap";

// react-router-dom
import { Link } from "react-router-dom";

export default function Administrador() {
  return (
    <>
      <NavBar />
      <Container className="text-center">
        <h1>Administrador</h1>
        <Button
          variant="link"
          as={Link}
          to="/crear-publicacion"
          style={{ fontSize: "16px" }}
        >
          Crear nueva publicación
        </Button>
        <br />
        <Button
          variant="link"
          as={Link}
          to="/registrar-agremiado"
          style={{ fontSize: "16px" }}
        >
          Registrar nuevo agremiado
        </Button>
        <hr />
        <Button variant="danger" as={Link} to="/perfil">
          Perfil
        </Button>
      </Container>
    </>
  );
}
