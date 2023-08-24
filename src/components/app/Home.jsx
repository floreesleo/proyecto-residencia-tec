import NavBar from "./Nav";
import Footer from "./Footer";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <NavBar />
      <Container>
        <h2>Inicio</h2>
        <hr />
        <h4>Publicaciones</h4>
      </Container>
      <Footer />
    </>
  );
}
