import NavBar from "./../../Nav";
import { Container, Button } from "react-bootstrap";

export default function Admin() {
  return (
    <>
      <NavBar />
      <Container>
        <h1>Administrador de publicaciones</h1>
        <Button variant="success">Crear publicación</Button>
      </Container>
    </>
  );
}
