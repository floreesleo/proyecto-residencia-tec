import NavBar from "./Nav";
import { Container } from "react-bootstrap";
import Noticias from "./modulos/Noticias";

export default function Home() {
  return (
    <>
      <NavBar />
      <Container>
        <h2>Inicio</h2>
        <hr />
        <h4>Noticias</h4>
        <Noticias />
      </Container>
    </>
  );
}
