import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./../../../assets/css/nav.css";

export default function NavBar() {
  return (
    <Navbar
      expand="lg"
      className="navegador"
      bg="primary"
      data-bs-theme="dark"
      fixed="top"
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="titulo"
          style={{ fontSize: "1rem" }}
        >
          Colegio de arquitectos de Comitán
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto texto">
            <Nav.Link as={Link} to="/" className="texto">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/nosotros" className="texto">
              Nosotros
            </Nav.Link>
            <Nav.Link as={Link} to="/agremiados" className="texto">
              Agremiados
            </Nav.Link>
            <Nav.Link as={Link} to="/sesion" className="texto">
              Documentos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
