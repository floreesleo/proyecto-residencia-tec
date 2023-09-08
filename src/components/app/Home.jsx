import NavBar from "./Nav";
import { Container } from "react-bootstrap";
import Noticias from "./modulos/Publicaciones";

export default function Home() {
  return (
    <>
      <NavBar />
      <Container>
        <h2>Inicio</h2>
        <hr />
        <h4>Publicaciones</h4>
        <Noticias />
      </Container>
    </>
  );
}
