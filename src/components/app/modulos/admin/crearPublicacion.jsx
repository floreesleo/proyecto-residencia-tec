import NavBar from "../../Nav";

// Bootstrap
import { Container, Button } from "react-bootstrap";

export default function CrearPublicacion() {
  return (
    <>
      <NavBar />
      <Container>
        <h1>Crear publicación de publicaciones</h1>
        <Button variant="success">Crear publicación</Button>
      </Container>
    </>
  );
}
